'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Zap } from 'lucide-react';

// Memory Game
const memoryPairs = [
  { id: 1, front: "a/sin(α) = b/sin(β)", back: "Sinussatz" },
  { id: 2, front: "SSS", back: "Kosinussatz" },
  { id: 3, front: "SWS", back: "Kosinussatz" },
  { id: 4, front: "Pärchen vorhanden?", back: "Sinussatz" },
  { id: 5, front: "a² = b² + c² - 2bc·cos(α)", back: "Kosinussatz" },
  { id: 6, front: "WSW", back: "Sinussatz" },
];

// Speed Quiz Questions
const speedQuestions = [
  { q: "Gegeben: a, b, c", a: "kosinussatz" },
  { q: "Gegeben: a, α, β", a: "sinussatz" },
  { q: "Gegeben: b, c, α (eingeschlossen)", a: "kosinussatz" },
  { q: "Gegeben: a, b, γ (γ gegenüber c)", a: "sinussatz" },
  { q: "Drei Seiten bekannt", a: "kosinussatz" },
  { q: "Seite + Gegen-Winkel bekannt", a: "sinussatz" },
  { q: "Zwei Seiten + Winkel dazwischen", a: "kosinussatz" },
  { q: "Alle Winkel + eine Seite", a: "sinussatz" },
];

type GameType = 'menu' | 'memory' | 'speed' | 'puzzle';

export default function SpielePage() {
  const [currentGame, setCurrentGame] = useState<GameType>('menu');
  
  // Speed Quiz State
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [speedTime, setSpeedTime] = useState(0);
  const [speedStarted, setSpeedStarted] = useState(false);
  const [showSpeedXpGain, setShowSpeedXpGain] = useState(false);

  // Memory State
  const [memoryCards, setMemoryCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [memoryXp, setMemoryXp] = useState(0);
  const [showMemoryXpGain, setShowMemoryXpGain] = useState(false);

  const startSpeedQuiz = () => {
    setSpeedStarted(true);
    setSpeedIndex(0);
    setSpeedScore(0);
    const timer = setInterval(() => {
      setSpeedTime(t => t + 1);
    }, 1000);
    // Store timer ID if needed for cleanup
  };

  const answerSpeed = (answer: string) => {
    if (answer === speedQuestions[speedIndex].a) {
      setSpeedScore(s => s + 10);
      setShowSpeedXpGain(true);
      setTimeout(() => setShowSpeedXpGain(false), 500);
    }
    if (speedIndex < speedQuestions.length - 1) {
      setSpeedIndex(i => i + 1);
    } else {
      setSpeedStarted(false);
    }
  };

  const initMemory = () => {
    const cards = [...memoryPairs, ...memoryPairs]
      .map((card, index) => ({ ...card, uniqueId: index }))
      .sort(() => Math.random() - 0.5);
    setMemoryCards(cards);
    setFlipped([]);
    setMatched([]);
    setMemoryXp(0);
  };

  const flipCard = (uniqueId: number) => {
    if (flipped.length === 2) return;
    if (flipped.includes(uniqueId)) return;
    if (matched.includes(uniqueId)) return;

    const newFlipped = [...flipped, uniqueId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const card1 = memoryCards.find(c => c.uniqueId === first);
      const card2 = memoryCards.find(c => c.uniqueId === second);

      if (card1.id === card2.id) {
        setMatched([...matched, first, second]);
        setMemoryXp(prev => prev + 5);
        setShowMemoryXpGain(true);
        setTimeout(() => setShowMemoryXpGain(false), 800);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-pink-600 text-white px-4 py-4">
        <Link href="/lenny/mathe/sinuskosinus" className="text-pink-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">🎮 Spiele-Modus</h1>
        <p className="text-pink-200 text-sm">Lernen mit Spaß</p>
      </div>

      {currentGame === 'menu' && (
        <div className="p-4 space-y-4">
          <div 
            onClick={() => { setCurrentGame('speed'); }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="font-bold text-lg">Speed-Quiz</h3>
                <p className="text-gray-500">Welcher Satz? So schnell wie möglich!</p>
              </div>
            </div>
          </div>

          <div 
            onClick={() => { setCurrentGame('memory'); initMemory(); }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧠</span>
              <div>
                <h3 className="font-bold text-lg">Formel-Memory</h3>
                <p className="text-gray-500">Finde die passenden Paare</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 opacity-50">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧩</span>
              <div>
                <h3 className="font-bold text-lg">Formel-Puzzle</h3>
                <p className="text-gray-500">Kommt bald...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentGame === 'speed' && (
        <div className="p-4">
          {!speedStarted ? (
            <div className="text-center py-12">
              {speedIndex === 0 ? (
                <>
                  <span className="text-6xl mb-4 block">⚡</span>
                  <h2 className="text-xl font-bold mb-2">Speed-Quiz</h2>
                  <p className="text-gray-600 mb-6">8 Fragen. So schnell wie möglich.</p>
                  <button
                    onClick={startSpeedQuiz}
                    className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold"
                  >
                    Start!
                  </button>
                </>
              ) : (
                <>
                  <span className="text-6xl mb-4 block">🎉</span>
                  <h2 className="text-xl font-bold mb-2">Fertig!</h2>
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-blue-700 text-lg">+{speedScore} XP verdient!</span>
                  </div>
                  <p className="text-gray-600 mb-2">in {speedTime} Sekunden</p>
                  <button
                    onClick={() => setCurrentGame('menu')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold mt-4"
                  >
                    Zurück zum Menü
                  </button>
                </>
              )}
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Frage {speedIndex + 1}/8</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-lg">{speedTime}s</span>
                  <div className="relative">
                    <div className={`flex items-center gap-1.5 bg-blue-100 rounded-full px-3 py-1.5 transition-transform ${showSpeedXpGain ? 'scale-110' : 'scale-100'}`}>
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-blue-700">{speedScore}</span>
                    </div>
                    {showSpeedXpGain && (
                      <span className="absolute -top-4 right-0 text-blue-500 font-bold text-sm animate-bounce">
                        +10
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
                <p className="text-lg font-medium text-center">
                  {speedQuestions[speedIndex].q}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => answerSpeed('sinussatz')}
                  className="bg-blue-100 text-blue-700 p-6 rounded-xl font-medium active:scale-95 transition-transform"
                >
                  Sinussatz
                </button>
                <button
                  onClick={() => answerSpeed('kosinussatz')}
                  className="bg-red-100 text-red-700 p-6 rounded-xl font-medium active:scale-95 transition-transform"
                >
                  Kosinussatz
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {currentGame === 'memory' && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCurrentGame('menu')}
              className="text-blue-600"
            >
              ← Zurück
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">{matched.length / 2} / {memoryPairs.length}</span>
              <div className="relative">
                <div className={`flex items-center gap-1.5 bg-blue-100 rounded-full px-3 py-1.5 transition-transform ${showMemoryXpGain ? 'scale-110' : 'scale-100'}`}>
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-700">{memoryXp}</span>
                </div>
                {showMemoryXpGain && (
                  <span className="absolute -top-4 right-0 text-blue-500 font-bold text-sm animate-bounce">
                    +5
                  </span>
                )}
              </div>
            </div>
          </div>

          {matched.length === memoryPairs.length * 2 ? (
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">🎉</span>
              <h2 className="text-xl font-bold mb-4">Alle gefunden!</h2>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-700 text-lg">+{memoryXp} XP verdient!</span>
              </div>
              <button
                onClick={() => { initMemory(); }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold block mx-auto"
              >
                Nochmal spielen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {memoryCards.map((card) => {
                const isFlipped = flipped.includes(card.uniqueId);
                const isMatched = matched.includes(card.uniqueId);
                
                return (
                  <div
                    key={card.uniqueId}
                    onClick={() => flipCard(card.uniqueId)}
                    className={`aspect-square rounded-xl flex items-center justify-center p-2 text-center text-xs font-medium cursor-pointer transition-all ${
                      isFlipped || isMatched
                        ? 'bg-pink-100 text-pink-800'
                        : 'bg-pink-600 text-white'
                    }`}
                  >
                    {isFlipped || isMatched ? (
                      <span>{card.front}</span>
                    ) : (
                      <span className="text-2xl">?</span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
