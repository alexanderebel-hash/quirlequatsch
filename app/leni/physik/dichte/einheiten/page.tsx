'use client';

import Link from 'next/link';
import { useState } from 'react';

const conversionRules = [
  { from: '1 l', to: '1000 ml', category: 'volume' },
  { from: '1 l', to: '1000 cm³', category: 'volume' },
  { from: '1 ml', to: '1 cm³', category: 'volume', highlight: true },
  { from: '1 kg', to: '1000 g', category: 'mass' },
  { from: '1 g', to: '1000 mg', category: 'mass' },
];

const exercises = [
  { question: '0,6 l = ? ml', answer: 600, unit: 'ml', hint: '× 1000' },
  { question: '0,6 l = ? cm³', answer: 600, unit: 'cm³', hint: '× 1000' },
  { question: '48 ml = ? cm³', answer: 48, unit: 'cm³', hint: '1:1!' },
  { question: '48 ml = ? l', answer: 0.048, unit: 'l', hint: '÷ 1000' },
  { question: '3,5 kg = ? g', answer: 3500, unit: 'g', hint: '× 1000' },
  { question: '175 g = ? kg', answer: 0.175, unit: 'kg', hint: '÷ 1000' },
  { question: '1,2 l = ? cm³', answer: 1200, unit: 'cm³', hint: '× 1000' },
  { question: '2,75 ml = ? l', answer: 0.00275, unit: 'l', hint: '÷ 1000' },
];

export default function EinheitenPage() {
  const [phase, setPhase] = useState<'learn' | 'practice'>('learn');
  const [currentEx, setCurrentEx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const exercise = exercises[currentEx];

  const checkAnswer = () => {
    const userNum = parseFloat(userAnswer.replace(',', '.'));
    const correct = Math.abs(userNum - exercise.answer) < 0.0001;
    
    if (correct) {
      setFeedback({ type: 'success', message: 'Richtig! 🦋' });
      setScore(score + 10);
    } else {
      setFeedback({ type: 'error', message: `Richtig wäre: ${exercise.answer} ${exercise.unit}` });
    }
  };

  const nextExercise = () => {
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    if (currentEx < exercises.length - 1) {
      setCurrentEx(currentEx + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-green-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold">🔄 Einheiten umrechnen</h1>
            <p className="text-green-200 text-sm">ml, cm³, l, g, kg</p>
          </div>
          {phase === 'practice' && (
            <div className="text-right">
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-green-200 text-xs">XP</p>
            </div>
          )}
        </div>
      </div>

      {/* Phase Tabs */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl p-1 flex gap-1 shadow-sm">
          <button
            onClick={() => setPhase('learn')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              phase === 'learn' ? 'bg-green-500 text-white' : 'text-gray-600'
            }`}
          >
            📚 Lernen
          </button>
          <button
            onClick={() => setPhase('practice')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              phase === 'practice' ? 'bg-green-500 text-white' : 'text-gray-600'
            }`}
          >
            ✏️ Üben
          </button>
        </div>
      </div>

      <div className="px-4">
        {/* Learn Phase */}
        {phase === 'learn' && (
          <>
            {/* Key Rule */}
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-xl p-4 mb-4">
              <p className="text-center text-yellow-800 font-bold text-lg">
                🔑 Die wichtigste Regel:
              </p>
              <p className="text-center text-yellow-900 text-2xl font-bold mt-2">
                1 ml = 1 cm³
              </p>
              <p className="text-center text-yellow-700 text-sm mt-1">
                Milliliter und Kubikzentimeter sind IMMER gleich!
              </p>
            </div>

            {/* Conversion Cards */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-700">Volumen-Umrechnungen:</p>
              {conversionRules.filter(r => r.category === 'volume').map((rule, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl p-4 flex justify-between items-center shadow-sm ${
                    rule.highlight ? 'border-2 border-green-400 bg-green-50' : 'border'
                  }`}
                >
                  <span className="font-medium text-gray-800">{rule.from}</span>
                  <span className="text-gray-400">=</span>
                  <span className="font-bold text-green-600">{rule.to}</span>
                </div>
              ))}

              <p className="font-semibold text-gray-700 mt-4">Masse-Umrechnungen:</p>
              {conversionRules.filter(r => r.category === 'mass').map((rule, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm border">
                  <span className="font-medium text-gray-800">{rule.from}</span>
                  <span className="text-gray-400">=</span>
                  <span className="font-bold text-blue-600">{rule.to}</span>
                </div>
              ))}
            </div>

            {/* Tip */}
            <div className="bg-purple-100 rounded-xl p-4 mt-6 flex items-start gap-3">
              <span className="text-2xl">🦋</span>
              <p className="text-purple-800 text-sm">
                <strong>Merkhilfe:</strong> Bei "Kilo" (kg) und "Liter" (l) ist der Faktor immer 1000. 
                Und: ml = cm³ – das ist super wichtig für alle Dichte-Aufgaben!
              </p>
            </div>

            <button
              onClick={() => setPhase('practice')}
              className="w-full mt-6 py-4 bg-green-500 text-white rounded-xl font-semibold"
            >
              Jetzt üben! →
            </button>
          </>
        )}

        {/* Practice Phase */}
        {phase === 'practice' && (
          <>
            {/* Progress */}
            <div className="flex gap-1 mb-4">
              {exercises.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full ${
                    i < currentEx ? 'bg-green-500' : i === currentEx ? 'bg-green-300' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border mb-4">
              <p className="text-center text-gray-500 text-sm mb-2">Aufgabe {currentEx + 1} / {exercises.length}</p>
              <p className="text-center text-2xl font-bold text-gray-800">{exercise.question}</p>
            </div>

            {/* Hint */}
            {showHint && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4">
                <p className="text-yellow-800 text-center">💡 Tipp: {exercise.hint}</p>
              </div>
            )}

            {/* Answer Input */}
            <div className="bg-white rounded-xl p-4 shadow-sm border mb-4">
              <label className="text-sm text-gray-600 mb-2 block">Deine Antwort:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Zahl eingeben"
                  className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-green-400 focus:outline-none"
                  disabled={feedback.type !== null}
                />
                <span className="flex items-center text-gray-500 font-medium px-2">{exercise.unit}</span>
              </div>
            </div>

            {/* Feedback */}
            {feedback.type && (
              <div className={`rounded-xl p-4 mb-4 ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              {!feedback.type && (
                <>
                  <button
                    onClick={() => setShowHint(true)}
                    className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl"
                  >
                    💡 Tipp
                  </button>
                  <button
                    onClick={checkAnswer}
                    className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold"
                  >
                    Prüfen ✓
                  </button>
                </>
              )}
              {feedback.type && (
                <button
                  onClick={nextExercise}
                  className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold"
                >
                  {currentEx < exercises.length - 1 ? 'Weiter →' : 'Fertig! 🎉'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
