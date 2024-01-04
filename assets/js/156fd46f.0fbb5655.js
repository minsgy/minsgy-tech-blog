"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9031],{8766:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=a(5893),o=a(1151);const s={slug:"React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",title:"React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",authors:["minsgy"],tags:["React","GoogleMaps"]},l=void 0,p={permalink:"/blog/React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",editUrl:"https://github.com/minsgy/minsgy.github.io/edit/main/blog/react-life-cycle-sync-map.md",source:"@site/blog/react-life-cycle-sync-map.md",title:"React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",description:"\uc11c\ub860",date:"2024-01-04T13:46:42.000Z",formattedDate:"2024\ub144 1\uc6d4 4\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"GoogleMaps",permalink:"/blog/tags/google-maps"}],readingTime:11.665,hasTruncateMarker:!1,authors:[{name:"Choi Minseok",title:"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",url:"https://github.com/minsgy",imageURL:"https://github.com/minsgy.png",key:"minsgy"}],frontMatter:{slug:"React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",title:"React \ud658\uacbd\uc5d0\uc11c Google Map API \uc0ac\uc6a9\ud558\uae30",authors:["minsgy"],tags:["React","GoogleMaps"]},unlisted:!1,prevItem:{title:"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec",permalink:"/blog/JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec"},nextItem:{title:"\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654",permalink:"/blog/\ub370\uc774\ud130 \ud328\uce6d \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c API \ube44\uc6a9 \ucd5c\uc801\ud654"}},r={authorsImageUrls:[void 0]},c=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"Google Map JavaScript API",id:"google-map-javascript-api",level:2},{value:"React\uc5d0\uc11c Map\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ubc29\ubc95",id:"react\uc5d0\uc11c-map\uc744-\uc0ac\uc6a9\ud558\uae30-\uc704\ud55c-\ubc29\ubc95",level:2},{value:"Map API \ud638\ucd9c \uc774\uc804 \uc2dc\uc810",id:"map-api-\ud638\ucd9c-\uc774\uc804-\uc2dc\uc810",level:3},{value:"Map API \ud638\ucd9c\uc774\ud6c4 \uc2dc\uc810",id:"map-api-\ud638\ucd9c\uc774\ud6c4-\uc2dc\uc810",level:3},{value:"MapComponent\uc758 \uae30\ub2a5 \ud655\uc7a5",id:"mapcomponent\uc758-\uae30\ub2a5-\ud655\uc7a5",level:3},{value:"onIdle \ud568\uc218\ub97c \ud1b5\ud55c Map \uc0c1\ud0dc \ubcc0\uacbd",id:"onidle-\ud568\uc218\ub97c-\ud1b5\ud55c-map-\uc0c1\ud0dc-\ubcc0\uacbd",level:3},{value:"useDeepCompareEffect \uac1c\ub150\uc744 \ud65c\uc6a9\ud55c \ucd5c\uc801\ud654",id:"usedeepcompareeffect-\uac1c\ub150\uc744-\ud65c\uc6a9\ud55c-\ucd5c\uc801\ud654",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"reference",id:"reference",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,t.jsx)(n.p,{children:"Google Map \uae30\ubc18\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c\nGoogle\uc5d0\uc11c \uc81c\uacf5\ud574\uc8fc\ub294 JavaScript Map API\ub294 React\uc5d0\uc11c \ubc14\ub85c \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc5b4\ub824\uc6b4 \ud658\uacbd\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. DOM\uc744 \uc0dd\uc131\ud558\ub294 \uc2dc\uc810\uc5d0 Map\uc744 \uc0dd\uc131\ud558\uace0, Map\uc744 \uc0ac\uc6a9\ud558\ub294 \uc2dc\uc810\uc5d0 DOM\uc774 \uc0dd\uc131\ub418\uc5b4 \uc788\uc5b4\uc57c \ud558\ub294\ub370, React\uc5d0\uc11c\ub294 DOM\uc744 \uc0dd\uc131\ud558\ub294 \uc2dc\uc810\uacfc Map\uc744 \uc0ac\uc6a9\ud558\ub294 \uc2dc\uc810\uc774 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc810\uc744 \uace0\ub824\ud574 React \ub77c\uc774\ud504\uc0ac\uc774\ud074 \ud658\uacbd\uc5d0\uc11c Map\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"google-map-javascript-api",children:"Google Map JavaScript API"}),"\n",(0,t.jsxs)(n.p,{children:["React \ud658\uacbd\uc5d0\uc11c Map\uc744 \uad6c\ud604\ud558\uae30 \uc804\uc5d0 Google\uc5d0\uc11c \uc81c\uacf5\ud574\uc8fc\ub294 ",(0,t.jsx)(n.code,{children:"JavaScript API"}),"\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,t.jsx)(n.br,{}),"\n","Google Map Document\ub97c \ubcf4\uba74 ",(0,t.jsx)(n.code,{children:"Map"}),"\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let map: google.maps.Map;\nasync function initMap(): Promise<void> {\n  //@ts-ignore\n  const { Map } = await google.maps.importLibrary("maps");\n  map = new Map(document.getElementById("map") as HTMLElement, {\n    center: { lat: -34.397, lng: 150.644 },\n    zoom: 8,\n  });\n}\n\ninitMap();\nexport {};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uc704 \ucf54\ub4dc\ub97c \ud1b5\ud574 Map\uc744 \uc0dd\uc131\ud568\uc744 \uc54c \uc218 \uc788\uace0 \uc0dd\uc131\ub41c Map\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,t.jsx)(n.code,{children:"map"})," \ubcc0\uc218\ub97c \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,t.jsx)(n.br,{}),"\n","\uc774 \ucf54\ub4dc\ub97c React \ud658\uacbd\uc5d0\uc11c \uc4f0\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5a4 \ubc29\ubc95\uc73c\ub85c \uc811\uadfc\ud574\uc57c \ud560 \uc9c0 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"react\uc5d0\uc11c-map\uc744-\uc0ac\uc6a9\ud558\uae30-\uc704\ud55c-\ubc29\ubc95",children:"React\uc5d0\uc11c Map\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ubc29\ubc95"}),"\n",(0,t.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074\uc740 \ud06c\uac8c mount, update, unmount\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 Google Map API\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 mount \uc2dc\uc810\uc5d0 Map\uc744 \uc0dd\uc131\ud558\uba70 update \uc2dc\uc810\uc5d0\uc11c\uc758 \ucd5c\uc801\ud654\ub97c \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"map-api-\ud638\ucd9c-\uc774\uc804-\uc2dc\uc810",children:"Map API \ud638\ucd9c \uc774\uc804 \uc2dc\uc810"}),"\n",(0,t.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8 DOM\uc774 \uc0dd\uc131\ub418\uace0 \ub09c \uc774\ud6c4\uc5d0 Map\uc744 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc81c\uacf5\ub418\ub294 map\uc758 \uc0dd\uc131 \ubc29\uc2dd\uc740 DOM\uc5d0 \uc758\uc874\uc801\uc774\uc5ec\uc11c DOM\uc774 \uc0dd\uc131\ub418\uae30 \uc804\uc5d0 Map API\ub97c \ud638\ucd9c\ud558\uc5ec \uc0dd\uc131\ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uac8c \ub418\uace0, \uc774\uc5d0 \ub300\ud55c \ub85c\ub529 \ucc98\ub9ac\ub97c \ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// Map.tsx\nconst [map, setMap] = useState<google.maps.Map | null>(null);\nconst [loading, setLoading] = useState<boolean>(true);\nuseEffect(() => {\n  async function initMap(): Promise<void> {\n    //@ts-ignore\n    const { Map } = await google.maps.importLibrary("maps");\n    setMap(\n      new Map(document.getElementById("map") as HTMLElement, {\n        center: { lat: -34.397, lng: 150.644 },\n        zoom: 8,\n      })\n    );\n    setLoading(false);\n  }\n  initMap();\n}, []);\n\nif (loading) return <div>loading...</div>;\nreturn <div id="map" />;\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc704 \ucf54\ub4dc\ub97c \ud1b5\ud574 Map\uc744 \uc0dd\uc131\ud558\uace0, Map\uc774 \uc0dd\uc131\ub418\uae30 \uc804\uc5d0\ub294 \ub85c\ub529\uc744 \ud45c\uc2dc\ud558\ub3c4\ub85d \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \uc774\ub807\uac8c \ud588\uc744 \ub54c \ub2e8\uc21c\ud558\uac8c Map\uc744 \uc0dd\uc131\ub9cc \ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 Map\uc774 \uc0dd\uc131\ub41c \uc774\ud6c4\uc5d0 \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"map-api-\ud638\ucd9c\uc774\ud6c4-\uc2dc\uc810",children:"Map API \ud638\ucd9c\uc774\ud6c4 \uc2dc\uc810"}),"\n",(0,t.jsx)(n.p,{children:"Map\uc774 \uc0dd\uc131\ub41c \uc774\ud6c4\uc5d0\ub294 Map\uc758 \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 Map\uc774 \uc0dd\uc131\ub41c \uc774\ud6c4\uc5d0 \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc5ec\ub7ec \ubc29\ubc95\uc774 \uc788\uaca0\uc9c0\ub9cc \uc5ec\ub7ec Map \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0b4\ud3b4\ubcf4\uba74 Wrapper\ub97c \ub9cc\ub4e4\uace0 Map API \ud638\ucd9c\uc774\ud6c4\ub85c \ub2e4\ub978 \uae30\ub2a5\ub4e4\uc744 render\ub97c \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc800\ub294 google maps\uc5d0\uc11c \uc81c\uacf5\ud574\uc8fc\ub294 ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@googlemaps/js-api-loader",children:"@googlemaps/js-api-loader"}),"\ub97c \ud65c\uc6a9\ud558\uc5ec JavaScript Map API\ub97c \ud638\ucd9c\ud558\uc5ec \uac80\uc99d\ud558\ub294 Wrapper\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud55c \uc774\uc720\ub294 \uc2f1\uae00\ud1a4 \ud328\ud134\uc73c\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\uc5b4 \uc5ec\ub7ec\ubc88 \ud638\ucd9c\ud574\ub3c4 \ud55c\ubc88\ub9cc \ud638\ucd9c\ub418\uace0, ",(0,t.jsx)(n.strong,{children:"Map API \ud638\ucd9c \uc774\ud6c4 \ub2e4\ub978 \uae30\ub2a5\ub4e4\uc744 render\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ub418\uc5b4 \uc788\uc5b4 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9"}),"\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// GoogleMapWrapper.tsx\nconst GoogleMapWrapper = ({ children }) => {\n  const [status, setStatus] = useState<google.maps.Status>("SUCCESS");\n  useEffect(() => {\n    const googleMapResponse = new Loader(options);\n    const setStatusAndExecuteCallback = (status: Status) => {\n      if (callback) callback(status, googleMapResponse);\n      setStatus(status);\n    };\n    setStatusAndExecuteCallback(Status.LOADING);\n    googleMapResponse.load().then(\n      () => setStatusAndExecuteCallback(Status.SUCCESS),\n      () => setStatusAndExecuteCallback(Status.FAILURE)\n    );\n  }, []);\n\n  if (status === Status.SUCCESS && children) return <>{children}</>;\n  return <></>;\n};\n\n// MapComponent.tsx\nconst MapComponent = () => {\n  const ref = useRef(); // Map\uc744 \uc0dd\uc131\ud560 DOM\uc744 \ucc38\uc870\ud558\uae30 \uc704\ud55c ref\n  useEffect(() => {\n    new window.google.maps.Map(ref.current, {\n      center,\n      zoom,\n    });\n  });\n  return <div ref={ref} id="map" />;\n};\n\n// Map.tsx\nconst Map = () => {\n  return (\n    <GoogleMapWrapper>\n      <MapComponent />\n    </GoogleMapWrapper>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc704 \ucf54\ub4dc\uc758 \ud750\ub984\uc744 \uc0b4\ud3b4\ubcf4\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GoogleMapWrapper"}),"\uc5d0\uc11c Google Map API\ub97c \ud638\ucd9c\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["Google Map API \ud638\ucd9c\uc774 \uc131\uacf5\ud558\uba74 ",(0,t.jsx)(n.code,{children:"MapComponent"}),"\ub97c render\ud55c\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MapComponent"}),"\uc5d0\uc11c Map\uc744 \uc0dd\uc131\ud55c\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub97c \ud1b5\ud574 Google Map API \ud638\ucd9c \uc774\ud6c4 \uc2dc\uc810\uc5d0 Map\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",(0,t.jsx)(n.br,{}),"\n","\ub354 \ub098\uc544\uac00\uc11c Google Map\uc5d0\uc11c \uc81c\uacf5\ud558\uace0 \uc788\ub294 ",(0,t.jsx)(n.code,{children:"Marker"}),", ",(0,t.jsx)(n.code,{children:"InfoWindow"})," \ub4f1 \uae30\ub2a5\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ud558\uace0 \ucd5c\uc801\ud654\ub97c \uace0\ub824\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"mapcomponent\uc758-\uae30\ub2a5-\ud655\uc7a5",children:"MapComponent\uc758 \uae30\ub2a5 \ud655\uc7a5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MapComponent"}),"\uc5d0\uc11c Map\uc744 \uc0dd\uc131\ud558\uace0, ",(0,t.jsx)(n.code,{children:"Marker"}),", ",(0,t.jsx)(n.code,{children:"InfoWindow"})," \ub4f1\uc758 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ucd94\uc0c1\ud654\ud558\uc5ec \uad6c\ud604\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// MapComponent.tsx\nexport const MapComponent = ({ children, ...options }) => {\n  const map = useState<google.maps.Map | null>(null);\n  const mapRef = useRef();\n\n  useEffect(() => {\n    if (!mapRef.current) return;\n    const initialMap = new window.google.maps.Map(mapRef.current);\n    setMap(initialMap);\n  }, [map]);\n\n  return (\n    <>\n      <div ref={mapRef} style={style} />\n      {Children.map(children, (child) => {\n        // children\uc73c\ub85c \ubc1b\uc740 Map \uae30\ub2a5\ub4e4\uc744 cloneElement\ub97c \ud1b5\ud574 map\uc744 \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604.\n        // \uc774\ub807\uac8c \uad6c\ud604\ud558\uba74 Map state\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 MapComponent\uac00 re-render\ub418\uc5b4 \uc131\ub2a5\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.\n        if (isValidElement(child)) {\n          return cloneElement(child as ReactElement<google.maps.MapOptions>, {\n            map,\n          });\n        }\n        return null;\n      })}\n    </>\n  );\n};\n\n// Map.tsx\nconst Map = () => {\n  return (\n    <GoogleMapWrapper>\n      <MapComponent>\n        <Clusters />\n        {/* \uc870\uac74\ubb38\uc744 \ud1b5\ud574 \ubd84\uae30\ub3c4 \uac00\ub2a5\ud558\ub2e4. */}\n        {isVisibleMarker && <VehicleMarkers />}\n        <VehicleInfoWindows />\n        <PolyLines />\n        {/* \ub9f5 \uae30\ub2a5\ub4e4\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4. */}\n      </MapComponent>\n    </GoogleMapWrapper>\n  );\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc774 ",(0,t.jsx)(n.code,{children:"MapComponent"}),"\uc5d0\uc11c Map\uc744 \uc0dd\uc131\ud558\uace0, ",(0,t.jsx)(n.code,{children:"Children"}),"\uc73c\ub85c \ubc1b\uc740 ",(0,t.jsx)(n.code,{children:"Map"})," \uae30\ub2a5\ub4e4\uc744 ",(0,t.jsx)(n.code,{children:"cloneElement"}),"\ub97c \ud1b5\ud574 ",(0,t.jsx)(n.code,{children:"map"}),"\uc744 \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub354 \ub098\uc544\uac00\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 ",(0,t.jsx)(n.code,{children:"Marker"})," \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\ub97c \ud1b5\ud574 Map\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"onidle-\ud568\uc218\ub97c-\ud1b5\ud55c-map-\uc0c1\ud0dc-\ubcc0\uacbd",children:"onIdle \ud568\uc218\ub97c \ud1b5\ud55c Map \uc0c1\ud0dc \ubcc0\uacbd"}),"\n",(0,t.jsxs)(n.p,{children:["google.maps.Map\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\ub97c \ud1b5\ud574 Map\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,t.jsx)(n.br,{}),"\n","\uc774\ub97c \ub9ac\uc561\ud2b8 \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.code,{children:"useEffect"}),"\ub97c \ud1b5\ud574 ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\ub97c \ub4f1\ub85d\ud558\uace0, ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\uc5d0\uc11c Map\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// useControlledStateMap.ts\nconst [map, setMap] = useState<google.maps.Map | null>(null);\nconst [mapCenter, setMapCenter] = useState<LatLngLiteral | null>(null);\nconst [mapZoom, setMapZoom] = useState<number | null>(null);\nconst [mapBounds, setMapBounds] = useState<LatLngBoundsLiteral | null>(null);\nconst onIdle = () => {\n  // Map\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud55c\ub2e4.\n  const _zoom = map.getZoom();\n  const _center = map.getCenter();\n  const _bounds = map.getBounds();\n  if (_center) {\n    const { lat, lng } = _center.toJSON();\n    setMapCenter({\n      lat,\n      lng,\n    });\n  }\n  if (_zoom) {\n    setMapZoom(_zoom);\n  }\n  if (_bounds) {\n    const { east, north, south, west } = _bounds.toJSON();\n    setMapBounds({\n      east,\n      north,\n      south,\n      west,\n    });\n  }\n};\n\nuseEffect(() => {\n  if (!map) return;\n  //  onIdle \ud568\uc218\ub97c Map Event Listener\uc5d0 \ub4f1\ub85d\ud55c\ub2e4.\n  map.addListener("idle", onIdle);\n}, [map]);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \uc678\ub85c Marker \ucef4\ud3ec\ub10c\ud2b8\uc640 \uac19\uc774 \ub9f5\uc758 \uad6c\uc131 \uc694\uc18c\uac00 \ubc14\ub00c\uba74\uc11c ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\uac00 \uacc4\uc18d \uc2e4\ud589\ub418\ub294 \uc0ac\uc774\ud074\uc744 \uac00\uc9c0\uac8c \ub418\ub294\ub370 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.code,{children:"useDeepCompareEffect"})," \uac1c\ub150\uc744 \ud65c\uc6a9\ud558\uc5ec \ucd5c\uc801\ud654\ub97c \uace0\ub824\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"usedeepcompareeffect-\uac1c\ub150\uc744-\ud65c\uc6a9\ud55c-\ucd5c\uc801\ud654",children:"useDeepCompareEffect \uac1c\ub150\uc744 \ud65c\uc6a9\ud55c \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useDeepCompareEffect"}),"\ub780?"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useEffect"}),"\uc640 \ub3d9\uc77c\ud55c \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, ",(0,t.jsx)(n.code,{children:"useEffect"}),"\ub294 ",(0,t.jsx)(n.code,{children:"deps"}),"\uc5d0 \uc804\ub2ec\ub41c \uac12\uc774 \ubcc0\uacbd\ub418\uba74 ",(0,t.jsx)(n.code,{children:"useEffect"}),"\uac00 \uc2e4\ud589\ub418\uc9c0\ub9cc, ",(0,t.jsx)(n.code,{children:"useDeepCompareEffect"}),"\ub294 \uae4a\uc740 \ube44\uad50\ub97c \ud1b5\ud574 \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uace0 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c\uc5d0\ub9cc ",(0,t.jsx)(n.code,{children:"useEffect"}),"\uac00 \uc2e4\ud589\ub418\ub3c4\ub85d \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc2e4\uc81c\ub85c \ubc1c\uc0dd\ud588\ub358 \uc774\uc288 \uc911 \ud558\ub098\ub85c, \ub9f5\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,t.jsx)(n.code,{children:"Center"}),"\uac12\uacfc ",(0,t.jsx)(n.code,{children:"Zoom"}),"\uac12\uc774 \ubcc0\uacbd\ub418\uba74\uc11c ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\uac00 \uacc4\uc18d \uc2e4\ud589\ub418\ub294 \uc0ac\uc774\ud074\uc774 \ubc1c\uc0dd\ud588\uace0, onIdle\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 Map \uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218\uac00 \uacc4\uc18d \uc2e4\ud589\ub418\uc5b4 \uc131\ub2a5\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.code,{children:"useDeepCompareEffect"}),"\ub97c \ud65c\uc6a9\ud558\uc5ec \ub9f5\uc758 zoom, center, bounds\uac00 \ubcc0\uacbd\ub418\uc5b4\ub3c4 ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// useDeepCompareEffect.ts\nimport { createCustomEqual } from "fast-equals";\nconst deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {\n  if (\n    isLatLngLiteral(a) ||\n    a instanceof google.maps.LatLng ||\n    isLatLngLiteral(b) ||\n    b instanceof google.maps.LatLng\n  ) {\n    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));\n  }\n  return deepEqual(a, b);\n});\n\nconst useDeepCompareMemoize = (value) => {\n  const ref = React.useRef();\n  // LatLngLiteral\uacfc \uac19\uc740 \uac1d\uccb4\ub97c \ube44\uad50\ud558\uae30 \uc704\ud574 deepCompareEqualsForMaps\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  if (!deepCompareEqualsForMaps(value, ref.current)) {\n    ref.current = value;\n  }\n\n  return ref.current;\n};\n\nexport const useDeepCompareEffectForMaps = (\n  callback: React.EffectCallback,\n  dependencies: any[]\n) => {\n  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));\n};\n\n// useControlledStateMap.ts\nuseDeepCompareEffectForMaps(() => {\n  if (!map) return;\n  map.setOptions({\n    theme: mapTheme,\n    // ... \uae30\ud0c0 \uc635\uc158\ub4e4\n  });\n}, [map]);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uacb0\uacfc\uc801\uc73c\ub85c Map\uc758 Lat, Lng\uac00 \ubcc0\uacbd\ub418\uc5b4\ub3c4(Center, Bounds \ub4f1) ",(0,t.jsx)(n.code,{children:"onIdle"})," \ud568\uc218\uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uace0 \ud6a8\uc728\uc801\uc778 \ub80c\ub354\ub9c1\uc744 \ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ub300\ubd80\ubd84\uc758 \uc81c\uacf5\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud615\ud0dc\ub294 Vanila JavaScript \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc608\uc2dc\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 JavaScript Map API\uac00 \uc81c\uacf5\ub418\uc5b4\ub3c4 \uc774\ub97c React \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \uc811\uadfc\ud574\uc57c \ud560 \uc9c0 \uace0\ubbfc\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc2dc\uc911\uc5d0 \uc81c\uacf5\ub418\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0b4\ud3b4\ubcf4\uba74\uc11c \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \uc811\uadfc\ud574\uc57c \ud560 \uc9c0 \uace0\ubbfc\ud574\ubcf4\uace0, \uc774\ub97c \uc5b4\ub5bb\uac8c \ucd94\uc0c1\ud654\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uc9c0 \uace0\ubbfc\ud574\ubcf4\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kentcdodds/use-deep-compare-effect/blob/main/src/index.ts#L2",children:"useDeepCompareEffect Git"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://thomasstep.com/blog/using-google-maps-and-search-with-react",children:"React\ub85c Google \uc9c0\ub3c4 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.google.com/maps/documentation/javascript?hl=ko",children:"Google Map API Docs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/googlemaps/js-api-loader",children:"Google Map JavaScript API Loader Git"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>p,a:()=>l});var t=a(7294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);