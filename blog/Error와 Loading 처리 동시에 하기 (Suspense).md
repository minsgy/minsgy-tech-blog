
---
slug: Error와 Loading 처리 동시에 하기
title: Error와 Loading 처리 동시에 하기
authors: [minsgy]
tags: [React, Suspense, 비동기]
---

## 서론

React에서 에러 핸들링을 효율적으로 다루기 위해서는 여러 가지 방법을 활용할 수 있습니다. React 18에서 정식으로 제공하는 Suspense, 공식 문서에 소개 하고 있는 ErrorBoundary를 통한 에러 핸들링도 가능합니다. 기본적으로 class Component 형태를 가지고 있고 이를 활용한 라이브러리도 존재합니다. 이 글을 통해 위와 같은 여러 에러 핸들링 중, **Error**와 **Loading**을 동시에 처리하면서 **선언적 코드를 작성하는 방법을 알아갈 수 있습니다.**



##

