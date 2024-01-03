---
slug: React Lifecycle에 Google Map 동기화를 시켜보자.
title: React Lifecycle에 Google Map 동기화를 시켜보자.
authors: [minsgy]
tags: [React, GoogleMaps, 생명주기]
---

## 서론

- React에서 Google Map을 사용하다보면, Google Map의 DOM이 생성되기 전에 Google Map의 API를 사용하려고 하면 에러가 발생한다. 이를 해결하기 위해, Google Map의 DOM이 생성된 후에 Google Map의 API를 사용하도록 해야한다. 이를 위해 React의 생명주기를 사용하면 된다.

## Google Map의 DOM이 생성된 후에 Google Map의 API를 사용하도록 하기

- Google Map의 DOM이 생성된 후에 Google Map의 API를 사용하도록 하기 위해서는, Google Map의 DOM이 생성된 후에 Google Map의 API를 사용하도록 해야한다. 이를 위해 React의 생명주기를 사용하면 된다.

- React의 생명주기는 다음과 같다.
