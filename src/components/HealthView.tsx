import React, { useState, useEffect } from 'react';
import { HealthTopic, HealthChallenge } from '../types';
import { HEALTH_TOPICS, HEALTH_CHALLENGES } from '../data/healthData';
import { HeartPulse, Eye, Play, Pause, RotateCcw, CheckCircle2, XCircle, Home, Sparkles, Bell, ShieldCheck, Flame } from 'lucide-react';
import { sound } from '../utils/sound';

interface HealthViewProps {
  onGoHome: () => void;
  onHealthChallengeCompleted: () => void;
}

export const HealthView: React.FC<HealthViewProps> = ({
  onGoHome,
  onHealthChallengeCompleted,
}) => {
  const [activeTab, setActiveTab] = useState<'eyes' | 'posture' | 'keyboard_mouse' | 'breaks'>('eyes');

  // 20-20-20 Timer State
  // Mode: 20 minutes countdown (1200 seconds) or 20 seconds eye rest (20 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(20 * 60); // 20 mins default
  const [timerMode, setTimerMode] = useState<'study' | 'rest'>('study');
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Self-check interactive checklist
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    back_straight: false,
    eye_distance: false,
    feet_flat: false,
    screen_eye_level: false,
    room_lighting: false,
  });

  // Health Situation Challenges
  const [challengeAnswers, setChallengeAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            sound.playTimerBell();
            if (timerMode === 'study') {
              // Switch to 20 seconds eye relaxation
              setTimerMode('rest');
              return 20;
            } else {
              // Switch back to 20 mins study
              setTimerMode('study');
              return 20 * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerMode]);

  const toggleTimer = () => {
    sound.playClick();
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (mode: 'study' | 'rest') => {
    sound.playClick();
    setIsTimerRunning(false);
    setTimerMode(mode);
    setTimerSeconds(mode === 'study' ? 20 * 60 : 20);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleCheck = (key: string) => {
    sound.playClick();
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChallengeOption = (chId: string, optIdx: number, correctIdx: number) => {
    if (challengeAnswers[chId] !== undefined) return;
    if (optIdx === correctIdx) {
      sound.playCorrect();
    } else {
      sound.playGentleOops();
    }
    const nextAnswers = { ...challengeAnswers, [chId]: optIdx };
    setChallengeAnswers(nextAnswers);

    // If answered at least 3 challenges, trigger badge unlock
    if (Object.keys(nextAnswers).length >= 3) {
      onHealthChallengeCompleted();
    }
  };

  const currentTopic = HEALTH_TOPICS.find((t) => t.id === activeTab) || HEALTH_TOPICS[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
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
            <span className="text-xl">❤️</span>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-800">
                SỬ DỤNG MÁY TÍNH KHỎE MẠNH
              </h2>
              <p className="text-[11px] sm:text-xs text-rose-600 font-semibold">
                Bảo vệ đôi mắt, tư thế và sức khỏe học đường
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 20-20-20 Interactive Timer Banner */}
      <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-emerald-600/15 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-lg text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-emerald-100">
            <Bell className="w-3.5 h-3.5" />
            <span>Đồng hồ nhắc nhở Quy tắc 20-20-20</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            {timerMode === 'study' ? '📖 Đang trong phiên học tập' : '👀 Giờ nghỉ mắt 20 giây!'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-medium">
            {timerMode === 'study'
              ? 'Học liên tục 20 phút, sau đó nhìn ra xa 6 mét trong 20 giây để mắt không bị mỏi và ngừa cận thị!'
              : 'Hãy rời mắt khỏi màn hình ngay, phóng tầm mắt ra xa ngoài cửa sổ ngắm bầu trời hoặc cây xanh trong 20 giây nhé!'}
          </p>
        </div>

        {/* Timer Display & Controls */}
        <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shrink-0">
          <div className="text-4xl sm:text-5xl font-black tracking-wider font-mono drop-shadow-xs">
            {formatTime(timerSeconds)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTimer}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                isTimerRunning
                  ? 'bg-amber-400 hover:bg-amber-500 text-amber-950'
                  : 'bg-white hover:bg-emerald-50 text-emerald-800'
              }`}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isTimerRunning ? 'Tạm dừng' : 'Bắt đầu đếm'}</span>
            </button>
            <button
              onClick={() => resetTimer('study')}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              title="Đặt lại 20 phút học"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Topic Category Tabs */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {HEALTH_TOPICS.map((topic) => {
            const isSelected = activeTab === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(topic.id);
                }}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'border-rose-500 bg-rose-50/80 text-rose-950 shadow-xs ring-2 ring-rose-400/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <span className="text-2xl sm:text-3xl">{topic.icon}</span>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base leading-tight">
                    {topic.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Detailed Guide Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentTopic.icon}</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentTopic.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-bold text-rose-600">
              {currentTopic.headline}
            </p>
          </div>

          {/* 3 Core Rules Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {currentTopic.rules.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
              >
                <span className="text-xs font-black text-slate-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {rule.title}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* Tips Bullet Points */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-extrabold text-slate-900">
              📌 Lời khuyên chi tiết cho học sinh:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentTopic.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun Fact / Khoa học vui */}
          <div className="p-4 rounded-2xl bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium flex items-start gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <strong className="block text-amber-900 mb-0.5">Em có biết?</strong>
              <p>{currentTopic.funFact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Posture Self-Checklist */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
            ✓
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Danh sách tự kiểm tra tư thế ngồi học ngay lúc này:
            </h3>
            <p className="text-xs text-slate-500">
              Hãy bấm tích chọn những điều em đang làm đúng trước bàn máy tính:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            { id: 'back_straight', label: 'Cột sống lưng đang thẳng, tựa nhẹ vào lưng ghế' },
            { id: 'eye_distance', label: 'Khoảng cách mắt đến màn hình khoảng một sải tay (50-70cm)' },
            { id: 'feet_flat', label: 'Hai bàn chân đang đặt thoải mái chạm phẳng mặt sàn' },
            { id: 'screen_eye_level', label: 'Mép trên màn hình ngang hoặc hơi thấp hơn tầm mắt một chút' },
            { id: 'room_lighting', label: 'Đèn phòng học đủ sáng, màn hình không bị lóa bóng' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold flex items-center gap-3 transition-all cursor-pointer ${
                checkedItems[item.id]
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 shadow-2xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-lg flex items-center justify-center border shrink-0 ${
                  checkedItems[item.id]
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 bg-slate-100'
                }`}
              >
                {checkedItems[item.id] && <CheckCircle2 className="w-4 h-4" />}
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION: 🎯 THỬ THÁCH SỨC KHỎE */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tình huống thực tế</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            🎯 THỬ THÁCH SỨC KHỎE
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Đọc các tình huống thường gặp khi học máy tính và chọn cách xử lý thông minh nhất để bảo vệ sức khỏe bản thân:
          </p>
        </div>

        <div className="space-y-6">
          {HEALTH_CHALLENGES.map((challenge, chIdx) => {
            const userChoice = challengeAnswers[challenge.id];
            const hasAnswered = userChoice !== undefined;
            const isCorrect = userChoice === challenge.correctAnswer;

            return (
              <div
                key={challenge.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-rose-600">
                    Tình huống {chIdx + 1}:
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {challenge.scenario}
                  </h4>
                </div>

                {/* Options A, B, C, D */}
                <div className="grid grid-cols-1 gap-2">
                  {challenge.options.map((opt, optIdx) => {
                    const letter = ['A', 'B', 'C', 'D'][optIdx];
                    const isSelected = userChoice === optIdx;
                    const isCorrectOpt = optIdx === challenge.correctAnswer;

                    let btnStyle = 'bg-white hover:bg-rose-50/50 border-slate-200 text-slate-700';

                    if (hasAnswered) {
                      if (isCorrectOpt) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold ring-2 ring-rose-400/20';
                      } else {
                        btnStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectChallengeOption(challenge.id, optIdx, challenge.correctAnswer)}
                        disabled={hasAnswered}
                        className={`p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {letter}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {hasAnswered && (
                          <div>
                            {isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                            {isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation & Health Tip Result */}
                {hasAnswered && (
                  <div
                    className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed space-y-1.5 ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-amber-50 border-amber-300 text-amber-950'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="text-emerald-700 font-black">
                          ✓ Chính xác! Em có ý thức chăm sóc sức khỏe rất tốt!
                        </span>
                      ) : (
                        <span className="text-amber-800 font-black">
                          Đáp án đúng là:{' '}
                          {['A', 'B', 'C', 'D'][challenge.correctAnswer]}. {challenge.options[challenge.correctAnswer]}
                        </span>
                      )}
                    </div>
                    <p>
                      <strong>Giải thích:</strong> {challenge.explanation}
                    </p>
                    <p className="font-bold text-rose-700 pt-1">
                      {challenge.healthTip}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
