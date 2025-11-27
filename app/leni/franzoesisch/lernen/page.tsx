'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw, Volume2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { vocabulary, categories, getVocabByCategory, shuffleArray, Vocab } from '../data/vocabulary';

export default function LeniFranzoesischLernenPage() {
  const [category, setCategory] = useState('all');
  const [vocabList, setVocabList] = useState<Vocab[]>(() => shuffleArray(vocabulary));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);

  const currentVocab = vocabList[currentIndex];

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const newList = shuffleArray(getVocabByCategory(newCategory));
    setVocabList(newList);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (currentIndex < vocabList.length - 1) {
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

  const markAsKnown = () => {
    setMasteredCount(prev => prev + 1);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    nextCard();
  };

  const speakFrench = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, []);

  const restart = () => {
    setVocabList(shuffleArray(getVocabByCategory(category)));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/franzoesisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <span className="text-gray-500 font-medium">
          {currentIndex + 1} / {vocabList.length}
        </span>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${category === cat.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / vocabList.length) * 100}%` }} />
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
          ✅ {masteredCount} gelernt
        </div>
      </div>

      <div className="relative h-[350px] md:h-[400px] cursor-pointer perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{ opacity: 0, x: direction * 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -direction * 100 }} transition={{ duration: 0.2 }} className="absolute inset-0">
            <div className={`w-full h-full rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 bg-gradient-to-br from-blue-500 to-indigo-600 text-white ${isFlipped ? 'scale-x-[-1]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
              <div className={isFlipped ? 'scale-x-[-1]' : ''}>
                <div className="text-5xl mb-4">{currentVocab.icon}</div>
                {isFlipped ? (
                  <>
                    <p className="text-2xl md:text-3xl font-bold mb-2">{currentVocab.fr}</p>
                    <p className="text-white/70 text-lg">{currentVocab.de}</p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl md:text-3xl font-bold mb-2">{currentVocab.de}</p>
                    <p className="text-white/70 text-sm mt-4">Tippe zum Umdrehen</p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={(e) => { e.stopPropagation(); speakFrench(currentVocab.fr); }} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors">
          <Volume2 className="w-5 h-5" /> Vorlesen
        </button>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button onClick={prevCard} disabled={currentIndex === 0} className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${currentIndex === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
          <ChevronLeft className="w-5 h-5" /> Zurück
        </button>

        <button onClick={markAsKnown} className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-emerald-500 text-white hover:bg-emerald-600">
          <Check className="w-5 h-5" /> Kann ich!
        </button>

        <button onClick={nextCard} disabled={currentIndex === vocabList.length - 1} className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium ${currentIndex === vocabList.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
          Weiter <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={restart} className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <RotateCcw className="w-4 h-4" /> Neu mischen
        </button>
      </div>
    </div>
  );
}
