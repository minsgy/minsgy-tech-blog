---
slug: JavaScript deepdive 1week
title: JavaScript 딥다이브 1주차
authors:
  name: Minsgy
  title: JavaScript DeepDive
tags: [JavaScript, DeepDive, Study]
---

## 서론

저는 프론트엔드 주니어 개발자로 활동하며 **JavaScript**에 대한 중요성을 매번 느꼈습니다.

**JavaScript**에서 데이터를 관리하는 방법, 객체 지향을 고려할 수 있는 방법 등
기본적인 원리가 뒷받침되어 설계를 해야 여러 이슈 사항에도 대응할 수 있었습니다.

또한, 웹이라는 분야에서 빠르게 변화하는 상황에서 **React**와 같이 어떠한 라이브러리/프레임워크가 유행할 지는 모르기 때문에 기초가 되는 JavaScript에 대한 이해가 필요하다 생각해 런타임까지 분석해보았습니다.

이 포스트를 통해서 배경 지식이 궁금한 **JavaScript 사용해오신 프론트엔드 개발자**분들께 도움 되기를 바랍니다.

## JavaScript

> 웹 페이지 (HTML/CSS)의 보조 기능을 수행하기 위해 사용 된 언어입니다.
> 지속된 발전으로 브라우저 이외의 환경에서도 동작시킬 수 있는 환경이 생기게 되었습니다.

### JavaScript 등장과 표준화

처음 JavaScript는 동적인 페이지 렌더링도 아니라 단순히 서버로부터 HTML, CSS를 렌더링하는 수준으로만 한정적으로 사용했습니다.

이후 JavaScript의 핵심 원리인 비동기(Asynchronous) 개념을 담은 **Ajax(Asynchronous JavaScript and XML)**가 등장하게 되면서 우리가 알고 있는 기능을 활용하게 되었습니다.

기존 동기적 방식으로 HTML 전체를 다운받아 화면 전환을 했지만 바뀌지 않는 데이터를 포함해 불필요한 데이터가 포함되는 경우가 생겼고 통신 효율과 UX 면에서 옳지 않은 문제가 발생했습니다.

이러한 문제는 비동기를 통해 동적인 웹 페이지를 구성하면서 변화 된 데이터만 받아와 순간적으로 깜빡이는 현상이 없어져 UX로도 좋은 결과를 낼 수 있었습니다. 이러한 결과로 웹 브라우저에서도 데스크탑 애플리케이션과 유사한 퍼포먼스를 내며 주목받기 시작했습니다.

그러나 표준화되지 않은 JavaScript가 브라우저에 적용되면서 크로스 브라우징 이슈가 발생하기 시작했고 모든 브라우저에서 정상 작동하는 웹 페이지 구성이 어려웠습니다.
![](https://i.imgur.com/IXojwIy.png)

이를 보완하기 위해 `ECMAScript` 명으로 JavaScript 표준화가 진행되어 현재 많이 사용하는 `ES6`, `ES5`와 같은 문법들이 사용되고 있습니다.

### V8, Node.js의 등장

Ajax를 통한 프로그래밍 언어로서 가능성을 확인 한 구글(Google)은 JavaScript로 웹 애플리케이션을 빠르고 정확하게 동작하는 엔진의 필요성을 느꼈고 그렇게 완성 된 오픈소스 엔진인 [V8](https://v8.dev/)이 등장하게 되었습니다.

![](https://i.imgur.com/zB7qzy1.png)

이를 통해 JavaScript는 데스크탑 애플리케이션과 비슷한 성능과 퍼포먼스를 보여주었고 웹 애플리케이션 프로그래밍 언어로 정착되게 된 계기가 됩니다.

이후 넓은 확장성에 대한 가능성을 넓혀준 V8 런타임 라이브러리인 `Node.js`의 등장으로 브라우저 이외의 환경에서도 동작할 수 있도록 독립시킨 역할을 해주었습니다.

![](https://i.imgur.com/jRPm1V3.png)

기본적으로 비동기 I/O를 지원하고 싱글 스레드(Single Thread) 이벤트 루프를 기반하여 동작하고 실시간 데이터 처리에는 효과적이지만 CPU 사용률이 높은 애플리케이션에는 권장하지 않는 방식입니다. 그리고 **Node.js의 개발 시점이 JavaScript 모듈의 표준이 CommonJS로 이루어져 ES Module**이 새로운 표준이 된 현재로서는 부족한 부분입니다. 그리고 TypeScript가 필수불가결로 사용하는 상황에 지원하지 않는 단점도 존재합니다.

이러한 Node.js의 단점을 보완하고 발전 된 런타임(Runtime) 라이브러리인 **Deno**를 소개합니다.

### Deno

![image](https://user-images.githubusercontent.com/60251579/190108920-7897ed40-5b4a-481d-a1e0-d5a1e3db12bc.png)

Deno가 등장하게 된 건 2020년 5월이며, Node.js의 단점을 보완하고자 TypeScript 지원, ES Module 지원, 브라우저와 Node.js의 호환성, 보안 문제, 빠른 실행 속도 개선과 명시적인 패키지 관리를 개선하며 등장하게 되었습니다.

#### Promise

Node.js의 내장된 여러 비동기 로직은 Promise API를 활용하지 않고 예전 방식의 Callback 패턴을 작성하고 있습니다. 이로 인해 node async api가 노후화되어 아쉬운 퍼포먼스를 보여주게 됩니다.

그렇지만 Deno의 경우 Promise API를 기본으로 사용하고 있습니다. 이로 인해 더욱 빠른 퍼포먼스를 보여주고 있습니다.

```js
// deno - async 구문이 자동으로 적용됩니다.
const data = await fetch("URL");
const result = await data.json();
console.log(result);
```

#### Packages, Npm

License, repository, description 등 다양한 정보를 담고 있는 package.json은 불필요한 정보가 많습니다. 실제로는 파일과 URL만 사용하면 종속성을 나열할 필요가 없어집니다.

Deno는 이러한 package.json을 제거하고 URL만으로 종속성을 나열할 수 있도록 하였습니다.

또한 `npm(closed source)` 를 사용하지 않아 독립성을 높일 수 있다는 장점이 있습니다.
이를 통해 Github, GitLab, Bitbucket 등 다양한 플랫폼에서 가져와 사용할 수 있습니다.

```js
// node.js
const moment = require("moment");
console.log(moment.version);

// deno
import { moment } from "https://deno.land/x/deno_moment@1.0.0/moment.ts";
console.log(moment.version);
```

#### Deno가 node.js를 대체할 수 있을까?

![image](https://user-images.githubusercontent.com/60251579/190184861-0bdbeded-f0e0-45ca-a113-71076e918608.png)

현재 2022년 9월 기준으로 Deno 서비스는 v1.25.2 릴리즈 중입니다.

최근까지도 업데이트를 하는 만큼 차세대 JavaScript 런타임으로 발돋움 할 수 있도록 꾸준한 개발에 있습니다. 과거 잔재인 CommonJS 모듈을 변경하고 사용성이 많은 TypeScript를 제공하는 만큼 앞으로의 기대가 있는 런타임 라이브러리라고 기대할 수 있습니다.

그러나 현재 Deno에 상응하는 TypeScript package 지원이 아쉬운만큼 사용성에 있어서 node.js가 압도적인 시장을 차지하고 있습니다. 점점 TypeScript 프로젝트 시장이 넓어진다면 충분히 사용할만한 매력적인 라이브러리라고 생각합니다.

이후 더 빠른 속도를 위해 탄생한 런타임 라이브러리를 소개합니다.

### Bun의 등장

![image](https://user-images.githubusercontent.com/60251579/190210190-c14a338f-86f7-4b84-9398-96219b269dc2.png)

새롭게 JavaScript 런타임 및 패키지 관리자인 Bun이 등장했습니다.

기존 V8 엔진을 활용하던 **Node, Deno**와 비교되는 **JavaScriptCore** 기반으로 구축되어 빠르게 동작합니다. 저수준 프로그래밍 언어인 Zig로 작성되어서 가능한 성능입니다.

![image](https://user-images.githubusercontent.com/60251579/190211078-d8516115-f153-4c63-b944-14b5fb3e4838.png)

특징으로는 node.js 모듈에서 사용하는 node_modules를 그대로 사용하며 npm과 호환할 수 있는 패키지 매니저를 포함하게 됩니다. 그래서 node.js의 사용법과 유사합니다. 또한 commonJS와 ESM 둘 다 지원하며 JavaScript/TypeScript를 지원하여 개발 환경에 대한 확장성이 넓습니다.

이렇게 본다면 Demo와 Node.js가 가진 문제점을 보완하고 있지만, 아직 v1도 나오지 않은 beta version인 상태입니다. 현재 런타임 속도만 바라본다면 괜찮지만 보안 및 다른 이슈에 대해 어떻게 대응할 지 production 환경에서 적용하기에는 시간이 필요해보입니다.

## Question List

1. 자바스크립트는 무슨 언어인가? (언어의 특징, 본인이 생각하는 자바스크립트의 특징도 좋음)
2. 인터프리터 언어와 컴파일 언어에 대해 대답하고 차이점은 무엇인가요?
3. Optional Chaining과 Non-null assertion operator에 대해 아는 대로 설명해주세요.
4. !!, ??, && 연산자에 대해 설명해주세요.
5. 메모리 할당과 메모리 참조, 가비지 콜렉터에 대해 아는 대로 설명해주세요. 원시타입과 객체타입을 가지고 설명해주세요.
6. var, let, const에 대해 아는 대로 설명해주세요.
7. 호이스팅이 무엇이고 일어나는 과정에 대해 아는 대로 설명해주세요.
8. `if (!data)`와 `if (data === undefined)`의 차이점은 무엇인가요?

## Reference

[deno](https://deno.land/)
[bun](https://bun.sh/)  
[deno vs node.js 비교하기](https://www.youtube.com/watch?v=Uc03tAqC6fQ)  
여기어때 Tech Blog : https://techblog.gccompany.co.kr/%ED%95%9Cbun-%EC%8D%A8%EB%B3%B4%EB%8A%94-%EA%B1%B0-%EC%96%B4%EB%95%8C-fa3cb32ac76f
