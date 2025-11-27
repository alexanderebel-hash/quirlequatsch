'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Volume2, ChevronRight, Check, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { vocabulary, shuffleArray, Vocab } from '../data/vocabulary';

export default function LeniFranzoesischHoerenPage() {
  const [vocabList] = useState<Vocab[]>(() => shuffleArray(vocabulary).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasSpoken, setHasSpoken] = useState(false);
  const [spokenCount, setSpokenCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentVocab = vocabList[currentIndex];

  const speakFrench = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, []);

  const markAsSpoken = () => {
    setHasSpoken(true);
    setSpokenCount(prev => prev + 1);
    confetti({ particleCount: 20, spread: 50, origin: { y: 0.7 } });
  };

  const nextWord = () => {
    if (currentIndex < vocabList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setHasSpoken(false);
      setTimeout(() => speakFrench(vocabList[currentIndex + 1].fr), 500);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 100, spread: 70 });
    }
  };

  useState(() => {
    setTimeout(() => speakFrench(currentVocab.fr), 500);
  });

  if (isFinished) {
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">🎤</div>
        <h1 className="text-2xl font-bold mb-2">Super gesprochen!</h1>
        <p className="text-gray-500 mb-6">{spokenCount} Wörter geübt</p>
        <div className="space-y-3">
          <button onClick={() => window.location.reload()} className="w-full py-4 bg-blue-500 text-white rounded-xl font-bold">🔄 Nochmal üben</button>
          <Link href="/leni/franzoesisch"><button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold">Zurück</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/franzoesisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700"><ArrowLeft className="w-5 h-5" /></Link>
        <span className="font-medium text-gray-700">{currentIndex + 1}/{vocabList.length}</span>
        <span className="text-emerald-600 font-bold">{spokenCount} 🎤</span>
      </div>

      <div className="h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / vocabList.length) * 100}%` }} />
      </div>

      <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center mb-6">
        <div className="text-6xl mb-4">{currentVocab.icon}</div>
        <p className="text-lg text-white/80 mb-2">{currentVocab.de}</p>
        <div className="bg-white/20 rounded-2xl p-6 mt-4">
          <p className="text-3xl md:text-4xl font-bold">{currentVocab.fr}</p>
        </div>
      </motion.div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-center">
        <p className="text-orange-800">🎧 Höre zu und sprich das Wort laut nach!</p>
      </div>

      <button onClick={() => speakFrench(currentVocab.fr)} className="w-full py-5 bg-emerald-500 text-white rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors mb-4">
        <Volume2 className="w-7 h-7" />🔊 Vorlesen
      </button>

      {!hasSpoken ? (
        <button onClick={markAsSpoken} className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
          <Mic className="w-5 h-5" />✓ Habe ich nachgesprochen!
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-3">
          <div className="bg-emerald-100 text-emerald-800 rounded-xl p-4 text-center font-medium flex items-center justify-center gap-2">
            <Check className="w-5 h-5" /> Super gemacht!
          </div>
          <button onClick={nextWord} className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold flex items-center justify-center gap-2">
            Weiter <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
