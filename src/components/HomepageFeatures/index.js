import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// 使用图片而不是SVG
const FeatureList = [
  {
    title: '专业教学团队',
    imageSrc: '/img/docusaurus.png', // 使用 Docusaurus 默认图片
    description: (
      <>
        葫芦学堂拥有一支经验丰富的教师团队，他们不仅具备扎实的专业知识，
        还拥有丰富的教学经验，能够针对不同学生的特点提供个性化的教学指导。
      </>
    ),
  },
  {
    title: '科学的课程体系',
    imageSrc: '/img/docusaurus.png', // 使用 Docusaurus 默认图片
    description: (
      <>
        我们的课程体系经过精心设计，从基础到进阶，层层递进，
        确保学生能够系统地学习知识，建立完整的知识体系。
      </>
    ),
  },
  {
    title: '互动学习体验',
    imageSrc: '/img/docusaurus.png', // 使用 Docusaurus 默认图片
    description: (
      <>
        葫芦学堂注重互动教学，通过丰富多样的教学活动和实践项目，
        让学生在参与中学习，在实践中成长，提高学习效果。
      </>
    ),
  },
];

function Feature({imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img src={imageSrc} className={styles.featureImage} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>我们的优势</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
