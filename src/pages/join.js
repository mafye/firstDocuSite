import React from 'react';
import Layout from '@theme/Layout';
import styles from './join.module.css';

export default function Join() {
  return (
    <Layout
      title="加入我们"
      description="葫芦学堂 - 加入我们">
      <div className="container margin-vert--lg">
        <div className={styles.joinSection}>
          <h1>加入葫芦学堂</h1>
          <p className={styles.intro}>
            葫芦学堂正在寻找热爱教育、充满激情的人才加入我们的团队。
            如果您对教育事业充满热情，希望通过自己的努力帮助更多人成长，欢迎加入我们！
          </p>
          
          <div className={styles.jobList}>
            <div className={styles.jobCard}>
              <h3>教育顾问</h3>
              <p>负责与学生和家长沟通，了解学习需求，提供专业的学习规划建议。</p>
              <ul>
                <li>教育相关专业本科及以上学历</li>
                <li>良好的沟通能力和亲和力</li>
                <li>对教育行业有深入了解</li>
              </ul>
              <button className={styles.applyButton}>申请职位</button>
            </div>
            
            <div className={styles.jobCard}>
              <h3>课程研发专家</h3>
              <p>负责设计和开发高质量的课程内容，确保课程体系的科学性和有效性。</p>
              <ul>
                <li>相关学科领域硕士及以上学历</li>
                <li>3年以上课程研发经验</li>
                <li>具备创新思维和教学设计能力</li>
              </ul>
              <button className={styles.applyButton}>申请职位</button>
            </div>
            
            <div className={styles.jobCard}>
              <h3>在线教师</h3>
              <p>负责在线课程的教学工作，指导学生学习，解答疑问。</p>
              <ul>
                <li>相关学科专业背景</li>
                <li>具备教师资格证</li>
                <li>良好的表达能力和亲和力</li>
              </ul>
              <button className={styles.applyButton}>申请职位</button>
            </div>
          </div>
          
          <div className={styles.contactInfo}>
            <h2>联系方式</h2>
            <p>如果您对以上职位感兴趣，请将您的简历发送至：</p>
            <p className={styles.email}>hr@huluxuetang.com</p>
            <p>我们会在收到简历后尽快与您联系。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 