'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const kinder = [
  {
    id: 'lilly',
    name: 'Lilly',
    klasse: '4. Klasse',
    emoji: '💖',
    mascot: '🦄',
    weltName: "Lilly's Zauber-Lernwelt",
    color: 'from-pink-400 via-pink-500 to-rose-500',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    description: 'Lesen, Schreiben, Rechnen',
    style: 'Magisch & Bunt ✨',
    active: false,
  },
  {
    id: 'milan',
    name: 'Milan',
    klasse: '5. Klasse',
    emoji: '💚',
    mascot: '🦖',
    weltName: "Capitano's Lernwelt",
    color: 'from-green-500 via-green-600 to-emerald-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    description: 'Biologie & NaWi',
    style: 'HULK SMASH! 💪',
    active: true,
  },
  {
    id: 'leni',
    name: 'Leni',
    klasse: '7. Klasse',
    emoji: '💜',
    mascot: '🦋',
    weltName: "Leni's Lernlounge",
    color: 'from-purple-500 via-violet-500 to-indigo-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    description: 'Mathe & Englisch',
    style: 'Modern & Elegant',
    active: true,
  },
  {
    id: 'lenny',
    name: 'Lenny',
    klasse: '10. Klasse',
    emoji: '💙',
    mascot: '🚀',
    weltName: "Lenny's Study Hub",
    color: 'from-slate-700 via-blue-600 to-cyan-600',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-300',
    description: 'Abi-Vorbereitung',
    style: 'Clean & Fokussiert',
    active: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            🎓 LernBoost
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Wer lernt heute?
          </p>
        </div>
      </header>

      {/* Kinder-Auswahl - Sortiert nach Alter */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl w-full">
          {kinder.map((kind, index) => (
            <motion.div
              key={kind.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {kind.active ? (
                <Link href={`/${kind.id}`}>
                  <div className={`
                    relative overflow-hidden
                    rounded-3xl md:rounded-[2rem]
                    bg-gradient-to-br ${kind.color}
                    p-5 md:p-6 lg:p-8
                    text-white text-center
                    shadow-lg hover:shadow-2xl
                    transform hover:scale-105
                    transition-all duration-300
                    cursor-pointer
                    min-h-[220px] md:min-h-[280px] lg:min-h-[320px]
                    flex flex-col items-center justify-center
                  `}>
                    {/* Mascot */}
                    <span className="text-5xl md:text-6xl lg:text-7xl mb-2">
                      {kind.mascot}
                    </span>
                    
                    {/* Name & Klasse */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      {kind.name}
                    </h2>
                    <p className="text-sm md:text-base opacity-80 mb-2">
                      {kind.klasse}
                    </p>
                    
                    {/* Welt-Name */}
                    <p className="text-xs md:text-sm lg:text-base opacity-90 font-medium">
                      {kind.weltName}
                    </p>
                    
                    {/* Style */}
                    <p className="text-xs opacity-75 mt-1">
                      {kind.style}
                    </p>

                    {/* Active Indicator */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 rounded-full px-2 py-1">
                      <span className="text-xs font-bold">▶️ START</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className={`
                  relative overflow-hidden
                  rounded-3xl md:rounded-[2rem]
                  ${kind.bgColor} ${kind.borderColor}
                  border-2 border-dashed
                  p-5 md:p-6 lg:p-8
                  text-center
                  min-h-[220px] md:min-h-[280px] lg:min-h-[320px]
                  flex flex-col items-center justify-center
                  opacity-70 hover:opacity-90 transition-opacity
                `}>
                  {/* Mascot */}
                  <span className="text-5xl md:text-6xl lg:text-7xl mb-2 grayscale-[30%]">
                    {kind.mascot}
                  </span>
                  
                  {/* Name & Klasse */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
                    {kind.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 mb-2">
                    {kind.klasse}
                  </p>
                  
                  {/* Status */}
                  <p className="text-xs md:text-sm text-gray-400">
                    {kind.description}
                  </p>

                  {/* Coming Soon Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <span className="text-lg md:text-xl">🔒</span>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-2">Kommt bald!</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400 text-sm">
        Made with ❤️ für unsere Kinder
      </footer>
    </div>
  );
}
