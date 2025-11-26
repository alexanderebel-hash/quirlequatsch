'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Quiz } from '@/components/learning/Quiz';
import { quizQuestions } from '@/lib/data/exercises';

const themen = [
  { id: 'auge', icon: '👁️', title: 'Auge', color: 'bg-blue-100' },
  { id: 'ohr', icon: '👂', title: 'Ohr', color: 'bg-orange-100' },
  { id: 'tiere', icon: '🐘', title: 'Tiere', color: 'bg-green-100' },
  { id: 'haut', icon: '🖐️', title: 'Haut', color: 'bg-purple-100' },
  { id: 'hilfsmittel', icon: '♿', title: 'Hilfsmittel', color: 'bg-teal-100' },
  { id: 'masse-volumen', icon: '⚖️', title: 'Masse', color: 'bg-yellow-100' },
  { id: 'temperatur', icon: '🌡️', title: 'Temperatur', color: 'bg-red-100' },
  { id: 'diagramme', icon: '📊', title: 'Diagramme', color: 'bg-indigo-100' },
];

function QuizPageContent() {
  const searchParams = useSearchParams();
  const themaFromUrl = searchParams.get('thema');
  const [selectedThema, setSelectedThema] = useState<string | null>(themaFromUrl);
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0 });

  useEffect(() => {
    if (themaFromUrl) {
      setSelectedThema(themaFromUrl);
    }
  }, [themaFromUrl]);

  const questions = selectedThema ? quizQuestions[selectedThema as keyof typeof quizQuestions] : null;

  const handleComplete = (score: number, total: number) => {
    setFinalScore({ score, total });
    setShowResult(true);
  };

  const handleRestart = () => {
    setShowResult(false);
    setFinalScore({ score: 0, total: 0 });
  };

  // Ergebnis-Seite
  if (showResult) {
    const percent = Math.round((finalScore.score / finalScore.total) * 100);
    return (
      <div className="px-4 pt-6 text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🏆' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">
          {finalScore.score}/{finalScore.total} richtig!
        </h1>
        <p className="text-gray-500 mb-6">
          {percent >= 80 ? 'SUPER! Du bist ein Experte! 💚' : 
           percent >= 60 ? 'Gut gemacht! 👏' : 
           'Weiter üben, du schaffst das! 💪'}
        </p>
        <div className="space-y-3">
          <button
            onClick={handleRestart}
            className="w-full bg-purple-500 text-white py-4 rounded-2xl font-bold"
          >
            Nochmal versuchen
          </button>
          <button
            onClick={() => setSelectedThema(null)}
            className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold"
          >
            Anderes Thema
          </button>
        </div>
      </div>
    );
  }

  // Quiz läuft
  if (selectedThema && questions && !showResult) {
    return (
      <div className="px-4 pt-6">
        <button 
          onClick={() => setSelectedThema(null)} 
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Anderes Thema wählen</span>
        </button>
        <Quiz 
          questions={questions}
          themaId={selectedThema}
          onComplete={handleComplete}
        />
      </div>
    );
  }

  // Thema-Auswahl
  return (
    <div className="px-4 pt-6">
      <Link href="/ueben">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">❓ Quiz</h1>
      <p className="text-gray-500 mb-6">Wähle ein Thema:</p>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
        <p className="text-purple-800 font-medium">
          💡 Tipp: Quiz hilft dir beim Lernen!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {themen.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedThema(t.id)}
            className={`${t.color} rounded-2xl p-5 text-center active:scale-95 transition-transform`}
          >
            <span className="text-4xl block mb-2">{t.icon}</span>
            <p className="font-semibold text-gray-900">{t.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="px-4 pt-6 text-center">Lädt...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}
