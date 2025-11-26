'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface Card {
  id: string;
  content: string;
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const pairs = [
  { id: '1', term: '🏛️ Zellkern', definition: 'Enthält die DNA' },
  { id: '2', term: '⚡ Mitochondrien', definition: 'Kraftwerk (Energie)' },
  { id: '3', term: '🌿 Chloroplasten', definition: 'Fotosynthese' },
  { id: '4', term: '🔧 Ribosomen', definition: 'Bauen Proteine' },
  { id: '5', term: '💧 Vakuole', definition: 'Speichert Wasser' },
  { id: '6', term: '🧱 Zellwand', definition: 'Schutz (Pflanzen)' },
];

export default function LeniMemoryPage() {
  const [cards, setCards] = useState<Card[]>(() => {
    const gameCards: Card[] = [];
    pairs.forEach((pair) => {
      gameCards.push({
        id: `${pair.id}-term`,
        content: pair.term,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${pair.id}-def`,
        content: pair.definition,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
    });
    return gameCards.sort(() => Math.random() - 0.5);
  });

  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const handleCardClick = (cardId: string) => {
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

      if (first.pairId === second.pairId) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.pairId === first.pairId ? { ...c, isMatched: true } : c))
          );
          
          const newMatched = matchedPairs + 1;
          setMatchedPairs(newMatched);
          setFlippedCards([]);
          setIsLocked(false);

          confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });

          if (newMatched === pairs.length) {
            setGameComplete(true);
            confetti({ particleCount: 100, spread: 70 });
          }
        }, 400);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c))
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const initializeGame = () => {
    const gameCards: Card[] = [];
    pairs.forEach((pair) => {
      gameCards.push({
        id: `${pair.id}-term`,
        content: pair.term,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${pair.id}-def`,
        content: pair.definition,
        pairId: pair.id,
        isFlipped: false,
        isMatched: false,
      });
    });
    setCards(gameCards.sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameComplete(false);
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/bio" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">🎴 Memory</h1>
        <button
          onClick={initializeGame}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-purple-600">{moves}</p>
          <p className="text-xs text-gray-500">Züge</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-emerald-600">{matchedPairs}/{pairs.length}</p>
          <p className="text-xs text-gray-500">Paare</p>
        </div>
      </div>

      {/* Game Complete */}
      {gameComplete && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 mb-6 text-white text-center"
        >
          <Trophy className="w-10 h-10 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-1">Super gemacht! 🎉</h2>
          <p className="text-emerald-100">{moves} Züge</p>
        </motion.div>
      )}

      {/* Memory Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.03 } : {}}
            whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.97 } : {}}
            onClick={() => handleCardClick(card.id)}
            className={`
              aspect-[3/4] cursor-pointer
              ${card.isMatched ? 'opacity-50' : ''}
            `}
          >
            <div className="relative w-full h-full">
              {/* Card */}
              <div
                className={`
                  absolute inset-0 rounded-xl p-2 md:p-3
                  flex items-center justify-center text-center shadow-md
                  transition-all duration-300
                  ${!card.isFlipped && !card.isMatched
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-600'
                    : card.isMatched
                      ? 'bg-emerald-50 border-2 border-emerald-400'
                      : 'bg-white border-2 border-purple-300'
                  }
                `}
              >
                {!card.isFlipped && !card.isMatched ? (
                  <span className="text-3xl">🔬</span>
                ) : (
                  <span className="text-xs md:text-sm leading-tight font-medium text-gray-800">
                    {card.content}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
