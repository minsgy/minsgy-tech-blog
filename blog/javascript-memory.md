---
slug: JavaScript 메모리 관리하기
title: JavaScript 메모리 관리하기
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript의 메모리 관리는 어려운 주제입니다. 예를 들어 JavaScript는 GC(Garbage Collector)를 사용하고 있지만, GC가 언제 어떤 메모리를 해제할지는 알 수 없습니다. JavaScript에서 메모리 관리를 잘 하려면 어떤 것들을 알아야 할 지 알아보기 위해 작성했습니다.

## JavaScript 데이터

JavaScript에서 데이터는 크게 2가지로 나눌 수 있습니다.

**변경 불가능한 값(immutable value)인 원시 타입**과 **변경 가능한(mutable value) 객체 타입**으로 구분할 수 있습니다.

이를 좀 더 자세하게 알아보겠습니다. 

### 원시 타입 (Primitive Type)

![image](https://user-images.githubusercontent.com/60251579/190897442-875ae942-8993-41f0-b4f5-c73a3b2e16a3.png)

### 참조 타입 (Object, Array, Function, RegExp, Date, Error)

### 깊은 복사 vs 얕은 복사

##
