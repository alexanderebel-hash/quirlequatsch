'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { ThemeCard } from '@/components/learning/ThemeCard';
import { themen } from '@/lib/data/themen';
import { useUserStore } from '@/lib/store/userStore';
import { Play, BookOpen, Flame } from 'lucide-react';

export default function Dashboard() {
  const { themenProgress, xp, streak, updateStreak } = useUserStore();
  const [motivation, setMotivation] = useState('Bereit für die Klassenarbeit! 💪');
  
  useEffect(() => {
    updateStreak();
    
    // Set random motivation message
    const messages = [
      "Ronaldo trainiert jeden Tag - du auch? ⚽",
      "In Minecraft baust du Welten - hier baust du Wissen! 🟩",
      "Selbst Hulk muss lernen, HULK SMASH zu rufen! 💚",
      "Paluten wäre stolz auf dich! 🎮"
    ];
    setMotivation(messages[Math.floor(Math.random() * messages.length)]);
  }, [updateStreak]);
  
  // Calculate days until exam (example: 2 days)
  const daysUntilExam = 2;

  // Calculate overall progress
  const totalSections = themen.reduce((acc, t) => acc + t.sections.length, 0);
  const completedSections = Object.values(themenProgress).reduce(
    (acc, p) => acc + (p?.sectionsRead?.length || 0), 0
  );
  const overallProgress = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-large-title mb-2">Hey Capitano! 👋</h1>
          <p className="text-title3 text-gray-600 mb-1">
            Noch <span className="text-green-500 font-bold">{daysUntilExam} Tage</span> bis zur Klassenarbeit
          </p>
          <p className="text-subheadline italic">{motivation}</p>
        </motion.section>

        {/* Progress Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-black/[0.04] mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-subheadline mb-1">Gesamt-Fortschritt</p>
              <p className="text-title2">{overallProgress}%</p>
            </div>
            <div className="w-16 h-16 relative">
              {/* Circular Progress */}
              <svg className="w-16 h-16 -rotate-90">
                <circle
                  cx="32" cy="32" r="28"
                  stroke="#E5E5EA"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32" cy="32" r="28"
                  stroke="#34C759"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${overallProgress * 1.76} 176`}
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
              <p className="text-headline">{Object.keys(themenProgress).length}/8</p>
            </div>
            <div>
              <p className="text-footnote">XP gesammelt</p>
              <p className="text-headline">{xp} XP</p>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5
                           shadow-sm transition-all duration-200 active:scale-[0.98]">
            <Play className="w-6 h-6 mb-2" />
            <p className="text-headline">Schnell-Test</p>
            <p className="text-caption text-green-100">Zufälliges Thema</p>
          </button>
          
          <button className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white 
                           rounded-2xl p-5 shadow-sm transition-all duration-200 active:scale-[0.98]">
            <BookOpen className="w-6 h-6 mb-2" />
            <p className="text-headline">Klassenarbeit</p>
            <p className="text-caption text-purple-100">Alle Themen üben</p>
          </button>
        </motion.section>

        {/* Streak Card */}
        {streak > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 
                     text-white shadow-sm mb-8"
          >
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8" />
              <div>
                <p className="text-headline">🔥 {streak} Tage Streak!</p>
                <p className="text-sm opacity-90">Weiter so, Capitano!</p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Themes Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-title2 mb-2">Alle Themen</h2>
          <p className="text-subheadline mb-6">
            8 spannende Themen für deine Klassenarbeit "Von den Sinnen zum Messen"
          </p>
          
          <div className="space-y-4">
            {themen.map((thema, index) => {
              const progress = themenProgress[thema.id];
              const completedSections = progress?.sectionsRead?.length || 0;
              const totalSections = thema.sections.length;
              const progressPercent = (completedSections / totalSections) * 100;
              
              let status: 'neu' | 'in-progress' | 'completed' = 'neu';
              if (progressPercent === 100) status = 'completed';
              else if (progressPercent > 0) status = 'in-progress';
              
              return (
                <motion.div
                  key={thema.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <ThemeCard
                    id={thema.id}
                    title={thema.title}
                    description={thema.shortDescription}
                    icon={thema.icon}
                    progress={progressPercent}
                    totalSections={totalSections}
                    completedSections={completedSections}
                    status={status}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-subheadline">
            💚 Übermorgen rockt Capitano die Klassenarbeit! 💪
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
