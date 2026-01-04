'use client';

import Link from 'next/link';
import { useState } from 'react';

const questionPrompts = [
  { german: 'Frag, wie er/sie heißt.', french: 'Tu t\'appelles comment?', hint: 'Tu t\'appelles...?' },
  { german: 'Frag, woher er/sie kommt.', french: 'Tu es d\'où?', hint: 'Tu es d\'...?' },
  { german: 'Frag, wie alt er/sie ist.', french: 'Tu as quel âge?', hint: 'Tu as quel...?' },
  { german: 'Frag, wann er/sie Geburtstag hat.', french: 'Ton anniversaire, c\'est quand?', hint: 'Ton anniversaire...?' },
  { german: 'Frag, ob er/sie Geschwister hat.', french: 'Tu as des frères et sœurs?', hint: 'Tu as des...?' },
  { german: 'Frag, wie seine/ihre Geschwister heißen.', french: 'Il/Elle s\'appelle comment?', hint: 'Il/Elle s\'appelle...?' },
  { german: 'Frag, wie alt seine/ihre Geschwister sind.', french: 'Il/Elle a quel âge?', hint: 'Il/Elle a quel...?' },
  { german: 'Frag, ob er/sie Haustiere hat.', french: 'Tu as un chat/chien?', hint: 'Tu as un...?' },
  { german: 'Frag, wie seine/ihre Haustiere heißen.', french: 'Il/Elle s\'appelle comment?', hint: 'Il/Elle s\'appelle...?' },
  { german: 'Frag, wer seine/ihre Freunde sind.', french: 'Tu es l\'ami(e) de qui?', hint: 'Tu es l\'ami(e)...?' },
  { german: 'Frag, was er/sie mag.', french: 'Qu\'est-ce que tu aimes?', hint: 'Qu\'est-ce que tu...?' },
];

export default function FragenPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<'learn' | 'quiz'>('learn');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const current = questionPrompts[currentIndex];

  const nextQuestion = () => {
    setShowAnswer(false);
    setShowHint(false);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    
    if (currentIndex < questionPrompts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (phase === 'learn') {
        setPhase('quiz');
        setCurrentIndex(0);
      }
    }
  };

  const checkAnswer = () => {
    // Simplified check - just check if key words are present
    const userLower = userAnswer.toLowerCase().trim();
    const correctLower = current.french.toLowerCase();
    
    // Check for key parts
    const isCorrect = userLower.includes('tu') || userLower.includes('est-ce');
    
    if (isCorrect && userLower.length > 5) {
      setFeedback({ type: 'success', message: 'Très bien! 🦋 Das klingt richtig!' });
      setScore(score + 10);
    } else {
      setFeedback({ type: 'error', message: `Die richtige Antwort: "${current.french}"` });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-4">
        <Link href="/leni/franzoesisch/interview" className="text-blue-200 text-sm">← Zurück</Link>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold">❓ Fragen stellen</h1>
            <p className="text-blue-200 text-sm">
              {phase === 'learn' ? 'Lerne die Fragen' : 'Quiz-Modus'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{score}</p>
            <p className="text-blue-200 text-xs">XP</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="flex gap-1">
          {questionPrompts.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentIndex ? 'bg-blue-500' : i === currentIndex ? 'bg-blue-300' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {currentIndex + 1} / {questionPrompts.length}
        </p>
      </div>

      <div className="px-4">
        {/* Prompt Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-4">
          <p className="text-sm text-gray-500 mb-2">Aufgabe:</p>
          <p className="text-xl font-semibold text-gray-800">{current.german}</p>
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
                <p className="text-sm text-green-600 mb-1">Richtige Frage:</p>
                <p className="text-xl font-semibold text-green-800">{current.french}</p>
              </div>
            )}

            <div className="flex gap-3">
              {!showAnswer && (
                <button
                  onClick={() => setShowHint(true)}
                  className="flex-1 py-3 border border-blue-300 text-blue-600 rounded-xl font-medium"
                >
                  💡 Hinweis
                </button>
              )}
              <button
                onClick={showAnswer ? nextQuestion : () => setShowAnswer(true)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
              >
                {showAnswer ? 'Weiter →' : 'Lösung zeigen'}
              </button>
            </div>
          </>
        )}

        {/* Quiz Mode */}
        {phase === 'quiz' && (
          <>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-2 block">
                Schreibe die französische Frage:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Tu..."
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
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
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
                >
                  Weiter →
                </button>
              ) : (
                <button
                  onClick={checkAnswer}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
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
            Tipp: Die meisten Fragen beginnen mit "Tu..." (du) – 
            außer wenn du nach Geschwistern fragst, dann "Il/Elle..."
          </p>
        </div>
      </div>
    </div>
  );
}
