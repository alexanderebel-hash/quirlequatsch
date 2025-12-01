'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Calculator, Brain, FileText, MessageSquare, Trophy } from 'lucide-react';

const modules = [
  {
    id: 1,
    href: '/lenny/mathe/sinuskosinus/grundlagen',
    icon: BookOpen,
    emoji: '📐',
    title: 'Grundlagen',
    subtitle: 'Das allgemeine Dreieck',
    description: 'Bezeichnungen, Winkel, Seiten - Das Fundament',
    difficulty: 1,
    xp: 50,
    color: 'from-blue-500 to-blue-600',
    locked: false,
  },
  {
    id: 2,
    href: '/lenny/mathe/sinuskosinus/sinussatz',
    icon: Calculator,
    emoji: '📏',
    title: 'Der Sinussatz',
    subtitle: 'Formel, Herleitung, Anwendung',
    description: 'Wenn du ein Pärchen hast: Seite + Gegen-Winkel',
    difficulty: 2,
    xp: 100,
    color: 'from-violet-500 to-purple-600',
    locked: false,
  },
  {
    id: 3,
    href: '/lenny/mathe/sinuskosinus/kosinussatz',
    icon: Calculator,
    emoji: '📐',
    title: 'Der Kosinussatz',
    subtitle: 'Formel, Herleitung, Anwendung',
    description: 'Pythagoras mit Extra-Steps - aber powerful',
    difficulty: 2,
    xp: 100,
    color: 'from-purple-500 to-pink-600',
    locked: false,
  },
  {
    id: 4,
    href: '/lenny/mathe/sinuskosinus/entscheidung',
    icon: Brain,
    emoji: '🤔',
    title: 'Wann welchen Satz?',
    subtitle: 'Die Entscheidung treffen',
    description: 'SSS, SWS, WSW - Der ultimative Guide',
    difficulty: 3,
    xp: 150,
    color: 'from-orange-500 to-red-600',
    locked: false,
  },
  {
    id: 5,
    href: '/lenny/mathe/sinuskosinus/textaufgaben',
    icon: MessageSquare,
    emoji: '🌍',
    title: 'Textaufgaben',
    subtitle: 'Real-World Anwendungen',
    description: 'Von Kirchtürmen bis Schiffen - praktisch anwenden',
    difficulty: 3,
    xp: 200,
    color: 'from-emerald-500 to-teal-600',
    locked: false,
  },
  {
    id: 6,
    href: '/lenny/mathe/sinuskosinus/simulation',
    icon: FileText,
    emoji: '📝',
    title: 'Klassenarbeit-Simulation',
    subtitle: '45 Minuten Test',
    description: 'Der finale Boss - zeig was du drauf hast',
    difficulty: 3,
    xp: 500,
    color: 'from-red-500 to-rose-600',
    locked: false,
  },
];

export default function SinusKosinusPage() {
  const completedModules = 0;
  const totalXP = 1100;
  const earnedXP = 0;

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto pb-20">
      {/* Header */}
      <Link href="/lenny/mathe" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück zu Mathe</span>
      </Link>

      {/* Title Section */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#5856D6] to-[#AF52DE] rounded-2xl mb-4">
          <span className="text-3xl">🔺</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Sinus- & Kosinussatz
        </h1>
        <p className="text-slate-500">Trigonometrie im allgemeinen Dreieck</p>
      </div>

      {/* Lernvideo Section - PFLICHT! */}
      <div className="bg-gradient-to-r from-[#5856D6] to-[#AF52DE] rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎬</span>
          <div>
            <h3 className="font-bold text-xl">Lernvideo: Sinus & Kosinus</h3>
            <p className="text-white/80 text-sm">Start hier. Verschafft dir den Überblick.</p>
          </div>
        </div>
        <div className="bg-black/20 rounded-xl overflow-hidden">
          <video 
            src="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/lenny/Sinus-_%26_Kosinussatz.mp4"
            controls
            className="w-full"
            preload="metadata"
          >
            Dein Browser unterstützt kein Video.
          </video>
        </div>
        <p className="text-sm text-white/70 mt-3">
          ⚡ Schau das Video, bevor du mit den Modulen startest
        </p>
      </div>

      {/* Podcast & PDF Section */}
      <div className="space-y-4 mb-6">
        {/* Podcast */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎧</span>
            <h3 className="font-bold text-slate-800">Podcast: Die universelle Dreiecksstrategie</h3>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4">
            <audio 
              controls 
              className="w-full"
              preload="metadata"
              style={{ height: '48px' }}
            >
              <source src="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/lenny/Sinus_Kosinussatz_Die_universelle_Dreiecksstrategie.m4a" type="audio/mp4" />
              Dein Browser unterstützt kein Audio.
            </audio>
            <p className="text-xs text-purple-600 mt-2 text-center">
              Sinus & Kosinus - Die universelle Dreiecksstrategie
            </p>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            💡 Perfekt zum Hören vor dem Lernen - verschafft dir den Überblick
          </p>
        </div>

        {/* PDF Guide */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📄</span>
            <h3 className="font-bold text-slate-800">Der ultimative Anti-Mathe Guide</h3>
          </div>
          <a 
            href="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/lenny/Der_ultimative_Anti-Mathe_Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-gradient-to-r from-[#5856D6] to-[#AF52DE] rounded-xl p-4 text-white hover:opacity-90 transition-opacity">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold mb-1">PDF zum Download</p>
                  <p className="text-sm text-white/80">Alle Formeln & Merkhilfen auf einen Blick</p>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </a>
          <p className="text-sm text-slate-500 mt-3">
            📱 Zum Ausdrucken oder auf dem Handy speichern
          </p>
        </div>
      </div>

      {/* Die Mathe-Bros Intro */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {/* Sinus-Sven */}
        <div className="bg-[#007AFF] rounded-xl p-4 text-white text-center">
          <div className="text-3xl mb-2">🧑‍🏫</div>
          <p className="font-bold text-sm mb-1">Sinus-Sven</p>
          <p className="text-xs text-white/70">Der Erklärer</p>
        </div>

        {/* Cosinus-Carlo */}
        <div className="bg-[#FF3B30] rounded-xl p-4 text-white text-center">
          <div className="text-3xl mb-2">🤌</div>
          <p className="font-bold text-sm mb-1">Cosinus-Carlo</p>
          <p className="text-xs text-white/70">Der Italiener</p>
        </div>

        {/* Tangens-Torsten */}
        <div className="bg-[#34C759] rounded-xl p-4 text-white text-center">
          <div className="text-3xl mb-2">😐</div>
          <p className="font-bold text-sm mb-1">Tangens-Torsten</p>
          <p className="text-xs text-white/70">Der Trockene</p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-slate-100 rounded-2xl p-4 mb-6">
        <p className="text-sm text-slate-700">
          <strong>Die Mathe-Bros helfen dir:</strong> Sven erklärt den Sinussatz, 
          Carlo den Kosinussatz, Torsten gibt allgemeine Tipps.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-slate-800">Dein Fortschritt</p>
            <p className="text-sm text-slate-500">{completedModules} von 6 Modulen</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-[#5856D6]">{earnedXP} / {totalXP} XP</p>
            <p className="text-sm text-slate-500">{Math.round((earnedXP / totalXP) * 100)}%</p>
          </div>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#5856D6] to-[#AF52DE] rounded-full transition-all duration-500"
            style={{ width: `${(earnedXP / totalXP) * 100}%` }}
          />
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-2xl font-bold text-[#5856D6]">6</p>
          <p className="text-xs text-slate-500">Module</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-2xl font-bold text-[#AF52DE]">~3h</p>
          <p className="text-xs text-slate-500">Lernzeit</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
          <p className="text-2xl font-bold text-[#FF9500]">{totalXP}</p>
          <p className="text-xs text-slate-500">Max XP</p>
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-3">
        <h2 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#5856D6]" />
          Die 6 Module
        </h2>

        {modules.map((module) => (
          <Link key={module.id} href={module.locked ? '#' : module.href}>
            <div 
              className={`
                bg-gradient-to-r ${module.color} rounded-2xl p-4 text-white 
                hover:shadow-lg transition-all active:scale-[0.98]
                ${module.locked ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="text-4xl">{module.emoji}</span>
                  {module.locked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xs">🔒</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-lg">{module.title}</p>
                    <div className="flex gap-1">
                      {[...Array(module.difficulty)].map((_, i) => (
                        <span key={i} className="text-xs">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-1">{module.subtitle}</p>
                  <p className="text-white/70 text-xs">{module.description}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur mb-1">
                    <module.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-white/80 font-medium">+{module.xp} XP</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Motivation */}
      <div className="mt-6 bg-slate-800 rounded-2xl p-5 text-white">
        <p className="text-sm text-slate-300 mb-2">💪 Lenny's Grind-Tipp</p>
        <p className="font-medium">
          Start mit Grundlagen, build up dein Wissen, destroy die Klassenarbeit-Simulation. 
          Das ist der Weg. Fr fr. 🎯
        </p>
      </div>
    </div>
  );
}
