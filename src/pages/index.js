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
            开始学习 - 5分钟上手 ⏱️
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
      title={`欢迎来到${siteConfig.title}`}
      description="葫芦学堂 - 知识的殿堂，智慧的源泉">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>为什么选择葫芦学堂？</h2>
            <div className={styles.sectionContent}>
              <p>
                葫芦学堂致力于为每一位学习者提供清晰、全面且易于理解的学习资料。
                无论您是初学者还是有经验的学习者，都能在这里找到适合自己的学习内容，
                帮助您在知识的海洋中乘风破浪。
              </p>
              <div className={styles.callToAction}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/category/getting-started">
                  探索课程内容
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2 className={styles.sectionTitle}>热门课程推荐</h2>
            <div className={styles.sectionContent}>
              <div className={styles.updates}>
                <div className={styles.updateItem}>
                  <h3>编程入门系列</h3>
                  <p>零基础学习编程，从基本概念到实际应用，循序渐进。</p>
                  <Link to="/docs/programming">查看详情</Link>
                </div>
                <div className={styles.updateItem}>
                  <h3>数学思维培养</h3>
                  <p>培养逻辑思维能力，掌握数学解题技巧，提升学习效率。</p>
                  <Link to="/docs/math">了解更多</Link>
                </div>
                <div className={styles.updateItem}>
                  <h3>语言艺术提升</h3>
                  <p>提高语言表达能力，掌握写作技巧，增强沟通效果。</p>
                  <Link to="/docs/language">开始学习</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>学员心声</h2>
            <div className={styles.sectionContent}>
              <div className={styles.testimonials}>
                <div className={styles.testimonialItem}>
                  <div className={styles.testimonialContent}>
                    <p>"葫芦学堂的课程设计非常合理，让我能够轻松掌握知识点，学习效果显著提升。"</p>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <img src="/img/testimonial1.jpg" alt="学员照片" className={styles.testimonialAvatar} />
                    <div>
                      <h4>张明</h4>
                      <p>高中生</p>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialItem}>
                  <div className={styles.testimonialContent}>
                    <p>"作为一名在职人士，葫芦学堂的灵活学习模式非常适合我，让我能够在工作之余持续提升自己。"</p>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <img src="/img/testimonial2.jpg" alt="学员照片" className={styles.testimonialAvatar} />
                    <div>
                      <h4>李华</h4>
                      <p>IT工程师</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionCta)}>
          <div className="container">
            <h2 className={styles.sectionTitle}>立即加入葫芦学堂</h2>
            <p className={styles.sectionSubtitle}>开启您的学习之旅，探索知识的无限可能</p>
            <div className={styles.callToAction}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                免费试听课程
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/contact">
                联系我们
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
