---
slug: Prototype에 대하여
title: Prototype에 대하여
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript에서 지원하지 않는 상속 개념인 객체지향 프로그래밍을 구현하기 위해 Prototype을 사용해야 합니다. Prototype을 통해서 넓은 확장성을 가지는 객체지향 프로그래밍을 구현할 수 있습니다. 이번 포스팅에서는 Prototype에 대해 알아보겠습니다.

## Property Attribute

JavaScript에서는 객체의 프로퍼티에 대한 속성을 설정할 수 있습니다. 이 속성은 다음과 같습니다.

`[[Configurable]]`: 프로퍼티의 삭제, 프로퍼티 어트리뷰트의 변경을 허용할지 여부를 나타냅니다.

`[[Enumerable]]`: 프로퍼티가 열거 가능한지 여부를 나타냅니다.

`[[Writable]]`: 프로퍼티의 값을 변경할 수 있는지 여부를 나타냅니다. 값이 false인 경우, 읽기 전용 프로퍼티가 됩니다.

`[[Value]]`: 프로퍼티의 값입니다.

 `[[Prototype]]`: 프로토타입 객체입니다.

- [[Extensible]]`: 프로토타입 객체에 프로퍼티를 추가할 수 있는지 여부를 나타냅니다.

- [[Class]]: 프로퍼티의 클래스입니다.

- [[PrimitiveValue]]: 프로퍼티의 원시 값입니다.

- [[Call]]: 프로퍼티가 함수인 경우 호출할 수 있는지 여부를 나타냅니다.

- [[Construct]]: 프로퍼티가 생성자 함수인 경우 호출할 수 있는지 여부를 나타냅니다.

- [[HasInstance]]: 프로퍼티가 생성자 함수인 경우 인스턴스를 생성할 수 있는지 여부를 나타냅니다.
