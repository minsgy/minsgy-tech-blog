---
slug: JavaScript의 생명주기(Scope)
title: JavaScript의 생명주기(Scope)
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript 생명주기인 **스코프(Scope)가 적용되는 이유**를 통해 우리가 어떤 코드를 작성할 수 있는지 고민할 수 있습니다. 전역적으로 사용 할 수 있는 이유와 어떤 생명주기까지 고려를 하고 만들어야 우리가 유지보수가 좋은 코드를 짤 수 있는지 알아보기 위해 작성했습니다.


## JavaScript 생명주기

변수와 함수 등 선언되고 초기화되면서 메모리를 사용하는 과정을 보면 