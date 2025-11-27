'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface MemoryCard {
  id: string;
  content: string;
  pairId: string;
  type: 'present' | 'past';
  isFlipped: boolean;
  isMatched: boolean;
}

const verbPairs = [
  { id: '1', present: 'be', past: 'was/were' },
  { id: '2', present: 'catch', past: 'caught' },
  { id: '3', present: 'find', past: 'found' },
  { id: '4', present: 'run', past: 'ran' },
  { id: '5', present: 'see', past: 'saw' },
  { id: '6', present: 'take', past: 'took' },
  { id: '7', present: 'get', past: 'got' },
  { id: '8', present: 'throw', past: 'threw' },
];

export default function LeniEnglischMemoryPage() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime && !gameComplete) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, gameComplete]);

  const initializeGame = () => {
    const gameCards: MemoryCard[] = [];
    
    verbPairs.forEach((pair) => {
      gameCards.push({
        id: `${pair.id}-present`,
        content: pair.present,
        pairId: pair.id,
        type: 'present',
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${pair.id}-past`,
        content: pair.past,
        pairId: pair.id,
        type: 'past',
        isFlipped: false,
        isMatched: false,
      });
    });

    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameComplete(false);
    setStartTime(null);
    setElapsedTime(0);
  };

  const handleCardClick = useCallback((cardId: string) => {
    if (isLocked || gameComplete) return;
    if (!startTime) setStartTime(Date.now());

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
          setCards((prev) =>
            prev.map((c) => (c.pairId === first.pairId ? { ...c, isMatched: true } : c))
          );
          
          const newMatched = matchedPairs + 1;
          setMatchedPairs(newMatched);
          setFlippedCards([]);
          setIsLocked(false);

          confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });

          if (newMatched === verbPairs.length) {
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
  }, [cards, flippedCards, isLocked, gameComplete, matchedPairs, startTime]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/englisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">🎴 Verben Memory</h1>
        <button
          onClick={initializeGame}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6">
        <p className="text-indigo-800 text-sm">
          <strong>Aufgabe:</strong> Finde die Paare! Verbinde die Grundform (present) mit der Vergangenheitsform (past).
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-indigo-600">{moves}</p>
          <p className="text-xs text-gray-500">Züge</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-emerald-600">{matchedPairs}/{verbPairs.length}</p>
          <p className="text-xs text-gray-500">Paare</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xl font-bold text-blue-600">{formatTime(elapsedTime)}</p>
          <p className="text-xs text-gray-500">Zeit</p>
        </div>
      </div>

      {gameComplete && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 mb-6 text-white text-center"
        >
          <Trophy className="w-10 h-10 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-1">Super gemacht! 🎉</h2>
          <p className="text-emerald-100">{moves} Züge in {formatTime(elapsedTime)}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.03 } : {}}
            whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.97 } : {}}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-[3/4] cursor-pointer ${card.isMatched ? 'opacity-50' : ''}`}
          >
            <motion.div
              animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute inset-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-2xl">🇬🇧</span>
              </div>

              <div
                className={`
                  absolute inset-0 rounded-xl p-2 md:p-3
                  flex items-center justify-center text-center shadow-md
                  ${card.type === 'present' 
                    ? 'bg-white border-2 border-yellow-400' 
                    : 'bg-pink-50 border-2 border-pink-400'
                  }
                  ${card.isMatched ? 'border-emerald-400 bg-emerald-50' : ''}
                `}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div>
                  <span className="text-xs text-gray-500 block mb-1">
                    {card.type === 'present' ? 'Present' : 'Past'}
                  </span>
                  <span className="text-sm md:text-base font-bold">
                    {card.content}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
