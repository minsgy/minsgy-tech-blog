---
slug: JavaScript의 생명주기(Scope)
title: JavaScript의 생명주기(Scope)
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript 생명주기인 **스코프(Scope)가 적용되는 이유**를 통해 우리가 어떤 코드를 작성할 수 있는지 고민할 수 있습니다. 전역적으로 사용 할 수 있는 이유와 어떤 생명주기까지 고려를 하고 만들어야 우리가 유지보수가 좋은 코드를 짤 수 있는지 알아보기 위해 작성했습니다.


## JavaScript 생명주기

JavaScript에서 사용되는 변수나 함수 등 생성되고 소멸되는 일정한 사이클이 존재합니다. 이렇게 JavaScript에서 생성 된 **변수나 함수를 사용할 수 있는 범위를 스코프(Scope)** 라고 칭합니다.

```javascript
var x = 'global'; 

function foo () { 
	var x = 'function scope';
	console.log(x);
} 

foo(); // ? 
console.log(x); // ?
```

위와 같은 예제처럼 `x`가 2번 선언되는 경우, JavaScript에서는 어떻게 구분할 수 있을까요?

바로 **스코프(Scope)** 를 통해 `foo()` 함수 내에 선언 된 `x`는 내부에서만 참조할 수 있으며 최상단 선언 된 변수 `x`의 경우 어디에든 참조해서 사용할 수 있습니다. 이러한 스코프 규칙을 통해서 JavaScript 생명 주기를 관리할 수 있고 **전역 스코프(Global Scope)** 와 **지역 스코프(Local Scope)** 로 나눌 수 있습니다.


### 전역 스코프(Global Scope)와 지역 스코프(Local Scope)

전역에 변수를 선언하면 이 변수는 어디서든지 참조할 수 있는 전역 스코프를 갖는 전역 변수가 됩니다. `var` 키워드로 선언한 전역 변수는 [전역 객체(Global Object)](https://poiemaweb.com/js-built-in-object#21-%EC%A0%84%EC%97%AD-%EA%B0%9D%EC%B2%B4global-object) `window`의 프로퍼티입니다.

```js

var global = 'minsgy';
function foo() { 
	var local = 'msg';
	console.log(global);
	console.log(local);
} 
foo(); // minsgy msg

console.log(global); // minsgy
console.log(local); // Uncaught ReferenceError: local is not defined

```

변수 `global`은 함수 영역 밖에서 선언되어 사용할 수 있지만 변수 `local`은 스코프가 종료되어 정의가 구현되지 않습니다. 다음 예시를 통해 함수 내에 존재하는 내부 함수를 살펴보겠습니다.

```js
var x = 'global';
function foo() { 
	var x = 'local'; 
	console.log(x); // local
	function bar() { // 내부함수
		console.log(x); // local
	} 
	bar(); 
} 

foo(); 
console.log(x); // global
```

내부 함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있다는 특징이 있습니다. 이는 매우 유용하게 사용할 수 있습니다. [클로저](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)에서와 같이 내부함수가 더 오래 생존하는 경우 다른 언어와는 다르게 작동하게 됩니다. 

결과적으로 함수 `bar`에서 참조하는 `x`는 함수 `foo`에서 선언 된 지역변수입니다. 이는 스코프 체인에 의해 참조 순위가 전역 변수 `x`가 뒤로 밀린 상태이기 때문에 재할당되어 `local` 값이 적용되게 됩니다.

그리고 선언 된 위치에 의해 따라 생명 주기가 달라집니다. **이를 렉시컬 스코프(Lexical Scope)** 라고 합니다.


### 렉시컬 스코프(Lexical Scope)

```js
var x = 1; 

function foo() { 
	var x = 10; 
	bar(); 
} 

function bar() { 
	console.log(x); 
} 

foo(); // 1 
bar(); // 1
```

위 코드를 통해 두 가지 경우를 유추할 수 있습니다. 

> 함수를 어디서 호출하였는 지? 동적 스코프(Dynamic scope)
> 함수를 어디서 선언하였는 지? 렉시컬 스코프(Lexical Scope)

여기서 JavaScript는 기본적으로 렉시컬 스코프를 따르므로 **함수가 선언 된 시점에 상위 Scope가 결정**되게 됩니다.

결과적으로 함수를 어디에서 호출하였는지 스코프 결정에는 아무런 의미도 주지 않으며 예제와 같이 함수 `bar`는 전역에 선언되어서 전역 변수 값 `x = 1`을 2번 출력하게 됩니다.

위 함수와 같이 함수를 호출하는 것이 아니라 반환하며 **클로져(Closer)**를 예시를 들어보겠습니다.

### 클로져(Closer)

```js
function outerFunc() { 
	var x = 10; 
	var innerFunc = function () { 
		console.log(x); 
	}; 
	return innerFunc;
} 
/** 
* 함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다. 
* 그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다. 
* */ 

var inner = outerFunc();
inner(); // 10

```

**외부 함수 outerFunc**는 **내부 함수 innerFunc**를 반환하고 생명주기를 잃게 됩니다. 그렇지만 outerFunc 지역변수 `x`를 접근할 수 있는 모습을 보입니다. 이렇게 참조되는 외부함수(outerFunc) 변수를 **자유변수(Free variable)**이라고 부릅니다.

이렇게 참조가 가능한 이유는 내부함수가 유효한 상태에서 외부함수가 종료해 반환되어도 외부 함수내의 활성 객체(Activation object: 변수, 함수 선언 정보를 가진)는 **내부 함수에 의해 참조되는 한 유효하며 스코프 체인을 통해 참조**할 수 있게 됩니다. 

![image](https://user-images.githubusercontent.com/60251579/192228970-e36c0242-52d4-4cfe-93c3-f9c30698b421.png)

이와 같이 **반환 된 내부 함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여, 이전 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수**를 **클로져(Closer)**라고 합니다.



## 클로져는 어디에 사용하나요?

코드의 복잡성을 줄일 수도 있지만 자칫하면 참조되는 상황이 발생해 **GC(Garbage Collector)** 가 발생하지 않는 문제가 나타날 수 있습니다. 이러한 점들을 고려하면서 클로저를 활용한 사례를 확인해보겠습니다.


### 1. 전역 변수 줄이기

```js
// 기존
const likeButton = document.querySelector('button')
likeButton.addEventListener('click', handleClick)

let count = 0 // 전역 변수 선언으로 인한 문제들이 많음
function handleClick() {
	count++
	return count
}

// 클로져 사용
const likeButton = document.querySelector('button')
likeButton.addEventListener('click', handleClick())

function handleClick() {
	let count = 0 
	// 렉시컬 환경을 참조하는 함수 likeButton의 callback 함수를 활용하여 전역 변수 없이 구현
	return function() {
		count++
		return count
	}
}
```

클로져를 사용하여 아래 로직과 같이 모듈화한 함수에서만 사용하는 종속적인 변수를 선언합니다. 이를 통해 **메소드(Method) 역할이 구분**되어 사용할 수도 있을 뿐만 아니라 기본적인 전역 스코프에 대한 문제가 해결되어 **인터페이스(Interface) 복잡성이 낮아지게 됩니다.** 




### 2. 함수형 방식 모듈화 

클로저는 **함수형 프로그래밍의 일급 객체(first-class) 개념을 인용하여 스코프(Scope)에 묶인 변수를 바인딩하기 위한 일종의 기술**입니다. 이러한 일급 객체 개념을 활용하여 함수를 저장한 레코드(Record) 역할로 활용할 수 있습니다.

```js
    function makeSizer(size) {
      return function() {
        document.body.style.fontSize = size + 'px';
      };
    }

    var size12 = makeSizer(12);
    var size14 = makeSizer(14);
    var size16 = makeSizer(16);
```

위와 같은 함수형 개념을 통해 외부 함수의 파라미터를 갖고 다른 요소에 의해 넓은 확장성을 가질 뿐만 아니라 내부에 들어가는 로직을 감출 수 있다는 Private한 특징을 가지게 됩니다. 
JavaScript 태생에 존재하지 않는 메소드를 구현하여 제한적인 접근만 허용**할 수 있게 만듭니다.



### 3. React Hook 


```jsx
import React, { useEffect, useState, useCallback } from 'react';

// Timer를 나타내는 컴포넌트
const TimerComponent = () => {
  const [count, setCount] = useState(1);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, []); // empty dependancy

  useEffect(() => {
    const timer = setTimeout(() => {
      incrementCount();
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []); // empty dependancy

  // 결과는 2에서 멈춘다.
  return <div>{`Timer started: ${count}`}</div>; 
};
```

해당 로직은 매 초마다 값이 1씩 증가하는 타이머 컴포넌트입니다. 그렇지만 의도한대로 작동하지 않고 2에서 타이머가 멈추게 됩니다. 의존성 배열에 의해, 한번의 렌더링만 일어나게 되어 함수가 기억하는 값은 여전히 1이기 때문에 타이머가 변하지 않게 됩니다.

즉, useEffect hook 실행 시점에 incrementCount 함수는 count가 1인 환경을 기억하고 있습니다. 이후 count가 업데이트 되어 함수가 새로 변경되어도 useEffect에서 처음 1을 기억하는 함수를 실행하게 됩니다. 이로 인해 count 값이 증가하지 않게 되거나 **useEffect가 실행되지 않아 Timer 값이 변화가 없게 되는 결과**를 보입니다.

useEffect 뿐만 아니라 useCallback에서도 클로저 개념을 활용하여 렉시컬 환경을 관리하게 됩니다. 이를 통해 Hook을 사용 할 시 의존성 배열 관리를 통해 렉시컬 환경을 변화시킬 수 있다는 점에 있어서 의도한 결과를 내도록 주의해야 합니다. useState의 업데이트 방식도 클로저를 활용합니다.

### bonus. useState의 업데이트 구현 방식

```jsx
let _value; // Array

export useState(initialValue){
  if (_value === 'undefined') {
    _value = initialValue;
  }
  const setValue = newValue => {
    _value = newValue;
  }
  
  return [_value, setValue];
}
```

useState 밖에 선언된 변수 `_value`가 있습니다. useState에서는 초기값(initialValue)를 받아 만약 기존 `_value` 값이 없으면 초기값으로 세팅하게 됩니다. setValue 함수는 받아오는 값으로 전역 `_value`를 업데이트하게 되면서  `_value`와 `setValue` 함수를 배열 형태로 반환한다. useState가 어디에서 실행되었건, 클로저를 통해 `_value` 값에 접근할 수 있는 구조를 가지게 됩니다.

결과적으로 useState를 통해 생성한 상태를 접근하고 유지하기 위해서 useState 바깥쪽에 state를 저장하여 선언 된 컴포넌트를 구별할 수 있는 key로 접근하게 되고 배열 형식으로 저장되게 됩니다. useState 안에서 선언되는 상태들은 `_value` 배열에 순서대로 저장되는 원리입니다.





## Reference

[useState와 클로저](https://yeoulcoding.tistory.com/149#recentEntries)  
[클로저 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)  
[클로저에 대하여](https://poiemaweb.com/js-closure)  
