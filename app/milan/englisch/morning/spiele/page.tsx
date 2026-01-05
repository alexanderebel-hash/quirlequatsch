'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

// Memory Game Data
const memoryPairs = [
  { id: 1, english: 'head', german: 'Kopf' },
  { id: 2, english: 'foot', german: 'Fuß' },
  { id: 3, english: 'tooth', german: 'Zahn' },
  { id: 4, english: 'eye', german: 'Auge' },
  { id: 5, english: 'breakfast', german: 'Frühstück' },
  { id: 6, english: 'toast', german: 'Toast' },
];

// Speed Quiz Data
const speedQuestions = [
  { question: 'Wie sagt man "Kopf" auf Englisch?', answer: 'head', options: ['head', 'hand', 'hair', 'foot'] },
  { question: 'Was ist der Plural von "foot"?', answer: 'feet', options: ['foots', 'feet', 'feets', 'foot'] },
  { question: 'Was ist der Plural von "tooth"?', answer: 'teeth', options: ['tooths', 'teeth', 'toothes', 'tooth'] },
  { question: '"She ___ got long hair."', answer: 'has', options: ['have', 'has', 'is', 'are'] },
  { question: 'Is he happy? – Yes, ___', answer: 'he is', options: ['he is', 'I am', 'it is', 'he does'] },
  { question: 'Was isst man beim Full English Breakfast?', answer: 'bacon and eggs', options: ['pizza', 'bacon and eggs', 'pasta', 'sushi'] },
  { question: '"___ your hands!" (Befehl)', answer: 'Wash', options: ['Wash', 'Washing', 'Washes', 'To wash'] },
  { question: 'Wie heißt "Spiegelei" auf Englisch?', answer: 'fried egg', options: ['boiled egg', 'fried egg', 'raw egg', 'egg'] },
  { question: '"I ___ got brown hair."', answer: "haven't", options: ["haven't", "hasn't", "don't", "doesn't"] },
  { question: 'Adjektiv kommt ___ dem Nomen', answer: 'vor', options: ['vor', 'nach', 'zwischen', 'unter'] },
];

type GameType = 'menu' | 'memory' | 'speed-quiz';

export default function SpielePage() {
  const [game, setGame] = useState<GameType>('menu');
  
  // Memory State
  const [memoryCards, setMemoryCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [memoryXp, setMemoryXp] = useState(0);
  const [showMemoryXpGain, setShowMemoryXpGain] = useState(false);
  
  // Speed Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showSpeedXpGain, setShowSpeedXpGain] = useState(false);

  // Initialize Memory Game
  const startMemory = () => {
    const cards = memoryPairs.flatMap(pair => [
      { id: pair.id * 2 - 1, pairId: pair.id, text: pair.english, type: 'english' },
      { id: pair.id * 2, pairId: pair.id, text: pair.german, type: 'german' },
    ]).sort(() => Math.random() - 0.5);
    setMemoryCards(cards);
    setFlipped([]);
    setMatched([]);
    setMemoryXp(0);
    setGame('memory');
  };

  // Memory Card Click
  const handleCardClick = (cardId: number) => {
    if (flipped.length === 2 || flipped.includes(cardId) || matched.includes(cardId)) return;

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => memoryCards.find(c => c.id === id));
      if (first?.pairId === second?.pairId) {
        setMatched([...matched, first.id, second.id]);
        setMemoryXp(prev => prev + 5);
        setShowMemoryXpGain(true);
        setTimeout(() => setShowMemoryXpGain(false), 800);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  // Speed Quiz Timer
  useEffect(() => {
    if (game === 'speed-quiz' && timeLeft > 0 && !quizFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true);
    }
  }, [game, timeLeft, quizFinished]);

  // Speed Quiz Answer
  const handleSpeedAnswer = (answer: string) => {
    if (answer === speedQuestions[currentQuestion].answer) {
      setSpeedScore(speedScore + 10);
      setShowSpeedXpGain(true);
      setTimeout(() => setShowSpeedXpGain(false), 500);
    }
    if (currentQuestion < speedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Start Speed Quiz
  const startSpeedQuiz = () => {
    setCurrentQuestion(0);
    setSpeedScore(0);
    setTimeLeft(60);
    setQuizFinished(false);
    setGame('speed-quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-purple-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">🎮 Spiele</h1>
        <p className="text-purple-100 text-sm">Lernen mit Spaß!</p>
      </div>

      <div className="p-4">
        {/* Menu */}
        {game === 'menu' && (
          <div className="space-y-4">
            <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <p className="text-purple-800">
                "Zeit zu zocken, Miner! Wähl ein Spiel und sammle Bonus-XP!"
              </p>
            </div>

            <button
              onClick={startMemory}
              className="w-full bg-white rounded-2xl p-6 shadow-sm border text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">🧠</span>
                <div>
                  <h3 className="font-bold text-lg">Memory</h3>
                  <p className="text-gray-500 text-sm">Finde die Paare: Englisch ↔ Deutsch</p>
                  <p className="text-purple-600 text-sm mt-1">+30 XP</p>
                </div>
              </div>
            </button>

            <button
              onClick={startSpeedQuiz}
              className="w-full bg-white rounded-2xl p-6 shadow-sm border text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <h3 className="font-bold text-lg">Speed Quiz</h3>
                  <p className="text-gray-500 text-sm">60 Sekunden – so viele wie möglich!</p>
                  <p className="text-purple-600 text-sm mt-1">+50 XP</p>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Memory Game */}
        {game === 'memory' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setGame('menu')} className="text-purple-600">← Zurück</button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">{matched.length / 2} / {memoryPairs.length}</span>
                <div className="relative">
                  <div className={`flex items-center gap-1.5 bg-green-100 rounded-full px-3 py-1.5 transition-transform ${showMemoryXpGain ? 'scale-110' : 'scale-100'}`}>
                    <Zap className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-green-700">{memoryXp}</span>
                  </div>
                  {showMemoryXpGain && (
                    <span className="absolute -top-4 right-0 text-green-500 font-bold text-sm animate-bounce">
                      +5
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {memoryCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`aspect-square rounded-xl font-medium text-sm transition-all ${
                    flipped.includes(card.id) || matched.includes(card.id)
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-100 text-purple-100'
                  } ${matched.includes(card.id) ? 'opacity-50' : ''}`}
                >
                  {(flipped.includes(card.id) || matched.includes(card.id)) ? card.text : '?'}
                </button>
              ))}
            </div>

            {matched.length === memoryCards.length && (
              <div className="mt-6 text-center">
                <span className="text-4xl">🎉</span>
                <p className="font-bold text-lg mt-2">Geschafft!</p>
                <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mt-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">+{memoryXp} XP verdient!</span>
                </div>
                <button
                  onClick={() => setGame('menu')}
                  className="mt-4 px-6 py-3 bg-green-500 text-white rounded-xl block mx-auto"
                >
                  Zurück zum Menü
                </button>
              </div>
            )}
          </div>
        )}

        {/* Speed Quiz */}
        {game === 'speed-quiz' && !quizFinished && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl">⏱️ {timeLeft}s</span>
              <div className="relative">
                <div className={`flex items-center gap-1.5 bg-green-100 rounded-full px-3 py-1.5 transition-transform ${showSpeedXpGain ? 'scale-110' : 'scale-100'}`}>
                  <Zap className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-700">{speedScore}</span>
                </div>
                {showSpeedXpGain && (
                  <span className="absolute -top-4 right-0 text-green-500 font-bold text-sm animate-bounce">
                    +10
                  </span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
              <p className="text-center text-lg font-medium">
                {speedQuestions[currentQuestion].question}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {speedQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSpeedAnswer(option)}
                  className="py-4 bg-purple-100 text-purple-800 rounded-xl font-medium active:scale-95"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quiz Finished */}
        {game === 'speed-quiz' && quizFinished && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🏆</span>
            <h2 className="text-2xl font-bold mb-2">Zeit vorbei!</h2>
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-700 text-lg">+{speedScore} XP verdient!</span>
            </div>

            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <span className="text-2xl">🚀</span>
              <p className="text-green-800 mt-2">
                {speedScore >= 60 ? '"GG! Das war Profi-Level!"' : '"Gut gespielt! Übung macht den Meister!"'}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={startSpeedQuiz}
                className="flex-1 py-3 border-2 border-green-500 text-green-600 rounded-xl font-medium"
              >
                Nochmal
              </button>
              <button
                onClick={() => setGame('menu')}
                className="flex-1 py-3 bg-green-500 text-white rounded-xl font-medium"
              >
                Menü
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
