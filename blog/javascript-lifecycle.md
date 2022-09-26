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

바로 **스코프(Scope)** 를 통해 `foo()` 함수 내에 선언 된 `x`는 내부에서만 참조할 수 있고
변수 `x`의 경우 어디에서든 참조해서 사용할 수 있습니다.

이러한 규칙을 통해서 JavaScript 생명 주기를 관리할 수 있습니다.




선언 된 위치에 의해 따라 생명 주기가 달라집니다. **이를 렉시컬 스코프(Lexical Scope)** 라고 합니다.


### Lexical Scope



### 전역 변수

