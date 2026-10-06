import React, { useState, useRef, useEffect } from 'react';
import { GradeLevel, ChatMessage } from '../types';
import { Bot, Send, Sparkles, User, RefreshCw, Volume2, Copy, Check, Lightbulb, HelpCircle, ArrowLeft, Home } from 'lucide-react';
import { sound } from '../utils/sound';

interface ChatViewProps {
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  onGoHome: () => void;
  onQuestionAsked: () => void;
}

const SUGGESTED_PROMPTS = [
  'AI là gì?',
  'Thuật toán là gì?',
  'Biến trong lập trình là gì?',
  'Internet hoạt động như thế nào?',
  'Làm thế nào để tìm kiếm thông tin hiệu quả?',
  'Bảng tính điện tử dùng để làm gì?',
  'Làm thế nào để bảo vệ tài khoản trực tuyến?',
];

const GRADE_SPECIFIC_QUESTIONS: Record<GradeLevel, string[]> = {
  6: [
    'Thiết bị vào và thiết bị ra khác nhau như thế nào?',
    'Tại sao máy tính lại cần có hệ điều hành?',
    'Thư mục và tệp khác nhau ở điểm nào?'
  ],
  7: [
    'Làm thế nào để dùng hàm SUM và AVERAGE trong Excel?',
    'Địa chỉ ô trong bảng tính được quy định ra sao?',
    'Biểu đồ hình tròn thường dùng trong trường hợp nào?'
  ],
  8: [
    'Cấu trúc rẽ nhánh IF...THEN hoạt động như thế nào?',
    'Vòng lặp trong lập trình có tác dụng gì?',
    'Tại sao cần đặt tên biến có ý nghĩa?'
  ],
  9: [
    'Machine Learning (Máy học) khác AI ở điểm nào?',
    'Xác thực 2 yếu tố (2FA) bảo vệ em như thế nào?',
    'Dấu chân số là gì và tại sao cần cẩn trọng?'
  ]
};

export const ChatView: React.FC<ChatViewProps> = ({
  currentGrade,
  setCurrentGrade,
  onGoHome,
  onQuestionAsked,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_msg',
      sender: 'ai',
      text: `Xin chào em! Thầy/cô là **🤖 AI Bạn Đồng Hành** môn Tin học THCS.\n\nThầy/cô có thể giải thích mọi thắc mắc về Tin học Lớp ${currentGrade} (hoặc các lớp 6, 7, 8, 9), từ máy tính, Internet, thuật toán, lập trình đến bảng tính hay trí tuệ nhân tạo.\n\nEm hãy gõ câu hỏi hoặc bấm vào các câu hỏi gợi ý bên dưới để chúng mình cùng khám phá nhé!`,
      timestamp: Date.now(),
      challenge: 'Em đã sẵn sàng trở thành một chuyên gia công nghệ thông thái chưa nào? Hãy hỏi thầy/cô điều em tò mò nhất nhé!',
      source: 'knowledge_base'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputPrompt).trim();
    if (!query || isLoading) return;

    sound.playClick();

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    // Trigger badge callback
    onQuestionAsked();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6),
          grade: currentGrade
        })
      });

      if (!response.ok) {
        throw new Error('Lỗi máy chủ');
      }

      const data = await response.json();
      const replyText = data.reply || 'Thầy/cô đã nhận được câu hỏi. Em hãy thử hỏi thêm về một chủ đề cụ thể nhé!';

      // Extract thinking challenge if present
      let mainText = replyText;
      let challengeText: string | undefined = undefined;

      const challengeMatch = replyText.match(/🧠\s*\*\*Thử thách[^\n]*\*\*:\s*([\s\S]+)$/i);
      if (challengeMatch) {
        mainText = replyText.replace(/🧠\s*\*\*Thử thách[^\n]*\*\*:\s*[\s\S]+$/i, '').trim();
        challengeText = challengeMatch[1].trim();
      }

      const aiMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: mainText,
        timestamp: Date.now(),
        challenge: challengeText,
        source: data.source
      };

      setMessages((prev) => [...prev, aiMessage]);
      sound.playCorrect();
    } catch (err) {
      console.error('Chat error:', err);
      // Gentle fallback message
      const errorMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: `Cảm ơn em đã hỏi về "${query}"! Trong Tin học, mọi bài toán đều có thể chia nhỏ ra để giải quyết. Em có muốn thử bấm một trong các câu hỏi gợi ý phổ biến ở bên dưới để cùng tìm hiểu không?`,
        timestamp: Date.now(),
        challenge: 'Em hãy thử hỏi: "AI là gì?" hoặc "Thuật toán là gì?" để xem cách máy tính hoạt động nhé!',
        source: 'knowledge_base'
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;
    sound.playClick();

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleClearChat = () => {
    sound.playClick();
    setMessages([
      {
        id: 'welcome_msg_reset',
        sender: 'ai',
        text: `Chào mừng em trở lại! Cuộc trò chuyện đã được làm mới. Em muốn hỏi điều gì về Tin học Lớp ${currentGrade} hôm nay?`,
        timestamp: Date.now(),
        challenge: 'Hãy chọn một câu hỏi gợi ý bên dưới hoặc gõ câu hỏi bất kỳ nhé!',
        source: 'knowledge_base'
      }
    ]);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto pb-12">
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              onGoHome();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Trang chủ</span>
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-800">
                AI Bạn Đồng Hành
              </h2>
              <p className="text-[11px] sm:text-xs text-cyan-600 font-semibold">
                Sẵn sàng giải thích & cùng em suy nghĩ
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <span className="text-slate-500 pl-1 text-[11px]">Ngữ cảnh:</span>
            {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  sound.playClick();
                  setCurrentGrade(g);
                }}
                className={`px-2 py-0.5 rounded-lg transition-colors ${
                  currentGrade === g
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>

          <button
            onClick={handleClearChat}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Làm mới cuộc trò chuyện"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Suggested Questions Section */}
      <div className="bg-linear-to-r from-cyan-50/70 via-blue-50/70 to-indigo-50/70 p-4 rounded-2xl border border-cyan-200/60 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-900 mb-2.5">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>💡 Câu hỏi gợi ý cho em (Bấm vào để hỏi ngay):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-cyan-50 border border-cyan-200 text-xs font-semibold text-slate-700 hover:text-cyan-800 hover:border-cyan-400 transition-all shadow-2xs hover:shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              💬 {prompt}
            </button>
          ))}
          {GRADE_SPECIFIC_QUESTIONS[currentGrade]?.map((prompt, idx) => (
            <button
              key={`grade_${idx}`}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-semibold text-indigo-800 hover:border-indigo-400 transition-all shadow-2xs hover:shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              📘 Lớp {currentGrade}: {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Conversation Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 min-h-[420px] max-h-[580px] overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-linear-to-tr from-indigo-600 to-blue-500'
                  : 'bg-linear-to-tr from-cyan-500 to-blue-600'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>

            {/* Bubble Content */}
            <div
              className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-xs'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs shadow-2xs'
              }`}
            >
              {/* Sender label */}
              <div className="flex items-center justify-between gap-2 mb-1.5 text-[11px] font-bold opacity-80">
                <span>{msg.sender === 'user' ? 'Em' : '🤖 AI Bạn Đồng Hành'}</span>
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleSpeak(msg.id, msg.text)}
                      className="p-1 hover:bg-slate-200 rounded-md transition-colors"
                      title="Đọc to câu trả lời"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${speakingId === msg.id ? 'text-indigo-600 animate-pulse' : 'text-slate-500'}`} />
                    </button>
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="p-1 hover:bg-slate-200 rounded-md transition-colors"
                      title="Sao chép nội dung"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Message text formatted */}
              <div className="whitespace-pre-line break-words font-medium">
                {msg.text}
              </div>

              {/* Thinking Challenge Box for Students */}
              {msg.challenge && (
                <div className="mt-3 pt-3 border-t border-cyan-200/80 bg-cyan-50/80 -mx-4 -mb-4 p-3.5 rounded-b-2xl text-xs text-cyan-950 font-medium">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-800 mb-1">
                    <span>🧠</span>
                    <span>Thử thách suy nghĩ dành cho em:</span>
                  </div>
                  <p className="leading-relaxed text-cyan-900">{msg.challenge}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading Bubble */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 animate-spin" />
            </div>
            <div className="bg-slate-50 border border-slate-200 text-slate-600 rounded-2xl rounded-tl-xs p-4 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
              <span>AI Bạn Đồng Hành đang suy nghĩ câu trả lời cho em...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box & Action Buttons */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="relative bg-white rounded-2xl border-2 border-indigo-200 focus-within:border-indigo-600 focus-within:ring-4 focus-within:ring-indigo-500/10 p-2 shadow-sm transition-all"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder={`Hỏi AI Bạn Đồng Hành về bài học Tin học Lớp ${currentGrade}... (Ví dụ: Thuật toán là gì?)`}
            disabled={isLoading}
            className="flex-1 px-3 py-2 text-sm bg-transparent border-0 focus:outline-none text-slate-800 placeholder:text-slate-400 font-medium"
          />

          <button
            type="submit"
            disabled={!inputPrompt.trim() || isLoading}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-xs active:scale-95 disabled:pointer-events-none cursor-pointer"
          >
            <span>Gửi câu hỏi</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Friendly Footer Note */}
      <p className="text-center text-[11px] sm:text-xs text-slate-400">
        💡 Lời khuyên: Hãy tự suy nghĩ trước khi hỏi AI để rèn luyện trí nhớ và tư duy logic nhé!
      </p>
    </div>
  );
};
