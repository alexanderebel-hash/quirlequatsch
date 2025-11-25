'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, BookOpen, Flame, Trophy, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { ThemeCard } from '@/components/learning/ThemeCard';
import { themen } from '@/lib/data/themen';
import { useUserStore } from '@/lib/store/userStore';

const motivationalMessages = [
  'Du schaffst das! 💪',
  'Bereit für die Klassenarbeit! 🎯',
  'Hulk glaubt an dich! 💚',
  'Lernzeit ist Spielzeit! 🎮',
  'Kapitän des Wissens! ⚡',
];

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [message] = useState(() =>
    motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
  );

  const { xp, level, streak, themenProgress, updateStreak } = useUserStore();

  useEffect(() => {
    setMounted(true);
    updateStreak();
  }, [updateStreak]);

  // Calculate overall progress
  const totalSections = themen.reduce((acc, t) => acc + t.sections.length, 0);
  const completedSections = themen.reduce((acc, t) => {
    const progress = themenProgress[t.id];
    return acc + (progress?.sectionsRead?.length || 0);
  }, 0);
  const overallProgress = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;

  // Days until test (2 days from now)
  const daysUntilTest = 2;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F2F2F7]">
        <Header />
        <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-40 bg-gray-200 rounded-2xl mb-6"></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      <Header />

      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8 animate-fade-in-up">
          <h1 className="text-large-title mb-2">Hey Capitano! 👋</h1>
          <p className="text-title3 text-gray-600 mb-1">
            Noch <span className="text-green-500 font-bold">{daysUntilTest} Tage</span> bis zur
            Klassenarbeit
          </p>
          <p className="text-subheadline italic">{message}</p>
        </section>

        {/* Progress Card */}
        <section className="card p-6 mb-8 animate-fade-in-up delay-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-subheadline mb-1">Gesamt-Fortschritt</p>
              <p className="text-title2">{overallProgress}%</p>
            </div>

            {/* Circular Progress */}
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#E5E5EA"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#34C759"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallProgress / 100) * 176} 176`}
                  className="transition-all duration-1000"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-headline">
                💚
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-footnote">Themen begonnen</p>
              <p className="text-headline">
                {Object.keys(themenProgress).length}/{themen.length}
              </p>
            </div>
            <div>
              <p className="text-footnote">XP gesammelt</p>
              <p className="text-headline">{xp} XP</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-up delay-200">
          <Link href="/test/random">
            <button className="w-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl p-5 shadow-sm transition-all duration-200 active:scale-[0.98]">
              <Play className="w-6 h-6 mb-2" />
              <p className="text-headline">Schnell-Test</p>
              <p className="text-caption text-green-100">Zufälliges Thema</p>
            </button>
          </Link>

          <Link href="/klassenarbeit">
            <button className="w-full bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-2xl p-5 shadow-sm transition-all duration-200 active:scale-[0.98]">
              <BookOpen className="w-6 h-6 mb-2" />
              <p className="text-headline">Klassenarbeit</p>
              <p className="text-caption text-purple-100">Alle Themen üben</p>
            </button>
          </Link>
        </section>

        {/* Streak Card */}
        {streak > 0 && (
          <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 mb-8 text-white animate-fade-in-up delay-300">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8" />
              <div>
                <p className="text-headline">{streak} Tage Streak! 🔥</p>
                <p className="text-caption text-orange-100">Weiter so, Capitano!</p>
              </div>
            </div>
          </section>
        )}

        {/* Themes Section */}
        <section className="animate-fade-in-up delay-400">
          <h2 className="text-title2 mb-2">Alle Themen</h2>
          <p className="text-subheadline mb-6">
            8 spannende Themen für deine Klassenarbeit "Von den Sinnen zum Messen"
          </p>

          <div className="space-y-4">
            {themen.map((thema, index) => {
              const progress = themenProgress[thema.id];
              const completedCount = progress?.sectionsRead?.length || 0;
              const progressPercent =
                thema.sections.length > 0
                  ? Math.round((completedCount / thema.sections.length) * 100)
                  : 0;

              return (
                <div
                  key={thema.id}
                  className="animate-fade-in-left"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <ThemeCard
                    id={thema.id}
                    title={thema.title}
                    description={thema.shortDescription}
                    icon={thema.icon}
                    color={thema.color}
                    progress={progressPercent}
                    totalSections={thema.sections.length}
                    completedSections={completedCount}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center animate-fade-in-up delay-800">
          <p className="text-subheadline">
            💚 Übermorgen rockt Capitano die Klassenarbeit! 💪
          </p>
        </footer>
      </main>
    </div>
  );
}
