'use client';

import Link from 'next/link';
import { useState } from 'react';

const examQuestions = [
  { type: 'greet', prompt: 'Begrüße deinen Partner', example: 'Bonjour! Ça va?' },
  { type: 'ask', prompt: 'Frag, wie er/sie heißt', example: 'Tu t\'appelles comment?' },
  { type: 'answer', question: 'Tu t\'appelles comment?', prompt: 'Antworte mit deinem Namen', example: 'Je m\'appelle Leni.' },
  { type: 'ask', prompt: 'Frag, woher er/sie kommt', example: 'Tu es d\'où?' },
  { type: 'answer', question: 'Tu es d\'où?', prompt: 'Sag, woher du kommst', example: 'Je suis de Berlin.' },
  { type: 'ask', prompt: 'Frag, wie alt er/sie ist', example: 'Tu as quel âge?' },
  { type: 'answer', question: 'Tu as quel âge?', prompt: 'Sag, wie alt du bist', example: 'J\'ai treize ans.' },
  { type: 'ask', prompt: 'Frag, wann er/sie Geburtstag hat', example: 'Ton anniversaire, c\'est quand?' },
  { type: 'answer', question: 'Ton anniversaire, c\'est quand?', prompt: 'Sag, wann du Geburtstag hast', example: 'Mon anniversaire, c\'est le quinze octobre.' },
  { type: 'ask', prompt: 'Frag, ob er/sie Geschwister hat', example: 'Tu as des frères et sœurs?' },
  { type: 'answer', question: 'Tu as des frères et sœurs?', prompt: 'Antworte über deine Geschwister', example: 'Oui, j\'ai une sœur.' },
  { type: 'ask', prompt: 'Frag, ob er/sie Haustiere hat', example: 'Tu as un chat ou un chien?' },
  { type: 'answer', question: 'Tu as un chat?', prompt: 'Antworte über deine Haustiere', example: 'Oui, j\'ai un chat.' },
  { type: 'ask', prompt: 'Frag, was er/sie mag', example: 'Qu\'est-ce que tu aimes?' },
  { type: 'answer', question: 'Qu\'est-ce que tu aimes?', prompt: 'Sag, was du magst', example: 'J\'aime la musique et le sport.' },
  { type: 'end', prompt: 'Verabschiede dich', example: 'Au revoir! À bientôt!' },
];

export default function TestPage() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showExample, setShowExample] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [readyForNext, setReadyForNext] = useState(false);

  const currentQuestion = examQuestions[currentStep];

  const handleNext = () => {
    setShowExample(false);
    setReadyForNext(false);
    
    if (currentStep < examQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleSpeak = () => {
    setReadyForNext(true);
  };

  const restart = () => {
    setStarted(false);
    setCurrentStep(0);
    setShowExample(false);
    setCompleted(false);
    setReadyForNext(false);
  };

  // Start Screen
  if (!started && !completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
            📝
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Prüfungs-Simulation</h1>
          <p className="text-gray-600 mb-6">
            Übe das komplette Interview wie in der echten Prüfung
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-4 mb-6 text-left">
            <p className="font-semibold text-yellow-800 mb-2">📋 So funktioniert's:</p>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Du bekommst Aufgaben in deutscher Sprache</li>
              <li>• Sprich die Antworten laut auf Französisch</li>
              <li>• Klicke "Gesprochen ✓" wenn du fertig bist</li>
              <li>• Es gibt {examQuestions.length} Aufgaben</li>
            </ul>
          </div>

          <div className="bg-purple-100 rounded-xl p-4 mb-6 flex items-start gap-3">
            <span className="text-2xl">🦋</span>
            <p className="text-purple-800 text-sm">
              "Stell dir vor, du bist wirklich in der Prüfung. 
              Sprich laut und deutlich - das hilft beim Üben!"
            </p>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold text-lg shadow-lg"
          >
            Prüfung starten 🚀
          </button>

          <Link
            href="/leni/franzoesisch/interview"
            className="block mt-3 py-2 text-gray-600 text-sm"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <span className="text-6xl mb-4 block">🎉</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Parfait!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Du hast die Prüfungs-Simulation abgeschlossen!
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 mb-6">
            <p className="text-4xl font-bold mb-1">+50 XP</p>
            <p className="text-blue-100">Prüfungsvorbereitung abgeschlossen!</p>
          </div>

          <div className="bg-purple-100 rounded-xl p-4 mb-6">
            <span className="text-2xl mb-2 block">🦋</span>
            <p className="text-purple-800 font-medium">
              "Super gemacht, Leni! Du bist bereit für die echte Prüfung. 
              Viel Erfolg! Bonne chance!"
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-semibold text-yellow-800 mb-2">💡 Tipps für die Prüfung:</p>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>✓ Sprich langsam und deutlich</li>
              <li>✓ Lächle und sei freundlich</li>
              <li>✓ Wenn du etwas nicht verstehst: "Pardon?"</li>
              <li>✓ Atme ruhig - du schaffst das!</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button
              onClick={restart}
              className="flex-1 py-3 border-2 border-gray-500 text-gray-700 rounded-xl font-semibold"
            >
              Nochmal üben
            </button>
            <Link
              href="/leni/franzoesisch/interview"
              className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-center"
            >
              Fertig ✓
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Exam in Progress
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300 text-sm">Prüfungs-Simulation</span>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
            {currentStep + 1} / {examQuestions.length}
          </span>
        </div>
        <h1 className="text-xl font-bold">📝 Mündliche Prüfung</h1>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gray-600 to-gray-700 transition-all duration-500"
            style={{ width: `${((currentStep + 1) / examQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="px-4">
        {/* Task Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 mb-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              {currentQuestion.type === 'greet' && '👋'}
              {currentQuestion.type === 'ask' && '❓'}
              {currentQuestion.type === 'answer' && '💬'}
              {currentQuestion.type === 'end' && '👋'}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Deine Aufgabe:</p>
              <p className="text-xl font-bold text-gray-800">{currentQuestion.prompt}</p>
            </div>
          </div>

          {currentQuestion.question && (
            <div className="bg-blue-50 rounded-xl p-3 mb-4">
              <p className="text-sm text-blue-600 mb-1">Partner fragt:</p>
              <p className="text-lg font-semibold text-blue-900">{currentQuestion.question}</p>
            </div>
          )}

          {/* Speak Button */}
          {!readyForNext && (
            <button
              onClick={handleSpeak}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <span className="text-xl">🎤</span>
              Jetzt laut sprechen
            </button>
          )}

          {/* After Speaking */}
          {readyForNext && (
            <>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✓</span>
                  <span className="font-semibold text-green-800">Gut gemacht!</span>
                </div>
                {showExample && (
                  <div>
                    <p className="text-sm text-green-600 mb-1">Beispiel-Antwort:</p>
                    <p className="text-lg font-medium text-green-800">{currentQuestion.example}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                {!showExample && (
                  <button
                    onClick={() => setShowExample(true)}
                    className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-xl font-medium"
                  >
                    💡 Beispiel zeigen
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-semibold"
                >
                  Weiter →
                </button>
              </div>
            </>
          )}
        </div>

        {/* Help Card */}
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="font-semibold text-blue-800 mb-2">🆘 Hilfe in der Prüfung:</p>
          <div className="text-blue-700 text-sm space-y-1">
            <p>• "Pardon? Tu peux répéter?" = Kannst du wiederholen?</p>
            <p>• "Plus lentement, s'il te plaît." = Langsamer, bitte.</p>
          </div>
        </div>

        {/* Butterfly Motivation */}
        {currentStep % 5 === 0 && currentStep > 0 && (
          <div className="bg-purple-100 rounded-xl p-4 mt-4 flex items-start gap-3">
            <span className="text-xl">🦋</span>
            <p className="text-purple-800 text-sm">
              "Du machst das super! Weiter so!"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
