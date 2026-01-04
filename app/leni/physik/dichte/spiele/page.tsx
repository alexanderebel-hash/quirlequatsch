'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const materials = [
  { name: 'Styropor', density: 0.03, emoji: '📦' },
  { name: 'Holz', density: 0.6, emoji: '🪵' },
  { name: 'Benzin', density: 0.74, emoji: '⛽' },
  { name: 'Öl', density: 0.9, emoji: '🛢️' },
  { name: 'Aluminium', density: 2.7, emoji: '🥫' },
  { name: 'Eisen', density: 7.9, emoji: '🔩' },
  { name: 'Silber', density: 10.5, emoji: '🥈' },
  { name: 'Gold', density: 19.3, emoji: '🥇' },
];

const memoryPairs = [
  { id: 1, term: 'ρ = m/V', match: 'Dichte-Formel' },
  { id: 2, term: '1 ml', match: '1 cm³' },
  { id: 3, term: '1 l', match: '1000 cm³' },
  { id: 4, term: 'ρ Wasser', match: '1 g/cm³' },
  { id: 5, term: 'ρ Gold', match: '19,3 g/cm³' },
  { id: 6, term: 'schwimmt', match: 'ρ < 1 g/cm³' },
];

type GameType = 'menu' | 'swim-sink' | 'memory' | 'sorting';

export default function SpielePage() {
  const [game, setGame] = useState<GameType>('menu');
  
  // Swim/Sink state
  const [swimIndex, setSwimIndex] = useState(0);
  const [swimScore, setSwimScore] = useState(0);
  const [swimFeedback, setSwimFeedback] = useState<string | null>(null);
  const [shuffledMaterials, setShuffledMaterials] = useState(materials);
  
  // Memory state
  const [memoryCards, setMemoryCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);

  // Start Swim/Sink
  const startSwimSink = () => {
    setShuffledMaterials([...materials].sort(() => Math.random() - 0.5));
    setSwimIndex(0);
    setSwimScore(0);
    setSwimFeedback(null);
    setGame('swim-sink');
  };

  const handleSwimAnswer = (answer: 'swim' | 'sink') => {
    const material = shuffledMaterials[swimIndex];
    const correct = (answer === 'swim' && material.density < 1) || (answer === 'sink' && material.density >= 1);
    
    setSwimFeedback(correct 
      ? `✓ Richtig! ${material.name}: ρ = ${material.density} g/cm³` 
      : `✗ Falsch! ${material.name}: ρ = ${material.density} g/cm³`
    );
    if (correct) setSwimScore(swimScore + 10);
    
    setTimeout(() => {
      setSwimFeedback(null);
      if (swimIndex < shuffledMaterials.length - 1) {
        setSwimIndex(swimIndex + 1);
      }
    }, 1500);
  };

  // Start Memory
  const startMemory = () => {
    const cards = memoryPairs.flatMap(pair => [
      { id: pair.id * 2 - 1, pairId: pair.id, text: pair.term },
      { id: pair.id * 2, pairId: pair.id, text: pair.match },
    ]).sort(() => Math.random() - 0.5);
    setMemoryCards(cards);
    setFlipped([]);
    setMatched([]);
    setGame('memory');
  };

  const handleMemoryClick = (cardId: number) => {
    if (flipped.length === 2 || flipped.includes(cardId) || matched.includes(cardId)) return;
    
    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => memoryCards.find(c => c.id === id));
      if (first?.pairId === second?.pairId) {
        setMatched([...matched, first.id, second.id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-pink-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="text-xl font-bold mt-2">🎮 Lernspiele</h1>
        <p className="text-pink-200 text-sm">Spielend Physik lernen!</p>
      </div>

      <div className="px-4 py-4">
        {/* Menu */}
        {game === 'menu' && (
          <div className="space-y-4">
            <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">🦋</span>
              <p className="text-purple-800">
                Wähle ein Spiel und teste dein Wissen über Dichte!
              </p>
            </div>

            <button 
              onClick={startSwimSink}
              className="w-full bg-white rounded-2xl p-5 shadow-sm border text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🏊</span>
                <div>
                  <h3 className="font-bold text-lg">Schwimmt oder sinkt?</h3>
                  <p className="text-gray-500 text-sm">Ist die Dichte größer oder kleiner als Wasser?</p>
                  <p className="text-pink-600 text-sm mt-1">+10 XP pro richtige Antwort</p>
                </div>
              </div>
            </button>

            <button 
              onClick={startMemory}
              className="w-full bg-white rounded-2xl p-5 shadow-sm border text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🧠</span>
                <div>
                  <h3 className="font-bold text-lg">Formel-Memory</h3>
                  <p className="text-gray-500 text-sm">Finde die zusammengehörenden Paare!</p>
                  <p className="text-pink-600 text-sm mt-1">+30 XP</p>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Swim or Sink Game */}
        {game === 'swim-sink' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setGame('menu')} className="text-pink-600 text-sm">
                ← Zurück
              </button>
              <span className="font-bold text-pink-600">{swimScore} XP</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border text-center mb-4">
              <span className="text-6xl block mb-4">{shuffledMaterials[swimIndex]?.emoji}</span>
              <p className="text-2xl font-bold text-gray-800">{shuffledMaterials[swimIndex]?.name}</p>
              <p className="text-gray-500 mt-2">Schwimmt es auf Wasser oder sinkt es?</p>
            </div>

            {swimFeedback && (
              <div className={`rounded-xl p-4 mb-4 text-center ${
                swimFeedback.startsWith('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {swimFeedback}
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => handleSwimAnswer('swim')}
                disabled={swimFeedback !== null}
                className="flex-1 py-6 bg-blue-100 text-blue-800 rounded-xl font-bold text-lg active:scale-95 transition-transform disabled:opacity-50"
              >
                🏊 Schwimmt
              </button>
              <button
                onClick={() => handleSwimAnswer('sink')}
                disabled={swimFeedback !== null}
                className="flex-1 py-6 bg-gray-200 text-gray-800 rounded-xl font-bold text-lg active:scale-95 transition-transform disabled:opacity-50"
              >
                ⬇️ Sinkt
              </button>
            </div>

            <div className="mt-4 bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-blue-700 text-sm">💧 Wasser: ρ = 1 g/cm³</p>
              <p className="text-blue-600 text-xs">ρ &lt; 1 → schwimmt | ρ &gt; 1 → sinkt</p>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              {swimIndex + 1} / {shuffledMaterials.length}
            </p>
          </div>
        )}

        {/* Memory Game */}
        {game === 'memory' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setGame('menu')} className="text-pink-600 text-sm">
                ← Zurück
              </button>
              <span className="font-bold">{matched.length / 2} / {memoryPairs.length} Paare</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {memoryCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleMemoryClick(card.id)}
                  className={`aspect-square rounded-xl p-2 text-xs font-medium transition-all flex items-center justify-center text-center ${
                    flipped.includes(card.id) || matched.includes(card.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-pink-100 text-pink-100'
                  } ${matched.includes(card.id) ? 'opacity-50' : ''}`}
                >
                  {(flipped.includes(card.id) || matched.includes(card.id)) ? card.text : '?'}
                </button>
              ))}
            </div>

            {matched.length === memoryCards.length && (
              <div className="mt-6 text-center">
                <span className="text-5xl">🎉</span>
                <p className="font-bold text-lg mt-2">Alle Paare gefunden!</p>
                <p className="text-pink-600">+30 XP</p>
                <button 
                  onClick={() => setGame('menu')}
                  className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold"
                >
                  Zurück zum Menü
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
