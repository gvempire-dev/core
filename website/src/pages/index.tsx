import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description={'Software Development Consultancy'}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>Software Development Consultancy</p>
          <div className={styles.buttons}>
            <Link
              className='button button--secondary button--lg'
              to='/docs/intro'>
              View Case Studies
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
