'use client';

import Link from 'next/link';
import { useState } from 'react';

const dialogSteps = [
  { role: 'you', type: 'greet', prompt: 'Begrüße deinen Partner', expected: 'Bonjour! / Salut!' },
  { role: 'partner', type: 'greet', text: 'Salut! Ça va?' },
  { role: 'you', type: 'answer', prompt: 'Antworte und frag zurück', expected: 'Ça va bien, merci. Et toi?' },
  { role: 'partner', type: 'answer', text: 'Ça va. Tu t\'appelles comment?' },
  { role: 'you', type: 'answer', prompt: 'Sag deinen Namen', expected: 'Je m\'appelle [Name].' },
  { role: 'you', type: 'question', prompt: 'Frag, wie er/sie heißt', expected: 'Et toi? Tu t\'appelles comment?' },
  { role: 'partner', type: 'answer', text: 'Je m\'appelle Sophie. Tu es d\'où?' },
  { role: 'you', type: 'answer', prompt: 'Sag woher du kommst', expected: 'Je suis de Berlin.' },
  { role: 'you', type: 'question', prompt: 'Frag woher er/sie kommt', expected: 'Et toi? Tu es d\'où?' },
  { role: 'partner', type: 'answer', text: 'Je suis de Paris. Tu as quel âge?' },
  { role: 'you', type: 'answer', prompt: 'Sag wie alt du bist', expected: 'J\'ai treize ans.' },
  { role: 'you', type: 'question', prompt: 'Frag wie alt er/sie ist', expected: 'Et toi? Tu as quel âge?' },
  { role: 'partner', type: 'answer', text: 'J\'ai quatorze ans. Tu as des frères et sœurs?' },
  { role: 'you', type: 'answer', prompt: 'Erzähl von deinen Geschwistern', expected: 'Oui, j\'ai une sœur. / Non, je suis fille unique.' },
  { role: 'you', type: 'question', prompt: 'Frag nach Geschwistern', expected: 'Et toi? Tu as des frères et sœurs?' },
  { role: 'partner', type: 'answer', text: 'Oui, j\'ai un frère. Il s\'appelle Marc. Qu\'est-ce que tu aimes?' },
  { role: 'you', type: 'answer', prompt: 'Sag was du magst', expected: 'J\'aime la musique. / J\'adore le sport.' },
  { role: 'partner', type: 'end', text: 'Cool! Merci, au revoir!' },
  { role: 'you', type: 'end', prompt: 'Verabschiede dich', expected: 'Au revoir! À bientôt!' },
];

export default function DialogPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExpected, setShowExpected] = useState(false);
  const [completed, setCompleted] = useState(false);

  const step = dialogSteps[currentStep];

  const nextStep = () => {
    setShowExpected(false);
    if (currentStep < dialogSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setShowExpected(false);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-4 block">🎉</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dialog geschafft!</h2>
          <p className="text-gray-600 mb-6">Du hast das ganze Interview durchgespielt!</p>
          
          <div className="bg-purple-100 rounded-xl p-4 mb-6">
            <span className="text-2xl">🦋</span>
            <p className="text-purple-800 mt-2">
              "Très bien, Leni! Du bist bereit für die Prüfung!"
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={restart}
              className="flex-1 py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-medium"
            >
              Nochmal üben
            </button>
            <Link
              href="/leni/franzoesisch/interview"
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold text-center"
            >
              Fertig ✓
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-4">
        <Link href="/leni/franzoesisch/interview" className="text-blue-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">🎭 Dialog-Simulation</h1>
        <p className="text-blue-200 text-sm">Übe das komplette Interview</p>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
            style={{ width: `${((currentStep + 1) / dialogSteps.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Schritt {currentStep + 1} / {dialogSteps.length}
        </p>
      </div>

      <div className="px-4">
        {/* Partner says something */}
        {step.role === 'partner' && (
          <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
              👤
            </div>
            <div className="bg-pink-100 rounded-2xl rounded-tl-none p-4 flex-1">
              <p className="text-sm text-pink-600 mb-1">Partner sagt:</p>
              <p className="text-lg font-medium text-pink-900">{step.text}</p>
            </div>
          </div>
        )}

        {/* Your turn */}
        {step.role === 'you' && (
          <div className="flex gap-3 mb-4 flex-row-reverse">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
              🦋
            </div>
            <div className="bg-blue-100 rounded-2xl rounded-tr-none p-4 flex-1">
              <p className="text-sm text-blue-600 mb-1">Du bist dran:</p>
              <p className="text-lg font-medium text-blue-900">{step.prompt}</p>
            </div>
          </div>
        )}

        {/* Show expected answer */}
        {showExpected && step.expected && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-green-600 mb-1">Beispiel-Antwort:</p>
            <p className="text-lg font-medium text-green-800">{step.expected}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {step.role === 'you' && !showExpected && (
            <button
              onClick={() => setShowExpected(true)}
              className="flex-1 py-3 border border-blue-300 text-blue-600 rounded-xl font-medium"
            >
              💡 Hilfe
            </button>
          )}
          <button
            onClick={nextStep}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
          >
            Weiter →
          </button>
        </div>

        {/* Role indicator */}
        <div className="mt-6 flex justify-center gap-8">
          <div className={`text-center ${step.role === 'you' ? 'opacity-100' : 'opacity-30'}`}>
            <span className="text-2xl">🦋</span>
            <p className="text-xs text-gray-600">Du</p>
          </div>
          <div className={`text-center ${step.role === 'partner' ? 'opacity-100' : 'opacity-30'}`}>
            <span className="text-2xl">👤</span>
            <p className="text-xs text-gray-600">Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
