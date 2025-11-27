'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { vocabulary, shuffleArray, Vocab } from '../data/vocabulary';

interface MemoryCard {
  id: string;
  content: string;
  pairId: string;
  type: 'de' | 'fr';
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function LeniFranzoesischMemoryPage() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [pairCount, setPairCount] = useState(6);

  const initializeGame = useCallback(() => {
    const selectedVocab = shuffleArray(vocabulary).slice(0, pairCount);
    const gameCards: MemoryCard[] = [];
    
    selectedVocab.forEach((vocab) => {
      gameCards.push({ id: `${vocab.id}-de`, content: vocab.de, pairId: vocab.id, type: 'de', icon: vocab.icon, isFlipped: false, isMatched: false });
      gameCards.push({ id: `${vocab.id}-fr`, content: vocab.fr, pairId: vocab.id, type: 'fr', icon: vocab.icon, isFlipped: false, isMatched: false });
    });

    setCards(shuffleArray(gameCards));
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameComplete(false);
  }, [pairCount]);

  useEffect(() => { initializeGame(); }, [initializeGame]);

  const handleCardClick = useCallback((cardId: string) => {
    if (isLocked || gameComplete) return;
    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);
    setCards((prev) => prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)));

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      setIsLocked(true);
      const [firstId, secondId] = newFlipped;
      const first = cards.find((c) => c.id === firstId)!;
      const second = cards.find((c) => c.id === secondId)!;

      if (first.pairId === second.pairId && first.type !== second.type) {
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (c.pairId === first.pairId ? { ...c, isMatched: true } : c)));
          const newMatched = matchedPairs + 1;
          setMatchedPairs(newMatched);
          setFlippedCards([]);
          setIsLocked(false);
          confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
          if (newMatched === pairCount) { setGameComplete(true); confetti({ particleCount: 100, spread: 70 }); }
        }, 400);
      } else {
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c)));
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  }, [cards, flippedCards, isLocked, gameComplete, matchedPairs, pairCount]);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/franzoesisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" /><span>Zurück</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">🎯 Vokabel-Memory</h1>
        <button onClick={initializeGame} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600">
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 mb-4 justify-center">
        {[6, 8, 10].map((count) => (
          <button key={count} onClick={() => setPairCount(count)} className={`px-3 py-1.5 rounded-full text-sm font-medium ${pairCount === count ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {count} Paare
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-blue-600">{moves}</p><p className="text-xs text-gray-500">Züge</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-emerald-600">{matchedPairs}/{pairCount}</p><p className="text-xs text-gray-500">Paare</p>
        </div>
      </div>

      {gameComplete && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 mb-6 text-white text-center">
          <Trophy className="w-10 h-10 mx-auto mb-2" /><h2 className="text-xl font-bold mb-1">Bravo! 🎉</h2><p className="text-emerald-100">{moves} Züge gebraucht</p>
        </motion.div>
      )}

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {cards.map((card) => (
          <motion.div key={card.id} whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.03 } : {}} whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.97 } : {}} onClick={() => handleCardClick(card.id)} className={`aspect-[3/4] cursor-pointer ${card.isMatched ? 'opacity-50' : ''}`}>
            <motion.div animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }} transition={{ duration: 0.4 }} className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md" style={{ backfaceVisibility: 'hidden' }}>
                <span className="text-2xl">🇫🇷</span>
              </div>
              <div className={`absolute inset-0 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-md ${card.type === 'de' ? 'bg-white border-2 border-yellow-400' : 'bg-blue-50 border-2 border-blue-400'} ${card.isMatched ? 'border-emerald-400 bg-emerald-50' : ''}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <span className="text-lg mb-1">{card.icon}</span>
                <span className="text-xs md:text-sm font-medium leading-tight">{card.content}</span>
                <span className="text-[10px] text-gray-400 mt-1">{card.type === 'de' ? '🇩🇪' : '🇫🇷'}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
