'use client';

import Link from 'next/link';
import { useState } from 'react';

const carloComments = {
  success: ["Bravissimo.", "Ecco! Richtig.", "Perfetto.", "Carlo ist zufrieden."],
  error: ["Mamma mia. Nein.", "Die Wurzel! Vergessen!", "Nochmal, dai!", "Quadrieren, dann Wurzel."],
  tips: ["Kosinussatz ist Pythagoras mit Extra. Capito?", "SSS oder SWS – mein Revier.", "Kein Pärchen? Dann komm zu Carlo."]
};

const questions = [
  {
    id: 1,
    question: "Gegeben: b = 5cm, c = 8cm, α = 50°. Berechne a.",
    hint: "a² = b² + c² - 2·b·c·cos(α)",
    answer: "6.13",
    unit: "cm"
  },
  {
    id: 2,
    question: "Gegeben: a = 6cm, b = 8cm, c = 10cm. Berechne γ.",
    hint: "cos(γ) = (a² + b² - c²) / (2·a·b)",
    answer: "90",
    unit: "°"
  },
  {
    id: 3,
    question: "Gegeben: a = 7cm, b = 9cm, γ = 60°. Berechne c.",
    hint: "c² = a² + b² - 2·a·b·cos(γ)",
    answer: "8.19",
    unit: "cm"
  }
];

export default function KosinussatzPage() {
  const [currentStep, setCurrentStep] = useState<'learn' | 'practice' | 'quiz'>('learn');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    const isCorrect = Math.abs(parseFloat(userAnswer) - parseFloat(questions[currentQuestion].answer)) < 0.1;
    
    if (isCorrect) {
      const comment = carloComments.success[Math.floor(Math.random() * carloComments.success.length)];
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
      const comment = carloComments.error[Math.floor(Math.random() * carloComments.error.length)];
      setFeedback({ type: 'error', message: comment });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-4">
        <Link href="/lenny/mathe/sinuskosinus" className="text-red-200 text-sm">← Zurück</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl">🤌</span>
          <div>
            <h1 className="text-xl font-bold">Kosinussatz</h1>
            <p className="text-red-200 text-sm">mit Cosinus-Carlo</p>
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
                ? 'bg-red-100 text-red-700' 
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
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-xl font-mono font-bold text-red-800">
                  a² = b² + c² − 2·b·c·cos(α)
                </p>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Der Kosinussatz ist wie Pythagoras – nur für ALLE Dreiecke.
                Der Extra-Term "−2bc·cos(α)" korrigiert, dass das Dreieck nicht rechtwinklig ist.
              </p>
            </div>

            {/* All 3 variants */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Alle Varianten</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  a² = b² + c² − 2·b·c·cos(α)
                </div>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  b² = a² + c² − 2·a·c·cos(β)
                </div>
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                  c² = a² + b² − 2·a·b·cos(γ)
                </div>
              </div>
            </div>

            {/* When to use */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-lg mb-4">Wann benutzen?</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-xl">📐</span>
                  <div>
                    <p className="font-medium">SSS</p>
                    <p className="text-sm text-gray-600">Drei Seiten → Winkel berechnen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-xl">📏</span>
                  <div>
                    <p className="font-medium">SWS</p>
                    <p className="text-sm text-gray-600">Zwei Seiten + Winkel dazwischen → dritte Seite</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carlo Tip */}
            <div className="bg-red-100 rounded-2xl p-4 flex items-start gap-3">
              <span className="text-2xl">🤌</span>
              <div>
                <p className="font-medium text-red-800">Carlo sagt:</p>
                <p className="text-red-700 text-sm">
                  "Kein Pärchen? Dann kommst du zu mir. Sinussatz braucht Pärchen, ich nicht. Capito?"
                </p>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep('practice')}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold active:scale-[0.98] transition-transform"
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
                <span className="text-sm font-medium text-red-600">+10 XP</span>
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
                    {feedback.type === 'success' ? '🤌' : '😤'}
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
                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold"
              >
                Prüfen
              </button>
            </div>

            {/* Score */}
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-gray-600">Punkte: <span className="font-bold text-red-600">{score} XP</span></p>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold mb-2">Modul abgeschlossen!</h2>
            <p className="text-gray-600 mb-6">Du hast {score} XP verdient.</p>
            
            <div className="bg-red-100 rounded-xl p-4 mb-6">
              <span className="text-2xl">🤌</span>
              <p className="text-red-800 font-medium mt-2">
                "Bravissimo! Der Kosinussatz sitzt jetzt. Weiter so!"
              </p>
              <p className="text-red-600 text-sm">– Cosinus-Carlo</p>
            </div>

            <Link 
              href="/lenny/mathe/sinuskosinus/entscheidung"
              className="block w-full bg-red-600 text-white py-4 rounded-xl font-semibold"
            >
              Weiter: Wann welchen Satz? →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
