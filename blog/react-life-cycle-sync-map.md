---
slug: React 환경에서 Google Map 구현하기
title: React 환경에서 Google Map 구현하기
authors: [minsgy]
tags: [React, GoogleMap]
---

## 서론

- Google Map 기반의 프로젝트를 진행하면서 Google에서 제공해주는 JavaScript Map API는 React에서 바로 사용하기에 어려운 환경을 가지고 있습니다.
- DOM을 생성하는 시점에 Map을 생성하고 Map을 사용하는 시점에 DOM이 생성되어 있어야 하는데, React에서는 DOM을 생성하는 시점과 Map을 사용하는 시점이 다르기 때문에 문제가 발생합니다.
- 이러한 점을 고려해 React 라이프사이클 환경에서 Map을 사용하는 방법을 알아보고자 합니다.

## Google Map JavaScript API

React 환경에서 Map을 구현하기 전에 Google에서 제공해주는 `JavaScript API`를 살펴보겠습니다.  
Google Map Document를 보면 `Map`을 생성하는 방법은 아래와 같습니다.

```ts
let map: google.maps.Map;
async function initMap(): Promise<void> {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
export {};
```

위 코드를 통해 Map을 생성함을 알 수 있고 생성된 Map을 사용하기 위해서는 `map` 변수를 통해 접근할 수 있습니다.  
이 코드를 React 환경에서 쓰기 위해서는 어떤 방법으로 접근해야 할 지 알아보겠습니다.

## React에서 Map을 사용하기 위한 방법

리액트의 라이프사이클은 크게 mount, update, unmount로 나눌 수 있습니다.  
위에서 살펴본 Google Map API를 사용하기 위해서는 mount 시점에 Map을 생성하며 update 시점에서의 최적화를 고려해야 합니다.

또한, Map API를 호출하는 시점 이전에는 로딩 처리를 하며 Map API를 호출하는 시점 이후에는 Map의 기능들을 사용할 수 있도록 구현해야 합니다.

### Map API 호출 이전 시점

리액트 DOM이 생성되고 난 이후에 Map을 생성해야 합니다.

> 제공되는 map의 생성 방식은 DOM에 의존적이여서 DOM이 생성되기 전에 Map API를 호출하여 생성하면 에러가 발생하게 되고, 이에 대한 로딩 처리를 해주어야 합니다.

```ts
// Map.tsx
const [map, setMap] = useState<google.maps.Map | null>(null);
const [loading, setLoading] = useState<boolean>(true);
useEffect(() => {
  async function initMap(): Promise<void> {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    setMap(
      new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    );
    setLoading(false);
  }
  initMap();
}, []);

if (loading) return <div>loading...</div>;
return <div id="map" />;
```

위 코드를 통해 Map을 생성하고, Map이 생성되기 전에는 로딩을 표시하도록 구현할 수 있습니다. 다만 이렇게 했을 때 단순하게 Map을 생성만 하게 됩니다. 이를 위해 Map이 생성된 이후에 기능들을 사용할 수 있도록 구현해야 합니다.

### Map API 호출이후 시점

Map이 생성된 이후에는 Map의 기능들을 사용할 수 있습니다. 이를 위해 Map이 생성된 이후에 기능들을 사용할 수 있도록 구현해야 합니다.

여러 방법이 있겠지만 여러 Map 라이브러리를 살펴보면 Wrapper를 만들고 Map API 호출이후로 다른 기능들을 render를 하는 방식으로 구현되어 있습니다.

저는 google maps에서 제공해주는 [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader)를 활용하여 JavaScript Map API를 호출하여 검증하는 Wrapper를 만들어보았습니다.

해당 라이브러리를 사용한 이유는 싱글톤 패턴으로 구현되어 있어 여러번 호출해도 한번만 호출되고, **Map API 호출 이후 다른 기능들을 render할 수 있도록 구현되어 있어 효율적으로 사용**할 수 있기 때문입니다.

```ts
// GoogleMapWrapper.tsx
const GoogleMapWrapper = ({ children }) => {
  const [status, setStatus] = useState<google.maps.Status>("SUCCESS");
  useEffect(() => {
    const googleMapResponse = new Loader(options);
    const setStatusAndExecuteCallback = (status: Status) => {
      if (callback) callback(status, googleMapResponse);
      setStatus(status);
    };
    setStatusAndExecuteCallback(Status.LOADING);
    googleMapResponse.load().then(
      () => setStatusAndExecuteCallback(Status.SUCCESS),
      () => setStatusAndExecuteCallback(Status.FAILURE)
    );
  }, []);

  if (status === Status.SUCCESS && children) return <>{children}</>;
  return <></>;
};

// MapComponent.tsx
const MapComponent = () => {
  const ref = useRef(); // Map을 생성할 DOM을 참조하기 위한 ref
  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });
  return <div ref={ref} id="map" />;
};

// Map.tsx
const Map = () => {
  return (
    <GoogleMapWrapper>
      <MapComponent />
    </GoogleMapWrapper>
  );
};
```

위 코드의 흐름을 살펴보면 아래와 같습니다.

1. `GoogleMapWrapper`에서 Google Map API를 호출하게 된다.
2. Google Map API 호출이 성공하면 `MapComponent`를 render한다.
3. `MapComponent`에서 Map을 생성한다.

이를 통해 Google Map API 호출 이후 시점에 Map을 생성하여 사용할 수 있게 되었습니다.  
더 나아가서 Google Map에서 제공하고 있는 `Marker`, `InfoWindow` 등 기능들을 사용할 수 있도록 구현하고 최적화를 고려해보겠습니다.

### MapComponent의 기능 확장

`MapComponent`에서 Map을 생성하고, `Marker`, `InfoWindow` 등의 기능을 사용할 수 있도록 추상화하여 구현해보겠습니다.

```tsx
// MapComponent.tsx
export const MapComponent = ({ children, ...options }) => {
  const map = useState<google.maps.Map | null>(null);
  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;
    const initialMap = new window.google.maps.Map(mapRef.current);
    setMap(initialMap);
  }, [map]);

  return (
    <>
      <div ref={mapRef} style={style} />
      {Children.map(children, (child) => {
        // children으로 받은 Map 기능들을 cloneElement를 통해 map을 전달하여 사용할 수 있도록 구현.
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<google.maps.MapOptions>, {
            map,
          });
        }
        return null;
      })}
    </>
  );
};

// Map.tsx
const Map = () => {
  return (
    <GoogleMapWrapper>
      <MapComponent>
        <Clusters />
        {/* 조건문을 통해 분기도 가능하다. */}
        {isVisibleMarker && <VehicleMarkers />}
        <VehicleInfoWindows />
        <PolyLines />
        {/* 맵 기능들을 활용할 수 있다. */}
      </MapComponent>
    </GoogleMapWrapper>
  );
};
```

위와 같이 `MapComponent`에서 Map을 생성하고, `Children`으로 받은 `Map` 기능들을 `cloneElement`를 통해 `map`을 전달하여 사용할 수 있도록 구현하였습니다. 더 나아가서 실시간으로 업데이트되는 `Marker` 기능을 구현하기 위해 `onIdle` 함수를 통해 Map의 상태를 변경하는 방법을 살펴보겠습니다.

### onIdle 함수를 통한 Map 상태 변경

`google.maps.Map`에서 제공하는 `onIdle` 함수를 통해 Map의 상태를 변경할 수 있습니다.  
이를 리액트 환경에서 사용하기 위해 `useEffect`를 통해 `onIdle` 함수를 등록하고, `onIdle` 함수에서 Map의 상태를 변경하는 함수를 호출하도록 구현하였습니다.

```ts
// useControlledStateMap.ts
const [map, setMap] = useState<google.maps.Map | null>(null);
const [mapCenter, setMapCenter] = useState<LatLngLiteral | null>(null);
const [mapZoom, setMapZoom] = useState<number | null>(null);
const [mapBounds, setMapBounds] = useState<LatLngBoundsLiteral | null>(null);
const onIdle = () => {
  // Map의 상태를 변경하는 함수를 호출한다.
  const _zoom = map.getZoom();
  const _center = map.getCenter();
  const _bounds = map.getBounds();
  if (_center) {
    const { lat, lng } = _center.toJSON();
    setMapCenter({
      lat,
      lng,
    });
  }
  if (_zoom) {
    setMapZoom(_zoom);
  }
  if (_bounds) {
    const { east, north, south, west } = _bounds.toJSON();
    setMapBounds({
      east,
      north,
      south,
      west,
    });
  }
};

useEffect(() => {
  if (!map) return;
  //  onIdle 함수를 Map Event Listener에 등록한다.
  map.addListener("idle", onIdle);
}, [map]);
```

이 외로 Marker 컴포넌트와 같이 맵의 구성 요소가 바뀌면서 `onIdle` 함수가 계속 실행되는 사이클을 가지게 되는데 이를 해결하기 위해 `useDeepCompareEffect` 개념을 활용하여 최적화를 고려해보겠습니다.

### useDeepCompareEffect 개념을 활용한 최적화

`useDeepCompareEffect`란?

> `useEffect`와 동일한 기능을 가지고 있지만, `useEffect`는 `deps`에 전달된 값이 변경되면 `useEffect`가 실행되지만, `useDeepCompareEffect`는 깊은 비교를 통해 값이 변경되었는지 확인하고 변경되었을 때에만 `useEffect`가 실행되도록 구현되어 있습니다.

- 실제로 발생했던 이슈 중 하나로, 맵에서 제공하는 `Center`값과 `Zoom`값이 변경되면서 `onIdle` 함수가 계속 실행되는 사이클이 발생했고, onIdle에서 실행되는 Map 상태 변경 함수가 계속 실행되어 성능에 문제가 발생했습니다.
- 이를 해결하기 위해 `useDeepCompareEffect`를 활용하여 맵의 zoom, center, bounds가 변경되어도 `onIdle` 함수가 실행되지 않도록 구현하였습니다.

```ts
// useDeepCompareEffect.ts
import { createCustomEqual } from "fast-equals";
const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }
  return deepEqual(a, b);
});

const useDeepCompareMemoize = (value) => {
  const ref = React.useRef();
  // LatLngLiteral과 같은 객체를 비교하기 위해 deepCompareEqualsForMaps를 사용합니다.
  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

export const useDeepCompareEffectForMaps = (
  callback: React.EffectCallback,
  dependencies: any[]
) => {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

// useControlledStateMap.ts
useDeepCompareEffectForMaps(() => {
  if (!map) return;
  map.setOptions({
    theme: mapTheme,
    // ... 기타 옵션들
  });
}, [map]);
```

결과적으로 Map의 Lat, Lng가 변경되어도(Center, Bounds 등) `onIdle` 함수가 실행되지 않도록 구현하였고 효율적인 렌더링을 할 수 있게 되었습니다.

## 결론

- 대부분의 제공하는 라이브러리 형태는 Vanila JavaScript 환경에서 사용할 수 있도록 예시가 구현되어 있습니다.
- 사용할 수 있는 JavaScript Map API가 제공되어도 이를 React 환경에서 사용하기 위해서는 어떤 방식으로 접근해야 할 지 고민해야 합니다.
- 시중에 제공되는 라이브러리를 살펴보면서 어떤 방식으로 접근해야 할 지 고민해보고, 이를 어떻게 추상화하여 사용할 수 있을 지 고민해보는 것이 중요합니다.

## reference

- [useDeepCompareEffect Git](https://github.com/kentcdodds/use-deep-compare-effect/blob/main/src/index.ts#L2)
- [React로 Google 지도 사용하는 방법](https://thomasstep.com/blog/using-google-maps-and-search-with-react)
- [Google Map API Docs](https://developers.google.com/maps/documentation/javascript?hl=ko)
- [Google Map JavaScript API Loader Git](https://github.com/googlemaps/js-api-loader)
