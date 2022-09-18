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

### 객체(참조) 타입 (Object Type) 

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

그러나 **여러 개의 식별자가 하나의 객체를 공유**하여 영향을 끼치는 문제가 발생합니다.

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

`call by reference`를 기반하여 다중 식별자에 대한 문제가 발생합니다.

하나의 로직에 **의존성(dependency)** 을 가지고 코드 복잡성이 높아지는 문제가 발생하고 의도하지 않은 값 변경이 일어난다면 디버깅에도 어려움을 가져 **유지보수에 있어서도 좋지 않은 결과**를 보여줍니다.


### 메모리 누수가 발생하는 경우

JavaScript는 할당된 메모리를 사용하지 않는 경우 [GC(Garbage collector)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)에 의해 메모리 할당을 추적하고 자동으로 메모리를 반환시키는 역할을 하게 됩니다. 그렇지만 이러한 과정에 있어서 메모리가 사용되는 지 추정하기 때문에 때때로 **결정불가능(undecidable) 상태**가 발생하게 됩니다.

대부분의 GC는 모든 변수가 스코프(Scope)를 벗어났을 때 더 이상 접근 불가능한 메모리를 수집하지만 스코프가 유지되는 경우가 생긴다면 메모리를 반환하지 않는 문제가 발생하게 됩니다.

결국 GC가 의존하는 알고리즘은 **여러 객체와의 참조(Reference)** 를 통한 개념입니다. 
이로 인해 발생할 수 있는 문제는 다음과 같습니다.

#### 순환참조 (해결)

![image](https://user-images.githubusercontent.com/60251579/190912024-41c28c81-2deb-46e1-9596-49e1d1eea2e8.png)

아래 예제에서 두 객체가 생성되게 되면서 서로를 참조하고 **순환참조가 생성**되게 됩니다.

사실상 함수 호출 이후, 스코프(Scope)를 벗어나게 되면서 사용하지 않게 되지만 두 객체 다 한 번은 참조한 걸로 간주되어 GC(Gabage collector)가 적용되지 않는 문제가 발생합니다.

```js
function f() {  
  var o1 = {};  
  var o2 = {};  
  o1.p = o2; // o1은 o2를 참조함  
  o2.p = o1; // o2는 o1을 참조함. 이를 통해 순환 참조가 만들어짐.  
}

f();
```

2012년 기준으로 현대 브라우저는 해당 순환참조를 해결할 수 있는 [Mark-Sweep 알고리즘](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/)이 적용되면서 순환참조 문제가 해결되었습니다. 그렇지만 React와 같이 컴포넌트 간 순환 참조가 일어날 경우 이슈가 발생할 수 있기 때문에 **여전히 지양해야 하는 부분**입니다.


#### 전역 변수

선언되지 않는 변수를 참조하게 된다면 전역 객체에 새로운 변수를 생성합니다.
`window` 객체를 참조하여 GC를 통한 메모리가 정리되지 않아 규모가 크다면 조심해야 합니다.

```js
function foo(arg) {
	name = "minsgy" // window.name
}
```


#### setInterval, setTimeout, callback

```js
// 1번째. Observer Time API
// 참조한 Node나 데이터가 더 필요로 하지않는 timer를 사용한 결과를 보여줍니다.
let serverData;

setInterval(function() {  
let renderer = document.getElementById('renderer');  
	if(renderer) {  
		renderer.innerHTML = JSON.stringify(serverData);  
	}  
}, 5000); // 매 5초 마다 실행

```

위 코드를 통해 renderer 객체는 어느 시점에 다른 것으로 대체되거나 제거할 수 있으며 `Interval`로 쌓인 코드는 필요가 없게 됩니다. 그러나 `Interval`은 활성화된 상태로 GC를 통한 메모리가 정리되지 않게 됩니다. 추가적으로 `serverData` 데이터도 반환되지 않는 문제가 발생합니다.

이를 해결하기 위해서 `clearInterval`를 통해 데이터를 반환해야 합니다.


```js
// 2번째. Observer Handler 제거하기
const element = ...
const onClick = () => {...}
element.addEventListener('click', onClick) // event 등록
element.removeEventListener('click', onClick) // event 제거
```

현대 브라우저에서는 `removeEvent`를 호출하지 않아도 순환참조를 탐지하여 GC에서 자동 처리하지만 구형 브라우저에서 동작할 때도 메모리 누수가 없도록 신경써줘야 합니다..

#### 이 외에도... 

**클로져로 인한 메모리 누수(중요)**, **Internal Node로 인한 DOM 참조**에 대한 문제가 있습니다. (추후 업데이트 예정)



## React 순환 참조 문제

React에서 여러 컴포넌트들을 모듈화하면서 발생할 수 있는 **모듈 의존성 문제**입니다.

코드를 파일로 분리하여 이것을 다른 파일이 불러와 사용하기 위해서 이런 식으로 **ES6의 모듈 시스템을 활용해 컴포넌트 단위 개발**을 하게 됩니다.

```js
// A -> B -> C -> A 순환 참조 발생
// Uncaught ReferenceError: Cannot access 'A' before initialization
// A.js
import B from './B.js'
export const A = {
	B()
	...
}

// B.js
import C from './A.js'
export const B = {
	C()
	...
}

// C.js
import A from './B.js'
export const C = {
	A()
	...
}
```

문제는 모듈 간의 서로 참조하는 경우 초기화 순서에 의해 순환 참조가 발생하게 됩니다. Webpack에서 모듈을 처리하는 방식은 의존성 맨 마지막 순서에 있는 모듈부터 초기화하게 되어 이러한 순환 참조 문제가 발생하게 됩니다. 

**즉, `B.js` 파일의 코드가 맨 먼저 실행되면서 초기화가 되지도 않은  `A.js`를 참조하면서 발생하는 문제입니다.** 결국에는 순환참조라는 문제를 해결하기 위해서 고민해야 합니다.


### 해결 방법

가장 간단한 건 원인인 순환참조를 제거하기 위한 방법으로 React가 `Top-down` 방식의 컴포넌트 흐름을 가진다면 해결과 동시에 예방까지 할 수 있습니다.

전반적인 데이터의 흐름을 Atomic Component 방식으로 구성하여 제공하던지 UI 컴포넌트와 Service 컴포넌트를 구분하여 API 호출을 하는 방식도 있는 만큼 여러 존재합니다. 

프로젝트를 진행하면서 순환참조가 문제를 꼭 일으키지 않을 수 있지만 추후 프로젝트가 커지면서 발생할 수 있는 이슈들을 예방하기 위한 방향으로 인지하는 게 유지보수에 있어서도 좋아보입니다.







## Reference

[JavaScript 엔진에 대하여](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9)  
[JavaScript는 어떻게 작동하는가?](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-4%EA%B0%80%EC%A7%80-%ED%9D%94%ED%95%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%8C%80%EC%B2%98%EB%B2%95-5b0d217d788d)  
[불변 객체](https://ui.toast.com/posts/ko_20220217)