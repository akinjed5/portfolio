import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { ASSISTANT_QA } from '../data/portfolioData';

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! I'm Jedidiah's AI Portfolio Assistant. Ask me anything about his work at Vester, predictive modeling with Prophet, local LLM benchmarks, or how to get in touch!`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const chatBottomRef = useRef(null);

  const suggestedQuestions = [
    'Tell me about the Vester pipeline',
    'What models were used in InvenForecast?',
    'What are his core technical skills?',
    'How did he benchmark local LLMs?',
    'How can I get in touch?'
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputText('');

    // Process intelligent answer
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer = null;

      for (const item of ASSISTANT_QA) {
        if (item.triggers.some((trigger) => lower.includes(trigger))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = `Jedidiah is a Systems Engineering graduate and engineer at Vester specializing in hybrid rules + LLM pipelines (classifying 42,000+ startups), time-series forecasting (Prophet, ARIMA), and production React/TypeScript. Feel free to ask about his projects, experience, or contact information!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: matchedAnswer }]);
    }, 450);
  };

  return (
    <div className="assistant-widget-container">
      {/* Floating Toggle Button (Like kroszborg.co) */}
      <button
        className="assistant-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Open Portfolio Assistant"
      >
        <Sparkles size={16} style={{ color: '#38bdf8' }} />
        <span>Jedidiah's Portfolio Assistant</span>
        <span className="assistant-pulse-dot" />
      </button>

      {/* Slide-Up Chat Drawer */}
      {isOpen && (
        <div className="assistant-drawer">
          {/* Header */}
          <div className="assistant-header">
            <div className="assistant-header-title">
              <Bot size={18} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <span>Portfolio AI Assistant</span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: '#34d399', fontWeight: 500 }}>
                  ● Online • Knowledge Base Active
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="social-icon-btn"
              style={{ width: '28px', height: '28px' }}
            >
              <X size={15} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="assistant-chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {/* Quick Suggested Chips */}
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Suggested Prompts
              </span>
              <div className="suggested-chips-wrap">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="suggested-chip"
                    onClick={() => handleSendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div ref={chatBottomRef} />
          </div>

          {/* Input Row */}
          <form
            className="assistant-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              className="assistant-input"
              placeholder="Ask about Jedidiah's experience..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="assistant-send-btn" title="Send Question">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
