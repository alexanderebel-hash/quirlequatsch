'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    id: 1,
    category: 'Grundlagen',
    front: '🦠 Was sind Prokaryoten?',
    back: 'Zellen OHNE echten Zellkern. Die DNA liegt frei im Zytoplasma (Nucleoid).\n\nBeispiele: Bakterien, Archaeen\n\nMerke: PRO-blem = Kein Kern!',
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: 2,
    category: 'Grundlagen',
    front: '🧬 Was sind Eukaryoten?',
    back: 'Zellen MIT echtem Zellkern. Die DNA ist in einer Membran geschützt.\n\nBeispiele: Menschen, Tiere, Pflanzen, Pilze\n\nMerke: EU-ropäische Luxus-Zelle!',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    category: 'Unterschiede',
    front: '🐾🌱 Was haben nur Pflanzenzellen?',
    back: '3 Dinge:\n\n1. Zellwand (aus Cellulose) - gibt Stabilität\n2. Chloroplasten - für Fotosynthese\n3. Große Zentralvakuole - speichert Wasser\n\nMerke: ZCV!',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    category: 'Organellen',
    front: '⚡ Was sind Mitochondrien?',
    back: 'Das "Kraftwerk der Zelle"!\n\nAufgabe: Produzieren Energie (ATP)\n\nVorkommen: Alle Eukaryoten (Tier + Pflanze)\n\nMinecraft: Wie Öfen, die Energie liefern',
    color: 'from-red-400 to-rose-500',
  },
  {
    id: 5,
    category: 'Organellen',
    front: '🌿 Was sind Chloroplasten?',
    back: 'Die "Solaranlagen" der Pflanzenzelle!\n\nAufgabe: Fotosynthese\nLicht + CO₂ + Wasser → Zucker + O₂\n\nVorkommen: NUR Pflanzenzellen!\n\nDarum sind Pflanzen grün!',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 6,
    category: 'Organellen',
    front: '🔧 Was sind Ribosomen?',
    back: 'Die "Proteinfabriken"!\n\nAufgabe: Bauen Proteine nach DNA-Anleitung\n\nBesonderheit: Gibt es in ALLEN Zellen!\n(Auch Prokaryoten!)\n\nMinecraft: Wie Crafting Tables',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 7,
    category: 'Vergleich',
    front: '📏 Wie groß sind Zellen?',
    back: 'Prokaryoten: 1-10 µm (klein)\nEukaryoten: 10-100 µm (größer)\n\nEukaryoten sind also 10x größer!\n\n(µm = Mikrometer = 0,001 mm)',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 8,
    category: 'Vergleich',
    front: '🔄 Wie vermehren sich Zellen?',
    back: 'Prokaryoten:\nBinäre Fission (einfache Teilung)\n\nEukaryoten:\nMitose (Körperzellen)\nMeiose (Geschlechtszellen)\n\nKomplexer = komplexere Teilung!',
    color: 'from-pink-400 to-fuchsia-500',
  },
];

export default function LeniLernenPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const card = cards[currentIndex];

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 100);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 100);
    }
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/bio" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <span className="font-medium text-gray-700">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* Category Badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          {card.category}
        </span>
      </div>

      {/* Flashcard */}
      <div 
        className="relative h-[400px] md:h-[450px] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <div 
              className={`
                w-full h-full rounded-3xl shadow-xl p-6 md:p-8
                flex flex-col items-center justify-center text-center
                transition-transform duration-500
                bg-gradient-to-br ${card.color} text-white
                ${isFlipped ? 'scale-x-[-1]' : ''}
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={isFlipped ? 'scale-x-[-1]' : ''}>
                {isFlipped ? (
                  <div className="text-left">
                    <p className="text-base md:text-lg whitespace-pre-line leading-relaxed">
                      {card.back}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl md:text-2xl font-bold">
                      {card.front}
                    </p>
                    <p className="text-white/70 text-sm mt-4">
                      Tippe zum Umdrehen
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-xl font-medium
            ${currentIndex === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
          Zurück
        </button>

        <button
          onClick={() => { setCurrentIndex(0); setIsFlipped(false); }}
          className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={nextCard}
          disabled={currentIndex === cards.length - 1}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-xl font-medium
            ${currentIndex === cards.length - 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }
          `}
        >
          Weiter
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Card Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentIndex(i); setIsFlipped(false); }}
            className={`
              w-2.5 h-2.5 rounded-full transition-all
              ${i === currentIndex ? 'bg-purple-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
