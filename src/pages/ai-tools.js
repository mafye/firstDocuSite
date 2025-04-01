import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './ai-tools.module.css';
import AIAssistant from '../components/AIAssistant';
import AIEssayReviewer from '../components/AIEssayReviewer';

export default function AITools() {
  const [activeTab, setActiveTab] = useState('assistant');

  return (
    <Layout
      title="AI 学习工具"
      description="葫芦学堂 AI 学习工具 - 智能学习助手和作文评改系统">
      <div className="container margin-vert--lg">
        <div className={styles.aiToolsHeader}>
          <h1>AI 学习工具</h1>
          <p className={styles.intro}>
            葫芦学堂为您提供智能 AI 学习工具，帮助您更高效地学习和提升能力。
            我们的 AI 工具采用先进的人工智能技术，为您提供个性化的学习支持。
          </p>
        </div>

        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'assistant' ? styles.active : ''}`}
              onClick={() => setActiveTab('assistant')}
            >
              智能学习助手
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'essay' ? styles.active : ''}`}
              onClick={() => setActiveTab('essay')}
            >
              AI 作文评改
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'assistant' && <AIAssistant />}
            {activeTab === 'essay' && <AIEssayReviewer />}
          </div>
        </div>
      </div>
    </Layout>
  );
} 