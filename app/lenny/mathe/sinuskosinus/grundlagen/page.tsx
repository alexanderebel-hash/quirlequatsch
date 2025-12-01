'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Triangle } from '@/components/mathe/Triangle';
import { LayLayFeedback } from '@/components/mathe/LayLay';

export default function GrundlagenPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedSide, setHighlightedSide] = useState<'a' | 'b' | 'c' | null>(null);
  const [highlightedAngle, setHighlightedAngle] = useState<'alpha' | 'beta' | 'gamma' | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error'>('success');

  const steps = [
    {
      title: 'Das allgemeine Dreieck',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#FFB800] to-[#FF9500] rounded-2xl p-5 text-white">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🦁</span>
            <div>
              <p className="font-bold mb-2">LayLay sagt:</p>
              <p className="text-white/90 text-sm">
                Ein Dreieck: 3 Ecken, 3 Seiten, 3 Winkel. 
                Klingt basic, ist aber die Basis für alles andere. 
                Ohne das läuft nix. Also los. 🔺
              </p>
            </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Die 3 Komponenten</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">🔵</span>
                <div>
                  <p className="font-semibold text-slate-800">Ecken (Vertices)</p>
                  <p className="text-sm text-slate-600">Bezeichnet mit: <strong>A, B, C</strong> (Großbuchstaben)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-2xl">📏</span>
                <div>
                  <p className="font-semibold text-slate-800">Seiten (Sides)</p>
                  <p className="text-sm text-slate-600">Bezeichnet mit: <strong>a, b, c</strong> (Kleinbuchstaben)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl">📐</span>
                <div>
                  <p className="font-semibold text-slate-800">Winkel (Angles)</p>
                  <p className="text-sm text-slate-600">Bezeichnet mit: <strong>α (Alpha), β (Beta), γ (Gamma)</strong></p>
                </div>
              </div>
            </div>
          </div>

          <Triangle showLabels showSides showAngles />
        </div>
      )
    },
    {
      title: 'Die goldene Regel',
      content: (
        <div className="space-y-6">
          <div className="bg-[#5856D6] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <h3 className="font-bold text-xl">Die wichtigste Regel ever</h3>
            </div>
            <p className="text-xl font-bold mb-2">Seite a liegt GEGENÜBER von Ecke A</p>
            <p className="text-white/80">Das gilt für alle Seiten und Ecken. Merken. Fertig.</p>
          </div>

          <div className="space-y-4">
            <button
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                highlightedSide === 'a' 
                  ? 'border-[#5856D6] bg-[#5856D6]/10' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => {
                setHighlightedSide('a');
                setHighlightedAngle('alpha');
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-bold text-slate-800">Seite a</p>
                  <p className="text-sm text-slate-600">Liegt gegenüber von Ecke A (und Winkel α)</p>
                </div>
                <span className="text-2xl">👆</span>
              </div>
            </button>

            <button
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                highlightedSide === 'b' 
                  ? 'border-[#5856D6] bg-[#5856D6]/10' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => {
                setHighlightedSide('b');
                setHighlightedAngle('beta');
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-bold text-slate-800">Seite b</p>
                  <p className="text-sm text-slate-600">Liegt gegenüber von Ecke B (und Winkel β)</p>
                </div>
                <span className="text-2xl">👆</span>
              </div>
            </button>

            <button
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                highlightedSide === 'c' 
                  ? 'border-[#5856D6] bg-[#5856D6]/10' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => {
                setHighlightedSide('c');
                setHighlightedAngle('gamma');
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-bold text-slate-800">Seite c</p>
                  <p className="text-sm text-slate-600">Liegt gegenüber von Ecke C (und Winkel γ)</p>
                </div>
                <span className="text-2xl">👆</span>
              </div>
            </button>
          </div>

          <Triangle 
            showLabels 
            showSides 
            showAngles 
            highlightSide={highlightedSide}
            highlightAngle={highlightedAngle}
          />

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              💡 <strong>Pro-Tipp:</strong> Klick auf die Buttons oben, um zu sehen welche Seite 
              zu welchem Winkel gehört. Das ist mega wichtig für Sinus- und Kosinussatz!
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Winkelsumme',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border-2 border-[#5856D6]">
            <h3 className="font-bold text-xl mb-4 text-slate-800">Die Winkelsumme im Dreieck</h3>
            <div className="bg-[#5856D6]/10 rounded-xl p-4 mb-4">
              <p className="text-2xl font-bold text-center text-[#5856D6] font-mono">
                α + β + γ = 180°
              </p>
            </div>
            <p className="text-slate-600">
              Egal wie dein Dreieck aussieht - die drei Winkel addieren sich IMMER zu 180°. 
              Das ist ein Naturgesetz. Keine Diskussion.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFB800] to-[#FF9500] rounded-2xl p-5 text-white">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🦁</span>
              <div>
                <p className="font-bold mb-2">LayLay erklärt:</p>
                <p className="text-white/90 text-sm">
                  Real talk: Wenn du zwei Winkel kennst, kannst du den dritten ausrechnen. 
                  Simple Mathe: 180° minus die anderen beiden. Ez clap. 
                  Beispiel: α=60°, β=70° → γ=50°. Done. 🎯
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h4 className="font-bold mb-3 text-slate-800">Beispiele:</h4>
            <div className="space-y-3">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="font-mono mb-2">α = 60°, β = 70°</p>
                <p className="text-sm text-slate-600">γ = 180° - 60° - 70° = <strong className="text-emerald-600">50°</strong></p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-mono mb-2">α = 45°, β = 45°</p>
                <p className="text-sm text-slate-600">γ = 180° - 45° - 45° = <strong className="text-blue-600">90°</strong></p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="font-mono mb-2">α = 30°, β = 110°</p>
                <p className="text-sm text-slate-600">γ = 180° - 30° - 110° = <strong className="text-purple-600">40°</strong></p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Mini-Quiz',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="font-bold text-2xl mb-2 text-slate-800">Quick Check ✓</h3>
            <p className="text-slate-600">Zeit zu zeigen was du drauf hast!</p>
          </div>

          {/* Question 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <p className="font-bold mb-4 text-slate-800">1. Welche Seite liegt gegenüber von Winkel α?</p>
            <div className="space-y-2">
              {['a', 'b', 'c'].map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setQuizAnswers({ ...quizAnswers, 1: answer });
                    if (answer === 'a') {
                      setFeedbackType('success');
                      setShowFeedback(true);
                      setTimeout(() => setShowFeedback(false), 3000);
                    }
                  }}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    quizAnswers[1] === answer
                      ? answer === 'a'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  Seite {answer}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <p className="font-bold mb-4 text-slate-800">
              2. Ein Dreieck hat α = 50° und β = 60°. Wie groß ist γ?
            </p>
            <div className="space-y-2">
              {['70°', '60°', '80°', '90°'].map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setQuizAnswers({ ...quizAnswers, 2: answer });
                    if (answer === '70°') {
                      setFeedbackType('success');
                      setShowFeedback(true);
                      setTimeout(() => setShowFeedback(false), 3000);
                    }
                  }}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    quizAnswers[2] === answer
                      ? answer === '70°'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <p className="font-bold mb-4 text-slate-800">
              3. Welche Ecke liegt gegenüber von Seite b?
            </p>
            <div className="space-y-2">
              {['A', 'B', 'C'].map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    setQuizAnswers({ ...quizAnswers, 3: answer });
                    if (answer === 'B') {
                      setFeedbackType('success');
                      setShowFeedback(true);
                      setTimeout(() => setShowFeedback(false), 3000);
                    }
                  }}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    quizAnswers[3] === answer
                      ? answer === 'B'
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  Ecke {answer}
                </button>
              ))}
            </div>
          </div>

          {showFeedback && (
            <LayLayFeedback
              type={feedbackType}
              message={
                feedbackType === 'success'
                  ? 'Passt. Weiter.'
                  : 'Nope. Nochmal.'
              }
              onClose={() => setShowFeedback(false)}
            />
          )}
        </div>
      )
    }
  ];

  const allQuestionsCorrect = 
    quizAnswers[1] === 'a' && 
    quizAnswers[2] === '70°' && 
    quizAnswers[3] === 'B';

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-6">
        <Link 
          href="/lenny/mathe/sinuskosinus" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück zur Übersicht</span>
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📐</span>
          <h1 className="text-2xl font-bold">Modul 1: Grundlagen</h1>
        </div>
        <p className="text-white/80">Das allgemeine Dreieck verstehen</p>
        
        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Schritt {currentStep + 1} von {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-6 lg:px-8 py-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-slate-800">{steps[currentStep].title}</h2>
        {steps[currentStep].content}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-[#5856D6] text-white hover:bg-[#4745C5] transition-all"
            >
              Weiter
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <Link href="/lenny/mathe/sinuskosinus/sinussatz">
              <button
                disabled={!allQuestionsCorrect}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="w-5 h-5" />
                Modul abschließen (+50 XP)
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
