/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveScreen, GradeLevel, Badge, UserStats } from './types';
import { INITIAL_BADGES, STORAGE_KEY_BADGES, STORAGE_KEY_STATS } from './data/badgeData';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ChatView } from './components/ChatView';
import { QuizView } from './components/QuizView';
import { GlossaryView } from './components/GlossaryView';
import { HealthView } from './components/HealthView';
import { BadgesModal } from './components/BadgesModal';
import { sound } from './utils/sound';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(7);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<Badge | null>(null);

  // Load badges from storage or initial state
  const [badges, setBadges] = useState<Badge[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BADGES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore storage error
    }
    return INITIAL_BADGES;
  });

  // Load user statistics
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore storage error
    }
    return {
      totalQuestionsAnswered: 0,
      quizzesCompleted: 0,
      highestScorePercent: 0,
      aiChatCount: 0,
      termsExplored: 0,
      healthChallengesCompleted: 0,
      badges: {},
    };
  });

  // Persist badges
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BADGES, JSON.stringify(badges));
    } catch {
      // Ignore storage error
    }
  }, [badges]);

  // Persist stats
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch {
      // Ignore storage error
    }
  }, [stats]);

  // Unlock badge helper
  const unlockBadge = (badgeId: Badge['id']) => {
    setBadges((prev) => {
      const target = prev.find((b) => b.id === badgeId);
      if (!target || target.unlocked) return prev;

      sound.playCelebration();
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.2 },
        });
      } catch {
        // Fallback
      }

      setNewlyUnlockedBadge({ ...target, unlocked: true, unlockedAt: Date.now() });
      setTimeout(() => setNewlyUnlockedBadge(null), 5000);

      return prev.map((b) =>
        b.id === badgeId ? { ...b, unlocked: true, unlockedAt: Date.now() } : b
      );
    });
  };

  // Activity callbacks
  const handleQuestionAsked = () => {
    unlockBadge('newbie');
    unlockBadge('ai_friend');
    setStats((prev) => ({
      ...prev,
      aiChatCount: prev.aiChatCount + 1,
    }));
  };

  const handleQuizCompleted = (correctCount: number, totalCount: number) => {
    unlockBadge('newbie');
    const percent = Math.round((correctCount / totalCount) * 100);

    setStats((prev) => {
      const totalAns = prev.totalQuestionsAnswered + totalCount;
      if (totalAns >= 10) {
        unlockBadge('quiz_explorer');
      }
      if (percent >= 80) {
        unlockBadge('quiz_master');
      }
      return {
        ...prev,
        totalQuestionsAnswered: totalAns,
        quizzesCompleted: prev.quizzesCompleted + 1,
        highestScorePercent: Math.max(prev.highestScorePercent, percent),
      };
    });
  };

  const handleTermExplored = () => {
    unlockBadge('newbie');
    setStats((prev) => ({
      ...prev,
      termsExplored: prev.termsExplored + 1,
    }));
  };

  const handleHealthChallengeCompleted = () => {
    unlockBadge('newbie');
    unlockBadge('health_knight');
    setStats((prev) => ({
      ...prev,
      healthChallengesCompleted: prev.healthChallengesCompleted + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        currentGrade={currentGrade}
        setCurrentGrade={setCurrentGrade}
        badges={badges}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeScreen === 'home' && (
          <HomeView
            onNavigate={setActiveScreen}
            currentGrade={currentGrade}
            setCurrentGrade={setCurrentGrade}
            badges={badges}
            onOpenBadges={() => setIsBadgesModalOpen(true)}
          />
        )}

        {activeScreen === 'chat' && (
          <ChatView
            currentGrade={currentGrade}
            setCurrentGrade={setCurrentGrade}
            onGoHome={() => setActiveScreen('home')}
            onQuestionAsked={handleQuestionAsked}
          />
        )}

        {activeScreen === 'quiz' && (
          <QuizView
            currentGrade={currentGrade}
            setCurrentGrade={setCurrentGrade}
            onGoHome={() => setActiveScreen('home')}
            onQuizCompleted={handleQuizCompleted}
          />
        )}

        {activeScreen === 'glossary' && (
          <GlossaryView
            currentGrade={currentGrade}
            setCurrentGrade={setCurrentGrade}
            onGoHome={() => setActiveScreen('home')}
            onTermExplored={handleTermExplored}
          />
        )}

        {activeScreen === 'health' && (
          <HealthView
            onGoHome={() => setActiveScreen('home')}
            onHealthChallengeCompleted={handleHealthChallengeCompleted}
          />
        )}
      </main>

      {/* Achievement Toast Banner (When newly unlocked) */}
      {newlyUnlockedBadge && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce">
          <div className="bg-amber-400 text-amber-950 p-4 rounded-2xl shadow-xl border-2 border-amber-300 flex items-center gap-3">
            <span className="text-3xl">{newlyUnlockedBadge.icon}</span>
            <div>
              <div className="flex items-center gap-1 font-black text-xs uppercase tracking-wider text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                <span>Mở khóa huy hiệu mới!</span>
              </div>
              <p className="font-extrabold text-sm">{newlyUnlockedBadge.title}</p>
            </div>
          </div>
        </div>
      )}

      {/* Badges Achievement Modal */}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        badges={badges}
        stats={stats}
      />
    </div>
  );
}
