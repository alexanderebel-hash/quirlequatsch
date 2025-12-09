'use client';

import Link from 'next/link';
import { useState } from 'react';

const grammarRules = [
  {
    title: 'Einzahl mit IS',
    structure: 'Is + Subject + ...?',
    examples: [
      { question: 'Is Ben in the kitchen?', yes: 'Yes, he is.', no: "No, he isn't." },
      { question: 'Is the milk on the table?', yes: 'Yes, it is.', no: "No, it isn't." },
      { question: 'Is your mum tall?', yes: 'Yes, she is.', no: "No, she isn't." }
    ],
    emoji: '👤'
  },
  {
    title: 'Mehrzahl mit ARE',
    structure: 'Are + Subject + ...?',
    examples: [
      { question: 'Are you happy?', yes: 'Yes, I am.', no: "No, I'm not." },
      { question: 'Are they on the table?', yes: 'Yes, they are.', no: "No, they aren't." },
      { question: 'Are your feet big?', yes: 'Yes, they are.', no: "No, they aren't." }
    ],
    emoji: '👥'
  }
];

const exercises = [
  { 
    question: '___ Ben in the kitchen?', 
    answer: 'Is',
    options: ['Is', 'Are', 'Am', 'Does'],
    correctResponse: 'Yes, he is.',
    note: 'Ben = Einzahl → IS'
  },
  { 
    question: '___ the eggs in the fridge?', 
    answer: 'Are',
    options: ['Is', 'Are', 'Am', 'Does'],
    correctResponse: 'No, they aren\'t.',
    note: 'eggs = Mehrzahl → ARE'
  },
  { 
    question: 'Is it Sunday? – ___, it isn\'t.', 
    answer: 'No',
    options: ['Yes', 'No', 'Not', 'Isn\'t'],
    correctResponse: 'No, it isn\'t.',
    note: 'Kurzantwort: No + Pronomen + Verb'
  },
  { 
    question: 'Are you happy? – Yes, ___.', 
    answer: 'I am',
    options: ['I am', 'you are', 'I\'m', 'you\'re'],
    correctResponse: 'Yes, I am.',
    note: 'you → I in der Antwort'
  },
  { 
    question: 'Is your mum tall? – Yes, ___.', 
    answer: 'she is',
    options: ['she is', 'I am', 'he is', 'it is'],
    correctResponse: 'Yes, she is.',
    note: 'mum = she'
  },
  { 
    question: '___ the milk on the table?', 
    answer: 'Is',
    options: ['Is', 'Are', 'Am', 'Does'],
    correctResponse: 'Yes, it is.',
    note: 'milk = Einzahl → IS'
  },
  { 
    question: 'Are they at home? – No, ___.', 
    answer: 'they aren\'t',
    options: ['they aren\'t', 'they isn\'t', 'we aren\'t', 'you aren\'t'],
    correctResponse: 'No, they aren\'t.',
    note: 'they bleibt they in der Antwort'
  },
  { 
    question: '___ your eyes blue?', 
    answer: 'Are',
    options: ['Is', 'Are', 'Am', 'Have'],
    correctResponse: 'Yes, they are.',
    note: 'eyes = Mehrzahl → ARE'
  }
];

const capitanoSuccess = [
  "Perfect! Questions sitzt! 💎",
  "GG! Richtige Antwort! 🎮",
  "Boom! Weiter so! 🚀",
];

const capitanoError = [
  "Fast! Is = Einzahl, Are = Mehrzahl!",
  "Nope! Denk an die Kurzantwort!",
  "Nicht ganz! Nochmal!",
];

export default function QuestionsPage() {
  const [phase, setPhase] = useState<'learn' | 'practice' | 'complete'>('learn');
  const [currentRule, setCurrentRule] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [showNote, setShowNote] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const nextRule = () => {
    if (currentRule < grammarRules.length - 1) {
      setCurrentRule(currentRule + 1);
    } else {
      setPhase('practice');
    }
  };

  const handleAnswer = (answer: string) => {
    const correct = exercises[currentExercise].answer;
    if (answer === correct) {
      setFeedback({
        type: 'success',
        message: capitanoSuccess[Math.floor(Math.random() * capitanoSuccess.length)]
      });
      setScore(score + 10);
      setShowNote(false);
    } else {
      setFeedback({
        type: 'error',
        message: capitanoError[Math.floor(Math.random() * capitanoError.length)]
      });
      setShowNote(true);
    }

    setTimeout(() => {
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setFeedback({ type: null, message: '' });
      } else {
        setPhase('complete');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-blue-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">❓ Yes/No Questions</h1>
        <p className="text-blue-100 text-sm">Fragen & Antworten</p>
      </div>

      {/* Phase Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        <button
          onClick={() => setPhase('learn')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'learn' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'
          }`}
        >
          📚 Lernen
        </button>
        <button
          onClick={() => setPhase('practice')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'practice' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'
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
            <div className="bg-blue-100 rounded-xl p-4 mb-4">
              <p className="font-medium text-blue-800 mb-2">📌 Wichtig:</p>
              <p className="text-blue-700 text-sm">
                Für Yes/No-Fragen stellst du <strong>Is</strong> oder <strong>Are</strong> an den Anfang.<br />
                Die Kurzantwort wiederholt das Verb!
              </p>
            </div>

            {/* Main Rule Card */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 mb-4">
              <div className="text-center mb-4">
                <span className="text-5xl">{grammarRules[currentRule].emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 text-center mb-2">
                {grammarRules[currentRule].title}
              </h3>
              <p className="text-center text-lg font-bold text-gray-800 mb-4">
                {grammarRules[currentRule].structure}
              </p>
              <div className="space-y-3">
                {grammarRules[currentRule].examples.map((example, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg p-3">
                    <p className="text-gray-700 font-medium mb-1">{example.question}</p>
                    <p className="text-green-600 text-sm">✅ {example.yes}</p>
                    <p className="text-red-600 text-sm">❌ {example.no}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Memory Aid */}
            <div className="bg-cyan-100 rounded-xl p-4 mb-4">
              <p className="font-medium text-cyan-800 mb-2">💡 Merkhilfe:</p>
              <p className="text-cyan-700 text-sm">
                <strong>Einzahl</strong> (he/she/it) → <strong>IS</strong><br />
                <strong>Mehrzahl</strong> (you/we/they) → <strong>ARE</strong><br />
                <strong>Ich</strong> → <strong>AM</strong> (I am)
              </p>
            </div>

            <p className="text-center text-gray-500 text-sm mb-4">
              {currentRule + 1} / {grammarRules.length}
            </p>

            <button
              onClick={nextRule}
              className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold"
            >
              {currentRule < grammarRules.length - 1 ? 'Nächste Regel →' : 'Jetzt üben! 💪'}
            </button>
          </div>
        )}

        {/* Practice Phase */}
        {phase === 'practice' && (
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
              <p className="text-center text-gray-500 mb-2">Fülle die Lücke:</p>
              <p className="text-center text-xl font-medium text-gray-800">
                {exercises[currentExercise].question}
              </p>
              <p className="text-center text-sm text-gray-400 mt-2">
                → {exercises[currentExercise].correctResponse}
              </p>
            </div>

            {feedback.type && (
              <div className={`rounded-xl p-4 mb-4 ${
                feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{feedback.type === 'success' ? '🚀' : '🤔'}</span>
                  <p className={feedback.type === 'success' ? 'text-green-800 font-medium' : 'text-red-800 font-medium'}>
                    {feedback.message}
                  </p>
                </div>
                {showNote && feedback.type === 'error' && (
                  <p className="text-red-700 text-sm">💡 {exercises[currentExercise].note}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 mb-4">
              {exercises[currentExercise].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={feedback.type !== null}
                  className="py-4 bg-blue-100 text-blue-800 rounded-xl font-medium active:scale-95 transition-transform disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600">Score: <span className="font-bold text-blue-600">{score} XP</span></p>
              <p className="text-sm text-gray-400">{currentExercise + 1} / {exercises.length}</p>
            </div>

            {/* Quick Reference */}
            <div className="bg-blue-50 rounded-xl p-3 mt-4">
              <p className="text-xs text-blue-700">
                ⚡ Quick: Einzahl = <strong>IS</strong> | Mehrzahl = <strong>ARE</strong> | Ich = <strong>AM</strong>
              </p>
            </div>
          </div>
        )}

        {/* Complete */}
        {phase === 'complete' && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Questions-Master!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient!</p>

            <div className="bg-blue-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-blue-800">
                  "GG! Du kannst jetzt Fragen stellen UND beantworten! Time to play!"
                </p>
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning/spiele"
              className="block w-full py-4 bg-blue-500 text-white rounded-xl font-semibold"
            >
              Weiter: Spiele →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
