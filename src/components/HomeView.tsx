import React from 'react';
import { ActiveScreen, GradeLevel, Badge } from '../types';
import { Bot, Trophy, BookOpen, HeartPulse, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface HomeViewProps {
  onNavigate: (screen: ActiveScreen) => void;
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  badges: Badge[];
  onOpenBadges: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  currentGrade,
  setCurrentGrade,
  badges,
  onOpenBadges,
}) => {
  const handleSelectScreen = (screen: ActiveScreen) => {
    sound.playClick();
    onNavigate(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-indigo-500/15">
        {/* Background decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-cyan-100 text-xs sm:text-sm font-semibold border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Ứng dụng học tập Tin học tương tác THCS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
            <span>Lớp 6 • 7 • 8 • 9</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-xs">
            🤖 TRỢ LÝ HỌC TẬP TIN HỌC
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-blue-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-xs">
            “Học Tin học – Khám phá công nghệ – Sử dụng máy tính thông minh và an toàn!”
          </p>

          {/* Quick Grade Selector in Hero */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="text-xs sm:text-sm text-blue-100 font-semibold mr-1">
              Em đang học lớp:
            </span>
            {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  sound.playClick();
                  setCurrentGrade(g);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  currentGrade === g
                    ? 'bg-white text-indigo-700 shadow-md scale-105 ring-4 ring-white/30'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                📘 Lớp {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Large Main Feature Buttons / Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>🚀 Chọn khu vực học tập</span>
            <span className="text-xs sm:text-sm font-medium text-slate-500">
              (Bấm vào thẻ bên dưới để bắt đầu)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* 1. TRÒ CHUYỆN CÙNG AI */}
          <button
            onClick={() => handleSelectScreen('chat')}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent border-2 border-cyan-200/80 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
                  🤖
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
                  AI Bạn Đồng Hành
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                  1. TRÒ CHUYỆN CÙNG AI
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
                  Hỏi đáp – khám phá – học cùng AI
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Đặt mọi câu hỏi về Tin học lớp {currentGrade}, nhận lời giải thích đơn giản kèm ví dụ thực tế và câu đố tư duy gợi mở thú vị.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:gap-3 transition-all">
              <span>Bắt đầu trò chuyện</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* 2. CHINH PHỤC KIẾN THỨC */}
          <button
            onClick={() => handleSelectScreen('quiz')}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl bg-linear-to-br from-amber-500/10 via-orange-500/5 to-transparent border-2 border-amber-200/80 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform">
                  🏆
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  10 • 20 • 30 câu hỏi
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                  2. CHINH PHỤC KIẾN THỨC
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
                  Thử sức với các câu hỏi trắc nghiệm Tin học
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Trắc nghiệm trúng đề thi theo từng lớp, giải thích chi tiết đáp án đúng/sai, nhận xét khích lệ và pháo hoa ăn mừng!
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-700 group-hover:gap-3 transition-all">
              <span>Bắt đầu làm bài</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* 3. THUẬT NGỮ TIN HỌC */}
          <button
            onClick={() => handleSelectScreen('glossary')}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl bg-linear-to-br from-indigo-500/10 via-blue-500/5 to-transparent border-2 border-indigo-200/80 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-tr from-indigo-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                  Kho từ điển & Đố vui
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                  3. THUẬT NGỮ TIN HỌC
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
                  Khám phá và giải mã các thuật ngữ Tin học
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Giải nghĩa từ vựng Tin học từ cơ bản đến nâng cao theo cấu trúc: Nghĩa dễ hiểu, Ví dụ đời thực và Thử thách mini kiểm tra nhanh.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-indigo-700 group-hover:gap-3 transition-all">
              <span>Tra cứu thuật ngữ</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* 4. BẢO VỆ SỨC KHỎE */}
          <button
            onClick={() => handleSelectScreen('health')}
            className="group relative flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl bg-linear-to-br from-rose-500/10 via-pink-500/5 to-transparent border-2 border-rose-200/80 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-tr from-rose-500 to-pink-600 flex items-center justify-center text-3xl shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform">
                  ❤️
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                  Cẩm nang & Đồng hồ 20-20-20
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-rose-700 transition-colors">
                  4. BẢO VỆ SỨC KHỎE
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-600">
                  Học cách sử dụng máy tính đúng tư thế và bảo vệ sức khỏe
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Bảo vệ mắt (quy tắc 20-20-20), tư thế ngồi chuẩn 90 độ, gõ phím không mỏi cổ tay và thử thách tình huống xử lý thông minh.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-700 group-hover:gap-3 transition-all">
              <span>Xem hướng dẫn sức khỏe</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      {/* Badges Achievement Card */}
      <section className="bg-linear-to-r from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-left">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-white flex items-center justify-center text-3xl shadow-md shrink-0">
            🏅
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-amber-950">
              Bảng Huy Hiệu Thành Tích Của Em
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 font-medium">
              Em đã thu thập được <span className="font-extrabold text-amber-900">{unlockedCount}/5</span> huy hiệu danh dự!
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.id}
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    badge.unlocked
                      ? 'bg-amber-200 text-amber-900 border border-amber-300'
                      : 'bg-slate-200/80 text-slate-400 border border-slate-300'
                  }`}
                  title={badge.unlocked ? `Đã đạt: ${badge.title}` : `Chưa đạt: ${badge.requirementText}`}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.title}</span>
                  {badge.unlocked && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onOpenBadges();
          }}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold transition-colors shadow-sm shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>Xem chi tiết huy hiệu</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Trust & Safe Computing footer banner */}
      <section className="text-center py-4 text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Môi trường học tập Tin học lành mạnh, an toàn và thân thiện cho học sinh THCS</span>
      </section>
    </div>
  );
};
