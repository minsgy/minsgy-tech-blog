
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

위와 같이 foo의 경우 함수 객체가 아니기때문에 `[[Prototype]]` 만 존재하게 되고, Person 함수의 경우 함수 객체이기 때문에 `prototype`이 존재하게 됩니다. 이를 통해 어떤 방식으로 함수를 선언해도 `Object.prototype` 객체를 상속받아 사용하게 됩니다.

### 프로토타입 객체의 변경

프로토타입의 특징으로 객체를 생성할 때 프로토타입은 결정되게 됩니다. 결정된 프로토타입의 객체는 다른 임의 객체로 변경할 수 있는데 이것은 **부모 객체인 프로토타입을 동적으로 변경할 수 있는 것을 의미**하게 됩니다. 즉, 객체의 상속을 구현할 수 있습니다.

주의 할 점으로는 프로토타입 객체를 변경하게 됐을 시 객체 변경 시점에 따른 `[[Prototype]]` 바인딩 시점이 달라지게 됩니다.

```js
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

// 프로토타입 객체의 변경
Person.prototype = { gender: 'male' };

  
var bar = new Person('Kim');

console.log(foo.gender); // undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // ① Person(name)
console.log(bar.constructor); // ② Object()
```

![image](https://user-images.githubusercontent.com/60251579/193512830-7aa13027-6eda-4a5a-8d19-48aed92e22f6.png)

1. constructor 프로퍼티는 Person() 생성자 함수를 가리키고 있습니다.
2. 프로토타입 객체 변경 이후에는 Person() 생성자 함수의 Prototype 프로퍼티가 가리키는 프로토타입 객체를 일반 객체로 변경하게 되면서 `prototype.constructor` 프로퍼티가 사라지게 됩니다. 결국` bar.constructor` 값은 `Object.prototype.constructor`인 Object() 생성자 함수가 됩니다.

`Person.prototype`은 `Person` 생성자 함수를 가리키지 않고 Object.prototype을 가리키게 되는 문제가 발생하게 됩니다. 의도하지 않은 프로토타입 체인이 이루어져 상속해 **사용할 수 있는 메소드에 대한 오류가 발생할 수 있다는 점**을 고려해야합니다. 

변경되는 시점에 따라 바인딩되는데 이를 통해 만들 수 있는 코드 디자인 패턴을 소개합니다.


### 이를 활용한 Prototype 디자인 패턴

프로토타입의 특징인 원형이 되는 인스턴스를 사용해 새롭게 생성 할 객체의 종류를 명시해서 **새로운 객체가 생성 될 시점에 인스턴스 타입을 결정하도록 하는 디자인 패턴**입니다.

![image](https://user-images.githubusercontent.com/60251579/193514052-5afd2bc2-640b-46d8-906f-15971e7f5517.png)

이렇게 클라이언트는 Prototype 인터페이스를 따르는 모든 객체를 복사해서 인스턴스를 생성할 수 있습니다. **구현 클래스에 의존하지 않고, 써드 파티에 종속되지 않는 경우 사용할 수 있습니다.**


#### 예제

```js

const Component = function (x, y, c) {
   getPosX()
   getPosY()
   getColor()
   getRadius()
   ... // 좌표 계산 등
}

// Component 객체 상속하기
const Circle = function (x, y, c) {
	Component.call(this, x, y, c)
}

Circle.prototype = Object.create(Component.prototype)
Circle.prototype.constructor = Circle


// 추가로 필요한 변수 및 함수를 선언
Circle.prototype.radius = 0;
Circle.prototype.getRadius = function(){...}
Circle.prototype.setRadius = function(r){...}


// ---- main ---

const circle = new Circle()

circle.getPosX();
circle.getPosY();
circle.getColor();
circle.getRadius();
```


#### 장점

-  구현 클래스에 직접 연결하지 않고 객체를 복사할 수 있습니다. (컴포넌트)
-  프로토타입 상속 되어 있어서 복잡한 오브젝트를 쉽게 구성할 수 있고 중복 코드를 제거할 수 있습니다. 
- 그 외로 객체 단위를 컴포넌트처럼 활용하여 확장성도 고려할 수 있다는 점이 매력입니다.


#### 단점

가장 문제가 될 수 있는 단점으로 서로 의존되어 있는 관계일 시, 상속되는 프로토타입 패턴을 적용하기가 어렵습니다. 순환 참조가 발생하여 복잡한 객체를 불러 올 시 의존성을 갖고 있는 프로토타입을 활용한다면 문제가 발생할 수 있습니다.




## Reference 


- [mdn prototype](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
- [mdn new 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)
- 모던 자바스크립트 DeepDive