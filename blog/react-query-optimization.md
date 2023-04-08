---
slug: 데이터 패칭 최적화를 통한 API 비용 최적화
title: 데이터 패칭 최적화를 통한 API 비용 최적화
authors: [minsgy]
tags: [TypeScript, React, react-query, optimization, fetch]
---

## 서론

- 프로젝트를 진행하면서 Google Map API를 활용해 위도, 경도를 주소로 변환하는 로직을 필요로 했습니다.
- 제공하는 API는 매 건당 6.6원의 비용이 발생했었는데 서비스 사용자가 많을 수록 굉장히 많은 호출이 이루어지다보니 비용적인 부담이 있었습니다.
- 이러한 비용을 최적화하기 위해서는 최대한 효율적으로 API 호출을 해야 했고 해당 과정을 포스팅하게 되었습니다. 이번 포스팅에서는 API를 비용을 최적화하기 위한 방법을 알아보겠습니다.

![image](https://user-images.githubusercontent.com/60251579/230732355-57269939-20f5-4122-8cd0-f5e2ad015d20.png)

## 문제 상황

- 서비스에서 비용이 드는 API를 호출하는 경우가 있습니다. 사용자가 많은 서비스의 경우는 비용이 기하급수적으로 늘어날 수 있을 뿐만 아니라 페이지 첫 접속때 비용이 드는 데이터 패칭이 존재하게 될 경우 비용 남비가 더 심할 수 있는 문제가 발생합니다. 단순히 새로고침을 통해 한 명의 사용자가 여러 번 API를 호출하는 경우도 있고 악의(?)를 갖고 무한 새로고침을 하게 된다면 100번 이상의 API 호출을 할 수 있습니다. 즉, 비용이 많이 드는 API를 호출하는 경우에는 최대한 적은 API 호출을 하도록 최적화를 해야 합니다. 현재 문제 상황을 정리하면 다음과 같습니다.

  - 비용이 많이 드는 API를 호출하는 경우
  - 사용자가 많은 서비스의 경우 비용이 기하급수적으로 늘어날 수 있음.
  - 페이지 첫 접속때 비용이 드는 데이터 패칭이 존재하게 될 경우 비용 남비가 더 심할 수 있음.
  - 새로고침을 통해 한 명의 사용자가 여러 번 API를 호출하는 경우 (악의를 가지고 무한 새로고침을 하게 된다면 짧은 시간에 100번 이상의 API 호출을 할 수 있음)
  - 비용이 많이 드는 API를 호출하는 경우에는 최대한 적은 API 호출을 하도록 최적화를 해야 함.

**문제 해결을 위해 API 비용을 최소화하기 위한 방법을 고민했고 `API 호출 최소화를 위한 데이터를 캐싱`으로 방향성을 잡고 작업했습니다.**

## queryKey를 통한 데이터 캐싱 방법

- React 환경에서 데이터 패칭 도구로 `react-query`를 활용했습니다. useQuery 메소드에 지원하는 [queryKey](https://tanstack.com/query/v4/docs/react/guides/query-keys)를 활용하여 데이터 캐싱을 유용하게 관리할 수 있는 기능을 활용하려고 했습니다.

```jsx
    useQuery(['minsgy', { status, page }], ...)
    useQuery(['minsgy', { page, status }], ...)
    useQuery(['minsgy', { page, status, other: undefined }], ...)
```

위와 같은 방식을 통해 페이지 접속 시 API 호출은 최소화할 수 있었고 불필요한 API 호출은 막을 수 있었습니다.

그러나 **queryKey로만 원하는 방식의 데이터 캐싱 관리는 불가능했습니다.** 새로고침을 통하면 클라이언트 상태가 초기화되어 새로운 API 호출이 이루어지는 문제가 발생했습니다.

## Storage를 통한 데이터 캐싱 방법

클라이언트 상태를 유지해야 했고 Fetching한 데이터를 저장하는 방법을 고민해 추가 방안은 다음과 같았습니다.

    - Refresh를 통해 클라이언트 상태를 유지하여 추가적인 API 호출을 막는다.
    - Fetching한 유효한 데이터를 저장하고 추가적인 API 호출을 막는다.
    - +) 5분 이상 지난 데이터는 삭제 후, 새로운 API 호출을 한다.

페이지 단에서 Refresh가 발생해도 데이터를 유지할 수 있는 방법으로 web storage와 indexed DB를 고민했지만 100줄 이하의 작은 데이터를 저장하는 것이 목적이여서 **WebStorage**를 활용했습니다.

### queryKey + timestamp + fetching response data

유효한 데이터인지 확인하기 위한 `timestamp`, `react-query`와 함께 사용하기 위한 `queryKey`, 데이터 패칭한 response를 저장하기 위한 `data`로 묶어서 관리하는 방식으로 구현했습니다.

- 아래와 같은 `useCustomCacheQuery` 커스텀 훅을 만들어서 timestamp를 통해 유효한 데이터인지 확인하고 유효한 데이터가 아닌 경우 API 호출을 하도록 구현했습니다.
- 추가적으로 `initialData` react-query option를 통해 캐싱된 데이터가 있으면 캐싱된 데이터를 사용하도록 구현했습니다.

```jsx
 // useCustomCacheQuery.ts
  const storedData = JSON.parse(sessionStorage.getItem(queryKey));
  const timestamp = storedData ? storedData.timestamp : Date.now();
  const queryKey = storedData ? storedData.queryKey : customQueryKey;

 // 저장된 데이터가 있고, timestamp가 5분 이내인 경우
  if (storedData && timestamp && Date.now() - timestamp < 5 * 60 * 1000) {
    ...
  }

  // 저장된 데이터가 있지만, timestamp가 5분 이상인 경우
  if (storedData && timestamp && Date.now() - timestamp >= 5 * 60 * 1000) {
    ...
  }

  // 저장된 데이터가 없거나, timestamp가 5분 이상인 경우
  if (!storedData || !timestamp || Date.now() - timestamp >= 5 * 60 * 1000) {
    ...
  }

  return useQuery(queryKey, fetchFunction(), {
    initialData: storedData ? storedData.data : undefined, // 캐싱된 데이터가 있으면 캐싱된 데이터를 사용
    ...
  })
```

### 나올 수 있는 문제점과 고민 해야 할 점

이러한 캐싱 데이터를 사용할 때 나올 수 있는 문제점은 다음과 같았습니다.

    - 사용자가 확인하고 있는 데이터가 신뢰할 수 있는 데이터인지 확인하기 어렵다.
    - 캐싱된 데이터가 실제 데이터와 다를 수 있다.

해당 로직을 사용하기 위해서는 서비스 특징을 고민하고 적절한 방법을 선택해야 합니다.

    - 캐싱 된 데이터를 제공할 때 문제가 될 수 있는가?
    - 데이터 정합성이 중요한가? (데이터가 실시간으로 변경되는 경우)
    - 데이터 정합성이 중요하지 않은가? (데이터가 실시간으로 변경되지 않는 경우)

에 대한 서비스 특징을 고려하여 적절한 방법을 선택해야 한다고 생각합니다.

## 결론

API 비용을 최소화하기 위해 데이터 캐싱을 사용하는 방법에 대해 고민해보았습니다.

    - queryKey를 통한 데이터 캐싱 방법
    - Storage를 통해 유효한 데이터 캐싱을 위한 방법

위의 두 가지 방법을 통해 API 비용을 최소화할 수 있었습니다.

하지만 **queryKey로만 원하는 방식의 데이터 캐싱 관리는 불가능**했고 **Storage를 통해 유효한 데이터 캐싱을 위한 방법**을 사용했습니다.

또한, **캐싱된 데이터가 실제 데이터와 다를 수 있다.** 라는 문제점이 있었습니다.

### react-query에서 제공하는 persistance 기능

- react-query에서는 [persistQueryClient](https://tanstack.com/query/v4/docs/react/plugins/persistQueryClient) 기능을 제공합니다.
- 직접 `useCustomCacheQuery` 커스텀 훅을 만들지 않고도 캐싱된 데이터를 사용할 수 있습니다.
- 아직 `react-query v4`에서는 `persistQueryClient` 기능이 stable 버전이 아니기 때문에 사용에 주의가 필요합니다.
