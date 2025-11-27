'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const kinder = [
  {
    id: 'lilly',
    name: 'Lilly',
    klasse: '4. Klasse',
    mascot: '🦄',
    weltName: "Lilly's Zauber-Lernwelt",
    borderColor: 'border-pink-500',
    bgColor: 'bg-pink-50',
    description: 'Lesen, Schreiben, Rechnen',
    active: false,
  },
  {
    id: 'milan',
    name: 'Milan',
    klasse: '5. Klasse',
    mascot: '🦖',
    weltName: "Capitano's Lernwelt",
    borderColor: 'border-green-500',
    bgColor: 'bg-green-50',
    description: 'Biologie & NaWi',
    active: true,
  },
  {
    id: 'leni',
    name: 'Leni',
    klasse: '7. Klasse',
    mascot: '🦋',
    weltName: "Leni's Lernlounge",
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50',
    description: 'Mathe & Englisch',
    active: true,
  },
  {
    id: 'lenny',
    name: 'Lenny',
    klasse: '10. Klasse',
    mascot: '🚀',
    weltName: "Lenny's Study Hub",
    borderColor: 'border-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Abi-Vorbereitung',
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

      {/* Kinder-Auswahl */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl w-full">
          {kinder.map((kind, index) => (
            <motion.div
              key={kind.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {kind.active ? (
                <Link 
                  href={`/${kind.id}`}
                  aria-label={`${kind.name}'s Lernwelt öffnen, ${kind.klasse}`}
                >
                  <div className={`
                    relative overflow-hidden
                    rounded-2xl
                    bg-white
                    ${kind.borderColor} border-l-4
                    p-5 md:p-6
                    text-center
                    shadow-sm hover:shadow-md
                    transition-shadow duration-200
                    cursor-pointer
                    min-h-[220px] md:min-h-[280px] lg:min-h-[300px]
                    flex flex-col items-center justify-center
                  `}>
                    {/* Mascot Icon Container */}
                    <div className={`w-16 h-16 ${kind.bgColor} rounded-2xl flex items-center justify-center mb-3`}>
                      <span className="text-4xl">{kind.mascot}</span>
                    </div>
                    
                    {/* Name */}
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                      {kind.name}
                    </h2>
                    
                    {/* Klasse */}
                    <p className="text-sm text-gray-500 mb-2">
                      {kind.klasse}
                    </p>
                    
                    {/* Welt-Name */}
                    <p className="text-xs md:text-sm text-gray-400">
                      {kind.weltName}
                    </p>
                  </div>
                </Link>
              ) : (
                <div 
                  role="button"
                  aria-disabled="true"
                  aria-label={`${kind.name}, ${kind.klasse} - Bald verfügbar`}
                  className={`
                  relative overflow-hidden
                  rounded-2xl
                  bg-white
                  border-2 border-dashed border-gray-200
                  p-5 md:p-6
                  text-center
                  min-h-[220px] md:min-h-[280px] lg:min-h-[300px]
                  flex flex-col items-center justify-center
                  opacity-60
                `}>
                  {/* Mascot */}
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-4xl">{kind.mascot}</span>
                  </div>
                  
                  {/* Name */}
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-1">
                    {kind.name}
                  </h2>
                  
                  {/* Klasse */}
                  <p className="text-sm text-gray-500 mb-2">
                    {kind.klasse}
                  </p>
                  
                  {/* Status */}
                  <p className="text-xs text-gray-400">
                    {kind.description}
                  </p>

                  {/* Lock Icon */}
                  <div className="mt-3">
                    <span className="text-2xl">🔒</span>
                  </div>
                  
                  <p className="text-xs text-gray-600 mt-1">Kommt bald</p>
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
