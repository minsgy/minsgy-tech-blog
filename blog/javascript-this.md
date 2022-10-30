---
slug: JavaScript this 이해하기
title: JavaScript this 이해하기
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

객체 지향 프로그래밍을 구현하게 된다면 객체 자신의 상태를 관리하기 위해 여러 언어에서 this 키워드를 많이 사용합니다. 그렇지만 JavaScript에서 this는 다르게 동작하는 특징이 있어서 제공하는 메소드를 통해 객체지향 방식으로 구현할 수 있습니다. 이 글을 통해서 this의 사용법을 배우고, 사용하면서 나올 수 있는 이슈를 해결할 수 있습니다.


## this란?


```js

const minseok = {
	na
}

```


`this` 키워드는 기본적으로 하나의 객체(인스턴스)를 가리키게 됩니다. 
예시를 들면 C++에서 `this`는 클래스로부터 생성 된 현재의 객체를 가리킵니다. 이와 같이 JavaScript도 의미가 근본적으로 비슷하지만 또 다르게 사용됩니다.

[MDN-this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)에서 정의하고 있는 값을 보게 된다면

> JavaScript에서 **함수의 `this` 키워드**는 다른 언어와 조금 다르게 동작합니다. 또한 [엄격 모드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)와 비엄격 모드에서도 일부 차이가 있습니다.

이러한 특징을 가지고 있는 JavaScript의 this가 어떻게 사용되는 지 알아보겠습니다.

