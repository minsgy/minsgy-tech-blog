import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "기록",
    Svg: require("@site/static/img/undraw_programmer.svg").default,
    description: <>제가 프로젝트를 진행하며 실제 경험했던 것들을 기록합니다.</>,
  },
  {
    title: "회고",
    Svg: require("@site/static/img/undraw_code_review.svg").default,
    description: (
      <>
        지나칠 수 있는 것들을 지나치지 않고, 놓칠 수 있는 것들을 놓치지 않기
        위해 회고합니다.
      </>
    ),
  },
  {
    title: "성장",
    Svg: require("@site/static/img/undraw_build_your.svg").default,
    description: (
      <>
        더 나은 개발자가 되기 위해 여러가지 시도를 하고 성장의 발판을 만듭니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
