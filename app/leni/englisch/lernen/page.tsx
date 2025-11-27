'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    id: 1,
    category: 'Simple Present',
    front: '⏰ Simple Present - Was IMMER passiert',
    back: 'Für Gewohnheiten, Routinen & Fakten!\n\n🎬 K-POP Beispiel:\n"The demon hunters always protect the city."\n"Minji usually sings before every battle."\n\n✅ Signalwörter: always, usually, often, every day',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 2,
    category: 'Simple Present',
    front: '🔧 Simple Present - Bildung',
    back: '✅ Aussage: Grundform (he/she/it + -s/-es)\nI play → He plays → She goes\n\n❌ Verneinung: don\'t / doesn\'t + Grundform\nI don\'t like → She doesn\'t like\n\n❓ Frage: Do/Does + Subjekt + Grundform?\nDo you play? → Does he play?',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 3,
    category: 'Present Progressive',
    front: '▶️ Present Progressive - Was GERADE passiert',
    back: 'Für Handlungen die JETZT gerade passieren!\n\n🎬 K-POP Beispiel:\n"Look! The demon is attacking the concert hall!"\n"Minji is singing her power song right now."\n\n✅ Signalwörter: now, right now, at the moment, Look!, Listen!',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 4,
    category: 'Present Progressive',
    front: '🔧 Present Progressive - Bildung',
    back: '✅ Formel: am/is/are + Verb-ing\nI am reading → He is reading → They are reading\n\n❌ Verneinung: am/is/are + not + Verb-ing\nShe isn\'t watching → They aren\'t playing\n\n❓ Frage: Am/Is/Are + Subjekt + Verb-ing?\nIs he reading? → Are they playing?',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 5,
    category: 'Present Progressive',
    front: '⚠️ -ing Rechtschreibung',
    back: '1. Stummes -e fällt weg:\nmake → making, write → writing\n\n2. CVC-Verdopplung (betonte Endung):\nstop → stopping, run → running\n\n3. -ie wird zu -ying:\nlie → lying, die → dying',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 6,
    category: 'Simple Past',
    front: '⏮️ Simple Past - Was schon VORBEI ist',
    back: 'Für abgeschlossene Handlungen in der Vergangenheit!\n\n🎬 K-POP Beispiel:\n"Last year, the first demon appeared in Seoul."\n"Yesterday, Joon found the legendary microphone."\n\n✅ Signalwörter: yesterday, last week, ago, in 2023',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 7,
    category: 'Simple Past',
    front: '🔧 Simple Past - Bildung (regelmäßig)',
    back: '✅ Regel: Verb + -ed\nwalk → walked, play → played\n\n⚠️ Rechtschreibung:\n• Stummes -e → nur +d: move → moved\n• Konsonant + y → -ied: study → studied\n• CVC → Verdopplung: stop → stopped',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 8,
    category: 'Simple Past',
    front: '🔧 Simple Past - Verneinung & Fragen',
    back: '❌ Verneinung: didn\'t + Grundform\nHe didn\'t see the cat.\n⚠️ NICHT: He didn\'t saw!\n\n❓ Frage: Did + Subjekt + Grundform?\nDid they run? → Yes, they did. / No, they didn\'t.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 9,
    category: 'Simple Past',
    front: '📖 Das Verb "be" im Simple Past',
    back: 'I / he / she / it → was\nyou / we / they → were\n\n✅ Beispiele:\nI was tired. → They were late.\nWas he happy? → Yes, he was.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 10,
    category: 'Vergleich',
    front: '🎯 Alle 3 Zeitformen - Merkregel',
    back: '🎬 K-POP Demon Hunters Merkregel:\n\n⏰ Simple Present = Die REGELN der Welt\n(was IMMER gilt)\n\n▶️ Present Progressive = Die ACTION-SZENE\n(was JETZT auf dem Bildschirm läuft)\n\n⏮️ Simple Past = Der RÜCKBLICK\n(wie die Geschichte begann)',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 11,
    category: 'Prüf-Trick',
    front: '💡 Welche Zeitform? Der Prüf-Trick!',
    back: 'Frag dich:\n\n1. Gewohnheit oder "immer"?\n→ Simple Present ⏰\n\n2. Gerade jetzt / temporär?\n→ Present Progressive ▶️\n\n3. Vergangenheit / abgeschlossen?\n→ Simple Past ⏮️',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function LeniEnglischLernenPage() {
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
        <Link href="/leni/englisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <span className="text-gray-500 font-medium">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* Category Badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
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
                    <p className="text-sm md:text-base whitespace-pre-line leading-relaxed">
                      {card.back}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg md:text-xl font-bold">
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
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
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
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }
          `}
        >
          Weiter
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Card Dots */}
      <div className="flex justify-center gap-1.5 mt-6 flex-wrap">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentIndex(i); setIsFlipped(false); }}
            className={`
              w-2 h-2 rounded-full transition-all
              ${i === currentIndex ? 'bg-indigo-500 w-5' : 'bg-gray-300 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
