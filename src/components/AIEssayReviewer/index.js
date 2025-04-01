import React, { useState } from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AIEssayReviewer() {
  const [essay, setEssay] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState('deepseek/deepseek-chat-v3-0324:free');
  const [essayType, setEssayType] = useState('narrative');
  const [grade, setGrade] = useState('middle');
  
  const { siteConfig } = useDocusaurusContext();
  // 从环境变量获取 API 密钥，提供 ASCII 字符的备用值
  const apiKey = siteConfig.customFields.openrouterApiKey || 'default-key';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!essay.trim() || isLoading) return;

    setIsLoading(true);
    setFeedback(null);

    try {
      // 构建提示词
      const prompt = `请作为一名专业的${getGradeText()}语文老师，对以下${getEssayTypeText()}进行评改。
      
请提供以下方面的评价和建议：
1. 内容与主题（内容是否丰富，主题是否明确）
2. 结构与逻辑（结构是否清晰，逻辑是否连贯）
3. 语言表达（用词是否准确，句式是否多样）
4. 文章亮点（有哪些值得肯定的地方）
5. 改进建议（有哪些地方可以进一步提升）
6. 总体评分（百分制）

作文内容：
${essay}

请以评语的形式给出详细的分析和建议，语气要温和鼓励，同时指出问题并给出具体的修改建议。`;

      // 调用 OpenRouter API
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: '你是一位经验丰富的语文教师，擅长作文评改和指导。' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 2000
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setFeedback(data.choices[0].message.content);
      } else {
        setFeedback('抱歉，评改过程中遇到了问题。请稍后再试。');
        console.error('API 响应错误:', data);
      }
    } catch (error) {
      console.error('请求错误:', error);
      setFeedback('抱歉，发生了网络错误。请检查您的网络连接并重试。');
    } finally {
      setIsLoading(false);
    }
  };

  const getEssayTypeText = () => {
    const types = {
      narrative: '记叙文',
      argumentative: '议论文',
      expository: '说明文',
      descriptive: '描写文'
    };
    return types[essayType] || '作文';
  };

  const getGradeText = () => {
    const grades = {
      elementary: '小学',
      middle: '初中',
      high: '高中',
      college: '大学'
    };
    return grades[grade] || '';
  };

  return (
    <div className={styles.reviewerContainer}>
      <div className={styles.optionsContainer}>
        <div className={styles.optionGroup}>
          <label htmlFor="model-select">选择 AI 模型：</label>
          <select 
            id="model-select" 
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            className={styles.select}
          >
            <option value="deepseek/deepseek-chat-v3-0324:free">DeepSeek Chat</option>
            <option value="google/gemini-2.5-pro-exp-03-25:free">Google Gemini</option>
          </select>
        </div>
        
        <div className={styles.optionGroup}>
          <label htmlFor="essay-type">作文类型：</label>
          <select 
            id="essay-type" 
            value={essayType} 
            onChange={(e) => setEssayType(e.target.value)}
            className={styles.select}
          >
            <option value="narrative">记叙文</option>
            <option value="argumentative">议论文</option>
            <option value="expository">说明文</option>
            <option value="descriptive">描写文</option>
          </select>
        </div>
        
        <div className={styles.optionGroup}>
          <label htmlFor="grade-level">学习阶段：</label>
          <select 
            id="grade-level" 
            value={grade} 
            onChange={(e) => setGrade(e.target.value)}
            className={styles.select}
          >
            <option value="elementary">小学</option>
            <option value="middle">初中</option>
            <option value="high">高中</option>
            <option value="college">大学</option>
          </select>
        </div>
      </div>

      <div className={styles.editorContainer}>
        <div className={styles.essayEditor}>
          <h3>请输入您的作文</h3>
          <textarea
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
            placeholder="在此输入您的作文内容..."
            disabled={isLoading}
            className={styles.essayTextarea}
          />
          <button 
            onClick={handleSubmit} 
            disabled={isLoading || !essay.trim()} 
            className={styles.submitButton}
          >
            {isLoading ? '评改中...' : '提交评改'}
          </button>
        </div>

        <div className={styles.feedbackContainer}>
          <h3>评改结果</h3>
          <div className={styles.feedbackContent}>
            {isLoading ? (
              <div className={styles.loadingIndicator}>
                <div className={styles.spinner}></div>
                <p>正在评改中，请稍候...</p>
              </div>
            ) : feedback ? (
              <div className={styles.feedbackText}>
                {feedback.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            ) : (
              <p className={styles.placeholderText}>
                提交作文后，AI 将为您提供专业的评改意见，包括内容、结构、语言表达等方面的分析和建议。
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 