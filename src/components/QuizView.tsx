import React, { useState, useMemo } from 'react';
import { GradeLevel, QuizQuestion } from '../types';
import { ALL_QUIZ_QUESTIONS } from '../data/quizData';
import { Trophy, CheckCircle2, XCircle, ArrowRight, RotateCcw, Home, Sparkles, Award, BookOpen } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface QuizViewProps {
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  onGoHome: () => void;
  onQuizCompleted: (correctCount: number, totalCount: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentGrade,
  setCurrentGrade,
  onGoHome,
  onQuizCompleted,
}) => {
  const [questionCountChoice, setQuestionCountChoice] = useState<10 | 20 | 30>(10);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  // Available questions for current grade + cross-grade pool if needed for 20/30
  const startQuiz = (count: 10 | 20 | 30) => {
    sound.playClick();
    setQuestionCountChoice(count);

    // Filter questions prioritizing current grade
    const gradeQuestions = ALL_QUIZ_QUESTIONS.filter((q) => q.grade === currentGrade);
    const otherQuestions = ALL_QUIZ_QUESTIONS.filter((q) => q.grade !== currentGrade);

    // Shuffle
    const shuffledGrade = [...gradeQuestions].sort(() => 0.5 - Math.random());
    const shuffledOther = [...otherQuestions].sort(() => 0.5 - Math.random());

    // Pool questions up to requested count
    const pool = [...shuffledGrade, ...shuffledOther].slice(0, count);

    setActiveQuestions(pool);
    setCurrentIndex(0);
    setSelectedOption(null);
    setUserAnswers({});
    setScore(0);
    setIsFinished(false);
    setShowReview(false);
    setGameStarted(true);
  };

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (selectedOption !== null) return; // already answered this question

    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQ.correctAnswer;

    if (isCorrect) {
      sound.playCorrect();
      setScore((prev) => prev + 1);
    } else {
      sound.playGentleOops();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      // Quiz completed
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    const finalScore = score + (selectedOption === currentQ.correctAnswer ? 0 : 0); // score already updated
    const percentage = Math.round((score / activeQuestions.length) * 100);

    onQuizCompleted(score, activeQuestions.length);

    if (percentage >= 70) {
      sound.playCelebration();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  // Encouraging feedback calculation
  const feedbackMessage = useMemo(() => {
    if (!isFinished) return '';
    const percent = Math.round((score / activeQuestions.length) * 100);
    if (percent === 100) {
      return 'Xuất sắc tuyệt đối! Em là một thiên tài Tin học thực thụ. Hãy tiếp tục phát huy niềm đam mê công nghệ nhé!';
    }
    if (percent >= 80) {
      return `Em đã nắm rất tốt kiến thức! Hãy thử lại một lần nữa để chinh phục điểm 10/10 tuyệt đối nhé!`;
    }
    if (percent >= 60) {
      return `Làm tốt lắm! Em đã nắm được đa số kiến thức trọng tâm. Hãy đọc kỹ phần giải thích của các câu làm chưa đúng và thử sức lại nhé!`;
    }
    return `Chúc mừng em đã hoàn thành bài thi! Học Tin học là một hành trình khám phá, mỗi lần thử lại em sẽ nhớ bài sâu sắc hơn rất nhiều. Cố lên em nhé!`;
  }, [isFinished, score, activeQuestions.length]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header Bar */}
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
            <span className="text-xl">🏆</span>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-800">
                CHINH PHỤC KIẾN THỨC TIN HỌC
              </h2>
              <p className="text-[11px] sm:text-xs text-amber-700 font-semibold">
                Thử sức với các câu hỏi trắc nghiệm Tin học
              </p>
            </div>
          </div>
        </div>

        {/* Grade Selector */}
        {!gameStarted && (
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <span className="text-slate-500 pl-1.5 pr-1">Lớp:</span>
            {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  sound.playClick();
                  setCurrentGrade(g);
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  currentGrade === g
                    ? 'bg-amber-500 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Screen 1: Quiz Setup Selection (Lớp 6, 7, 8, 9 & 10/20/30 câu) */}
      {!gameStarted && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-xs">
              🏆
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Sẵn sàng thử tài Tin học Lớp {currentGrade}?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Các câu hỏi được biên soạn sát với chương trình Tin học THCS, bao gồm mạng Internet, bảng tính, thuật toán, lập trình, trí tuệ nhân tạo và an toàn số.
            </p>
          </div>

          {/* Grade Selector Big Tabs */}
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold text-slate-700 block">
              1. Chọn khối lớp của em:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
              {([6, 7, 8, 9] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    sound.playClick();
                    setCurrentGrade(g);
                  }}
                  className={`p-3 sm:p-4 rounded-2xl border-2 text-sm font-black transition-all cursor-pointer ${
                    currentGrade === g
                      ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm ring-2 ring-amber-400/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                  }`}
                >
                  <span className="block text-xl mb-1">📘</span>
                  Lớp {g}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count Selection (10, 20, 30 câu) */}
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold text-slate-700 block">
              2. Chọn số lượng câu hỏi:
            </span>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto">
              {([10, 20, 30] as const).map((count) => (
                <button
                  key={count}
                  onClick={() => setQuestionCountChoice(count)}
                  className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                    questionCountChoice === count
                      ? 'border-amber-500 bg-amber-500 text-white font-extrabold shadow-md shadow-amber-500/20 scale-105'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white font-bold'
                  }`}
                >
                  <span className="block text-2xl font-black">{count}</span>
                  <span className="text-xs opacity-90">câu hỏi</span>
                </button>
              ))}
            </div>
          </div>

          {/* Start Quiz Action Button */}
          <div className="pt-4">
            <button
              onClick={() => startQuiz(questionCountChoice)}
              className="px-8 py-4 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-base sm:text-lg font-black tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>BẮT ĐẦU CHINH PHỤC</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Screen 2: Active Question Playing View */}
      {gameStarted && !isFinished && currentQ && (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-800 text-xs">
                  Lớp {currentQ.grade}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{currentQ.topic}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-700">
                  Điểm: <strong className="text-amber-900">{score}</strong>
                </span>
                <span className="text-slate-500">
                  Câu {currentIndex + 1}/{activeQuestions.length}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentIndex + 1}. {currentQ.question}
            </h3>
          </div>

          {/* 4 Options (A, B, C, D) */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((option, idx) => {
              const letter = ['A', 'B', 'C', 'D'][idx];
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctAnswer;

              let optionStyle = 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800 bg-white';
              let badgeStyle = 'bg-slate-100 text-slate-700';

              if (selectedOption !== null) {
                if (isCorrectAnswer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20';
                  badgeStyle = 'bg-emerald-600 text-white';
                } else if (isSelected) {
                  optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/20';
                  badgeStyle = 'bg-rose-600 text-white';
                } else {
                  optionStyle = 'border-slate-100 text-slate-400 opacity-60 bg-slate-50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`p-4 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${badgeStyle}`}
                    >
                      {letter}
                    </span>
                    <span className="text-sm sm:text-base font-semibold">{option}</span>
                  </div>

                  {selectedOption !== null && (
                    <div>
                      {isCorrectAnswer && (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                      )}
                      {isSelected && !isCorrectAnswer && (
                        <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Feedback & Explanation (After selecting an option) */}
          {selectedOption !== null && (
            <div
              className={`p-4 sm:p-5 rounded-2xl border text-sm leading-relaxed space-y-1.5 animate-fadeIn ${
                selectedOption === currentQ.correctAnswer
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {selectedOption === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-800">Chính xác! Làm rất tốt em nhé! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="text-rose-800">
                      Chưa chính xác. Đáp án đúng là:{' '}
                      <strong className="text-emerald-700">
                        {['A', 'B', 'C', 'D'][currentQ.correctAnswer]}. {currentQ.options[currentQ.correctAnswer]}
                      </strong>
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm opacity-95">
                💡 <strong>Giải thích:</strong> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>
                  {currentIndex + 1 < activeQuestions.length ? 'Câu tiếp theo' : 'Xem kết quả bài làm'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Screen 3: Quiz Finished & Result Summary */}
      {isFinished && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-center">
          <div className="space-y-3 max-w-md mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-4xl mx-auto shadow-lg shadow-amber-500/30">
              🎉
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              🎉 KẾT QUẢ
            </h3>
            <p className="text-slate-600 text-sm font-semibold">
              Bài trắc nghiệm Tin học Lớp {currentGrade} ({activeQuestions.length} câu)
            </p>
          </div>

          {/* Score Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Số câu đúng</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">
                {score}/{activeQuestions.length}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Điểm số</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-600">
                {((score / activeQuestions.length) * 10).toFixed(1)}/10
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Tỷ lệ chính xác</span>
              <span className="text-2xl sm:text-3xl font-black text-blue-600">
                {Math.round((score / activeQuestions.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Encouraging Remark Quote Box */}
          <div className="max-w-lg mx-auto p-5 rounded-2xl bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-950 text-sm font-medium leading-relaxed">
            <p className="font-bold text-base mb-1">
              Em trả lời đúng {score}/{activeQuestions.length} câu.
            </p>
            <p>Điểm: {score}/{activeQuestions.length}</p>
            <p className="mt-2 text-slate-700 italic">{feedbackMessage}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => startQuiz(questionCountChoice)}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thử lại đề khác</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setShowReview(!showReview);
              }}
              className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{showReview ? 'Ẩn đáp án chi tiết' : 'Xem lại đáp án chi tiết'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setGameStarted(false);
              }}
              className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer"
            >
              Đổi khối lớp
            </button>
          </div>

          {/* Review Answers List */}
          {showReview && (
            <div className="text-left mt-8 pt-8 border-t border-slate-200 space-y-4 max-w-2xl mx-auto">
              <h4 className="font-black text-lg text-slate-900 flex items-center gap-2">
                <span>📖 Chi tiết đáp án và lời giải:</span>
              </h4>

              {activeQuestions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border text-sm space-y-2 ${
                      isCorrect
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : 'bg-rose-50/50 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-900">
                        Câu {idx + 1}: {q.question}
                      </span>
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </div>

                    <div className="text-xs space-y-1 text-slate-600 pl-2">
                      <p>
                        • Câu trả lời của em:{' '}
                        <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {userAns !== undefined
                            ? `${['A', 'B', 'C', 'D'][userAns]}. ${q.options[userAns]}`
                            : 'Chưa trả lời'}
                        </strong>
                      </p>
                      {!isCorrect && (
                        <p>
                          • Đáp án đúng:{' '}
                          <strong className="text-emerald-700">
                            {['A', 'B', 'C', 'D'][q.correctAnswer]}. {q.options[q.correctAnswer]}
                          </strong>
                        </p>
                      )}
                      <p className="text-slate-500 pt-1">
                        💡 <em>Giải thích: {q.explanation}</em>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
