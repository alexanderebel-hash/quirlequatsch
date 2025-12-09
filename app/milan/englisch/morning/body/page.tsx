'use client';

import Link from 'next/link';
import { useState } from 'react';

const bodyParts = [
  { english: 'head', german: 'Kopf', emoji: '🗣️' },
  { english: 'face', german: 'Gesicht', emoji: '😊' },
  { english: 'eye', german: 'Auge', plural: 'eyes', emoji: '👁️' },
  { english: 'ear', german: 'Ohr', plural: 'ears', emoji: '👂' },
  { english: 'nose', german: 'Nase', emoji: '👃' },
  { english: 'mouth', german: 'Mund', emoji: '👄' },
  { english: 'tooth', german: 'Zahn', plural: 'teeth', irregular: true, emoji: '🦷' },
  { english: 'hair', german: 'Haare', uncountable: true, emoji: '💇' },
  { english: 'arm', german: 'Arm', plural: 'arms', emoji: '💪' },
  { english: 'hand', german: 'Hand', plural: 'hands', emoji: '✋' },
  { english: 'finger', german: 'Finger', plural: 'fingers', emoji: '👆' },
  { english: 'leg', german: 'Bein', plural: 'legs', emoji: '🦵' },
  { english: 'foot', german: 'Fuß', plural: 'feet', irregular: true, emoji: '🦶' },
];

const capitanoSuccess = [
  "Perfekt, Miner! Das war Diamant-Level! 💎",
  "GG! Weiter so! 🎮",
  "Richtig! +10 XP! 🚀",
];

const capitanoError = [
  "Knapp daneben! Nochmal!",
  "Fast! Versuch's nochmal!",
  "Nope, aber du schaffst das!",
];

export default function BodyPage() {
  const [phase, setPhase] = useState<'learn' | 'practice' | 'quiz'>('learn');
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const nextCard = () => {
    if (currentCard < bodyParts.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowAnswer(false);
    } else {
      setPhase('practice');
    }
  };

  const handleQuizAnswer = (answer: string) => {
    const correct = bodyParts[quizQuestion].english;
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
      if (quizQuestion < 9) {
        setQuizQuestion(quizQuestion + 1);
        setFeedback({ type: null, message: '' });
      } else {
        setPhase('quiz');
      }
    }, 1500);
  };

  const getRandomOptions = (correctAnswer: string) => {
    const options = [correctAnswer];
    while (options.length < 4) {
      const random = bodyParts[Math.floor(Math.random() * bodyParts.length)].english;
      if (!options.includes(random)) options.push(random);
    }
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-orange-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">🦶 The Body</h1>
        <p className="text-orange-100 text-sm">Körperteile auf Englisch</p>
      </div>

      {/* Phase Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        {['learn', 'practice', 'quiz'].map((p) => (
          <button
            key={p}
            onClick={() => setPhase(p as any)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              phase === p ? 'bg-orange-100 text-orange-700' : 'text-gray-500'
            }`}
          >
            {p === 'learn' ? '📚 Lernen' : p === 'practice' ? '✏️ Üben' : '🎯 Quiz'}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Learn Phase - Flashcards */}
        {phase === 'learn' && (
          <div>
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div 
                className="aspect-[4/3] flex flex-col items-center justify-center p-8 cursor-pointer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <span className="text-6xl mb-4">{bodyParts[currentCard].emoji}</span>
                {showAnswer ? (
                  <>
                    <p className="text-3xl font-bold text-orange-600">{bodyParts[currentCard].english}</p>
                    {bodyParts[currentCard].irregular && (
                      <p className="text-orange-400 text-sm mt-2">
                        ⚠️ Plural: {bodyParts[currentCard].plural}
                      </p>
                    )}
                    {bodyParts[currentCard].uncountable && (
                      <p className="text-orange-400 text-sm mt-2">
                        ⚠️ Unzählbar - immer Einzahl!
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-2xl text-gray-800">{bodyParts[currentCard].german}</p>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                {showAnswer ? 'Tippen für Deutsch' : 'Tippen für Englisch'}
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              {currentCard + 1} / {bodyParts.length}
            </p>

            <button
              onClick={nextCard}
              className="w-full mt-4 py-4 bg-orange-500 text-white rounded-xl font-semibold"
            >
              {currentCard < bodyParts.length - 1 ? 'Nächstes Wort →' : 'Jetzt üben! 💪'}
            </button>

            {/* Irregular Reminder */}
            <div className="bg-orange-100 rounded-xl p-4 mt-4">
              <p className="font-medium text-orange-800">⚠️ Merken:</p>
              <p className="text-orange-700 text-sm">
                foot → feet | tooth → teeth
              </p>
            </div>
          </div>
        )}

        {/* Practice Phase */}
        {phase === 'practice' && (
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
              <p className="text-center text-gray-500 mb-2">Was ist das auf Englisch?</p>
              <p className="text-center text-5xl mb-4">
                {bodyParts[quizQuestion % bodyParts.length].emoji}
              </p>
              <p className="text-center text-xl font-medium">
                {bodyParts[quizQuestion % bodyParts.length].german}
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

            <div className="grid grid-cols-2 gap-3">
              {getRandomOptions(bodyParts[quizQuestion % bodyParts.length].english).map((option) => (
                <button
                  key={option}
                  onClick={() => handleQuizAnswer(option)}
                  disabled={feedback.type !== null}
                  className="py-4 bg-orange-100 text-orange-800 rounded-xl font-medium active:scale-95 transition-transform disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">Score: <span className="font-bold text-orange-600">{score} XP</span></p>
            </div>
          </div>
        )}

        {/* Quiz Complete */}
        {phase === 'quiz' && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Modul abgeschlossen!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient!</p>

            <div className="bg-orange-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-orange-800">
                  "GG Miner! Du kennst jetzt alle Körperteile! Let's go!"
                </p>
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning/adjektive"
              className="block w-full py-4 bg-orange-500 text-white rounded-xl font-semibold"
            >
              Weiter: Adjektive →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
