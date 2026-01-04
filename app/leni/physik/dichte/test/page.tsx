'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const testQuestions = [
  {
    type: 'formula',
    question: 'Wie lautet die Formel für die Dichte?',
    options: ['ρ = m · V', 'ρ = m / V', 'ρ = V / m', 'm = ρ / V'],
    correct: 1
  },
  {
    type: 'conversion',
    question: 'Wie viel ist 1 ml in cm³?',
    options: ['0,001 cm³', '1 cm³', '10 cm³', '1000 cm³'],
    correct: 1
  },
  {
    type: 'knowledge',
    question: 'Welche Dichte hat Wasser?',
    options: ['0,5 g/cm³', '1,0 g/cm³', '1,5 g/cm³', '2,0 g/cm³'],
    correct: 1
  },
  {
    type: 'swim',
    question: 'Welcher Stoff schwimmt auf Wasser?',
    options: ['Eisen', 'Aluminium', 'Holz', 'Gold'],
    correct: 2
  },
  {
    type: 'calculation',
    question: 'Ein Körper hat m = 500 g und V = 100 cm³. Wie groß ist ρ?',
    options: ['0,5 g/cm³', '5 g/cm³', '50 g/cm³', '500 g/cm³'],
    correct: 1
  },
  {
    type: 'conversion',
    question: '2,5 kg = ? g',
    options: ['25 g', '250 g', '2500 g', '25000 g'],
    correct: 2
  },
  {
    type: 'knowledge',
    question: 'Welchen Stoff hat Archimedes untersucht?',
    options: ['Silber', 'Eisen', 'Gold', 'Kupfer'],
    correct: 2
  },
  {
    type: 'calculation',
    question: 'ρ = 0,8 g/cm³, V = 50 cm³. Wie groß ist m?',
    options: ['4 g', '40 g', '62,5 g', '400 g'],
    correct: 1
  },
  {
    type: 'formula',
    question: 'Welche Formel brauchst du, um das Volumen zu berechnen?',
    options: ['V = ρ · m', 'V = m / ρ', 'V = ρ / m', 'V = m + ρ'],
    correct: 1
  },
  {
    type: 'swim',
    question: 'Ein Stoff hat ρ = 0,9 g/cm³. Was passiert im Wasser?',
    options: ['Er sinkt', 'Er schwimmt', 'Er löst sich auf', 'Nichts'],
    correct: 1
  },
];

export default function TestPage() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(testQuestions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setFinished(true);
    }
  }, [started, finished, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = (): number => {
    return answers.reduce((score, answer, i) => {
      if (answer === null) return score;
      return score + (answer === testQuestions[i].correct ? 1 : 0);
    }, 0);
  };

  const getGrade = (score: number) => {
    const percent = (score / testQuestions.length) * 100;
    if (percent >= 90) return { grade: '1', text: 'Sehr gut!' };
    if (percent >= 75) return { grade: '2', text: 'Gut!' };
    if (percent >= 60) return { grade: '3', text: 'Befriedigend' };
    if (percent >= 45) return { grade: '4', text: 'Ausreichend' };
    return { grade: '5', text: 'Mehr üben!' };
  };

  // Start Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full text-center">
          <span className="text-5xl mb-4 block">📝</span>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Klassenarbeit</h1>
          <p className="text-gray-600 mb-4">Volumen, Masse und Dichte</p>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-gray-600 mb-2">📋 {testQuestions.length} Fragen</p>
            <p className="text-sm text-gray-600 mb-2">⏱️ 30 Minuten Zeit</p>
            <p className="text-sm text-gray-600">📊 Multiple Choice</p>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold"
          >
            Test starten
          </button>
          
          <Link href="/leni/physik/dichte" className="block mt-4 text-gray-500 text-sm">
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  // Result Screen
  if (finished) {
    const score = calculateScore();
    const { grade, text } = getGrade(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full text-center">
          <span className="text-5xl mb-4 block">🎉</span>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Test beendet!</h1>
          
          <div className="my-6">
            <p className="text-6xl font-bold text-blue-600">{score}/{testQuestions.length}</p>
            <p className="text-gray-600 mt-2">richtige Antworten</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-lg font-medium text-gray-800">Note: {grade}</p>
            <p className="text-gray-600">{text}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setStarted(false);
                setCurrentQ(0);
                setAnswers(Array(testQuestions.length).fill(null));
                setFinished(false);
                setTimeLeft(30 * 60);
              }}
              className="flex-1 py-3 border border-blue-500 text-blue-600 rounded-xl font-medium"
            >
              Nochmal
            </button>
            <Link
              href="/leni/physik/dichte"
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold text-center"
            >
              Fertig
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Test Screen
  const question = testQuestions[currentQ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
      {/* Header with Timer */}
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0">
        <span className="text-sm text-gray-600">Frage {currentQ + 1}/{testQuestions.length}</span>
        <span className={`font-mono font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}>
          ⏱️ {formatTime(timeLeft)}
        </span>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="flex gap-1">
          {testQuestions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                answers[i] !== null ? 'bg-blue-500' : i === currentQ ? 'bg-blue-300' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4">
        {/* Question */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border mb-4">
          <p className="text-lg font-medium text-gray-800">{question.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                answers[currentQ] === i
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              <span className="mr-3">{String.fromCharCode(65 + i)})</span>
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ(currentQ - 1)}
              className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl"
            >
              ← Zurück
            </button>
          )}
          {currentQ < testQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQ(currentQ + 1)}
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
            >
              Weiter →
            </button>
          ) : (
            <button
              onClick={() => setFinished(true)}
              className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold"
            >
              Abgeben ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
