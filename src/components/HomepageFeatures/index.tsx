import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Foundation',
    Svg: require('@site/static/img/undraw-foundation.svg').default,
    description: (
      <>
        색상, 서체와 같은 <code>디자인 원칙</code>를 정립합니다.
      </>
    ),
  },
  {
    title: 'Components',
    Svg: require('@site/static/img/undraw-component.svg').default,
    description: (
      <>
        기준 <code>컴포넌트</code> 모양과 사용법을 제시합니다.
      </>
    ),
  },
  {
    title: 'UI Guideline',
    Svg: require('@site/static/img/undraw-guideline.svg').default,
    description: (
      <>
        좋은 사용자 경험 예시가 되는 <code>UI 가이드라인</code>을 알아봅니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
