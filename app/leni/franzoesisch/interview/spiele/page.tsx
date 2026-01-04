'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const memoryCards = [
  { id: 1, german: 'Wie heißt du?', french: 'Tu t\'appelles comment?' },
  { id: 2, german: 'Woher kommst du?', french: 'Tu es d\'où?' },
  { id: 3, german: 'Wie alt bist du?', french: 'Tu as quel âge?' },
  { id: 4, german: 'Ich heiße...', french: 'Je m\'appelle...' },
  { id: 5, german: 'Ich bin aus...', french: 'Je suis de...' },
  { id: 6, german: 'Ich bin 13', french: 'J\'ai treize ans' },
];

const quizQuestions = [
  { question: 'Wie heißt du?', correct: 'Tu t\'appelles comment?', wrong: ['Tu es d\'où?', 'Tu as quel âge?'] },
  { question: 'Ich heiße Leni', correct: 'Je m\'appelle Leni', wrong: ['Je suis de Leni', 'J\'ai Leni'] },
  { question: 'Woher kommst du?', correct: 'Tu es d\'où?', wrong: ['Tu t\'appelles comment?', 'Tu as d\'où?'] },
  { question: 'Ich bin aus Berlin', correct: 'Je suis de Berlin', wrong: ['Je m\'appelle Berlin', 'J\'ai Berlin'] },
  { question: 'Wie alt bist du?', correct: 'Tu as quel âge?', wrong: ['Tu es quel âge?', 'Tu t\'appelles quel âge?'] },
  { question: 'Ich bin 13', correct: 'J\'ai treize ans', wrong: ['Je suis treize ans', 'Je m\'appelle treize ans'] },
  { question: 'Hast du Geschwister?', correct: 'Tu as des frères et sœurs?', wrong: ['Tu es des frères?', 'Tu t\'appelles frères?'] },
  { question: 'Ja, ich habe eine Schwester', correct: 'Oui, j\'ai une sœur', wrong: ['Oui, je suis une sœur', 'Oui, tu as une sœur'] },
];

type GameMode = 'menu' | 'memory' | 'speed-quiz';

export default function SpielePage() {
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const [score, setScore] = useState(0);
  
  // Memory Game State
  const [cards, setCards] = useState<Array<{ id: number; type: 'german' | 'french'; content: string; matched: boolean }>>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);

  // Speed Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Initialize Memory Game
  useEffect(() => {
    if (gameMode === 'memory') {
      const gameCards = memoryCards.flatMap(card => [
        { id: card.id * 2 - 1, type: 'german' as const, content: card.german, matched: false },
        { id: card.id * 2, type: 'french' as const, content: card.french, matched: false },
      ]);
      setCards(gameCards.sort(() => Math.random() - 0.5));
      setFlipped([]);
      setMatched([]);
    }
  }, [gameMode]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const firstCard = cards[first];
      const secondCard = cards[second];
      
      // Check if cards match (same id from original pair)
      const firstOriginalId = Math.ceil(firstCard.id / 2);
      const secondOriginalId = Math.ceil(secondCard.id / 2);
      
      if (firstOriginalId === secondOriginalId) {
        setMatched([...matched, first, second]);
        setScore(score + 10);
        setTimeout(() => setFlipped([]), 500);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const handleQuizAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const question = quizQuestions[currentQuestion];
    if (answer === question.correct) {
      setQuizScore(quizScore + 10);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizFinished(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-24">
        <div className="bg-pink-600 text-white px-4 py-4">
          <Link href="/leni/franzoesisch/interview" className="text-pink-200 text-sm">← Zurück</Link>
          <h1 className="text-xl font-bold mt-2">🎮 Spiele</h1>
          <p className="text-pink-200 text-sm">Memory & Speed-Quiz</p>
        </div>

        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => setGameMode('memory')}
            className="w-full bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-pink-400 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl">
                🧠
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-bold text-gray-800">Memory</h3>
                <p className="text-sm text-gray-600">Finde die Paare</p>
              </div>
              <span className="text-pink-500 text-2xl">→</span>
            </div>
          </button>

          <button
            onClick={() => setGameMode('speed-quiz')}
            className="w-full bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-pink-400 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl">
                ⚡
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-bold text-gray-800">Speed-Quiz</h3>
                <p className="text-sm text-gray-600">Schnell antworten!</p>
              </div>
              <span className="text-pink-500 text-2xl">→</span>
            </div>
          </button>
        </div>

        <div className="px-4">
          <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-xl">🦋</span>
            <p className="text-purple-800 text-sm">
              "Spielend lernen ist am besten! Probiere beide Spiele aus."
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (gameMode === 'memory') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-24">
        <div className="bg-purple-600 text-white px-4 py-4">
          <button onClick={() => setGameMode('menu')} className="text-purple-200 text-sm">← Zurück</button>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-xl font-bold">🧠 Memory</h1>
            <div className="text-right">
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-purple-200 text-xs">Punkte</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="grid grid-cols-3 gap-3">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                disabled={matched.includes(index)}
                className={`aspect-square rounded-xl font-medium text-sm transition-all ${
                  matched.includes(index)
                    ? 'bg-green-100 text-green-800 opacity-50'
                    : flipped.includes(index)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-600 text-white'
                }`}
              >
                {flipped.includes(index) || matched.includes(index) ? card.content : '?'}
              </button>
            ))}
          </div>

          {matched.length === cards.length && (
            <div className="mt-6 bg-green-100 rounded-xl p-6 text-center">
              <span className="text-4xl mb-2 block">🎉</span>
              <h3 className="text-xl font-bold text-green-800 mb-2">Geschafft!</h3>
              <p className="text-green-700 mb-4">{score} Punkte</p>
              <button
                onClick={() => setGameMode('menu')}
                className="px-6 py-2 bg-green-600 text-white rounded-xl font-semibold"
              >
                Fertig
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gameMode === 'speed-quiz') {
    if (quizFinished) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz beendet!</h2>
            <p className="text-gray-600 mb-2">Du hast {quizScore} von {quizQuestions.length * 10} Punkten!</p>
            <p className="text-lg text-blue-600 font-semibold mb-6">
              {quizScore >= quizQuestions.length * 7 ? 'Très bien! 🦋' : 'Weiter üben!'}
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={restartQuiz}
                className="flex-1 py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-medium"
              >
                Nochmal
              </button>
              <button
                onClick={() => setGameMode('menu')}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
              >
                Zurück
              </button>
            </div>
          </div>
        </div>
      );
    }

    const question = quizQuestions[currentQuestion];
    const answers = [question.correct, ...question.wrong].sort(() => Math.random() - 0.5);

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
        <div className="bg-blue-600 text-white px-4 py-4">
          <button onClick={() => setGameMode('menu')} className="text-blue-200 text-sm">← Zurück</button>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-xl font-bold">⚡ Speed-Quiz</h1>
            <div className="text-right">
              <p className="text-2xl font-bold">{quizScore}</p>
              <p className="text-blue-200 text-xs">Punkte</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Frage {currentQuestion + 1} / {quizQuestions.length}
          </p>
        </div>

        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <p className="text-sm text-gray-500 mb-2">Übersetze:</p>
            <p className="text-2xl font-bold text-gray-800">{question.question}</p>
          </div>

          <div className="space-y-3">
            {answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(answer)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-xl font-medium text-left transition-all ${
                  showFeedback
                    ? answer === question.correct
                      ? 'bg-green-100 text-green-800 border-2 border-green-500'
                      : answer === selectedAnswer
                      ? 'bg-red-100 text-red-800 border-2 border-red-500'
                      : 'bg-gray-100 text-gray-400'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border-2 border-transparent'
                }`}
              >
                {answer}
                {showFeedback && answer === question.correct && ' ✓'}
                {showFeedback && answer === selectedAnswer && answer !== question.correct && ' ✗'}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
