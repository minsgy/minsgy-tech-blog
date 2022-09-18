---
slug: JavaScript 메모리 관리하기
title: JavaScript 메모리 관리하기
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript의 메모리 관리는 어려운 주제입니다. 예를 들어 JavaScript는 GC(Garbage Collector)를 사용하고 있지만, GC가 언제 어떤 메모리를 해제할지는 알 수 없습니다. JavaScript에서 메모리 관리를 잘 하려면 어떤 것들을 알아야 할 지 알아보기 위해 작성했습니다.

## JavaScript 데이터와 메모리

JavaScript에서 데이터는 크게 2가지로 나눌 수 있습니다.

**변경 불가능한 값(immutable value)인 원시 타입**과 **변경 가능한(mutable value) 객체 타입**으로 구분할 수 있으며 정적 데이터(Static Data)를 저장하는 데이터 구조인 스택(Stack)과 동적 데이터 할당하는 힙(Heap)이 존재합니다.

이를 좀 더 자세하게 알아보겠습니다. 

### 메모리 생명주기 과정

![image](https://user-images.githubusercontent.com/60251579/190898884-3f7d3777-8e62-4429-baf2-371f0ae23d66.png)
간단하게 표현하여 **JavaScript**에서 변수나 함수를 사용하고 필요가 없어지면 메모리에서 해제합니다.

생성한 객체(Object)에 필요한 **메모리를 할당**하고, 작성한 코드를 통해 변수를 읽거나 사용하는 과정으로 **메모리를 사용**합니다. 이후 JS 엔진을 통해 **할당 된 메모리가 해제**되어 메모리를 사용가능한 상태로 만들게 됩니다.




### 원시 타입 (Primitive Type)

![image](https://user-images.githubusercontent.com/60251579/190897442-875ae942-8993-41f0-b4f5-c73a3b2e16a3.png)

원시 타입의 종류로 `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, 참조

여기서 말하는 원시 값의 변경이 불가능하다는 건, **"메모리 상 할당 된 변수 값"** 을 변경할 수 없다는 의미입니다. 

이러한 특징으로 원시 타입은 `불변성` 특징을 갖게 되고, 값을 복사한다면 새로운 메모리 주소를 할당하여 **call by value** 방식으로 복사되어 사용하게 됩니다.

위와 같은 의미로 아래와 같이 코드를 사용할 수 있습니다.

```js
	// 기존 저장 된 메모리에 값이 저장되는 것이 아닌 새로운 메모리 주소를 할당합니다.
	let example = 3
	example = 5
	console.log(example) // 5 


	// 같은 값을 가지고 있지만, 서로 다른 메모리 주소를 갖고 있는 call by value 
	let a = 1
	let b = a

	console.log(a === b) // true 
```

이어서 객체(object)와 함수(function)**는 힙(heap)에 저장되지만, 참조(Reference)는 스택(Stack)에 저장하여 활용**하게 됩니다. 

### 객체(참조) 타입

객체는 변경 가능한 값(mutable value)입니다. 

앞서 사용하는  `const` 키워드는 상수를 만드는 걸 목적으로 합니다. 
선언한 변수 재할당이 불가능하지만 **객체에 할당한 변수(property)** 는 변경 가능합니다.

```js
const a = {}
a = 3 // @ERROR 상수로 선언되어 재할당이 불가능합니다.
a.name = "최민석" // 객체를 할당한 변수에 재할당하는 것이 아니기때문에 가능합니다.
console.log(a) // { name: "최민석" }
```

객체를 생성하고 관리하는 방법은 비용이 많이 들게 됩니다. 그래서 **객체를 변경 가능한 값으로 설계**했습니다.
JavaScript에서는 이를 최소화하여 **메모리 효율적 소비를 높이고 성능을 개선**합니다.

그러나 이러한 설계로 **여러 개의 식별자가 하나의 객체를 공유**하여 영향을 끼치는 문제가 발생합니다.

### 참조값으로 인한 문제 


![image](https://user-images.githubusercontent.com/60251579/190900382-bfc3ab00-be1f-4195-80e8-048a374833ac.png)


그림과 같이 `getDeveloper()` 함수는 `developer` 객체의 `name` property를 가리키고 있습니다. 

이를 통해 발생하는 문제점을 확인해봅니다.

```js
// 서로 다른 값이 영향을 받는 문제가 발생합니다.
// 이를 통해 코드 복잡성이 늘어나게 됩니다.
const developer = {
	name: "minsgy",
	age: "26"
}

function getDeveloperName() {
	return developer.name
}
console.log(getDeveloperName()) // "minsgy"
developer.name = "umin"
console.log(getDeveloperName()) // "umin"
```

`call by reference`를 기반하여 여러 개의 식별

위와 같은 코드를 통해 의존성(dependency)를 갖게 되어 코드 복잡성이 높아지는 문제가 발생합니다.






### 깊은 복사 vs 얕은 복사

##
