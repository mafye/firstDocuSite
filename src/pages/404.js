import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <Layout
      title="页面未找到"
      description="404 - 页面未找到">
      <div className="container margin-vert--xl">
        <div className={styles.notFoundContainer}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <p className={styles.notFoundSubtitle}>很抱歉，您访问的页面不存在</p>
          <p className={styles.notFoundText}>
            可能是链接已过期或者输入的网址有误。
            您可以返回首页或者浏览我们的课程文档。
          </p>
          <div className={styles.notFoundButtons}>
            <Link
              className="button button--primary button--lg"
              to="/">
              返回首页
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              浏览课程
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 