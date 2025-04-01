import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="关于我们"
      description="葫芦学堂 - 关于我们">
      <div className="container margin-vert--lg">
        <div className={styles.aboutSection}>
          <h1>关于葫芦学堂</h1>
          <p>
            葫芦学堂成立于2020年，是一家专注于提供高质量教育服务的在线学习平台。
            我们的使命是通过科学的教学方法和个性化的学习体验，帮助每一位学员实现自己的学习目标。
          </p>
          
          <h2>我们的理念</h2>
          <p>
            我们相信每个人都有无限的学习潜能，只需要合适的引导和方法。
            葫芦学堂致力于创造一个开放、包容、互动的学习环境，让学习变得更加有趣和高效。
          </p>
          
          <h2>我们的团队</h2>
          <p>
            葫芦学堂拥有一支由教育专家、学科专家和技术专家组成的专业团队。
            我们的教师不仅拥有扎实的专业知识，还具备丰富的教学经验，能够针对不同学生的特点提供个性化的教学指导。
          </p>
          
          <h2>我们的愿景</h2>
          <p>
            我们希望通过我们的努力，让更多人享受到优质的教育资源，
            培养终身学习的能力和习惯，成为更好的自己。
          </p>
        </div>
      </div>
    </Layout>
  );
} 