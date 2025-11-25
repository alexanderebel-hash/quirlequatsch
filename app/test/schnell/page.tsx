'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, X } from 'lucide-react';
import Link from 'next/link';
import { useUserStore } from '@/lib/store/userStore';
import { getRandomMessage } from '@/lib/utils/motivation';
import confetti from 'canvas-confetti';

// Alle Fragen aus allen Themen
const allQuestions = [
  { q: 'Was ist die Pupille?', options: ['Farbiger Ring', 'Schwarzes Loch in der Mitte', 'Schutzschicht', 'Nerv'], correct: 1 },
  { q: 'Bei welcher Temperatur gefriert Wasser?', options: ['-10°C', '0°C', '10°C', '100°C'], correct: 1 },
  { q: 'Wie kommunizieren Elefanten über weite Strecken?', options: ['Ultraschall', 'Infraschall', 'Licht', 'Geruch'], correct: 1 },
  { q: 'Was ist das kleinste Gehörknöchelchen?', options: ['Hammer', 'Amboss', 'Steigbügel', 'Trommelfell'], correct: 2 },
  { q: 'Wie viele Hautschichten haben wir?', options: ['1', '2', '3', '5'], correct: 2 },
  { q: 'Was misst man mit einer Waage?', options: ['Volumen', 'Temperatur', 'Masse', 'Länge'], correct: 2 },
  { q: 'Bei welcher Temperatur kocht Wasser?', options: ['50°C', '75°C', '100°C', '200°C'], correct: 2 },
  { q: 'Welches Tier nutzt Echoortung?', options: ['Elefant', 'Biene', 'Fledermaus', 'Schlange'], correct: 2 },
  { q: 'Was zeigt ein Kreisdiagramm?', options: ['Zeitverlauf', 'Anteile', 'Temperaturen', 'Reihenfolge'], correct: 1 },
  { q: 'Was ist Brailleschrift?', options: ['Geheimschrift', 'Punktschrift zum Tasten', 'Kleine Schrift', 'Bilderschrift'], correct: 1 },
];

export default function SchnellTestPage() {
  const router = useRouter();
  const [questions] = useState(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  });
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState('');
  const { addXP } = useUserStore();

  const question = questions[current];

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setAnswered(true);
    
    if (selected === question.correct) {
      setScore(s => s + 1);
      addXP(10);
      setMessage(getRandomMessage('correct'));
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    } else {
      setMessage(getRandomMessage('incorrect'));
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
      setMessage('');
    } else {
      setFinished(true);
      if (score >= 4) {
        addXP(50);
        confetti({ particleCount: 100, spread: 70 });
      }
    }
  };

  if (finished) {
    return (
      <div className="px-4 pt-6 text-center">
        <div className="text-6xl mb-4">{score >= 4 ? '🏆' : score >= 3 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">
          {score}/{questions.length} richtig!
        </h1>
        <p className="text-gray-500 mb-6">
          {score >= 4 ? 'HULK ist stolz auf dich! 💚' : 'Weiter üben, du schaffst das!'}
        </p>
        <div className="space-y-3">
          <Link href="/test/schnell">
            <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold">
              Nochmal spielen
            </button>
          </Link>
          <Link href="/test">
            <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold">
              Zurück
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/test">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <span className="font-bold text-gray-900">Frage {current + 1}/{questions.length}</span>
        <span className="text-green-600 font-bold">{score} ✓</span>
      </div>

      {/* Progress */}
      <div className="h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Message */}
      {message && (
        <div className={`p-3 rounded-xl mb-4 text-center ${
          selected === question.correct ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
        }`}>
          {message}
        </div>
      )}

      {/* Question */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
        <p className="text-lg font-semibold text-gray-900">{question.q}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={answered}
            className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
              answered
                ? i === question.correct
                  ? 'bg-green-100 border-2 border-green-500 text-green-800'
                  : selected === i
                    ? 'bg-red-100 border-2 border-red-500 text-red-800'
                    : 'bg-gray-50 text-gray-400'
                : selected === i
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {answered && i === question.correct && <Check className="w-5 h-5 text-green-600" />}
              {answered && selected === i && i !== question.correct && <X className="w-5 h-5 text-red-600" />}
            </div>
          </button>
        ))}
      </div>

      {/* Action Button */}
      <button
        onClick={answered ? handleNext : handleCheck}
        disabled={selected === null && !answered}
        className={`w-full py-4 rounded-2xl font-bold transition-all ${
          selected === null && !answered
            ? 'bg-gray-200 text-gray-400'
            : 'bg-green-500 text-white active:scale-[0.98]'
        }`}
      >
        {answered ? (current < questions.length - 1 ? 'Weiter' : 'Ergebnis') : 'Prüfen'}
      </button>
    </div>
  );
}
