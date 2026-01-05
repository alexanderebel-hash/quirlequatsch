'use client';

import Link from 'next/link';
import { ArrowLeft, Play, Headphones, Video, ChevronRight, Zap } from 'lucide-react';

// Media URLs aus Environment Variables
const MEDIA = {
  video: process.env.NEXT_PUBLIC_BIO_VIDEO_URL || null,
  podcast: process.env.NEXT_PUBLIC_BIO_PODCAST_URL || null,
};

// Nummerierter Lernpfad
const modules = [
  { id: 1, title: 'Lernkarten', desc: 'Alle Infos durchblättern', href: '/leni/bio/lernen', xp: 20, done: true },
  { id: 2, title: 'Memory', desc: 'Organellen zuordnen', href: '/leni/bio/memory', xp: 25, done: true },
  { id: 3, title: 'Sortieren', desc: 'Pro- vs. Eukaryoten', href: '/leni/bio/sortieren', xp: 25, done: true },
  { id: 4, title: 'Quiz', desc: '10 Fragen zum Üben', href: '/leni/bio/quiz', xp: 30, done: false, current: true },
  { id: 5, title: 'Mini-Test', desc: 'Wie im echten Test', href: '/leni/bio/test', xp: 50, done: false },
];

export default function LeniBioPage() {
  const completedCount = modules.filter(m => m.done).length;
  const currentModule = modules.find(m => m.current) || modules.find(m => !m.done);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-6">
        <Link href="/leni" className="text-emerald-200 text-sm mb-2 inline-block">
          ← Zurück
        </Link>
        <h1 className="text-2xl font-bold">🔬 Zellen-Trainer</h1>
        <p className="text-emerald-100">Bio-Test • Pro-/Eukaryoten & Organellen</p>
      </div>

      <div className="px-4 py-4">

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
          <span className="text-emerald-100">{completedCount}/{modules.length} Module</span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${(completedCount / modules.length) * 100}%` }} />
        </div>
      </div>

      {/* Nummerierter Lernpfad */}
      <h2 className="font-semibold text-gray-800 mb-4">🎯 Dein Lernpfad</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {modules.map((mod, i) => {
          const isLocked = !mod.done && !mod.current && i > 0 && !modules[i - 1].done;

          return mod.current ? (
            <Link key={mod.id} href={mod.href}>
              <div className="p-3 flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {mod.id}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{mod.title}</p>
                  <p className="text-xs text-emerald-600 font-medium">Jetzt lernen!</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-100 rounded-full px-2 py-1">
                  <Zap className="w-3 h-3 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700">+{mod.xp}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-emerald-600" />
              </div>
            </Link>
          ) : mod.done ? (
            <Link key={mod.id} href={mod.href}>
              <div className="p-3 flex items-center gap-3 hover:bg-gray-50">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{mod.title}</p>
                  <p className="text-xs text-gray-500">{mod.desc}</p>
                </div>
                <span className="text-green-500 text-xs font-medium">+{mod.xp} XP</span>
              </div>
            </Link>
          ) : (
            <div key={mod.id} className={`p-3 flex items-center gap-3 ${isLocked ? 'opacity-50' : ''}`}>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-bold">
                {mod.id}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-600 text-sm">{mod.title}</p>
                <p className="text-xs text-gray-400">{mod.desc}</p>
              </div>
              {isLocked && <span className="text-sm">🔒</span>}
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
