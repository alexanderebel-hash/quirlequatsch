'use client';

import Link from 'next/link';
import { useState } from 'react';

const exercises = [
  {
    id: 1,
    task: 'Ein Stein hat ein Volumen von 20,5 cm³ und eine Masse von 89,3 g. Berechne die Dichte.',
    given: { V: '20,5 cm³', m: '89,3 g' },
    needsConversion: false,
    answer: 4.36,
    unit: 'g/cm³',
    hint: 'Einheiten passen bereits – direkt einsetzen!',
    steps: [
      { label: 'Gegeben', content: 'V = 20,5 cm³, m = 89,3 g' },
      { label: 'Gesucht', content: 'ρ (Dichte)' },
      { label: 'Formel', content: 'ρ = m / V' },
      { label: 'Einsetzen', content: 'ρ = 89,3 g / 20,5 cm³' },
      { label: 'Ergebnis', content: 'ρ = 4,36 g/cm³', highlight: true },
    ]
  },
  {
    id: 2,
    task: '0,6 l Benzin haben eine Masse von 444 g. Berechne die Dichte.',
    given: { V: '0,6 l', m: '444 g' },
    needsConversion: true,
    answer: 0.74,
    unit: 'g/cm³',
    hint: 'Erst Liter in cm³ umrechnen! 1 l = 1000 cm³',
    steps: [
      { label: 'Gegeben', content: 'V = 0,6 l, m = 444 g' },
      { label: 'Umrechnung', content: '0,6 l = 600 ml = 600 cm³', highlight: true },
      { label: 'Gesucht', content: 'ρ (Dichte)' },
      { label: 'Formel', content: 'ρ = m / V' },
      { label: 'Einsetzen', content: 'ρ = 444 g / 600 cm³' },
      { label: 'Ergebnis', content: 'ρ = 0,74 g/cm³', highlight: true },
    ]
  },
  {
    id: 3,
    task: 'Ein Styroporwürfel wiegt 6,0 g und hat ein Volumen von 200 cm³.',
    given: { V: '200 cm³', m: '6,0 g' },
    needsConversion: false,
    answer: 0.03,
    unit: 'g/cm³',
    hint: 'Styropor ist super leicht!',
    steps: [
      { label: 'Gegeben', content: 'V = 200 cm³, m = 6,0 g' },
      { label: 'Gesucht', content: 'ρ (Dichte)' },
      { label: 'Formel', content: 'ρ = m / V' },
      { label: 'Einsetzen', content: 'ρ = 6,0 g / 200 cm³' },
      { label: 'Ergebnis', content: 'ρ = 0,03 g/cm³', highlight: true },
    ]
  },
  {
    id: 4,
    task: 'Ein Ziegelstein hat die Maße a = 25 cm, b = 11 cm, c = 8 cm und wiegt 3,5 kg.',
    given: { a: '25 cm', b: '11 cm', c: '8 cm', m: '3,5 kg' },
    needsConversion: true,
    answer: 1.59,
    unit: 'g/cm³',
    hint: 'Erst V berechnen und kg in g umrechnen!',
    steps: [
      { label: 'Gegeben', content: 'a = 25 cm, b = 11 cm, c = 8 cm, m = 3,5 kg' },
      { label: 'Volumen', content: 'V = a·b·c = 25·11·8 = 2200 cm³', highlight: true },
      { label: 'Masse', content: 'm = 3,5 kg = 3500 g', highlight: true },
      { label: 'Gesucht', content: 'ρ (Dichte)' },
      { label: 'Formel', content: 'ρ = m / V' },
      { label: 'Einsetzen', content: 'ρ = 3500 g / 2200 cm³' },
      { label: 'Ergebnis', content: 'ρ = 1,59 g/cm³', highlight: true },
    ]
  },
  {
    id: 5,
    task: 'Die Krone des Archimedes hatte eine Masse von 9 kg und ein Volumen von 500 cm³. Bestand sie aus reinem Gold? (Gold: ρ = 19,3 g/cm³)',
    given: { V: '500 cm³', m: '9 kg' },
    needsConversion: true,
    answer: 18,
    unit: 'g/cm³',
    hint: 'Vergleiche mit Gold (19,3 g/cm³)!',
    conclusion: '18 g/cm³ < 19,3 g/cm³ → KEIN reines Gold!',
    steps: [
      { label: 'Gegeben', content: 'V = 500 cm³, m = 9 kg' },
      { label: 'Masse', content: 'm = 9 kg = 9000 g', highlight: true },
      { label: 'Gesucht', content: 'ρ (Dichte)' },
      { label: 'Formel', content: 'ρ = m / V' },
      { label: 'Einsetzen', content: 'ρ = 9000 g / 500 cm³' },
      { label: 'Ergebnis', content: 'ρ = 18 g/cm³', highlight: true },
      { label: 'Vergleich', content: 'Gold: 19,3 g/cm³ > 18 g/cm³ → Kein reines Gold!', highlight: true },
    ]
  },
];

export default function DichteRechnenPage() {
  const [currentEx, setCurrentEx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null }>({ type: null });
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentEx];

  const checkAnswer = () => {
    const userNum = parseFloat(userAnswer.replace(',', '.'));
    const correct = Math.abs(userNum - exercise.answer) < 0.1;
    
    if (correct) {
      setFeedback({ type: 'success' });
      setScore(score + 15);
    } else {
      setFeedback({ type: 'error' });
    }
  };

  const nextExercise = () => {
    setUserAnswer('');
    setFeedback({ type: null });
    setShowSolution(false);
    setShowHint(false);
    if (currentEx < exercises.length - 1) {
      setCurrentEx(currentEx + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-red-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-xl font-bold">🧮 Dichte berechnen</h1>
            <p className="text-red-200 text-sm">Aufgabe {currentEx + 1} / {exercises.length}</p>
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
          {exercises.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentEx ? 'bg-green-500' : i === currentEx ? 'bg-red-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4">
        {/* Task */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border mb-4">
          <p className="text-sm text-gray-500 mb-2">Aufgabe:</p>
          <p className="text-gray-800 font-medium leading-relaxed">{exercise.task}</p>
          
          {/* Given Values */}
          <div className="mt-4 bg-gray-50 rounded-xl p-3">
            <p className="text-sm text-gray-600 font-medium mb-1">Gegeben:</p>
            {Object.entries(exercise.given).map(([key, value]) => (
              <p key={key} className="text-gray-700 text-sm">{key} = {value}</p>
            ))}
          </div>
        </div>

        {/* Hint */}
        {showHint && !showSolution && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <p className="text-yellow-800">💡 {exercise.hint}</p>
          </div>
        )}

        {/* Answer Input (if not showing solution) */}
        {!showSolution && (
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-4">
            <label className="text-sm text-gray-600 mb-2 block">Deine Antwort (ρ = ?):</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="z.B. 4,36"
                className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-red-400 focus:outline-none"
                disabled={feedback.type !== null}
              />
              <span className="flex items-center text-gray-500 font-medium">g/cm³</span>
            </div>

            {feedback.type && (
              <div className={`mt-3 p-3 rounded-xl ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.type === 'success' ? '✓ Richtig! 🦋' : `✗ Leider falsch. Richtig: ${exercise.answer} g/cm³`}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Solution Steps */}
        {showSolution && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-4">
            <p className="font-bold text-green-800 mb-4">📝 Lösungsweg:</p>
            <div className="space-y-2">
              {exercise.steps.map((step, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 p-2 rounded-lg ${step.highlight ? 'bg-green-100' : ''}`}
                >
                  <span className="text-green-600 font-medium min-w-[80px]">{step.label}:</span>
                  <span className={step.highlight ? 'font-bold text-green-800' : 'text-green-700'}>
                    {step.content}
                  </span>
                </div>
              ))}
            </div>
            
            {exercise.conclusion && (
              <div className="mt-4 p-3 bg-yellow-100 rounded-xl">
                <p className="text-yellow-800 font-medium">⚡ {exercise.conclusion}</p>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          {!feedback.type && !showSolution && (
            <>
              <button
                onClick={() => setShowHint(true)}
                className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl"
              >
                💡 Hinweis
              </button>
              <button
                onClick={checkAnswer}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold"
              >
                Prüfen ✓
              </button>
            </>
          )}
          
          {feedback.type && !showSolution && (
            <>
              <button
                onClick={() => setShowSolution(true)}
                className="flex-1 py-3 border border-green-400 text-green-600 rounded-xl"
              >
                📖 Lösungsweg
              </button>
              <button
                onClick={nextExercise}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold"
              >
                Weiter →
              </button>
            </>
          )}
          
          {showSolution && (
            <button
              onClick={nextExercise}
              className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold"
            >
              {currentEx < exercises.length - 1 ? 'Nächste Aufgabe →' : 'Fertig! 🎉'}
            </button>
          )}
        </div>

        {/* Formula Reference */}
        <div className="mt-6 bg-blue-100 rounded-xl p-4">
          <p className="text-center text-blue-800 font-medium">
            ρ = m / V &nbsp;&nbsp;|&nbsp;&nbsp; m = ρ · V &nbsp;&nbsp;|&nbsp;&nbsp; V = m / ρ
          </p>
        </div>
      </div>
    </div>
  );
}
