'use client';

import Link from 'next/link';
import { useState } from 'react';

const exercises = [
  {
    type: 'cube',
    task: 'Berechne das Volumen eines Würfels mit a = 3 cm.',
    a: 3,
    formula: 'V = a³ = 3³',
    answer: 27,
    unit: 'cm³'
  },
  {
    type: 'cube',
    task: 'Berechne das Volumen eines Würfels mit a = 5 cm.',
    a: 5,
    formula: 'V = a³ = 5³',
    answer: 125,
    unit: 'cm³'
  },
  {
    type: 'cuboid',
    task: 'Berechne das Volumen eines Quaders mit a = 4 cm, b = 3 cm, c = 2 cm.',
    a: 4, b: 3, c: 2,
    formula: 'V = a·b·c = 4·3·2',
    answer: 24,
    unit: 'cm³'
  },
  {
    type: 'cuboid',
    task: 'Berechne das Volumen eines Quaders mit a = 25 cm, b = 11 cm, c = 8 cm.',
    a: 25, b: 11, c: 8,
    formula: 'V = a·b·c = 25·11·8',
    answer: 2200,
    unit: 'cm³'
  },
  {
    type: 'cuboid',
    task: 'Ein Aquarium hat die Maße 60 cm × 30 cm × 40 cm. Wie viel Liter Wasser passen hinein?',
    a: 60, b: 30, c: 40,
    formula: 'V = 60·30·40 = 72000 cm³ = 72 l',
    answer: 72000,
    answerInLiters: 72,
    unit: 'cm³',
    extraUnit: 'l'
  },
];

export default function VolumenPage() {
  const [currentEx, setCurrentEx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [showFormula, setShowFormula] = useState(false);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentEx];

  const checkAnswer = () => {
    const userNum = parseFloat(userAnswer.replace(',', '.'));
    const correct = userNum === exercise.answer || userNum === exercise.answerInLiters;
    
    if (correct) {
      setFeedback({ type: 'success', message: 'Perfekt! 🦋' });
      setScore(score + 10);
    } else {
      setFeedback({ type: 'error', message: `Richtig: ${exercise.formula} = ${exercise.answer} ${exercise.unit}` });
    }
  };

  const nextExercise = () => {
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowFormula(false);
    if (currentEx < exercises.length - 1) {
      setCurrentEx(currentEx + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-purple-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold">📦 Volumen berechnen</h1>
            <p className="text-purple-200 text-sm">Würfel & Quader</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{score}</p>
            <p className="text-purple-200 text-xs">XP</p>
          </div>
        </div>
      </div>

      {/* Formulas Reference */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border flex gap-4">
          <div className="flex-1 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl">🎲</span>
            </div>
            <p className="text-sm text-gray-600">Würfel</p>
            <p className="font-bold text-purple-600">V = a³</p>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="flex-1 text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <p className="text-sm text-gray-600">Quader</p>
            <p className="font-bold text-indigo-600">V = a·b·c</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {exercises.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentEx ? 'bg-purple-500' : i === currentEx ? 'bg-purple-300' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Task */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{exercise.type === 'cube' ? '🎲' : '📦'}</span>
            <span className="text-sm text-gray-500">
              {exercise.type === 'cube' ? 'Würfel' : 'Quader'}
            </span>
          </div>
          <p className="text-gray-800 font-medium">{exercise.task}</p>
        </div>

        {/* Formula Hint */}
        {showFormula && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
            <p className="text-purple-800">
              <strong>Formel:</strong> {exercise.type === 'cube' ? 'V = a · a · a = a³' : 'V = a · b · c'}
            </p>
          </div>
        )}

        {/* Answer Input */}
        <div className="bg-white rounded-xl p-4 shadow-sm border mb-4">
          <label className="text-sm text-gray-600 mb-2 block">Volumen V = ?</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Ergebnis"
              className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-purple-400 focus:outline-none"
              disabled={feedback.type !== null}
            />
            <span className="flex items-center text-gray-500 font-medium px-2">cm³</span>
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
                onClick={() => setShowFormula(true)}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl"
              >
                📐 Formel
              </button>
              <button
                onClick={checkAnswer}
                className="flex-1 py-3 bg-purple-500 text-white rounded-xl font-semibold"
              >
                Prüfen ✓
              </button>
            </>
          )}
          {feedback.type && (
            <button
              onClick={nextExercise}
              className="flex-1 py-3 bg-purple-500 text-white rounded-xl font-semibold"
            >
              {currentEx < exercises.length - 1 ? 'Weiter →' : 'Fertig! 🎉'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
