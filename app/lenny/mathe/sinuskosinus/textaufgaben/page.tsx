'use client';

import Link from 'next/link';
import { useState } from 'react';

const textaufgaben = [
  {
    id: 1,
    title: "Das Schiff",
    category: "Navigation",
    icon: "🚢",
    text: "Ein Schiff fährt von Hafen A aus 15 km Richtung Osten. Dann ändert es den Kurs um 70° nach Norden und fährt weitere 20 km zu Insel C. Wie weit ist die Insel vom Hafen A entfernt?",
    hint: "Der Winkel IM Dreieck ist 180° - 70° = 110°",
    steps: [
      "Skizze zeichnen: Dreieck mit A, B (Kurswechsel), C (Insel)",
      "Gegeben: AB = 15km, BC = 20km, Winkel bei B = 110°",
      "Das ist SWS → Kosinussatz",
      "AC² = 15² + 20² - 2·15·20·cos(110°)",
      "AC² = 225 + 400 - 600·(-0.342)",
      "AC² = 625 + 205 = 830",
      "AC = √830 ≈ 28.8 km"
    ],
    answer: 28.8,
    satz: "kosinussatz"
  },
  {
    id: 2,
    title: "Der Kirchturm",
    category: "Vermessung",
    icon: "⛪",
    text: "Von Punkt A aus siehst du die Spitze eines Kirchturms unter einem Winkel von 35°. Du gehst 50m näher zum Turm (Punkt B), jetzt beträgt der Winkel 52°. Wie hoch ist der Kirchturm?",
    hint: "Zeichne das Dreieck mit dem Turm als Seite",
    steps: [
      "Der dritte Winkel oben = 180° - 35° - 52° = 93°... Moment, das stimmt nicht.",
      "Eigentlich: β = 180° - 52° = 128° (Außenwinkel)",
      "Im Dreieck: α = 35°, der Winkel bei der Turmspitze = 180° - 35° - 128° = 17°",
      "Mit Sinussatz: 50/sin(17°) = x/sin(35°)",
      "x = 50 · sin(35°) / sin(17°) ≈ 98m (Entfernung A zur Spitze)",
      "Höhe = 98 · sin(35°) ≈ 56.2m"
    ],
    answer: 56.2,
    satz: "sinussatz"
  },
  {
    id: 3,
    title: "Das Grundstück",
    category: "Architektur",
    icon: "🏠",
    text: "Ein dreieckiges Grundstück hat die Seiten a = 45m, b = 60m und c = 75m. Berechne den größten Winkel.",
    hint: "Der größte Winkel liegt der längsten Seite gegenüber",
    steps: [
      "Längste Seite: c = 75m → größter Winkel ist γ",
      "SSS → Kosinussatz umgestellt nach cos(γ)",
      "cos(γ) = (a² + b² - c²) / (2·a·b)",
      "cos(γ) = (2025 + 3600 - 5625) / (2·45·60)",
      "cos(γ) = 0 / 5400 = 0",
      "γ = arccos(0) = 90°"
    ],
    answer: 90,
    satz: "kosinussatz"
  }
];

export default function TextaufgabenPage() {
  const [currentTask, setCurrentTask] = useState(0);
  const [showSteps, setShowSteps] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [checked, setChecked] = useState(false);

  const task = textaufgaben[currentTask];
  const isCorrect = Math.abs(parseFloat(userAnswer) - task.answer) < 1;

  const checkAnswer = () => {
    setChecked(true);
  };

  const nextTask = () => {
    if (currentTask < textaufgaben.length - 1) {
      setCurrentTask(currentTask + 1);
      setShowSteps(false);
      setUserAnswer('');
      setChecked(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-teal-600 text-white px-4 py-4">
        <Link href="/lenny/mathe/sinuskosinus" className="text-teal-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">Textaufgaben</h1>
        <p className="text-teal-200 text-sm">Realwelt-Anwendungen</p>
      </div>

      {/* Progress */}
      <div className="px-4 py-3 bg-white border-b">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Aufgabe {currentTask + 1} / {textaufgaben.length}</span>
          <span className={`font-medium ${task.satz === 'sinussatz' ? 'text-blue-600' : 'text-red-600'}`}>
            {task.satz === 'sinussatz' ? '🧑‍🏫 Sinussatz' : '🤌 Kosinussatz'}
          </span>
        </div>
      </div>

      {/* Task */}
      <div className="p-4 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">{task.icon}</span>
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
            {task.category}
          </span>
        </div>

        {/* Task Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-lg mb-3">{task.title}</h2>
          <p className="text-gray-700 leading-relaxed">{task.text}</p>
        </div>

        {/* Hint */}
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full py-3 border border-teal-300 rounded-xl text-teal-700 flex items-center justify-center gap-2"
        >
          {showSteps ? '📖 Lösung ausblenden' : '💡 Lösungsweg zeigen'}
        </button>

        {showSteps && (
          <div className="bg-teal-50 rounded-xl p-4 space-y-2">
            <p className="font-medium text-teal-800 mb-3">Lösungsweg:</p>
            {task.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-teal-600 font-medium">{i + 1}.</span>
                <p className="text-sm text-teal-900">{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* Answer Input */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <label className="block text-sm text-gray-600 mb-2">Deine Antwort:</label>
          <div className="flex gap-2">
            <input
              type="number"
              step="0.1"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="z.B. 28.8"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
              disabled={checked}
            />
            {!checked ? (
              <button
                onClick={checkAnswer}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium"
              >
                Prüfen
              </button>
            ) : (
              <div className={`px-6 py-3 rounded-lg font-medium ${
                isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {isCorrect ? '✓' : '✗'}
              </div>
            )}
          </div>
        </div>

        {/* Feedback */}
        {checked && (
          <div className={`rounded-xl p-4 ${isCorrect ? 'bg-green-100' : 'bg-yellow-100'}`}>
            {isCorrect ? (
              <p className="text-green-800">
                <span className="font-medium">Richtig!</span> Die Antwort ist {task.answer}.
              </p>
            ) : (
              <p className="text-yellow-800">
                <span className="font-medium">Nicht ganz.</span> Die richtige Antwort ist {task.answer}. 
                Schau dir den Lösungsweg an.
              </p>
            )}
          </div>
        )}

        {/* Next Button */}
        {checked && currentTask < textaufgaben.length - 1 && (
          <button
            onClick={nextTask}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold"
          >
            Nächste Aufgabe →
          </button>
        )}

        {checked && currentTask === textaufgaben.length - 1 && (
          <Link
            href="/lenny/mathe/sinuskosinus/spiele"
            className="block w-full bg-teal-600 text-white py-4 rounded-xl font-semibold text-center"
          >
            Weiter: Spiele 🎮
          </Link>
        )}
      </div>
    </div>
  );
}
