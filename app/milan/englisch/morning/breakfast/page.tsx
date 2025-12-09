'use client';

import Link from 'next/link';
import { useState } from 'react';

const vocabulary = {
  drinks: [
    { english: 'tea', german: 'Tee', emoji: '🍵' },
    { english: 'milk', german: 'Milch', emoji: '🥛' },
    { english: 'orange juice', german: 'Orangensaft', emoji: '🍊' },
    { english: 'hot chocolate', german: 'heiße Schokolade', emoji: '☕' },
    { english: 'water', german: 'Wasser', emoji: '💧' },
  ],
  food: [
    { english: 'toast', german: 'Toast', emoji: '🍞' },
    { english: 'butter', german: 'Butter', emoji: '🧈' },
    { english: 'jam', german: 'Marmelade', emoji: '🍓' },
    { english: 'honey', german: 'Honig', emoji: '🍯' },
    { english: 'cornflakes', german: 'Cornflakes', emoji: '🥣' },
    { english: 'muesli', german: 'Müsli', emoji: '🥣' },
    { english: 'eggs', german: 'Eier', emoji: '🥚' },
    { english: 'fried eggs', german: 'Spiegeleier', emoji: '🍳' },
    { english: 'bacon', german: 'Speck', emoji: '🥓' },
    { english: 'sausages', german: 'Würstchen', emoji: '🌭' },
    { english: 'baked beans', german: 'gebackene Bohnen', emoji: '🫘' },
    { english: 'sandwich', german: 'Sandwich', emoji: '🥪' },
    { english: 'banana', german: 'Banane', emoji: '🍌' },
    { english: 'apple', german: 'Apfel', emoji: '🍎' },
  ]
};

const allVocab = [...vocabulary.drinks, ...vocabulary.food];

const fullEnglishBreakfast = [
  { item: 'fried eggs', emoji: '🍳' },
  { item: 'bacon', emoji: '🥓' },
  { item: 'sausages', emoji: '🌭' },
  { item: 'baked beans', emoji: '🫘' },
  { item: 'toast with butter', emoji: '🍞' },
  { item: 'tea with milk', emoji: '🍵' },
];

const quizQuestions = [
  { question: 'Was ist "Tee" auf Englisch?', answer: 'tea', options: ['tea', 'tee', 'the', 'ti'] },
  { question: 'Was ist "Spiegeleier" auf Englisch?', answer: 'fried eggs', options: ['fried eggs', 'eggs fried', 'scrambled eggs', 'boiled eggs'] },
  { question: 'Was ist "Orangensaft" auf Englisch?', answer: 'orange juice', options: ['orange juice', 'juice orange', 'apple juice', 'orange water'] },
  { question: 'Was ist "Speck" auf Englisch?', answer: 'bacon', options: ['bacon', 'beacon', 'ham', 'sausage'] },
  { question: 'Was ist "Marmelade" auf Englisch?', answer: 'jam', options: ['jam', 'marmalade', 'jelly', 'butter'] },
  { question: 'Was ist "Cornflakes" auf Englisch?', answer: 'cornflakes', options: ['cornflakes', 'corn flakes', 'cereals', 'muesli'] },
  { question: 'Was ist "Honig" auf Englisch?', answer: 'honey', options: ['honey', 'hony', 'sugar', 'jam'] },
  { question: 'Was ist "Würstchen" auf Englisch?', answer: 'sausages', options: ['sausages', 'saussages', 'hot dogs', 'bacon'] },
];

const capitanoSuccess = [
  "Lecker! Das war richtig! 🍳",
  "GG! Frühstücks-Pro! 🥓",
  "Perfect! Weiter so! 🚀",
];

const capitanoError = [
  "Hmm, nicht ganz!",
  "Fast! Nochmal!",
  "Das war knapp!",
];

export default function BreakfastPage() {
  const [phase, setPhase] = useState<'learn' | 'english-breakfast' | 'quiz' | 'complete'>('learn');
  const [category, setCategory] = useState<'drinks' | 'food'>('drinks');
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const currentVocab = category === 'drinks' ? vocabulary.drinks : vocabulary.food;

  const nextCard = () => {
    if (currentCard < currentVocab.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowAnswer(false);
    } else if (category === 'drinks') {
      setCategory('food');
      setCurrentCard(0);
      setShowAnswer(false);
    } else {
      setPhase('english-breakfast');
    }
  };

  const handleAnswer = (answer: string) => {
    const correct = quizQuestions[currentQuestion].answer;
    if (answer === correct) {
      setFeedback({
        type: 'success',
        message: capitanoSuccess[Math.floor(Math.random() * capitanoSuccess.length)]
      });
      setScore(score + 10);
    } else {
      setFeedback({
        type: 'error',
        message: capitanoError[Math.floor(Math.random() * capitanoError.length)]
      });
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback({ type: null, message: '' });
      } else {
        setPhase('complete');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-red-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">🍳 Breakfast</h1>
        <p className="text-red-100 text-sm">Frühstücksvokabeln</p>
      </div>

      {/* Phase Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        <button
          onClick={() => setPhase('learn')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'learn' ? 'bg-red-100 text-red-700' : 'text-gray-500'
          }`}
        >
          📚 Lernen
        </button>
        <button
          onClick={() => setPhase('english-breakfast')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'english-breakfast' ? 'bg-red-100 text-red-700' : 'text-gray-500'
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => setPhase('quiz')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'quiz' ? 'bg-red-100 text-red-700' : 'text-gray-500'
          }`}
        >
          🎯 Quiz
        </button>
      </div>

      <div className="p-4">
        {/* Learn Phase */}
        {phase === 'learn' && (
          <div>
            {/* Category Selector */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => { setCategory('drinks'); setCurrentCard(0); setShowAnswer(false); }}
                className={`flex-1 py-2 rounded-lg font-medium ${
                  category === 'drinks' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'
                }`}
              >
                🥤 Getränke
              </button>
              <button
                onClick={() => { setCategory('food'); setCurrentCard(0); setShowAnswer(false); }}
                className={`flex-1 py-2 rounded-lg font-medium ${
                  category === 'food' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'
                }`}
              >
                🍴 Essen
              </button>
            </div>

            {/* Flashcard */}
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div 
                className="aspect-[4/3] flex flex-col items-center justify-center p-8 cursor-pointer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <span className="text-7xl mb-4">{currentVocab[currentCard].emoji}</span>
                {showAnswer ? (
                  <p className="text-3xl font-bold text-red-600">{currentVocab[currentCard].english}</p>
                ) : (
                  <p className="text-2xl text-gray-800">{currentVocab[currentCard].german}</p>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                {showAnswer ? 'Tippen für Deutsch' : 'Tippen für Englisch'}
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              {category === 'drinks' ? 'Getränke' : 'Essen'}: {currentCard + 1} / {currentVocab.length}
            </p>

            <button
              onClick={nextCard}
              className="w-full mt-4 py-4 bg-red-500 text-white rounded-xl font-semibold"
            >
              {currentCard < currentVocab.length - 1 ? 'Nächstes Wort →' : category === 'drinks' ? 'Weiter zum Essen →' : 'Full English Breakfast! 🇬🇧'}
            </button>
          </div>
        )}

        {/* Full English Breakfast */}
        {phase === 'english-breakfast' && (
          <div>
            <div className="bg-red-100 rounded-xl p-4 mb-4">
              <p className="font-medium text-red-800 mb-2">🇬🇧 Full English Breakfast</p>
              <p className="text-red-700 text-sm">
                Das traditionelle englische Frühstück ist berühmt – und ziemlich heftig!
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {fullEnglishBreakfast.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-lg font-medium text-gray-800">{item.item}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-100 rounded-xl p-4 mb-4">
              <p className="text-orange-800 text-sm">
                💡 <strong>Fun Fact:</strong> Die meisten Briten essen das nur am Wochenende. 
                Unter der Woche gibt's Toast oder Cornflakes – genau wie bei uns!
              </p>
            </div>

            <button
              onClick={() => setPhase('quiz')}
              className="w-full py-4 bg-red-500 text-white rounded-xl font-semibold"
            >
              Jetzt Quiz starten! 🎯
            </button>
          </div>
        )}

        {/* Quiz */}
        {phase === 'quiz' && (
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
              <p className="text-center text-gray-500 mb-2">Frage {currentQuestion + 1} / {quizQuestions.length}</p>
              <p className="text-center text-xl font-medium text-gray-800">
                {quizQuestions[currentQuestion].question}
              </p>
            </div>

            {feedback.type && (
              <div className={`rounded-xl p-4 mb-4 flex items-center gap-3 ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className="text-2xl">{feedback.type === 'success' ? '🍳' : '🤔'}</span>
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-4">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={feedback.type !== null}
                  className="py-4 bg-red-100 text-red-800 rounded-xl font-medium active:scale-95 transition-transform disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600">Score: <span className="font-bold text-red-600">{score} XP</span></p>
            </div>
          </div>
        )}

        {/* Complete */}
        {phase === 'complete' && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Lecker gemacht!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient!</p>

            <div className="bg-red-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-red-800">
                  "GG! Du kennst jetzt alle Frühstückswörter! Time for questions!"
                </p>
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning/questions"
              className="block w-full py-4 bg-red-500 text-white rounded-xl font-semibold"
            >
              Weiter: Yes/No Questions →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
