
---
slug: Prototype에 대하여
title: Prototype에 대하여
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript에서 지원하지 않는 상속 개념인 객체지향 프로그래밍을 구현하기 위해 Prototype을 사용해야 합니다. Prototype을 통해서 넓은 확장성을 가지는 객체지향 프로그래밍을 구현할 수 있습니다. 이번 포스팅에서는 Prototype에 대해 알아보겠습니다.

## Property Attribute

JavaScript에서는 객체의 프로퍼티에 대한 속성을 설정할 수 있습니다. 
아래와 같은 내부 슬롯과 내부 메소드를 가지게 됩니다.

`[[Configurable]]`: 프로퍼티의 삭제, 프로퍼티 어트리뷰트의 변경을 허용할지 여부를 나타냅니다.

`[[Enumerable]]`: 프로퍼티가 열거 가능한지 여부를 나타냅니다.

`[[Writable]]`: 프로퍼티의 값을 변경할 수 있는지 여부를 나타냅니다. 값이 false인 경우, 읽기 전용 프로퍼티가 됩니다.

`[[Value]]`: 프로퍼티의 값입니다.

`[[Prototype]]`: 프로토타입 객체입니다.

`[[Extensible]]`: 프로토타입 객체에 프로퍼티를 추가할 수 있는지 여부를 나타냅니다.

`[[Class]]`: 프로퍼티의 클래스입니다.

`[[PrimitiveValue]]`: 프로퍼티의 원시 값입니다.

`[[Call]]`: 프로퍼티가 함수인 경우 호출할 수 있는지 여부를 나타냅니다.

`[[Construct]]`: 프로퍼티가 생성자 함수인 경우 호출할 수 있는지 여부를 나타냅니다.

`[[HasInstance]]`: 프로퍼티가 생성자 함수인 경우 인스턴스를 생성할 수 있는지 여부를 나타냅니다.


### 내부 슬롯(프로퍼티 어트리뷰트) 다루기

기본적으로 내부 슬롯은 JavaScript 엔진 내부에 존재하기 때문에 접근하거나 호출할 수 있는 방법이 존재하지 않습니다. 그렇지만 일부 내부 슬롯과 내부 메소드에 한해서 참조 방법으로 접근할 수 있습니다.

```js
const object = {}

object.[[Prototype]] // "error" 내부 슬롯은 JS 엔진 내부 로직으로 접근 불가
object.__proto__ // Object.prototype 참조할 수 있는 내부 메소드 제공
```

위와 같은 방법 외에도 JavaScript 엔진 특징으로 **프로퍼티가 생성 될 때 이러한 프로퍼티를 상태 관리할 수 있는 프로퍼티 어트리뷰트가 기본 값으로 자동 정의**되게 됩니다. `value`, `writable`, `enumerable`, `configurable`와 같은 상태를 확인할 수 있습니다. 즉, 해당되는 내부 슬롯이 생성되게 된다는 뜻입니다.

이러한 프로퍼티 어트리뷰트 값 상태를 확인하는 메소드는 `getOwnPropertyDescript` 가 있습니다.

```js
const minsgy = {
	age: 24
}
console.log(Object.getOwnPropertyDescriptor(minsgy, 'age'))
// { value: 24, writable: true, emumerable: true, configurable: true }
```


이와 같이 내부 슬롯에서 존재하는 `[[Prototype]]`을 통해 JavaScript 동작 원리를 알아보겠습니다.

## 프로토타입 Prototype

JavaScript에서는 클래스 기반을 사용하고 있는 다른 언어(Java, C++)와 달리 **프로토타입 기반의 프로그래밍 언어**입니다. 클래스에서 사용하는 체 지향의 상속 개념을 프로토타입으로 사용할 수 있습니다.



### prototype chain

```js
const student = {
	name: 'Lee',
	score: 90
}


console.log(student.hasOwnProperty('name')) // true
console.log(student.__proto__ === Object.prototype)
console.dir(student)
```

![image](https://user-images.githubusercontent.com/60251579/193508196-c5b6b2fa-c4e1-46ab-a37f-8781e00731cd.png)

`student` 객체의 경우 `hasOwnProperty` 프로퍼티가 존재하지 않습니다. 그렇지만 사용할 수 있는 이유는 `__proto__` 프로퍼티에 의해서 사용할 수 있게 됩니다. 

student 객체는 `__proto__` 프로퍼티로 부모 객체(prototype 객체)인 `Object.prototype`를 가리키고 있기 때문에 가능합니다. 이를 통해 클래스 객체 지향의 상속을 활용할 수 있게 됩니다.

같은 이유로 `Array.prototype`을 상속받는 함수나 객체들은 다음과 같은 메소드를 상속받아 사용할 수 있습니다.

이러한 개념을 prototype chain이라고 부릅니다.

![image](https://user-images.githubusercontent.com/60251579/193508729-1439f7d6-e466-450a-83d8-2c57f144b5fb.png)

이처럼 모든 객체는 본인의 프로토타입 객체를 가리키는 `[[Prototype]]` 내부 슬롯을 갖으면서 상속을 사용할 수 있습니다. 그러나 함수 객체만의 `prototype` 프로퍼티가 따로 존재합니다. 

### prototype property

```js
function Person(name) {
  this.name = name;
}

const foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.
```

`prototype` 프로퍼티는 함수 객체만 가지고 있으며, 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성 될 **객체의 부모 역할을 하는 객체**를 가리키게 됩니다.


### constructor property

프로토타입 객체는 constructor 프로퍼티를 갖게됩니다. 이를 통해 자신을 생성한 객체를 가리킬 수 있습니다. 

```js
function Person(name) {
  this.name = name;
}

const foo = new Person('Lee');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);
```

`Class` 의 개념이 되는 객체를 가리키게 됩니다. 
예를 들어 표현하자면 `붕어빵 생성 된 인스턴스`라면 **붕어빵을 만든 틀**을 가리킬 수 있습니다.

### 함수 리터럴 방식을 통한 선언

함수를 정의하는 방법은 3가지로 **함수 선언식, 함수 표현식, new 연산자를 통한 생성자 함수**가 존재합니다. 

```js

// 함수 표현식 (함수 리터럴 방식)
const square = function(number) { 
	return number * number
}

// 함수 선언식 (기명 함수 표현식으로 변환 + 함수 리터럴 방식)
const square2 = function square(number) {
	return number * number
}
```

두 가지 방법 다 함수 리터럴 방식을 사용하고 이러한 방식은 생성자 함수(Function)로 생성하는 것을 단순화한거로 볼 수 있습니다. 즉, 3가지 방법 다 **Function() 생성자 함수를 통해 함수 객체를 생성**합니다.

new 연산자를 통해 생성 된 함수를 살펴보면 이와 같이 나타낼 수 있습니다.

```js
function Person(name, gender) { // 함수이기 때문에 prototype을 가지고있음.
  this.name = name;
  this.gender = gender;
  this.sayHello = function () {
    console.log('Hi! my name is ' + this.name);
  };
}

const foo = new Person('Lee', 'male'); // 함수가 아니기때문에 내부 슬롯만

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype);                // ① true
console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
console.log(Person.prototype.constructor === Person);           // ③ true
console.log(Person.__proto__ === Function.prototype);           // ④ true
console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true
```

![image](https://user-images.githubusercontent.com/60251579/193511804-5d52915f-e3c7-4379-8ef7-26c3008a1734.png)

위와 가