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

함수형 프로그래밍의 경우, 복잡한 로직을 구상하게 되면 너무 많은 종속성 주입 된 코드들이 존재하며, OOP에는 너무 많은 레이어를 통한 코드가 나오게 됩니다. 그렇지만 두 가지 패러다임으