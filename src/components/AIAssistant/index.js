import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

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

      // 调用 OpenRouter API
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          model: model,
          messages: apiMessages,
          max_tokens: 1000
        })
      });

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
    } catch (error) {
      console.error('请求错误:', error);
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