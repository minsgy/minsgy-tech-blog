---
slug: 함수형 프로그래밍 정의하기
title: 함수형 프로그래밍 정의하기
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

프로그래밍 패러다임 중 하나인 함수형 프로그래밍은 방대한 데이터들을 효율적으로 사용하기 위해 도입한 하나의 방법입니다. 변경가능한 상태를 최대한 제거하려고 노력한 프로그래밍 언어라고 볼 수 있습니다. 이 글을 통해 함수형 프로그래밍에 대해 이해하고 JavaScript에서 활용할 수 있는 함수형 프로그래밍 방법이 무엇인 지 알아 여러 스레드에서 문제 없이 동작하는 프로그램을 쉽게 작성해볼 수 있습니다.



## 함수형 프로그래밍과 객체지향 프로그래밍

![image](https://velog.velcdn.com/images%2Fminsgy%2Fpost%2Ffcaf675c-18f0-48d9-9d13-21d1375e3bbb%2Fimage.png)

함수형 프로그래밍과 객체지향 프로그래밍은 자주 비교되어 나오는 패러다임 개념입니다.

두 가지 패러다임 다 모두 유효한 패러다임이고 많이 사용하고 있는 프로그래밍 방법입니다. 이 두가지를 비교하는 것보다는 "어떠한 상황에서 많이 사용해야 할 지"에 대한 고민을 통해 개발자는 고민하고 정해서 정할 수 있습니다. 

### 함수형 프로그래밍의 장/단점

![image](https://miro.medium.com/max/1100/1*Ws70qz7qdNEc-ajxo821Lg.jpeg)

함수형 프로그래밍의 장점으로 **효율성과 지연 평가(Lazy Evaluation**), 중첩 함수(고차 함수), 순수 함수를 통한 버그 없는 코드, 병렬 프로그래밍**과 같은 다양한 이점을 제공합니다. 

해당하는 함수들은 언제나 쉽게 호출하고 재사용할 수 있다는 장점이 있고 명령형 방식의 반복 작성을 필요로 하지 않습니다. 그리고 **코드 자체가 무엇을(What) 에 초점을 맞춰 개발하기 때문에 과정에 대한 이해가 필요 없다는 장점**이 있습니다.

![image](https://thecodebytes.com/wp-content/webpc-passthru.php?src=https://thecodebytes.com/wp-content/uploads/2022/03/functional-programming-meme-8.jpeg&nocache=1)

위와 같이 좋은 장점들이 있지만 가장 큰 문제인 **허들이 높다는 점**입니다. (함수의 함수의.....?!) 

기능적인 관점에서 코드를 접근하기 위해서 모듈화를 진행하게 되는데 이를 객체 지향 용어로 이해하기 쉽지만, 함수형 프로그래밍의 정의는 **"데이터 조작"** 에 초점이 맞춰져 있습니다. 재사용성과 순수 함수로서의 역할을 구성하기는 쉽지 않고 재귀(Recursion), 모나드(Monad), 펑터(Functor), 커링(curry) 많은 함수형 개념을 이해해야 합니다. 그래서 종합적으로 **경험과 학습이 많이 필요한 패러다임**입니다.


### 두 가지를 비교해야 할까?


![image](https://res.cloudinary.com/practicaldev/image/fetch/s--NDmyycvN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/bryqu84a8mqrlf3bbvta.jpg)

사실 두 패러다임을 비교하기에는 고유한 문제들이 있습니다. 

함수형 프로그래밍의 경우, 복잡한 로직을 구상하게 되면 너무 많은 종속성 주입 된 코드들이 존재하며, OOP에는 너무 많은 레이어를 통한 코드가 나오게 됩니다. 

결국 **각 장단점을 고려해서 주입해야 하는 개발자의 몫**이라고도 생각이 됩니다. 



## 함수형 방식의 JavaScript

사실 JavaScript를 통한 완벽한 함수형 프로그래밍은 어려울 수 있지만 전반적인 개념들을 정의하여 사용할 수 있습니다.

```js
// map, reduce, filter는 함수형에 속한다.
// 기존 변수에 대한 사이드 이펙트로 없도록 구현하는 것이 원칙.

// map
const arr = [1,2,3,4,5];
const map = arr.map(function(x) { 
 return x * 2;
}); // [2,4,6,8,10]

// filter
const arr = [4, 15, 377, 395, 400, 1024, 3000];
const arr2 = arr.filter((v) => (v % 5 === 0));
console.log(arr2) // [15, 395, 400, 3000]

// reduce
let arr = [9, 2, 8, 5, 7];
let sum = arr.reduce((pre, val) => pre + val);
console.log(sum) // 31
```

JavaScript에서 함수형 개념들을 어떻게 다루는 지 정의 해봅니다.


### 평가

평가는 코드가 **계산(Evalution)** 되어 값을 만드는 것을 말합니다.


```js
1 + 2 = 3
(1 + 2) + 4 = 7
[1, 2+3] = [1, 5]
[1, 2, [3, 4]] = [1, 2, Array(2)]
```

### 일급 객체(일급)

값, 변수, 함수 프로퍼티, 함수 결과를 사용할 수 있음을 말합니다. 함수가 값으로도 다루어질 수 있으며 **조합성과 추상화 도구로서 기본적인 함수형 프로그래밍의 틀**이라 할 수 있습니다.

```js
// 일급
const value = 10;
const add_value_10 = a => a + 10;
const result = add_value_10(value);
console.log(result); // 20;

// 일급 객체
const add_5 = a => a + 5;
console.log(add_5); // a => a + 5;
console.log(add_5(5)); // 10

const func_1 = () => () => 1;
console.log(func_1()); // () => 1

const func_2 = func_1();
console.log(func_2); // () => 1
console.log(func_2()); // 1
```



### 고차 함수와 합성 함수

함수를 값으로 다루는 함수, 함수의 반환 값으로 함수를 사용(Closer)하는 걸 말할 수 있습니다. 
React에서 사용하는 고차 컴포넌트(HOC)가 이에 해당 됩니다.

```js
// 함수 로직을 보내서 개조
const higher-order = func => func(1);
const add_2 = a => a + 2;
console.log(higher-order(add_2)); // 3
console.log(higher-order(a => a - 1)); // 0

// Closer + 합성 함수
const add_func = a => b => a + b;
const add_10 = add_func(10);
console.log(add_10(5)); // 15
console.log(add_10(10)); // 20
console.log(add_function(10)(5)); // 15 
```


그 외로도 함수형 프로그래밍의 개념들을 적용한 사례를 살펴보겠습니다.

### 불변성

함수형 프로그래밍에서는 함수 외부의 데이터를 변경하지 않도록 합니다. 

만약 데이터 변경이 필수적일 경우, 원본 데이터를 변경하지 않고 그 데이터의 복사본을 만들어 변경 작업을 진행할 수 있습니다.

```js
const red = { name:'red' };

// 원본 데이터를 변경하는 방법
funcion changeColor(color,name){
   color.name = name;
   return color;
}
console.log(changeColor(red,'yellow')); //{name:'yellow'}
console.log(red); //{name:'yellow'}

// 불변성을 지키는 방법.
function changeColor(color,name){
   return Object.assign({},color,{name}); // 복사해서 사용하는 slice도 가능합니다.
}

console.log(changeColor(red,'yellow')); //{name: 'yellow'}
console.log(red.name); //{name: 'red'}
```

그 외로도 JavaScript에서 지원하는 불변성을 기반해 데이터 복사본을 제공하는 메소드를 활용할 수 있습니다.

```js
// map
const arr = ['foo', 'hello', 'diamond', 'A'];
const arr2 = arr.map((v) => v.length);
console.log(arr2) // [3, 5, 6, 1]

// filter
const arr = [4, 15, 377, 395, 400, 1024, 3000];
const arr2 = arr.filter((v) => (v % 5 === 0));
console.log(arr2) // [15, 395, 400, 3000]

// reduce
let arr = [9, 2, 8, 5, 7];
let sum = arr.reduce((pre, val) => pre + val);
console.log(sum)	// 31 
```


## Reference

- [Functional vs OPP](https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526)
- [Functional wiki](https://en.wikipedia.org/wiki/Functional_programming)