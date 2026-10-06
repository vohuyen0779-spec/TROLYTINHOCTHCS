import React, { useState, useMemo } from 'react';
import { GradeLevel, GlossaryTerm } from '../types';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { Search, BookOpen, Home, CheckCircle2, XCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { sound } from '../utils/sound';

interface GlossaryViewProps {
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  onGoHome: () => void;
  onTermExplored: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  currentGrade,
  setCurrentGrade,
  onGoHome,
  onTermExplored,
}) => {
  const [selectedGradeFilter, setSelectedGradeFilter] = useState<'all' | GradeLevel>(currentGrade);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTermId, setExpandedTermId] = useState<string | null>(null);
  const [challengeAnswers, setChallengeAnswers] = useState<Record<string, number>>({});

  // Filter terms by search query and grade
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const matchGrade =
        selectedGradeFilter === 'all' || term.grade === selectedGradeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        term.term.toLowerCase().includes(q) ||
        (term.englishTerm && term.englishTerm.toLowerCase().includes(q)) ||
        term.definition.toLowerCase().includes(q) ||
        term.category.toLowerCase().includes(q);
      return matchGrade && matchSearch;
    });
  }, [selectedGradeFilter, searchQuery]);

  const handleToggleTerm = (termId: string) => {
    sound.playClick();
    if (expandedTermId === termId) {
      setExpandedTermId(null);
    } else {
      setExpandedTermId(termId);
      onTermExplored();
    }
  };

  const handleChallengeAnswer = (termId: string, optionIdx: number, correctIdx: number) => {
    if (challengeAnswers[termId] !== undefined) return; // already answered
    if (optionIdx === correctIdx) {
      sound.playCorrect();
    } else {
      sound.playGentleOops();
    }
    setChallengeAnswers((prev) => ({
      ...prev,
      [termId]: optionIdx,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
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
            <span className="text-xl">💻</span>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-800">
                GIẢI MÃ THUẬT NGỮ TIN HỌC
              </h2>
              <p className="text-[11px] sm:text-xs text-indigo-700 font-semibold">
                Khám phá và giải mã các thuật ngữ Tin học THCS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm thuật ngữ (ví dụ: Thuật toán, Biến, AI, Bảng tính, Dữ liệu...)"
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-800 font-medium"
          />
        </div>

        {/* Grade Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-bold">
            <span className="text-slate-500 mr-1 text-xs">Lọc theo:</span>
            <button
              onClick={() => {
                sound.playClick();
                setSelectedGradeFilter('all');
              }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedGradeFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả các lớp
            </button>

            {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  sound.playClick();
                  setSelectedGradeFilter(g);
                  setCurrentGrade(g);
                }}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedGradeFilter === g
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{g === 6 ? '📘' : g === 7 ? '📗' : g === 8 ? '📙' : '📕'}</span>
                <span>Lớp {g}</span>
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Tìm thấy <strong className="text-indigo-700">{filteredTerms.length}</strong> thuật ngữ
          </div>
        </div>
      </div>

      {/* Terms List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredTerms.map((term) => {
          const isExpanded = expandedTermId === term.id;
          const userAns = challengeAnswers[term.id];

          return (
            <div
              key={term.id}
              className={`rounded-3xl border-2 transition-all bg-white p-5 sm:p-6 space-y-4 shadow-xs hover:shadow-md ${
                isExpanded ? 'border-indigo-500 ring-2 ring-indigo-500/10' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Header: 🔤 THUẬT NGỮ */}
              <div
                onClick={() => handleToggleTerm(term.id)}
                className="flex items-start justify-between gap-3 cursor-pointer group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔤</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {term.term}
                    </h3>
                    {term.englishTerm && (
                      <span className="text-xs font-semibold text-slate-400">
                        ({term.englishTerm})
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span
                      className={`px-2 py-0.5 rounded-md ${
                        term.grade === 6
                          ? 'bg-blue-100 text-blue-800'
                          : term.grade === 7
                          ? 'bg-emerald-100 text-emerald-800'
                          : term.grade === 8
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      Lớp {term.grade}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{term.category}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
                  aria-label="Thu gọn hoặc mở rộng"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* 📖 Nghĩa: Giải thích bằng ngôn ngữ dễ hiểu */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1 text-xs">
                  📖 Nghĩa:
                </span>
                <p>{term.definition}</p>
              </div>

              {/* 💡 Ví dụ: Đưa ra ví dụ gần gũi với học sinh */}
              <div className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/60">
                <span className="font-bold text-amber-900 block mb-1 text-xs">
                  💡 Ví dụ:
                </span>
                <p>{term.example}</p>
              </div>

              {/* 🧠 Thử thách: Interactive Mini Quiz */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-indigo-950 flex items-center gap-1.5">
                    <span>🧠</span>
                    <span>Thử thách nhanh:</span>
                  </span>
                  {userAns !== undefined && (
                    <span className="text-[11px] font-bold text-slate-500">
                      {userAns === term.challenge.correctAnswer ? (
                        <span className="text-emerald-600">Đã trả lời đúng! 🎉</span>
                      ) : (
                        <span className="text-amber-600">Chưa đúng, xem lời giải nhé</span>
                      )}
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-slate-800">
                  {term.challenge.question}
                </p>

                {/* 4 Mini Options */}
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {term.challenge.options.map((opt, optIdx) => {
                    const isSelected = userAns === optIdx;
                    const isCorrect = optIdx === term.challenge.correctAnswer;

                    let optBtnStyle = 'bg-white hover:bg-indigo-50/70 border-slate-200 text-slate-700';

                    if (userAns !== undefined) {
                      if (isCorrect) {
                        optBtnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                      } else if (isSelected) {
                        optBtnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-semibold';
                      } else {
                        optBtnStyle = 'bg-slate-50 border-slate-100 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleChallengeAnswer(term.id, optIdx, term.challenge.correctAnswer)}
                        disabled={userAns !== undefined}
                        className={`text-left text-xs p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2 cursor-pointer ${optBtnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-600 shrink-0">
                            {['A', 'B', 'C', 'D'][optIdx]}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {userAns !== undefined && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {userAns !== undefined && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on Answer */}
                {userAns !== undefined && (
                  <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 text-[11px] text-indigo-950 font-medium">
                    💡 <strong>Giải thích:</strong> {term.challenge.explanation}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-600 font-medium">
            Không tìm thấy thuật ngữ nào phù hợp với từ khóa "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGradeFilter('all');
            }}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            Xóa tìm kiếm để xem tất cả thuật ngữ
          </button>
        </div>
      )}
    </div>
  );
};
