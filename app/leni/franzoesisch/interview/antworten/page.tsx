'use client';

import Link from 'next/link';
import { useState } from 'react';

const answerPrompts = [
  { question: 'Tu t\'appelles comment?', german: 'Wie heißt du?', answer: 'Je m\'appelle Leni.', hint: 'Je m\'appelle...' },
  { question: 'Tu es d\'où?', german: 'Woher kommst du?', answer: 'Je suis de Berlin.', hint: 'Je suis de...' },
  { question: 'Tu as quel âge?', german: 'Wie alt bist du?', answer: 'J\'ai treize ans.', hint: 'J\'ai ... ans.' },
  { question: 'Ton anniversaire, c\'est quand?', german: 'Wann hast du Geburtstag?', answer: 'Mon anniversaire, c\'est le quinze octobre.', hint: 'Mon anniversaire, c\'est le...' },
  { question: 'Tu as des frères et sœurs?', german: 'Hast du Geschwister?', answer: 'Oui, j\'ai une sœur.', hint: 'Oui, j\'ai... / Non, je suis...' },
  { question: 'Elle s\'appelle comment?', german: 'Wie heißt sie?', answer: 'Elle s\'appelle Anna.', hint: 'Elle s\'appelle...' },
  { question: 'Elle a quel âge?', german: 'Wie alt ist sie?', answer: 'Elle a onze ans.', hint: 'Elle a ... ans.' },
  { question: 'Tu as un chat?', german: 'Hast du eine Katze?', answer: 'Oui, j\'ai un chat.', hint: 'Oui, j\'ai... / Non, je n\'ai pas...' },
  { question: 'Il s\'appelle comment?', german: 'Wie heißt er?', answer: 'Il s\'appelle Mimi.', hint: 'Il s\'appelle...' },
  { question: 'Qu\'est-ce que tu aimes?', german: 'Was magst du?', answer: 'J\'aime la musique et le sport.', hint: 'J\'aime...' },
];

export default function AntwortenPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<'learn' | 'practice'>('learn');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const current = answerPrompts[currentIndex];

  const nextQuestion = () => {
    setShowAnswer(false);
    setShowHint(false);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    
    if (currentIndex < answerPrompts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (phase === 'learn') {
        setPhase('practice');
        setCurrentIndex(0);
      }
    }
  };

  const checkAnswer = () => {
    const userLower = userAnswer.toLowerCase().trim();
    
    // Simple check - just verify it's a reasonable answer
    if (userLower.length > 5 && (userLower.includes('je') || userLower.includes('j\'') || userLower.includes('mon') || userLower.includes('ma'))) {
      setFeedback({ type: 'success', message: 'Très bien! 🦋 Das ist eine gute Antwort!' });
      setScore(score + 10);
    } else {
      setFeedback({ type: 'error', message: `Beispiel-Antwort: "${current.answer}"` });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white pb-24">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-4">
        <Link href="/leni/franzoesisch/interview" className="text-red-200 text-sm">← Zurück</Link>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold">💬 Antworten geben</h1>
            <p className="text-red-200 text-sm">
              {phase === 'learn' ? 'Lerne die Antworten' : 'Übungs-Modus'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{score}</p>
            <p className="text-red-200 text-xs">XP</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="flex gap-1">
          {answerPrompts.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentIndex ? 'bg-red-500' : i === currentIndex ? 'bg-red-300' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {currentIndex + 1} / {answerPrompts.length}
        </p>
      </div>

      <div className="px-4">
        {/* Question Card */}
        <div className="bg-pink-100 rounded-2xl p-4 mb-4 border border-pink-200">
          <p className="text-sm text-pink-600 mb-1">Partner fragt:</p>
          <p className="text-xl font-semibold text-pink-900 mb-1">{current.question}</p>
          <p className="text-sm text-pink-600">({current.german})</p>
        </div>

        {/* Learn Mode */}
        {phase === 'learn' && (
          <>
            {showHint && !showAnswer && (
              <div className="bg-yellow-50 rounded-xl p-4 mb-4">
                <p className="text-yellow-800">💡 Hinweis: {current.hint}</p>
              </div>
            )}

            {showAnswer && (
              <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-200">
                <p className="text-sm text-green-600 mb-1">Beispiel-Antwort:</p>
                <p className="text-xl font-semibold text-green-800">{current.answer}</p>
              </div>
            )}

            <div className="flex gap-3">
              {!showAnswer && (
                <button
                  onClick={() => setShowHint(true)}
                  className="flex-1 py-3 border border-red-300 text-red-600 rounded-xl font-medium"
                >
                  💡 Hinweis
                </button>
              )}
              <button
                onClick={showAnswer ? nextQuestion : () => setShowAnswer(true)}
                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold"
              >
                {showAnswer ? 'Weiter →' : 'Lösung zeigen'}
              </button>
            </div>
          </>
        )}

        {/* Practice Mode */}
        {phase === 'practice' && (
          <>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-2 block">
                Deine Antwort auf Französisch:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Je..."
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-red-500 focus:outline-none"
              />
            </div>

            {feedback.type && (
              <div className={`rounded-xl p-4 mb-4 ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowHint(true)}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl"
              >
                💡 Hinweis
              </button>
              {feedback.type ? (
                <button
                  onClick={nextQuestion}
                  className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold"
                >
                  Weiter →
                </button>
              ) : (
                <button
                  onClick={checkAnswer}
                  className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold"
                >
                  Prüfen ✓
                </button>
              )}
            </div>

            {showHint && (
              <div className="bg-yellow-50 rounded-xl p-4 mt-4">
                <p className="text-yellow-800">💡 {current.hint}</p>
              </div>
            )}
          </>
        )}

        {/* Butterfly Tip */}
        <div className="bg-purple-50 rounded-xl p-4 mt-6 flex items-start gap-3">
          <span className="text-xl">🦋</span>
          <p className="text-purple-800 text-sm">
            Tipp: Bei den Antworten beginnst du meist mit "Je..." (ich). 
            Passe die Antworten an deine persönlichen Infos an!
          </p>
        </div>

        {/* Personal Info Helper */}
        <div className="bg-blue-50 rounded-xl p-4 mt-4">
          <p className="font-semibold text-blue-800 mb-2">📝 Füll das für dich aus:</p>
          <div className="text-sm text-blue-700 space-y-1">
            <p>• Name: _________________</p>
            <p>• Stadt: _________________</p>
            <p>• Alter: _________________</p>
            <p>• Geburtstag: _________________</p>
            <p>• Geschwister: _________________</p>
            <p>• Haustiere: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );
}
