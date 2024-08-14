import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import data from './_data';

function ComponentsPageHeader() {
  return (
    <header>
      <div className="container">
        <Heading as="h1" className="hero__title">
          컴포넌트
        </Heading>
        <p className="hero__subtitle">
          기준이 되는 <code>컴포넌트</code> 모양과 사용법을 제시합니다.
        </p>
      </div>
    </header>
  );
}

const CardList = ({ items }) => (
  <div className={styles.cards}>
    {items.map(({ Svg, title, description, url, source }) => (
      <div className={styles.card} key={title}>
        <div className={styles.image}>
          <Svg role="img" style={{ height: 180, width: 260 }} />
        </div>
        <div className={styles.content}>
          <h3 className="header">{title}</h3>

          <p className="description">{description}</p>
        </div>
        <div className={clsx(styles.extra, styles.content)}>
          <a href={url}>Demo</a>
          {!!source && (
            <span className={clsx('right floated')}>
              <a href={source}>Code</a>
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default function Components(): JSX.Element {
  return (
    <Layout
      title="컴포넌트"
      description="Description will go into a meta tag in <head />"
    >
      <ComponentsPageHeader />
      <main>
        <div className="ui container">
          <h2 className="ui header">컴포넌트</h2>
          <div className="ui section divider" />
          <CardList items={data} />
          <div className="ui divider hidden" />
        </div>
      </main>
    </Layout>
  );
}
