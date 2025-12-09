'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const testQuestions = [
  {
    type: 'vocabulary',
    question: 'Übersetze: Fuß',
    answer: 'foot',
    options: ['foot', 'feet', 'leg', 'hand'],
    points: 2
  },
  {
    type: 'vocabulary',
    question: 'Plural von "tooth"',
    answer: 'teeth',
    options: ['tooths', 'teeth', 'toothes', 'tooth'],
    points: 2
  },
  {
    type: 'grammar',
    question: 'She ___ got brown hair.',
    answer: 'has',
    options: ['has', 'have', 'is', 'are'],
    points: 2
  },
  {
    type: 'grammar',
    question: '___ Ben in the kitchen?',
    answer: 'Is',
    options: ['Is', 'Are', 'Am', 'Does'],
    points: 2
  },
  {
    type: 'grammar',
    question: 'Are you happy? – Yes, ___',
    answer: 'I am',
    options: ['I am', 'you are', 'I\'m', 'you\'re'],
    points: 2
  },
  {
    type: 'adjectives',
    question: 'Übersetze: große Nase',
    answer: 'big nose',
    options: ['big nose', 'nose big', 'great nose', 'large nose'],
    points: 2
  },
  {
    type: 'vocabulary',
    question: 'Was ist "Spiegelei" auf Englisch?',
    answer: 'fried egg',
    options: ['fried egg', 'boiled egg', 'scrambled egg', 'egg fried'],
    points: 2
  },
  {
    type: 'grammar',
    question: 'I ___ got blue eyes.',
    answer: 'have',
    options: ['have', 'has', 'am', 'is'],
    points: 2
  },
  {
    type: 'vocabulary',
    question: 'Was gehört zum Full English Breakfast?',
    answer: 'bacon',
    options: ['bacon', 'pizza', 'pasta', 'rice'],
    points: 2
  },
  {
    type: 'grammar',
    question: 'He ___ got a sister.',
    answer: "hasn't",
    options: ["hasn't", "haven't", "don't", "isn't"],
    points: 2
  },
  {
    type: 'adjectives',
    question: 'Wo steht das Adjektiv im Englischen?',
    answer: 'vor dem Nomen',
    options: ['vor dem Nomen', 'nach dem Nomen', 'am Ende', 'egal wo'],
    points: 2
  },
  {
    type: 'vocabulary',
    question: '"hair" ist im Englischen...',
    answer: 'immer Einzahl',
    options: ['immer Einzahl', 'immer Mehrzahl', 'beides möglich', 'uncountable'],
    points: 2
  }
];

export default function TestPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(testQuestions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  // Timer
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !finished) {
      finishTest();
    }
  }, [started, timeLeft, finished]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishTest = () => {
    // Calculate score
    let totalScore = 0;
    answers.forEach((answer, idx) => {
      if (answer === testQuestions[idx].answer) {
        totalScore += testQuestions[idx].points;
      }
    });
    setScore(totalScore);
    setFinished(true);
  };

  const getGrade = () => {
    const percentage = (score / 24) * 100;
    if (percentage >= 90) return { grade: '1', text: 'Sehr gut!', emoji: '🌟' };
    if (percentage >= 75) return { grade: '2', text: 'Gut!', emoji: '🎉' };
    if (percentage >= 60) return { grade: '3', text: 'Befriedigend', emoji: '👍' };
    if (percentage >= 50) return { grade: '4', text: 'Ausreichend', emoji: '📚' };
    return { grade: '5', text: 'Noch üben!', emoji: '💪' };
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-4">
          <Link href="/milan/englisch/morning" className="text-gray-300 text-sm">← Zurück</Link>
          <h1 className="text-xl font-bold mt-2">📝 Klassenarbeit-Simulation</h1>
          <p className="text-gray-200 text-sm">30 Minuten Test</p>
        </div>

        <div className="p-4">
          <div className="bg-orange-100 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🚀</span>
              <div>
                <p className="font-semibold text-orange-800">Capitano sagt:</p>
                <p className="text-orange-700 text-sm">
                  "Zeit für den Boss-Level! Du packst das, Miner! Zeig was du kannst!"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6">
            <h2 className="text-xl font-bold mb-4">Test-Info</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span>⏱️</span>
                <span><strong>Zeit:</strong> 30 Minuten</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📋</span>
                <span><strong>Fragen:</strong> 12 Aufgaben</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎯</span>
                <span><strong>Punkte:</strong> 24 Punkte möglich</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📚</span>
                <span><strong>Themen:</strong> Körperteile, Adjektive, have got, Frühstück, Questions</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold text-lg"
          >
            Test starten! 📝
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const gradeInfo = getGrade();
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">Test abgeschlossen!</h1>
        </div>

        <div className="p-4">
          <div className="text-center py-8">
            <span className="text-7xl mb-4 block">{gradeInfo.emoji}</span>
            <h2 className="text-3xl font-bold mb-2">Note: {gradeInfo.grade}</h2>
            <p className="text-xl text-gray-600 mb-4">{gradeInfo.text}</p>
            <p className="text-2xl font-bold text-gray-800 mb-6">{score} / 24 Punkte</p>

            <div className="bg-orange-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-orange-800">
                  {score >= 20 ? '"GG! Klassenarbeits-Boss! 💎"' : 
                   score >= 15 ? '"Gut gemacht, Miner! Weiter so! 🎮"' : 
                   '"Nicht schlecht! Mit Üben wird\'s noch besser! 💪"'}
                </p>
              </div>
            </div>

            {/* Answer Review */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border mb-6 text-left">
              <h3 className="font-bold text-lg mb-3">Deine Antworten:</h3>
              <div className="space-y-2">
                {testQuestions.map((q, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${
                    answers[idx] === q.answer ? 'bg-green-50' : 'bg-red-50'
                  }`}>
                    <p className="text-sm font-medium text-gray-700">{idx + 1}. {q.question}</p>
                    <p className={`text-sm ${
                      answers[idx] === q.answer ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {answers[idx] === q.answer ? '✅' : '❌'} Deine Antwort: {answers[idx] || 'Keine Antwort'}
                    </p>
                    {answers[idx] !== q.answer && (
                      <p className="text-sm text-gray-600">✔️ Richtig wäre: {q.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning"
              className="block w-full py-4 bg-gray-700 text-white rounded-xl font-semibold"
            >
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
      {/* Header with Timer */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Frage {currentQuestion + 1} / {testQuestions.length}</span>
          <span className="text-lg font-bold">⏱️ {formatTime(timeLeft)}</span>
        </div>
        <div className="mt-2 bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / testQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-4">
        {/* Question */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
          <p className="text-xs text-gray-500 mb-2 uppercase">{testQuestions[currentQuestion].type}</p>
          <p className="text-xl font-medium text-gray-800 mb-4">
            {testQuestions[currentQuestion].question}
          </p>
          <p className="text-sm text-gray-500">
            {testQuestions[currentQuestion].points} Punkte
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {testQuestions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`w-full py-4 rounded-xl font-medium text-left px-4 transition-all ${
                answers[currentQuestion] === option
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-800 active:scale-[0.98]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium disabled:opacity-30"
          >
            ← Zurück
          </button>
          
          {currentQuestion === testQuestions.length - 1 ? (
            <button
              onClick={finishTest}
              className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium"
            >
              Test abgeben ✓
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium"
            >
              Weiter →
            </button>
          )}
        </div>

        {/* Answer Overview */}
        <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border">
          <p className="text-sm font-medium text-gray-700 mb-2">Antworten-Übersicht:</p>
          <div className="grid grid-cols-6 gap-2">
            {testQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                className={`aspect-square rounded-lg text-sm font-medium ${
                  answers[idx] !== null
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-gray-400'
                } ${currentQuestion === idx ? 'ring-2 ring-orange-500' : ''}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
