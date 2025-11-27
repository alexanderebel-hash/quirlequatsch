'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Sentence {
  id: string;
  text: string;
  tense: 'simple-present' | 'present-progressive' | 'simple-past';
}

const sentences: Sentence[] = [
  { id: '1', text: 'She usually goes to school by bus.', tense: 'simple-present' },
  { id: '2', text: 'Look! The cat is sleeping on the sofa.', tense: 'present-progressive' },
  { id: '3', text: 'Yesterday, I visited my grandma.', tense: 'simple-past' },
  { id: '4', text: 'He always plays football on Saturdays.', tense: 'simple-present' },
  { id: '5', text: 'They are watching a movie right now.', tense: 'present-progressive' },
  { id: '6', text: 'Last week, we went to the zoo.', tense: 'simple-past' },
  { id: '7', text: 'My brother often reads comics.', tense: 'simple-present' },
  { id: '8', text: 'Listen! Someone is knocking at the door.', tense: 'present-progressive' },
  { id: '9', text: "She didn't see the ball.", tense: 'simple-past' },
];

export default function LeniEnglischSortierenPage() {
  const [assignments, setAssignments] = useState<Record<string, 'simple-present' | 'present-progressive' | 'simple-past' | null>>(
    Object.fromEntries(sentences.map(s => [s.id, null]))
  );
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const assignSentence = (sentenceId: string, tense: 'simple-present' | 'present-progressive' | 'simple-past' | null) => {
    setAssignments(prev => ({ ...prev, [sentenceId]: tense }));
  };

  const checkAnswers = () => {
    let correct = 0;
    sentences.forEach(s => {
      if (assignments[s.id] === s.tense) correct++;
    });
    
    setScore(correct);
    setIsChecked(true);
    
    if (correct >= 7) {
      confetti({ particleCount: 100, spread: 70 });
    }
  };

  const reset = () => {
    setAssignments(Object.fromEntries(sentences.map(s => [s.id, null])));
    setIsChecked(false);
    setScore(0);
  };

  const allAssigned = Object.values(assignments).every(v => v !== null);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/englisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">🔀 Sätze sortieren</h1>
        <button onClick={reset} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6">
        <p className="text-indigo-800 text-sm">
          <strong>Aufgabe:</strong> Ordne jeden Satz der richtigen Zeitform zu!
        </p>
      </div>

      {isChecked && (
        <div className={`rounded-xl p-4 mb-6 text-center ${score >= 7 ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
          <p className="font-bold text-lg">{score} von {sentences.length} richtig!</p>
          <p className="text-sm">{score >= 7 ? 'Super gemacht! 🎉' : 'Versuch es nochmal!'}</p>
        </div>
      )}

      <div className="space-y-3">
        {sentences.map((sentence) => (
          <div key={sentence.id} className="bg-white rounded-xl p-4 border-2 border-gray-200">
            <p className="text-sm text-gray-700 mb-3">{sentence.text}</p>
            <div className="flex gap-2">
              {(['simple-present', 'present-progressive', 'simple-past'] as const).map((tense) => (
                <button
                  key={tense}
                  onClick={() => assignSentence(sentence.id, assignments[sentence.id] === tense ? null : tense)}
                  disabled={isChecked}
                  className={`
                    flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all
                    ${assignments[sentence.id] === tense
                      ? isChecked
                        ? sentence.tense === tense
                          ? 'bg-emerald-500 text-white'
                          : 'bg-red-500 text-white'
                        : tense === 'simple-present'
                          ? 'bg-yellow-500 text-white'
                          : tense === 'present-progressive'
                            ? 'bg-blue-500 text-white'
                            : 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                    ${isChecked ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {tense === 'simple-present' ? '⏰ Simple Present' :
                   tense === 'present-progressive' ? '▶️ Present Progressive' :
                   '⏮️ Simple Past'}
                  {isChecked && assignments[sentence.id] === tense && (
                    <span className="ml-1">
                      {sentence.tense === tense ? <Check className="w-3 h-3 inline" /> : <X className="w-3 h-3 inline" />}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!isChecked && allAssigned && (
        <button
          onClick={checkAnswers}
          className="w-full mt-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
        >
          ✓ Überprüfen
        </button>
      )}

      {isChecked && (
        <button
          onClick={reset}
          className="w-full mt-6 py-4 bg-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-300 transition-colors"
        >
          🔄 Nochmal versuchen
        </button>
      )}
    </div>
  );
}
