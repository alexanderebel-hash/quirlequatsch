'use client';

import Link from 'next/link';
import { useState } from 'react';

const svenComments = {
  success: ["Stimmt. Weiter.", "Pärchen erkannt. Gut.", "Sinussatz sitzt.", "Richtig."],
  error: ["Nochmal.", "Wo ist dein Pärchen?", "Sin, nicht cos.", "Check die Formel."],
  tips: ["Merke: Seite und Gegen-Winkel. Immer zusammen.", "a zu Alpha, b zu Beta, c zu Gamma.", "Brauchst ein Pärchen? Dann bin ich dein Mann."]
};

const questions = [
  {
    id: 1,
    question: "Gegeben: a = 7cm, α = 40°, β = 65°. Berechne b.",
    hint: "b = a · sin(β) / sin(α)",
    answer: "9.87",
    unit: "cm"
  },
  {
    id: 2,
    question: "Gegeben: b = 12cm, β = 55°, γ = 70°. Berechne c.",
    hint: "c = b · sin(γ) / sin(β)",
    answer: "13.77",
    unit: "cm"
  },
  {
    id: 3,
    question: "Gegeben: a = 10cm, b = 15cm, α = 30°. Berechne β.",
    hint: "sin(β) = b · sin(α) / a",
    answer: "48.59",
    unit: "°"
  }
];

export default function SinussatzPage() {
  const [currentStep, setCurrentStep] = useState<'learn' | 'practice' | 'quiz'>('learn');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    const isCorrect = Math.abs(parseFloat(userAnswer) - parseFloat(questions[currentQuestion].answer)) < 0.1;
    
    if (isCorrect) {
      const comment = svenComments.success[Math.floor(Math.random() * svenComments.success.length)];
      setFeedback({ type: 'success', message: comment });
      setScore(score + 10);
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setUserAnswer('');
          setFeedback({ type: null, message: '' });
          setShowHint(false);
        } else {
          setCurrentStep('quiz');
        }
      }, 1500);
    } else {
      const comment = svenComments.error[Math.floor(Math.random() * svenComments.error.length)];
      setFeedback({ type: 'error', message: comment });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-4">
        <Link href="/lenny/mathe/sinuskosinus" className="text-blue-200 text-sm">← Zurück</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl">🧑‍🏫</span>
          <div>
            <h1 className="text-xl font-bold">Sinussatz</h1>
            <p className="text-blue-200 text-sm">mit Sinus-Sven</p>
          </div>
        </div>
      </div>

      {/* Progress Tabs */}
      <div className="bg-white border-b px-4 py-2 flex gap-2">
        {['learn', 'practice', 'quiz'].map((step) => (
          <button
            key={step}
            onClick={() => setCurrentStep(step as any)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === step 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-500'
            }`}
          >
            {step === 'learn' ? 'Lernen' : step === 'practice' ? 'Üben' : 'Quiz'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {currentStep === 'learn' && (
          <div className="space-y-4">
            {/* Formula Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Die Formel</h2>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xl font-mono font-bold text-blue-800">
                  a/sin(α) = b/sin(β) = c/sin(γ)
                </p>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Das Verhältnis einer Seite zum Sinus des gegenüberliegenden Winkels ist immer gleich.
              </p>
            </div>

            {/* Umgestellt */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Nach Seite umgestellt</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  a = b · sin(α) / sin(β)
                </div>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  b = a · sin(β) / sin(α)
                </div>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  c = a · sin(γ) / sin(α)
                </div>
              </div>
            </div>

            {/* Nach Winkel */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Nach Winkel umgestellt</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  sin(α) = a · sin(β) / b
                </div>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm text-gray-600">
                  α = arcsin(a · sin(β) / b)
                </div>
              </div>
            </div>

            {/* When to use */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Wann benutzen?</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-medium">Du hast ein PÄRCHEN</p>
                    <p className="text-sm text-gray-600">Seite + gegenüberliegender Winkel</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">📐</span>
                  <div>
                    <p className="font-medium">WSW oder SWW</p>
                    <p className="text-sm text-gray-600">Zwei Winkel + eine Seite</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">📏</span>
                  <div>
                    <p className="font-medium">SSW</p>
                    <p className="text-sm text-gray-600">Zwei Seiten + Winkel gegenüber</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sven Tip */}
            <div className="bg-blue-100 rounded-2xl p-4 flex items-start gap-3">
              <span className="text-2xl">🧑‍🏫</span>
              <div>
                <p className="font-medium text-blue-800">Sven sagt:</p>
                <p className="text-blue-700 text-sm">
                  "Pärchen da? Dann nimm mich. Kein Pärchen? Dann geh zu Carlo."
                </p>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep('practice')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold active:scale-[0.98] transition-transform"
            >
              Jetzt üben →
            </button>
          </div>
        )}

        {currentStep === 'practice' && (
          <div className="space-y-4">
            {/* Question Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Aufgabe {currentQuestion + 1} von {questions.length}
                </span>
                <span className="text-sm font-medium text-blue-600">+10 XP</span>
              </div>
              
              <p className="text-lg font-medium mb-4">
                {questions[currentQuestion].question}
              </p>

              {showHint && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-yellow-800">
                    💡 {questions[currentQuestion].hint}
                  </p>
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.01"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Deine Antwort"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg"
                />
                <span className="flex items-center px-3 bg-gray-100 rounded-lg text-gray-600">
                  {questions[currentQuestion].unit}
                </span>
              </div>

              {/* Feedback */}
              {feedback.type && (
                <div className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                  feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className="text-2xl">
                    {feedback.type === 'success' ? '🧑‍🏫' : '🤔'}
                  </span>
                  <p className={feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                    {feedback.message}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowHint(true)}
                className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700"
              >
                💡 Tipp
              </button>
              <button
                onClick={checkAnswer}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold"
              >
                Prüfen
              </button>
            </div>

            {/* Score */}
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-gray-600">Punkte: <span className="font-bold text-blue-600">{score} XP</span></p>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold mb-2">Modul abgeschlossen!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient.</p>
            
            <div className="bg-blue-100 rounded-xl p-4 mb-6">
              <span className="text-2xl">🧑‍🏫</span>
              <p className="text-blue-800 font-medium mt-2">
                "Der Sinussatz sitzt. Weiter zu Carlo."
              </p>
              <p className="text-blue-600 text-sm">– Sinus-Sven</p>
            </div>

            <Link 
              href="/lenny/mathe/sinuskosinus/kosinussatz"
              className="block w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
            >
              Weiter: Kosinussatz →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
