'use client';

import Link from 'next/link';
import { useState } from 'react';

const grammarRules = [
  {
    title: 'I/You/We/They',
    verb: "'ve got / have got",
    examples: [
      "I've got brown hair.",
      "You've got blue eyes.",
      "They've got a dog."
    ],
    emoji: '👥'
  },
  {
    title: 'He/She/It',
    verb: "'s got / has got",
    examples: [
      "He's got short hair.",
      "She's got green eyes.",
      "It's got four legs."
    ],
    emoji: '👤'
  },
  {
    title: 'Verneinung (I/You/We/They)',
    verb: "haven't got",
    examples: [
      "I haven't got freckles.",
      "They haven't got a cat."
    ],
    emoji: '🚫'
  },
  {
    title: 'Verneinung (He/She/It)',
    verb: "hasn't got",
    examples: [
      "He hasn't got a sister.",
      "She hasn't got long hair."
    ],
    emoji: '❌'
  }
];

const exercises = [
  { sentence: "Ben ___ slim.", answer: "is", options: ["is", "has", "have", "'s got"], note: "Hier brauchst du BE, nicht HAVE!" },
  { sentence: "He ___ got short brown hair.", answer: "has", options: ["has", "have", "is", "'ve"], note: "He = HAS got" },
  { sentence: "___ eyes are blue.", answer: "His", options: ["His", "He", "Him", "He's"], note: "Possessivpronomen = sein" },
  { sentence: "___ sister Sarah is in a wheelchair.", answer: "His", options: ["His", "He", "Her", "Him"], note: "Ben's Schwester = His sister" },
  { sentence: "___ has got long blond hair.", answer: "She", options: ["She", "Her", "Hers", "He"], note: "Personalpronomen für Sarah" },
  { sentence: "___ eyes are brown.", answer: "Her", options: ["Her", "She", "Hers", "His"], note: "Ihre Augen = Her eyes" },
  { sentence: "Emma has got blue eyes and ___ hair is brown.", answer: "her", options: ["her", "she", "his", "hers"], note: "Ihre Haare = her hair" },
  { sentence: "She ___ like her freckles.", answer: "doesn't", options: ["doesn't", "don't", "hasn't", "haven't"], note: "Bei LIKE brauchst du DO, nicht HAVE!" },
  { sentence: "I ___ got a dog.", answer: "haven't", options: ["haven't", "hasn't", "don't", "doesn't"], note: "I = HAVEN'T got" },
  { sentence: "My sister ___ got long hair.", answer: "has", options: ["has", "have", "is", "are"], note: "She = HAS got" }
];

const capitanoSuccess = [
  "Perfect! Have got sitzt! 💎",
  "GG! Das war richtig! 🎮",
  "Boom! Grammatik-Pro! 🚀",
];

const capitanoError = [
  "Nope! He/She/It = HAS got!",
  "Fast! I/You/We/They = HAVE got!",
  "Nicht ganz! Nochmal!",
];

export default function HaveGotPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-4">
        <Link href="/milan/englisch/morning" className="text-green-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">✋ Have Got</h1>
        <p className="text-green-100 text-sm">Besitz ausdrücken</p>
      </div>

      {/* Phase Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        <button
          onClick={() => setPhase('learn')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'learn' ? 'bg-green-100 text-green-700' : 'text-gray-500'
          }`}
        >
          📚 Lernen
        </button>
        <button
          onClick={() => setPhase('practice')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${
            phase === 'practice' ? 'bg-green-100 text-green-700' : 'text-gray-500'
          }`}
        >
          ✏️ Üben
        </button>
      </div>

      <div className="p-4">
        {/* Learn Phase */}
        {phase === 'learn' && (
          <div>
            {/* Main Rule Card */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 mb-4">
              <div className="text-center mb-4">
                <span className="text-5xl">{grammarRules[currentRule].emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 text-center mb-2">
                {grammarRules[currentRule].title}
              </h3>
              <p className="text-center text-2xl font-bold text-gray-800 mb-4">
                {grammarRules[currentRule].verb}
              </p>
              <div className="space-y-2">
                {grammarRules[currentRule].examples.map((example, idx) => (
                  <div key={idx} className="bg-green-50 rounded-lg p-3">
                    <p className="text-gray-700 text-center">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Memory Aid */}
            <div className="bg-green-100 rounded-xl p-4 mb-4">
              <p className="font-medium text-green-800 mb-2">💡 Merkhilfe:</p>
              <p className="text-green-700 text-sm">
                <strong>He/She/It</strong> → das S muss mit! → <strong>HAS</strong> got<br />
                <strong>I/You/We/They</strong> → <strong>HAVE</strong> got
              </p>
            </div>

            <p className="text-center text-gray-500 text-sm mb-4">
              {currentRule + 1} / {grammarRules.length}
            </p>

            <button
              onClick={nextRule}
              className="w-full py-4 bg-green-500 text-white rounded-xl font-semibold"
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
                {exercises[currentExercise].sentence}
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
                  className="py-4 bg-green-100 text-green-800 rounded-xl font-medium active:scale-95 transition-transform disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600">Score: <span className="font-bold text-green-600">{score} XP</span></p>
              <p className="text-sm text-gray-400">{currentExercise + 1} / {exercises.length}</p>
            </div>

            {/* Quick Reference */}
            <div className="bg-green-50 rounded-xl p-3 mt-4">
              <p className="text-xs text-green-700">
                ⚡ Quick: I/You/We/They = <strong>HAVE</strong> | He/She/It = <strong>HAS</strong>
              </p>
            </div>
          </div>
        )}

        {/* Complete */}
        {phase === 'complete' && (
          <div className="text-center py-8">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Grammatik-Boss!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient!</p>

            <div className="bg-green-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span>
                <p className="text-green-800">
                  "GG! Have got sitzt perfekt! Let's go zum Frühstück!"
                </p>
              </div>
            </div>

            <Link 
              href="/milan/englisch/morning/breakfast"
              className="block w-full py-4 bg-green-500 text-white rounded-xl font-semibold"
            >
              Weiter: Breakfast →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
