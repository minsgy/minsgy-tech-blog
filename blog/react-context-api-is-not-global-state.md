---
slug: 리액트에서 의존성 주입, 왜 필요하고 어떻게 사용하는가?
title: 리액트에서 의존성 주입, 왜 필요하고 어떻게 사용하는가?
authors: [minsgy]
tags: [React, ContextAPI, Dependency Injection, 객체지향]
---

## 서론

- 리액트는 현재 웹 애플리케이션 개발에 널리 사용되는 프론트엔드 라이브러리입니다. 그 특징 중 하나는 상태 관리의 유연성이며, 이를 위해 자주 사용되는 도구 중 하나가 ContextAPI입니다. 그러나 많은 개발자들이 오해하는 것이, ContextAPI는 사실상 상태 관리 도구가 아니라 DI, 즉 의존성 주입(Dependency Injection) 도구라는 사실입니다.

- 그렇다면 이러한 의존성 주입을 리액트에서는 어떻게 활용할 수 있을까요? 이를 위해 우리는 props와 ContextAPI를 통한 의존성 주입 방법에 대해 살펴볼 것입니다. 이를 통해 리액트에서 의존성 주입이 왜 필요하며, 어떻게 사용하는지에 대한 이해를 높일 수 있을 것입니다.

## 의존성 주입(Dependency Injection)

> 의존성 주입이란, 객체 지향 프로그래밍에서 흔히 볼 수 있는 디자인 패턴 중 하나로, 클래스 간의 결합도를 낮추고 코드의 재사용성과 테스트 용이성을 높이는 방법입니다. 이는 특정 객체가 다른 객체에 의존하는 경우, 해당 객체를 직접 생성하는 것이 아니라 외부에서 생성된 객체를 주입받아 사용하는 것을 의미합니다.

의존성 주입을 알았으니 React에서는 어떻게 의존성 주입 하는 지와 알아보겠습니다.

### 1. props를 통한 의존성 주입

- React에서는 props를 통해 의존성 주입을 할 수 있습니다.
- 아래 코드는 App 컴포넌트에서 Counter 컴포넌트로 count 상태와 setCount 함수를 props로 전달하여 의존성 주입을 하고 있습니다.
- Counter 컴포넌트에서는 props로 전달받은 count 상태와 setCount 함수를 사용하여 의존성을 주입받아 사용하고 있습니다.

```jsx
//App.tsx
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

//Counter.tsx
const Counter = ({ count, setCount }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

### 2. ContextAPI를 통한 의존성 주입

- 다른 방법으로는 ContextAPI를 통해 의존성 주입을 할 수 있습니다.
- 아래 코드는 App 컴포넌트에서 Counter 컴포넌트로 count 상태와 setCount 함수를 ContextAPI를 통해 의존성 주입을 하고 있습니다.
- Counter 컴포넌트에서는 useContext hook을 통해서 의존성을 주입받아 사용하고 있습니다.

```jsx
//App.tsx
const CountContext = createContext({ count: 0, setCount: () => {} });
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
    </CountContext.Provider>
  );
};

//Counter.tsx
const Counter = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

## 리액트에서 의존성 주입을 하는 이유

- 기본적으로 의존성 주입은 확장 가능한지, 재사용 가능한지에 대해 고민하면서 작업하게 되면서 내 코드가 변경에 유연한지를 고민하게 됩니다.

> 즉, 리액트에서는 의존성 주입을 통해 UI 컴포넌트 변경이 유연한지 고민하고 재사용성이 있는지에 대한 고민을 해결할 수 있는 과정입니다.

다만 의존성을 잘못 사용할 때의 두 객체 사이의 결합도가 높아지는 문제가 발생하면서 변경에 유연하지 않도록 되기 때문에 잘 사용해야 합니다.

이를 만족할 수 있는 사항들을 알아보겠습니다.

### 1. 의존성은 교체 가능해야 한다.

- 의존성 주입을 사용하면 의존하는 객체를 교체할 수 있습니다. 따라서, 코드의 특정 부분을 수정하지 않고도 다른 객체로 교체할 수 있어야 합니다. 이는 유지보수성을 높이고 기능 확장이 용이하게 만들어줍니다.

### 2. 테스트에 용이해야 한다.

- 의존성 주입을 통해 의존하는 객체를 모의(mock) 객체로 대체할 수 있습니다. 이를 통해 단위 테스트를 수행할 때 의존하는 객체의 동작을 제어하고 검증할 수 있습니다. 따라서, 테스트 용이성이 높아집니다.

### 3. 컴포넌트를 통합할 수 있어야 한다.

- 의존성 주입을 사용하면 여러 컴포넌트 간에 의존 관계를 쉽게 통합할 수 있습니다. 이를 통해 컴포넌트 간의 결합도를 낮출 수 있고, 재사용 가능한 컴포넌트를 만들 수 있습니다.

위와 같은 사항들을 만족할 수 있도록 의존성 주입을 사용해야 합니다.

## 만약 의존성 주입을 사용하지 않는다면?

의존성 주입을 사용하지 않으면 어떤 문제가 발생할까요? 의존성 주입을 사용하지 않으면 어떤 문제가 발생할 수 있는지 알아보겠습니다.

### 결합도 증가

- 컴포넌트가 직접 의존하는 외부 리소스를 생성하거나 관리하는 경우, 컴포넌트와 의존성 사이에 강한 결합이 형성됩니다. 이는 코드의 유연성을 저하시키고 재사용성을 감소시킵니다. 예를 들어, 특정 컴포넌트가 API 호출을 직접 처리한다면, 해당 컴포넌트는 다른 API로의 교체가 어렵고, 테스트하기도 어려워집니다.

### 테스트의 어려움

- 의존성 주입이 없으면 특정 컴포넌트의 의존성을 모의(mock) 객체로 대체하여 테스트하기가 어렵습니다. 외부 리소스에 직접 의존하는 경우, 해당 리소스를 테스트 환경에서 재현하기가 어려우며, 테스트 결과의 일관성과 신뢰성이 떨어질 수 있습니다.

### 코드 중복

- 의존성 주입을 사용하지 않으면 여러 컴포넌트에서 동일한 의존성을 생성하거나 관리해야 할 수 있습니다. 이는 코드 중복을 증가시키고 유지보수를 어렵게 만듭니다. 의존성 주입을 통해 의존성을 중앙에서 관리하면 중복을 피하고 의존성 관리를 효율적으로 할 수 있습니다.

### 확장의 어려움

- 의존성 주입이 없으면 애플리케이션의 확장이 어려워집니다. 새로운 기능이나 외부 리소스에 의존하는 컴포넌트를 추가할 때, 기존 컴포넌트들이 직접 수정되어야 할 수 있습니다. 의존성 주입을 사용하면 새로운 컴포넌트를 추가하거나 기존 컴포넌트를 변경하지 않고도 의존성을 주입함으로써 애플리케이션의 확장성을 향상시킬 수 있습니다.

```jsx
const UserGreeting = () => {
  const user = {
    name: "John",
  };

  return <Greeting name={user.name} />;
};

const GuestGreeting = () => {
  return <Greeting name="Guest" />;
};

const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};
```

## 결론

리액트에서 의존성 주입은 코드의 재사용성과 유지보수성을 향상시키기 위해 사용되는 중요한 개념입니다.

의존성 주입을 통해 컴포넌트 간의 결합도를 낮추고 코드를 더 유연하게 만들 수 있습니다. 의존성 주입은 컴포넌트의 의존성을 명확하게 정의하고, 필요한 의존성을 주입함으로써 더욱 확장 가능하고 테스트 용이한 애플리케이션을 개발하는 데 도움을 줍니다.

이를 통해 좀 더 변화에 유연한 코드를 작성할 수 있습니다.

## Refs.

- [React Context for dependency injection not state management](https://blog.testdouble.com/posts/2021-03-19-react-context-for-dependency-injection-not-state/)
