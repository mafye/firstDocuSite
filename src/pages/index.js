import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A comprehensive documentation site built with Docusaurus">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Choose Our Documentation?</h2>
            <div className={styles.sectionContent}>
              <p>
                Our documentation is designed to be clear, comprehensive, and easy to navigate.
                Whether you're a beginner or an experienced developer, you'll find the information
                you need to succeed with our platform.
              </p>
              <div className={styles.callToAction}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/category/getting-started">
                  Explore Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Latest Updates</h2>
            <div className={styles.sectionContent}>
              <div className={styles.updates}>
                <div className={styles.updateItem}>
                  <h3>New Features Released</h3>
                  <p>We've added several new features to enhance your experience.</p>
                  <Link to="/blog">Read More</Link>
                </div>
                <div className={styles.updateItem}>
                  <h3>Documentation Improvements</h3>
                  <p>Our documentation has been updated with new examples and clearer explanations.</p>
                  <Link to="/docs">View Docs</Link>
                </div>
                <div className={styles.updateItem}>
                  <h3>Community Contributions</h3>
                  <p>Thanks to our amazing community for their valuable contributions!</p>
                  <Link to="/docs/community">Join Community</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
