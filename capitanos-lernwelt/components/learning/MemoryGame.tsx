'use client';

import { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Trophy, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useUserStore } from '@/lib/store/userStore';
import { getRandomMessage, xpRewards } from '@/lib/utils/motivation';
import confetti from 'canvas-confetti';

interface MemoryPair {
  id: string;
  term: string;
  definition: string;
}

interface MemoryCard {
  id: string;
  content: string;
  pairId: string;
  type: 'term' | 'definition';
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryGameProps {
  title: string;
  description?: string;
  pairs: MemoryPair[];
  themaId: string;
}

export function MemoryGame({ title, description, pairs, themaId }: MemoryGameProps) {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState('');
  const { addXP } = useUserStore();

  useEffect(() => {
    initializeGame();
  }, [pairs]);

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
    
    pairs.forEach((pair) => {
      gameCards.push({
        id: `${pair.id}-term`,
        content: pair.term,
        pairId: pair.id,
        type: 'term',
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${pair.id}-def`,
        content: pair.definition,
        pairId: pair.id,
        type: 'definition',
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
    setStreak(0);
    setMessage(getRandomMessage('encouragement'));
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
          setStreak((prev) => prev + 1);
          setFlippedCards([]);
          setIsLocked(false);

          addXP(xpRewards.memoryPairFound + xpRewards.streakBonus(streak + 1));
          setMessage(getRandomMessage(streak >= 2 ? 'streak' : 'correct', streak + 1));

          confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#34C759', '#4ADE80', '#22C55E'],
          });

          if (newMatched === pairs.length) {
            handleGameComplete();
          }
        }, 400);
      } else {
        setStreak(0);
        setMessage(getRandomMessage('incorrect'));
        
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c))
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  }, [cards, flippedCards, isLocked, gameComplete, matchedPairs, pairs.length, startTime, streak, addXP]);

  const handleGameComplete = () => {
    setGameComplete(true);
    const finalTime = Math.floor((Date.now() - startTime!) / 1000);
    const isPerfect = moves <= pairs.length + 2;

    addXP(isPerfect ? xpRewards.perfectScore : xpRewards.memoryGameComplete);
    setMessage(getRandomMessage(isPerfect ? 'perfect' : 'correct'));

    const duration = isPerfect ? 2000 : 1000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors: ['#34C759', '#FFD700', '#FF9500'],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors: ['#34C759', '#FFD700', '#FF9500'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="max-w-3xl mx-auto">
      <Card padding="md" className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-footnote text-gray-500">Züge</p>
              <p className="text-title3 font-bold">{moves}</p>
            </div>
            <div className="text-center">
              <p className="text-footnote text-gray-500">Paare</p>
              <p className="text-title3 font-bold">{matchedPairs}/{pairs.length}</p>
            </div>
            <div className="text-center">
              <p className="text-footnote text-gray-500">Zeit</p>
              <p className="text-title3 font-bold">{formatTime(elapsedTime)}</p>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={initializeGame} leftIcon={<RotateCcw className="w-4 h-4" />}>
            Neu
          </Button>
        </div>
        {streak > 1 && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <p className="text-headline text-orange-500">{streak}x STREAK! +{xpRewards.streakBonus(streak)} Bonus</p>
          </div>
        )}
      </Card>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 text-center">
        <p className="text-body font-medium text-green-800">{message}</p>
      </div>

      {gameComplete && (
        <Card padding="lg" className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 text-center mb-4">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
          <h3 className="text-title2 mb-2">🎉 GESCHAFFT!</h3>
          <p className="text-body text-gray-600">{moves} Züge in {formatTime(elapsedTime)}</p>
          <p className="text-headline text-green-600 mt-2">
            +{moves <= pairs.length + 2 ? xpRewards.perfectScore : xpRewards.memoryGameComplete} XP
          </p>
          <Button variant="hulk" size="lg" onClick={initializeGame} className="mt-4" leftIcon={<RotateCcw className="w-5 h-5" />}>
            Nochmal spielen
          </Button>
        </Card>
      )}

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-[3/4] cursor-pointer ${card.isMatched ? 'opacity-50' : ''}`}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full transition-transform duration-400"
              style={{
                transformStyle: 'preserve-3d',
                transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              <div
                className="absolute inset-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 shadow-md border-2 border-green-400"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-3xl">🟩</span>
              </div>

              <div
                className={`absolute inset-0 rounded-xl p-2 flex items-center justify-center text-center shadow-md
                  ${card.type === 'term' ? 'bg-white border-2 border-blue-300' : 'bg-blue-50 border-2 border-blue-200'}
                  ${card.isMatched ? 'border-green-400 bg-green-50' : ''}
                `}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <span className={`text-xs sm:text-sm leading-tight ${card.type === 'term' ? 'font-bold' : ''}`}>
                  {card.content}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
