import React from 'react';
import { ActiveScreen, GradeLevel, Badge } from '../types';
import { Bot, Trophy, BookOpen, HeartPulse, Home, Award, Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  badges: Badge[];
  onOpenBadges: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  setActiveScreen,
  currentGrade,
  setCurrentGrade,
  badges,
  onOpenBadges,
  soundEnabled,
  setSoundEnabled,
}) => {
  const unlockedCount = badges.filter((b) => b.unlocked).length;

  const handleNavClick = (screen: ActiveScreen) => {
    sound.playClick();
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    sound.enabled = next;
    setSoundEnabled(next);
    if (next) sound.playClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Home Click */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
              title="Về Trang chủ"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-linear-to-tr from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight bg-linear-to-r from-indigo-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  TRỢ LÝ HỌC TẬP TIN HỌC
                </h1>
                <p className="text-xs text-slate-500 font-medium hidden sm:block">
                  Dành cho học sinh THCS Lớp 6, 7, 8, 9
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeScreen === 'home'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Trang chủ</span>
            </button>

            <button
              onClick={() => handleNavClick('chat')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeScreen === 'chat'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>AI Bạn Đồng Hành</span>
            </button>

            <button
              onClick={() => handleNavClick('quiz')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeScreen === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Chinh phục kiến thức</span>
            </button>

            <button
              onClick={() => handleNavClick('glossary')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeScreen === 'glossary'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Thuật ngữ Tin học</span>
            </button>

            <button
              onClick={() => handleNavClick('health')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeScreen === 'health'
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HeartPulse className="w-4 h-4 text-rose-400" />
              <span>Bảo vệ sức khỏe</span>
            </button>
          </nav>

          {/* Right Action Bar: Grade picker, Badges, Sound */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Grade Selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
              <span className="text-slate-500 px-1.5 hidden xl:inline">Lớp:</span>
              {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    sound.playClick();
                    setCurrentGrade(g);
                  }}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg transition-colors ${
                    currentGrade === g
                      ? 'bg-white text-indigo-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={`Chọn Tin học Lớp ${g}`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            {/* Badges Cabinet Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenBadges();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold transition-all shadow-xs"
              title="Xem huy hiệu thành tích"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Huy hiệu</span>
              <span className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded-full text-[11px]">
                {unlockedCount}/5
              </span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 text-xs font-semibold overflow-x-auto gap-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 shrink-0 ${
              activeScreen === 'home' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Trang chủ
          </button>
          <button
            onClick={() => handleNavClick('chat')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 shrink-0 ${
              activeScreen === 'chat' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-cyan-600" />
            AI Bạn Đồng Hành
          </button>
          <button
            onClick={() => handleNavClick('quiz')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 shrink-0 ${
              activeScreen === 'quiz' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Trắc nghiệm
          </button>
          <button
            onClick={() => handleNavClick('glossary')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 shrink-0 ${
              activeScreen === 'glossary' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Thuật ngữ
          </button>
          <button
            onClick={() => handleNavClick('health')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 shrink-0 ${
              activeScreen === 'health' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
            Sức khỏe
          </button>
        </div>
      </div>
    </header>
  );
};
