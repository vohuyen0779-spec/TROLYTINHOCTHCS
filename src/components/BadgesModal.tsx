import React from 'react';
import { Badge, UserStats } from '../types';
import { Award, CheckCircle2, Lock, X, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  badges: Badge[];
  stats: UserStats;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  badges,
  stats,
}) => {
  if (!isOpen) return null;

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-xs">
            🎖️
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Huy Hiệu Học Tập Tin Học
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Em đã mở khóa được{' '}
            <strong className="text-amber-600 font-extrabold">{unlockedCount} / {badges.length}</strong>{' '}
            huy hiệu danh dự!
          </p>
        </div>

        {/* Badges List */}
        <div className="space-y-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                b.unlocked
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-400 opacity-70'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                  b.unlocked ? 'bg-amber-400/30' : 'bg-slate-200/80'
                }`}
              >
                {b.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4
                    className={`font-black text-sm sm:text-base ${
                      b.unlocked ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {b.title}
                  </h4>
                  {b.unlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </div>
                <p
                  className={`text-xs mt-0.5 leading-relaxed ${
                    b.unlocked ? 'text-slate-700 font-medium' : 'text-slate-400'
                  }`}
                >
                  {b.description}
                </p>
                <span className="inline-block text-[11px] text-amber-800/80 font-semibold mt-1">
                  Mục tiêu: {b.requirementText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Student Stats Summary */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-600">
          <div className="font-bold text-slate-800">📊 Thống kê học tập của em:</div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>• Số câu hỏi đã làm: <strong className="text-indigo-600">{stats.totalQuestionsAnswered}</strong></div>
            <div>• Bài thi hoàn thành: <strong className="text-indigo-600">{stats.quizzesCompleted}</strong></div>
            <div>• Điểm cao nhất: <strong className="text-indigo-600">{stats.highestScorePercent}%</strong></div>
            <div>• Hỏi AI: <strong className="text-indigo-600">{stats.aiChatCount} lượt</strong></div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-xs cursor-pointer"
        >
          Đóng lại và tiếp tục học
        </button>
      </div>
    </div>
  );
};
