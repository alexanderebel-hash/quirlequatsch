'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SortItem {
  id: string;
  text: string;
  category: 'prokaryot' | 'eukaryot' | 'both';
}

const allItems: SortItem[] = [
  { id: '1', text: 'Hat echten Zellkern', category: 'eukaryot' },
  { id: '2', text: 'DNA liegt frei im Zytoplasma', category: 'prokaryot' },
  { id: '3', text: 'Hat Mitochondrien', category: 'eukaryot' },
  { id: '4', text: 'Größe: 10-100 µm', category: 'eukaryot' },
  { id: '5', text: 'Größe: 1-10 µm', category: 'prokaryot' },
  { id: '6', text: 'Hat Ribosomen', category: 'both' },
  { id: '7', text: 'Beispiel: Bakterien', category: 'prokaryot' },
  { id: '8', text: 'Beispiel: Pflanzenzelle', category: 'eukaryot' },
];

export default function LeniSortierenPage() {
  const [assignments, setAssignments] = useState<Record<string, 'prokaryot' | 'eukaryot' | null>>(
    Object.fromEntries(allItems.map(item => [item.id, null]))
  );
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const assignItem = (itemId: string, category: 'prokaryot' | 'eukaryot') => {
    setAssignments(prev => ({ ...prev, [itemId]: category }));
  };

  const isCorrect = (itemId: string, assignedCategory: 'prokaryot' | 'eukaryot' | null) => {
    if (!assignedCategory) return false;
    const item = allItems.find(i => i.id === itemId);
    if (!item) return false;
    if (item.category === 'both') return true;
    return item.category === assignedCategory;
  };

  const checkAnswers = () => {
    let correct = 0;
    Object.entries(assignments).forEach(([itemId, category]) => {
      if (category && isCorrect(itemId, category)) correct++;
    });
    setScore(correct);
    setIsChecked(true);
    
    if (correct >= 6) {
      confetti({ particleCount: 100, spread: 70 });
    }
  };

  const reset = () => {
    setAssignments(Object.fromEntries(allItems.map(item => [item.id, null])));
    setIsChecked(false);
    setScore(0);
  };

  const allAssigned = Object.values(assignments).every(v => v !== null);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/bio" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">🔀 Sortieren</h1>
        <button onClick={reset} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Instructions */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
        <p className="text-purple-800 text-sm md:text-base">
          <strong>Aufgabe:</strong> Ordne die Eigenschaften in die richtige Kategorie ein!
          Manche passen zu beiden (Ribosomen gibt es überall).
        </p>
      </div>

      {isChecked && (
        <div className={`rounded-xl p-4 mb-6 text-center ${score >= 6 ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
          <p className="font-bold text-lg">{score} von {allItems.length} richtig!</p>
          <p className="text-sm">{score >= 6 ? 'Super gemacht! 🎉' : 'Versuch es nochmal!'}</p>
        </div>
      )}

      {/* Items to Sort */}
      <div className="space-y-3">
        {allItems.map((item) => {
          const assigned = assignments[item.id];
          const showResult = isChecked && assigned;
          const correct = showResult ? isCorrect(item.id, assigned) : false;

          return (
            <div
              key={item.id}
              className={`
                bg-white rounded-xl p-4 border-2 shadow-sm
                ${showResult
                  ? correct
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200'
                }
              `}
            >
              <p className="text-gray-800 font-medium mb-3">{item.text}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => assignItem(item.id, 'prokaryot')}
                  disabled={isChecked}
                  className={`
                    flex-1 py-2 rounded-lg font-medium transition-colors
                    ${assigned === 'prokaryot'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    ${isChecked ? 'cursor-not-allowed' : ''}
                  `}
                >
                  🦠 Prokaryot
                </button>
                <button
                  onClick={() => assignItem(item.id, 'eukaryot')}
                  disabled={isChecked}
                  className={`
                    flex-1 py-2 rounded-lg font-medium transition-colors
                    ${assigned === 'eukaryot'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    ${isChecked ? 'cursor-not-allowed' : ''}
                  `}
                >
                  🧬 Eukaryot
                </button>
              </div>
              {showResult && (
                <div className="mt-2 flex items-center justify-center gap-2">
                  {correct ? (
                    <><Check className="w-4 h-4 text-emerald-600" /> <span className="text-sm text-emerald-700">Richtig!</span></>
                  ) : (
                    <><X className="w-4 h-4 text-red-600" /> <span className="text-sm text-red-700">Falsch</span></>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Check Button */}
      {!isChecked && allAssigned && (
        <button
          onClick={checkAnswers}
          className="w-full mt-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
        >
          ✓ Überprüfen
        </button>
      )}
    </div>
  );
}
