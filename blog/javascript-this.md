---
slug: JavaScript this 이해하기
title: JavaScript this 이해하기
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

객체 지향 프로그래밍을 구현하게 된다면 객체 자신의 상태를 관리하기 위해 여러 언어에서 this 키워드를 많이 사용합니다. 그렇지만 JavaScript에서 this는 다르게 동작하는 특징이 있어서 제공하는 메소드를 통해 객체지향 방식으로 구현할 수 있습니다. 이 글을 통해서 this의 사용법을 배우고, 사용하면서 나올 수 있는 이슈를 해결할 수 있습니다.


## this란?

`this` 키워드는 기본적으로 하나의 객체(인스턴스)를 가리키게 됩니다. 
예시를 들면 C++에서 `this`는 클래스로부터 생성 된 현재의 객체를 가리킵니다. 이와 같이 JavaScript도 의미가 근본적으로 비슷하지만 또 다르게 사용됩니다.

[MDN-this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)에서 정의하고 있는 값을 보게 된다면

> JavaScript에서 **함수의 `this` 키워드**는 다른 언어와 조금 다르게 동작합니다. 또한 [엄격 모드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)와 비엄격 모드에서도 일부 차이가 있습니다.

이러한 특징을 가지고 있는 JavaScript의 this가 어떻게 사용되는 지 알아보겠습니다.


### 생성자 함수를 통한 인스턴스 다루기

```js
// 재귀적으로 참조한 방법
const circle = {
	radius: 5,
	getDiameter() {
		return 2 * circle.radius
	}
}


// 생성자 함수 정의하기
function Circle(radius) {
	// 생성자 함수가 생성할 인스턴스를 가리킵니다.
	this.radius = radius
}

Circle.prototype.getDiameter = function () {
	return 2 * this.radius
}

// 인스턴스 생성
const circle = new Circle(5)
console.log(circle.getDiameter())
```

위와 같은 코드는 자기 자신의 객체를 재귀적으로 참조하는 방식으로 사용하고 있습니다. 이러한 코드가 가능한 이유는 **객체 리터럴의 생성이 완료 된 이후, getDiameter() 메서드가 호출되기 때문에 사용가능한 코드**입니다. 그렇지만 위 코드의 문제점은 일반적이지 않은 재귀 참조 방식입니다. 

아래 코드의 경우는 생성자 함수를 활용해서 구현했습니다. 생성자 함수의 경우 함수 정의 이후, new 연산자와 함께 **생성자 함수를 호출하는 단계로 인스턴스가 생성**됩니다. 생성자 함수 정의 전에는 인스턴스 생성 전이라 현 객체를 가리킬 수 있는 circle과 같은 식별자가 존재하지 않습니다. 이를 위해 this 키워드를 통해 자신이 생성한 인스턴스를 가리킬 수 있습니다.


### this가 가리키는 
