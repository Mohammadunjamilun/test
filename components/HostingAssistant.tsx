import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Info } from 'lucide-react';
import { askHostingAssistant } from '../services/gemini';
import { Message } from '../types';

const HostingAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I see you want to share your website. I can help you understand how to deploy this code so others can visit it. Ask me anything about hosting, domains, or deployment!",
      timestamp: Date.now(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const answer = await askHostingAssistant(input);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: answer,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
      {/* Header */}
      <div className="bg-slate-900 p-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Hosting Assistant</h3>
            <p className="text-xs text-slate-400">Powered by Gemini 3 Flash</p>
          </div>
        </div>
        <div className="group relative">
            <Info className="w-5 h-5 text-slate-500 cursor-help" />
            <div className="absolute right-0 w-64 p-2 mt-2 text-xs text-slate-300 bg-slate-900 border border-slate-700 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                Ask about Vercel, Netlify, or how to export code.
            </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-slate-700 text-slate-200 rounded-bl-none'
              }`}
            >
              <div className="flex items-start gap-2">
                {msg.role === 'assistant' && <Bot className="w-4 h-4 mt-1 opacity-70 flex-shrink-0" />}
                {msg.role === 'user' && <User className="w-4 h-4 mt-1 opacity-70 flex-shrink-0" />}
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-2xl rounded-bl-none p-4 flex items-center space-x-2">
               <Bot className="w-4 h-4 opacity-70" />
               <span className="text-sm text-slate-400 flex items-center gap-2">
                 Thinking <Loader2 className="w-3 h-3 animate-spin" />
               </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-900 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask: How do I put this on the internet?"
            className="flex-1 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostingAssistant;