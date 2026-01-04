'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Gamepad2, Brain, Keyboard, Headphones, Play, Video } from 'lucide-react';
import { vocabulary, categories } from './data/vocabulary';

const MEDIA = {
  video: process.env.NEXT_PUBLIC_FRANZOESISCH_VIDEO_URL || null,
  podcast: process.env.NEXT_PUBLIC_FRANZOESISCH_PODCAST_URL || null,
};

const activities = [
  {
    href: '/leni/franzoesisch/lernen',
    icon: BookOpen,
    emoji: '📇',
    title: 'Lernkarten',
    description: 'Vokabeln durchblättern',
    color: 'from-violet-500 to-purple-600',
  },
  {
    href: '/leni/franzoesisch/memory',
    icon: Gamepad2,
    emoji: '🎯',
    title: 'Memory',
    description: 'Paare finden',
    color: 'from-pink-500 to-rose-600',
  },
  {
    href: '/leni/franzoesisch/quiz',
    icon: Brain,
    emoji: '❓',
    title: 'Quiz',
    description: 'Multiple Choice',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    href: '/leni/franzoesisch/tippen',
    icon: Keyboard,
    emoji: '⌨️',
    title: 'Tippen',
    description: 'Übersetzung eintippen',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    href: '/leni/franzoesisch/hoeren',
    icon: Headphones,
    emoji: '🎧',
    title: 'Hören & Sprechen',
    description: 'Aussprache üben',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function LeniFranzoesischPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
          <span className="text-3xl">🇫🇷</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Vokabeltrainer Unité 1
        </h1>
        <p className="text-gray-500">{vocabulary.length} Vokabeln zum Lernen</p>
      </div>

      {/* Video Section */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-red-500" />
          🎬 Erklär-Video: Unité 1
        </h2>
        
        {MEDIA.video ? (
          <div className="rounded-xl overflow-hidden bg-black aspect-video">
            <video controls className="w-full h-full" preload="metadata" playsInline>
              <source src={MEDIA.video} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="rounded-xl bg-gray-100 aspect-video flex flex-col items-center justify-center text-gray-400">
            <Play className="w-12 h-12 mb-2 opacity-50" />
            <p className="text-sm">Video wird geladen...</p>
          </div>
        )}
      </div>

      {/* Podcast Section */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Headphones className="w-5 h-5 text-purple-500" />
          🎧 Podcast: Vokabeln hören
        </h2>
        
        {MEDIA.podcast ? (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <audio controls className="w-full" preload="metadata" style={{ height: '48px' }}>
              <source src={MEDIA.podcast} type="audio/mpeg" />
            </audio>
          </div>
        ) : (
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-200 rounded-xl flex items-center justify-center">
              <Headphones className="w-7 h-7 text-blue-500" />
            </div>
            <div>
              <p className="font-medium text-blue-800">Podcast wird geladen...</p>
              <p className="text-sm text-blue-600">Bald kannst du hier hören!</p>
            </div>
          </div>
        )}
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">Dein Fortschritt</span>
          <span className="text-blue-100">0/{vocabulary.length} gelernt</span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-[0%]" />
        </div>
      </div>

      {/* Interview Module - Prüfungsvorbereitung */}
      <Link href="/leni/franzoesisch/interview">
        <div className="bg-gradient-to-r from-red-500 via-white to-blue-600 rounded-2xl p-1 mb-6 hover:shadow-xl transition-shadow active:scale-[0.98]">
          <div className="bg-white rounded-xl p-5">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                🇫🇷
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">Se présenter – Mündliche Prüfung</h3>
                <p className="text-sm text-gray-600">Partner-Interview Vorbereitung</p>
              </div>
              <span className="text-red-600 text-2xl">→</span>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-3">
              <p className="text-yellow-800 text-sm">
                <span className="font-semibold">📝 Prüfungsformat:</span> Fragen stellen & Antworten geben
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Kategorien */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-3">📚 Kategorien</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span 
              key={cat.id} 
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {cat.label} ({cat.count})
            </span>
          ))}
        </div>
      </div>

      {/* 15-Minuten-Sprint Info */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-5 mb-6">
        <h3 className="font-bold text-yellow-800 mb-2">⏱️ 15-Minuten-Sprints!</h3>
        <p className="text-yellow-700 text-sm">
          Lerne in kurzen Einheiten! Nach 15 Minuten: Bewegungspause machen! 💪
        </p>
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
