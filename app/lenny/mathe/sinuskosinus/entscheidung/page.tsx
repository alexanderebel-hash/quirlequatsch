'use client';

import Link from 'next/link';
import { useState } from 'react';

const scenarios = [
  { given: "a, b, c (3 Seiten)", answer: "kosinussatz", explanation: "SSS → Kosinussatz für Winkel" },
  { given: "a, b, α (Seite a gegenüber α)", answer: "sinussatz", explanation: "Pärchen vorhanden → Sinussatz" },
  { given: "b, c, α (α zwischen b und c)", answer: "kosinussatz", explanation: "SWS → Kosinussatz für Seite a" },
  { given: "a, α, β", answer: "sinussatz", explanation: "Pärchen a/α vorhanden → Sinussatz" },
  { given: "a, b, γ (γ zwischen a und b)", answer: "kosinussatz", explanation: "SWS → Kosinussatz für Seite c" },
  { given: "b, β, γ", answer: "sinussatz", explanation: "Pärchen b/β vorhanden → Sinussatz" },
  { given: "a, c, β (β gegenüber b)", answer: "sinussatz", explanation: "Brauche Seite b → habe Pärchen-Möglichkeit" },
  { given: "alle Winkel + eine Seite", answer: "sinussatz", explanation: "Mit einem Pärchen alle Seiten berechenbar" },
];

export default function EntscheidungPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [streak, setStreak] = useState(0);

  const current = scenarios[currentIndex];

  const handleSelect = (choice: string) => {
    setSelected(choice);
    if (choice === current.answer) {
      setScore(score + 10);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const isCorrect = selected === current.answer;

  const mascotComment = () => {
    if (!showResult) return null;
    if (isCorrect) {
      if (current.answer === 'sinussatz') {
        return { emoji: '🧑‍🏫', name: 'Sven', text: 'Richtig. Pärchen erkannt.' };
      } else {
        return { emoji: '🤌', name: 'Carlo', text: 'Esatto! Mein Territorium.' };
      }
    } else {
      return { emoji: '😐', name: 'Torsten', text: 'Nope. Schau nochmal: ' + current.explanation };
    }
  };

  const comment = mascotComment();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white px-4 py-4">
        <Link href="/lenny/mathe/sinuskosinus" className="text-white/70 text-sm">← Zurück</Link>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex -space-x-2">
            <span className="text-2xl">🧑‍🏫</span>
            <span className="text-2xl">🤌</span>
            <span className="text-2xl">😐</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Wann welchen Satz?</h1>
            <p className="text-white/70 text-sm">Alle drei helfen</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-3 bg-white border-b flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Frage {currentIndex + 1} / {scenarios.length}
        </span>
        <div className="flex items-center gap-4">
          {streak >= 3 && <span className="text-orange-500">🔥 {streak}</span>}
          <span className="font-medium text-purple-600">{score} XP</span>
        </div>
      </div>

      {/* Question */}
      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          <p className="text-gray-500 text-sm mb-2">Gegeben:</p>
          <p className="text-xl font-bold mb-6">{current.given}</p>

          <p className="text-gray-700 mb-4">Welchen Satz benutzt du?</p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => !showResult && handleSelect('sinussatz')}
              disabled={showResult}
              className={`p-4 rounded-xl border-2 transition-all ${
                showResult && selected === 'sinussatz'
                  ? isCorrect 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50'
                  : showResult && current.answer === 'sinussatz'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="text-2xl mb-2 block">🧑‍🏫</span>
              <span className="font-medium">Sinussatz</span>
            </button>

            <button
              onClick={() => !showResult && handleSelect('kosinussatz')}
              disabled={showResult}
              className={`p-4 rounded-xl border-2 transition-all ${
                showResult && selected === 'kosinussatz'
                  ? isCorrect 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50'
                  : showResult && current.answer === 'kosinussatz'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-red-300'
              }`}
            >
              <span className="text-2xl mb-2 block">🤌</span>
              <span className="font-medium">Kosinussatz</span>
            </button>
          </div>
        </div>

        {/* Feedback */}
        {comment && (
          <div className={`rounded-xl p-4 flex items-start gap-3 mb-4 ${
            isCorrect ? 'bg-green-100' : 'bg-yellow-100'
          }`}>
            <span className="text-2xl">{comment.emoji}</span>
            <div>
              <p className="font-medium">{comment.name}:</p>
              <p className="text-sm">{comment.text}</p>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showResult && currentIndex < scenarios.length - 1 && (
          <button
            onClick={nextQuestion}
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold"
          >
            Weiter →
          </button>
        )}

        {showResult && currentIndex === scenarios.length - 1 && (
          <div className="text-center">
            <p className="text-2xl mb-4">🎉</p>
            <p className="font-bold text-lg mb-2">Geschafft!</p>
            <p className="text-gray-600 mb-4">{score} XP verdient</p>
            <Link 
              href="/lenny/mathe/sinuskosinus/textaufgaben"
              className="block w-full bg-purple-600 text-white py-4 rounded-xl font-semibold"
            >
              Weiter: Textaufgaben →
            </Link>
          </div>
        )}
      </div>

      {/* Decision Helper */}
      <div className="px-4 mt-4">
        <div className="bg-gray-100 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Schnell-Check</h3>
          <div className="text-sm space-y-1">
            <p>✓ <strong>Pärchen</strong> (Seite + Gegen-Winkel)? → <span className="text-blue-600">Sinussatz</span></p>
            <p>✓ <strong>Kein Pärchen</strong>? → <span className="text-red-600">Kosinussatz</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
