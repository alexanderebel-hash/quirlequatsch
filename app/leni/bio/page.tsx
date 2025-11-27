'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Gamepad2, ListOrdered, Brain, FileText, Microscope, Play, Headphones, Video } from 'lucide-react';

// Media URLs aus Environment Variables
const MEDIA = {
  video: process.env.NEXT_PUBLIC_BIO_VIDEO_URL || null,
  podcast: process.env.NEXT_PUBLIC_BIO_PODCAST_URL || null,
};

const activities = [
  {
    href: '/leni/bio/lernen',
    icon: BookOpen,
    emoji: '📚',
    title: 'Lernkarten',
    description: 'Alle Infos durchblättern',
    color: 'from-violet-500 to-purple-600',
  },
  {
    href: '/leni/bio/memory',
    icon: Gamepad2,
    emoji: '🎴',
    title: 'Memory',
    description: 'Organellen & Funktionen zuordnen',
    color: 'from-pink-500 to-rose-600',
  },
  {
    href: '/leni/bio/sortieren',
    icon: ListOrdered,
    emoji: '🔀',
    title: 'Sortieren',
    description: 'Pro- vs. Eukaryoten einordnen',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    href: '/leni/bio/quiz',
    icon: Brain,
    emoji: '❓',
    title: 'Quiz',
    description: '10 Fragen zum Üben',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    href: '/leni/bio/test',
    icon: FileText,
    emoji: '📝',
    title: 'Mini-Test',
    description: 'Wie im echten Test',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function LeniBioPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
          <Microscope className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🔬 Zellen-Trainer
        </h1>
        <p className="text-gray-500">Bio-Test am Donnerstag • Pro-/Eukaryoten & Organellen</p>
      </div>

      {/* ============================================ */}
      {/* VIDEO SECTION */}
      {/* ============================================ */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-red-500" />
          🎬 Erklär-Video: Pro- & Eukaryoten
        </h2>
        
        {MEDIA.video ? (
          <div className="rounded-xl overflow-hidden bg-black aspect-video">
            <video 
              controls 
              className="w-full h-full"
              preload="metadata"
              playsInline
            >
              <source src={MEDIA.video} type="video/mp4" />
              Dein Browser unterstützt kein Video.
            </video>
          </div>
        ) : (
          <div className="rounded-xl bg-gray-100 aspect-video flex flex-col items-center justify-center text-gray-400">
            <Play className="w-12 h-12 mb-2 opacity-50" />
            <p className="text-sm">Video wird geladen...</p>
          </div>
        )}
        
        <p className="text-sm text-gray-500 mt-3">
          📺 Schau dir das Video an bevor du mit den Übungen startest!
        </p>
      </div>

      {/* ============================================ */}
      {/* PODCAST SECTION */}
      {/* ============================================ */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Headphones className="w-5 h-5 text-purple-500" />
          🎧 Podcast: Zwei Lebensstrategien im Vergleich
        </h2>
        
        {MEDIA.podcast ? (
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4">
            <audio 
              controls 
              className="w-full"
              preload="metadata"
              style={{ height: '48px' }}
            >
              <source src={MEDIA.podcast} type="audio/mp4" />
              <source src={MEDIA.podcast} type="audio/m4a" />
              Dein Browser unterstützt kein Audio.
            </audio>
            <p className="text-xs text-purple-600 mt-2 text-center">
              Prokaryoten & Eukaryoten - Zwei Lebensstrategien im Vergleich
            </p>
          </div>
        ) : (
          <div className="rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-200 rounded-xl flex items-center justify-center">
              <Headphones className="w-7 h-7 text-purple-500" />
            </div>
            <div>
              <p className="font-medium text-purple-800">Podcast wird geladen...</p>
              <p className="text-sm text-purple-600">Bald kannst du hier hören!</p>
            </div>
          </div>
        )}
        
        <p className="text-sm text-gray-500 mt-3">
          🎵 Perfekt zum Hören unterwegs oder beim Entspannen!
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">Dein Fortschritt</span>
          <span className="text-emerald-100">0/5 Aktivitäten</span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-[0%]" />
        </div>
      </div>

      {/* Themen-Überblick */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-3">📋 Was kommt dran?</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Prokaryoten vs. Eukaryoten
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Tierische vs. Pflanzliche Zellen
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Zellorganellen & ihre Funktionen
          </li>
        </ul>
      </div>

      {/* Aktivitäten */}
      <h2 className="font-semibold text-gray-800 mb-4">🎯 Übungen</h2>
      <div className="space-y-3">
        {activities.map((act) => (
          <Link key={act.href} href={act.href}>
            <div className={`bg-gradient-to-r ${act.color} rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]`}>
              <span className="text-3xl">{act.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold text-lg">{act.title}</p>
                <p className="text-white/80 text-sm">{act.description}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <act.icon className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
