'use client';

import Link from 'next/link';
import { useState } from 'react';

const adjectives = [
  { english: 'big', german: 'groß', example: 'a big nose', emoji: '👃' },
  { english: 'small', german: 'klein', example: 'small eyes', emoji: '👁️' },
  { english: 'tall', german: 'groß (Person)', example: 'She is tall', emoji: '🧍‍♀️', note: 'für Körpergröße' },
  { english: 'short', german: 'klein (Person)', example: 'He is short', emoji: '🧍', note: 'für Körpergröße' },
  { english: 'long', german: 'lang', example: 'long hair', emoji: '💇‍♀️' },
  { english: 'slim', german: 'schlank', example: 'slim body', emoji: '🧘' },
  { english: 'pretty', german: 'hübsch', example: 'pretty face', emoji: '😊' },
  { english: 'cute', german: 'süß/niedlich', example: 'cute smile', emoji: '🥰' },
  { english: 'blue', german: 'blau', example: 'blue eyes', emoji: '👁️' },
  { english: 'brown', german: 'braun', example: 'brown hair', emoji: '💇' },
  { english: 'blond', german: 'blond', example: 'blond hair', emoji: '👱' },
  { english: 'green', german: 'grün', example: 'green eyes', emoji: '👁️' },
];

const exercises = [
  { 
    german: 'große Nase', 
    correct: 'big nose',
    options: ['big nose', 'nose big', 'great nose', 'large nose'] 
  },
  { 
    german: 'kleine Augen', 
    correct: 'small eyes',
    options: ['small eyes', 'eyes small', 'little eyes', 'tiny eyes'] 
  },
  { 
    german: 'lange Haare', 
    correct: 'long hair',
    options: ['long hair', 'hair long', 'long hairs', 'hairs long'] 
  },
  { 
    german: 'Sie ist groß (Körpergröße)', 
    correct: 'She is tall',
    options: ['She is tall', 'She is big', 'She is large', 'She is high'] 
  },
  { 
    german: 'blaue Augen', 
    correct: 'blue eyes',
    options: ['blue eyes', 'eyes blue', 'blues eyes', 'blued eyes'] 
  },
  { 
    german: 'braune Haare', 
    correct: 'brown hair',
    options: ['brown hair', 'hair brown', 'brown hairs', 'browns hair'] 
  },
  { 
    german: 'Er ist schlank', 
    correct: 'He is slim',
    options: ['He is slim', 'He has slim', 'He slims', 'He slim is'] 
  },
  { 
    german: 'hübsches Gesicht', 
    correct: 'pretty face',
    options: ['pretty face', 'face pretty', 'beautiful face', 'nice face'] 
  },
];

const capitanoSuccess = [
  "Perfekt! Das sitzt! 💎",
  "Richtig! Adjektive-Meister! 🎮",
  "GG! Weiter so! 🚀",
];

const capitanoError = [
  "Fast! Denk dran: Adjektiv VOR dem Nomen!",
  "Nicht ganz! Nochmal!",
  "Hmm, das war knapp!",
];

export default function AdjectivesPage() {
  const [phase, setPhase] = useState<'learn' | 'practice' | 'complete'>('learn');
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const nextCard = () => {
    if (currentCard < adjectives.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowAnswer(false);
    } else {
      setPhase('practice');
    }
  };

  const handleAnswer = (answer: string) => {
    const correct = exercises[currentExercise].correct;
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
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setFeedback({ type: null, message: '' });
      } else {
        setPhase('complete');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-yellow-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">👤 Adjectives</h1>
        <p className="text-yellow-100 text-sm">Personen beschreiben</p>
      </div>

      {/* Phase Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        <button
          onClick={() => setPhase('learn')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'learn' ? 'bg-yellow-100 text-yellow-700' : 'text-gray-500'
          }`}
        >
          📚 Lernen
        </button>
        <button
          onClick={() => setPhase('practice')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'practice' ? 'bg-yellow-100 text-yellow-700' : 'text-gray-500'
          }`}
        >
          ✏️ Üben
        </button>
      </div>

      <div className="p-4">
        {/* Learn Phase */}
        {phase === 'learn' && (
          <div>
            {/* Info Box */}
            <div className="bg-yellow-100 rounded-xl p-4 mb-4">
              <p className="font-medium text-yellow-800 mb-2">📌 Wichtig:</p>
              <p className="text-yellow-700 text-sm">
                Im Englischen kommen Adjektive <strong>VOR</strong> dem Nomen:<br />
                ✅ "a big nose" | ❌ "a nose big"
              </p>
            </div>

            {/* Flashcard */}
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div 
                className="aspect-[4/3] flex flex-col items-center justify-center p-8 cursor-pointer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <span className="text-6xl mb-4">{adjectives[currentCard].emoji}</span>
                {showAnswer ? (
                  <>
                    <p className="text-3xl font-bold text-yellow-600">{adjectives[currentCard].english}</p>
                    <p className="text-gray-500 text-sm mt-2 italic">{adjectives[currentCard].example}</p>
                    {adjectives[currentCard].note && (
                      <p className="text-yellow-400 text-xs mt-2">⚠️ {adjectives[currentCard].note}</p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-2xl text-gray-800 mb-2">{adjectives[currentCard].german}</p>
                    <p className="text-sm text-gray-400">{adjectives[currentCard].example}</p>
                  </>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                {showAnswer ? 'Tippen für Deutsch' : 'Tippen für Englisch'}
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              {currentCard + 1} / {adjectives.length}
            </p>

            <button
              onClick={nextCard}
              className="w-full mt-4 py-4 bg-yellow-500 text-white rounded-xl font-semibold"
            >
              {currentCard < adjectives.length - 1 ? 'Nächstes Wort →' : 'Jetzt üben! 💪'}
            </button>

            {/* Special Note */}
            <div className="bg-orange-100 rounded-xl p-4 mt-4">
              <p className="font-medium text-orange-800">⚠️ Unterschied:</p>
              <p className="text-orange-700 text-sm">
                <strong>tall/short</strong> = Körpergröße von Personen<br />
                <strong>big/small</strong> = Größe von Dingen
              </p>
            </div>
          </div>
        )}

        {/* Practice Phase */}
        {phase === 'practice' && (
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
              <p className="text-center text-gray-500 mb-2">Übersetze ins Englische:</p>
              <p className="text-center text-xl font-medium text-gray-800">
                {exercises[currentExercise].german}
              </p>
            </div>

            {feedback.type && (
              <div className={`rounded-xl p-4 mb-4 flex items-center gap-3 ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className="text-2xl">{feedback.type === 'success' ? '🚀' : '🤔'}</span>
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {exercises[currentExercise].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={feedback.type !== null}
                  className="w-full py-4 bg-yellow-100 text-yellow-800 rounded-xl font-medium active:scale-95 transition-transform disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">Score: <span className="font-bold text-yellow-600">{score} XP</span></p>
              <p className="text-sm text-gray-400">{currentExercise + 1} / {exercises.length}</p>
            </div>
          </div>
        )}

        {/* Complete */}
        {phase === 'complete' && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Super gemacht!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient!</p>

            <div className="bg-yellow-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-yellow-800">
                  "Nice! Du kannst jetzt Leute beschreiben! Let's go!"
                </p>
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning/have-got"
              className="block w-full py-4 bg-yellow-500 text-white rounded-xl font-semibold"
            >
              Weiter: Have Got →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
