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

원시 타입의 종류로 `string`, `number`, `boolean`, `undefined`, `null`, 객체와 함수를 참조하는 곳이 존재합니다.

여기서 말하는 원시 값의 변경이 불가능하다는 건, **"메모리 상 할당 된 변수 값"** 을 변경할 수 없다는 의미입니다. 




### 객체(참조) 타입

### 깊은 복사 vs 얕은 복사

##
