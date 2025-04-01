import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout
      title="联系我们"
      description="葫芦学堂 - 联系我们">
      <div className="container margin-vert--lg">
        <div className={styles.contactSection}>
          <h1>联系我们</h1>
          <p className={styles.intro}>
            如果您有任何问题、建议或合作意向，欢迎通过以下方式与我们联系。
            我们的团队将尽快回复您的咨询。
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>客服热线</h3>
              <p>400-123-4567</p>
              <p>工作时间：周一至周日 9:00-21:00</p>
            </div>
            
            <div className={styles.contactCard}>
              <h3>电子邮箱</h3>
              <p>info@huluxuetang.com</p>
              <p>我们会在24小时内回复您的邮件</p>
            </div>
            
            <div className={styles.contactCard}>
              <h3>官方微信</h3>
              <p>扫描下方二维码关注我们的公众号</p>
              <p>微信号：huluxuetang</p>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h2>留言咨询</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" name="name" placeholder="请输入您的姓名" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">邮箱</label>
                <input type="email" id="email" name="email" placeholder="请输入您的邮箱" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">电话</label>
                <input type="tel" id="phone" name="phone" placeholder="请输入您的电话号码" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">留言内容</label>
                <textarea id="message" name="message" rows="5" placeholder="请输入您的留言内容"></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>提交留言</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 