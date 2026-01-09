import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do João Paulo (CoutoDev). Posso te ajudar com dúvidas sobre desenvolvimento de Apps, automações com n8n ou orçamentos. O que você precisa hoje?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Create history context for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(input, history);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = { role: 'model', text: 'Erro ao conectar. Tente novamente.', timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full h-[500px] flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-md shadow-2xl relative">
      {/* Chat Header */}
      <div className="p-4 bg-slate-900/90 border-b border-white/5 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
             <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
             <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
          </div>
          <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 flex items-center gap-2">
            COUTO_AI_ASSISTANT <Sparkles className="w-3 h-3 text-yellow-400" />
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 relative">
         {/* Background watermark */}
         <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <Bot size={120} />
         </div>

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-lg backdrop-blur-sm ${msg.role === 'user' ? 'bg-gradient-to-br from-primary to-blue-600 text-white rounded-br-none' : 'bg-slate-800/80 text-slate-200 rounded-bl-none border border-white/5'}`}>
              <div className="flex items-center gap-2 mb-1 opacity-60 text-[10px] uppercase font-bold tracking-wider">
                {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                <span>{msg.role === 'user' ? 'Você' : 'CoutoDev Bot'}</span>
              </div>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
             <div className="bg-slate-800/80 rounded-2xl rounded-bl-none p-4 border border-white/5 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-xs text-slate-400">Gerando resposta...</span>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900/90 border-t border-white/5 z-10">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pergunte sobre tecnologias ou custos..."
            className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-slate-900 transition-all placeholder:text-slate-600"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;