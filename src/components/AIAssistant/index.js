import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '你好！我是葫芦学堂的智能学习助手。有任何学习问题，都可以向我提问。我可以帮你解答疑惑、解释概念、提供学习建议。请问有什么我可以帮助你的吗？'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState('deepseek/deepseek-chat-v3-0324:free');
  const messagesEndRef = useRef(null);

  const { siteConfig } = useDocusaurusContext();
  const apiKey = '您的新API密钥';  // 更新为您新申请的密钥

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // 添加用户消息到聊天
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 准备发送到 API 的消息
      const apiMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      apiMessages.push(userMessage);

      // 在 fetch 调用前添加
      console.log('使用的 API 密钥:', apiKey ? `${apiKey.substring(0, 10)}...` : '未设置');
      console.log('请求模型:', model);
      console.log('请求消息:', apiMessages);

      // 调用 OpenRouter API
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`
        },
        body: JSON.stringify({
          model: model,
          messages: apiMessages,
          max_tokens: 1000
        })
      });

      // 检查响应状态
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API 响应错误 (${response.status}):`, errorText);
        throw new Error(`API 请求失败: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // 添加 AI 回复到聊天
        setMessages(prev => [...prev, data.choices[0].message]);
      } else {
        // 处理错误
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: '抱歉，我遇到了一些问题。请稍后再试。' 
        }]);
        console.error('API 响应错误:', data);
      }

      console.log('使用的 API Key:', apiKey ? apiKey.substring(0, 10) + '...' : '未设置');
      console.log('API 响应状态:', response.status);
      console.log('API 响应头:', Object.fromEntries([...response.headers]));
    } catch (error) {
      console.error('请求错误:', error);
      console.error('请求错误详情:', error.message, error.stack);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '抱歉，发生了网络错误。请检查您的网络连接并重试。' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.assistantContainer}>
      <div className={styles.modelSelector}>
        <label htmlFor="model-select">选择 AI 模型：</label>
        <select 
          id="model-select" 
          value={model} 
          onChange={(e) => setModel(e.target.value)}
          className={styles.modelSelect}
        >
          <option value="deepseek/deepseek-chat-v3-0324:free">DeepSeek Chat</option>
          <option value="google/gemini-2.5-pro-exp-03-25:free">Google Gemini</option>
        </select>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
            >
              <div className={styles.messageContent}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题..."
            disabled={isLoading}
            className={styles.inputField}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()} 
            className={styles.sendButton}
          >
            发送
          </button>
        </form>
      </div>
    </div>
  );
} 