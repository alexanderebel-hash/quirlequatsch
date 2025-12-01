'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const simulationQuestions = [
  {
    id: 1,
    points: 3,
    type: 'text',
    question: "Gib den Sinussatz an.",
    answer: "a/sin(α) = b/sin(β) = c/sin(γ)"
  },
  {
    id: 2,
    points: 4,
    type: 'calc',
    question: "Im Dreieck ABC gilt: a = 8 cm, β = 72°, γ = 48°. Berechne die Seite b. (Runde auf 1 Dezimalstelle)",
    answer: 12.3
  },
  {
    id: 3,
    points: 5,
    type: 'calc',
    question: "Im Dreieck ABC gilt: a = 5 cm, b = 7 cm, c = 9 cm. Berechne den größten Winkel γ in Grad.",
    answer: 95
  },
  {
    id: 4,
    points: 6,
    type: 'calc',
    question: "Zwei Städte A und B liegen 120 km voneinander entfernt. Von A aus liegt eine Berghütte C unter einem Winkel von 35°, von B aus unter 48°. Berechne die Entfernung A–C in km.",
    answer: 87
  },
  {
    id: 5,
    points: 7,
    type: 'calc',
    question: "Ein Parallelogramm hat die Seiten a = 6 cm und b = 10 cm. Eine Diagonale ist 8 cm lang. Berechne den Winkel zwischen den Seiten a und b in Grad.",
    answer: 53
  }
];

type Phase = 'start' | 'running' | 'review';

export default function SimulationPage() {
  const [phase, setPhase] = useState<Phase>('start');
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 Minuten
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    if (phase !== 'running') return;
    
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setPhase('review');
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let total = 0;
    let earned = 0;
    
    simulationQuestions.forEach(q => {
      total += q.points;
      const userAnswer = answers[q.id];
      if (q.type === 'calc') {
        if (Math.abs(parseFloat(userAnswer || '0') - (q.answer as number)) < 2) {
          earned += q.points;
        }
      } else {
        if (userAnswer?.toLowerCase().includes('sin')) {
          earned += q.points;
        }
      }
    });

    return { total, earned, percentage: Math.round((earned / total) * 100) };
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 92) return { grade: '1', text: 'Sehr gut' };
    if (percentage >= 81) return { grade: '2', text: 'Gut' };
    if (percentage >= 67) return { grade: '3', text: 'Befriedigend' };
    if (percentage >= 50) return { grade: '4', text: 'Ausreichend' };
    if (percentage >= 30) return { grade: '5', text: 'Mangelhaft' };
    return { grade: '6', text: 'Ungenügend' };
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className={`px-4 py-4 ${phase === 'running' ? 'bg-orange-600' : 'bg-gray-800'} text-white`}>
        {phase !== 'running' && (
          <Link href="/lenny/mathe/sinuskosinus" className="text-gray-400 text-sm">← Zurück</Link>
        )}
        <div className="flex items-center justify-between mt-2">
          <div>
            <h1 className="text-xl font-bold">Klassenarbeit</h1>
            <p className="text-gray-300 text-sm">Simulation (45 Min)</p>
          </div>
          {phase === 'running' && (
            <div className="text-2xl font-mono font-bold">
              {formatTime(timeLeft)}
            </div>
          )}
        </div>
      </div>

      {phase === 'start' && (
        <div className="p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
            <span className="text-5xl mb-4 block">📝</span>
            <h2 className="text-xl font-bold mb-2">Bereit für die Simulation?</h2>
            <p className="text-gray-600 mb-6">
              5 Aufgaben, 45 Minuten Zeit.<br/>
              Keine Hilfen, keine Tipps.
            </p>

            <div className="bg-green-50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-xl">😐</span>
                <div>
                  <p className="font-medium text-green-800">Torsten sagt:</p>
                  <p className="text-green-700 text-sm">
                    "Simulation läuft. Du hast das geübt. Zeig's."
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setPhase('running')}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold"
            >
              Klassenarbeit starten
            </button>
          </div>
        </div>
      )}

      {phase === 'running' && (
        <div className="p-4">
          {/* Question Navigation */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {simulationQuestions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentQ(i)}
                className={`min-w-[44px] h-[44px] rounded-lg font-medium ${
                  currentQ === i 
                    ? 'bg-orange-600 text-white' 
                    : answers[q.id] 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Current Question */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-500">Aufgabe {currentQ + 1}</span>
              <span className="font-medium text-orange-600">
                {simulationQuestions[currentQ].points} Punkte
              </span>
            </div>

            <p className="text-lg mb-6">{simulationQuestions[currentQ].question}</p>

            <textarea
              value={answers[simulationQuestions[currentQ].id] || ''}
              onChange={(e) => setAnswers({
                ...answers,
                [simulationQuestions[currentQ].id]: e.target.value
              })}
              placeholder="Deine Antwort..."
              className="w-full border border-gray-300 rounded-lg p-4 min-h-[120px] resize-none"
            />
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-4">
            {currentQ > 0 && (
              <button
                onClick={() => setCurrentQ(currentQ - 1)}
                className="flex-1 py-3 border border-gray-300 rounded-xl"
              >
                ← Zurück
              </button>
            )}
            {currentQ < simulationQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQ(currentQ + 1)}
                className="flex-1 py-3 bg-orange-600 text-white rounded-xl font-medium"
              >
                Weiter →
              </button>
            ) : (
              <button
                onClick={() => setPhase('review')}
                className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium"
              >
                Abgeben ✓
              </button>
            )}
          </div>
        </div>
      )}

      {phase === 'review' && (
        <div className="p-4">
          {(() => {
            const score = calculateScore();
            const grade = getGrade(score.percentage);
            
            return (
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border mb-4">
                  <span className="text-5xl mb-4 block">
                    {score.percentage >= 50 ? '🎉' : '📚'}
                  </span>
                  
                  <div className="text-6xl font-bold text-orange-600 mb-2">
                    {grade.grade}
                  </div>
                  <p className="text-xl text-gray-600 mb-4">{grade.text}</p>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      {score.earned} von {score.total} Punkten ({score.percentage}%)
                    </p>
                  </div>
                </div>

                {/* Mascot Feedback */}
                <div className="bg-green-100 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">😐</span>
                    <div className="text-left">
                      <p className="font-medium text-green-800">Torsten:</p>
                      <p className="text-green-700 text-sm">
                        {score.percentage >= 80 
                          ? "Solide. Das sitzt."
                          : score.percentage >= 50 
                            ? "Bestanden. Aber da geht noch was."
                            : "Nochmal üben. Dann nochmal."}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/lenny/mathe/sinuskosinus"
                  className="block w-full bg-gray-800 text-white py-4 rounded-xl font-semibold"
                >
                  Zurück zur Übersicht
                </Link>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
