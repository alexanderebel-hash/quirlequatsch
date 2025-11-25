'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Trophy } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';
import confetti from 'canvas-confetti';

// 20 Fragen für die Klassenarbeit
const klassenarbeitFragen = [
  { q: 'Was ist die Pupille?', options: ['Farbiger Ring', 'Schwarzes Loch in der Mitte', 'Schutzschicht', 'Nerv'], correct: 1 },
  { q: 'Welcher Teil des Auges bestimmt die Augenfarbe?', options: ['Pupille', 'Iris', 'Netzhaut', 'Linse'], correct: 1 },
  { q: 'Was passiert mit der Pupille bei Dunkelheit?', options: ['Sie wird kleiner', 'Sie wird größer', 'Sie verschwindet', 'Nichts'], correct: 1 },
  { q: 'Wo sitzen die Sehzellen im Auge?', options: ['In der Iris', 'In der Pupille', 'Auf der Netzhaut', 'Im Sehnerv'], correct: 2 },
  { q: 'Was ist das Trommelfell?', options: ['Ein Knochen', 'Eine dünne Haut die schwingt', 'Ein Nerv', 'Eine Flüssigkeit'], correct: 1 },
  { q: 'Wie heißen die 3 Gehörknöchelchen?', options: ['Hammer, Nagel, Schraube', 'Hammer, Amboss, Steigbügel', 'Löffel, Gabel, Messer', 'Würfel, Kugel, Kegel'], correct: 1 },
  { q: 'Was ist das kleinste Knöchelchen im Körper?', options: ['Hammer', 'Amboss', 'Steigbügel', 'Zehenknochen'], correct: 2 },
  { q: 'Welche Frequenzen kann ein Mensch hören?', options: ['0-10 Hz', '20-20.000 Hz', '50.000-100.000 Hz', 'Alle'], correct: 1 },
  { q: 'Wie orientieren sich Fledermäuse?', options: ['Mit Augen', 'Mit Ultraschall', 'Mit Geruch', 'Mit Tastsinn'], correct: 1 },
  { q: 'Was können Bienen sehen, was wir nicht sehen?', options: ['Infrarot', 'UV-Licht', 'Röntgenstrahlen', 'Radiowellen'], correct: 1 },
  { q: 'Wie kommunizieren Elefanten über weite Strecken?', options: ['Ultraschall', 'Infraschall', 'Licht', 'Geruch'], correct: 1 },
  { q: 'Wie viele Hautschichten haben wir?', options: ['1', '2', '3', '5'], correct: 2 },
  { q: 'Wie groß ist unsere Haut ungefähr?', options: ['0,5 m²', '2 m²', '5 m²', '10 m²'], correct: 1 },
  { q: 'Warum schwitzen wir?', options: ['Zum Spaß', 'Um uns abzukühlen', 'Weil wir krank sind', 'Um Fett zu verbrennen'], correct: 1 },
  { q: 'Was ist Brailleschrift?', options: ['Geheimschrift', 'Punktschrift für Blinde', 'Kleine Schrift', 'Bilderschrift'], correct: 1 },
  { q: 'Bei welcher Temperatur gefriert Wasser?', options: ['-10°C', '0°C', '10°C', '100°C'], correct: 1 },
  { q: 'Bei welcher Temperatur kocht Wasser?', options: ['50°C', '75°C', '100°C', '200°C'], correct: 2 },
  { q: 'Was ist die normale Körpertemperatur?', options: ['35°C', '37°C', '39°C', '40°C'], correct: 1 },
  { q: 'Mit welchem Gerät misst man Masse?', options: ['Thermometer', 'Messzylinder', 'Waage', 'Lineal'], correct: 2 },
  { q: 'Welches Diagramm zeigt Anteile wie Kuchenstücke?', options: ['Säulendiagramm', 'Liniendiagramm', 'Kreisdiagramm', 'Balkendiagramm'], correct: 2 },
];

export default function KlassenarbeitPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const { addXP } = useUserStore();

  const question = klassenarbeitFragen[current];

  if (!started) {
    return (
      <div className="px-4 pt-6">
        <Link href="/test">
          <ArrowLeft className="w-6 h-6 text-gray-600 mb-6" />
        </Link>
        
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-2xl font-bold mb-2">Klassenarbeit</h1>
          <p className="text-gray-500 mb-6">20 Fragen wie in der echten Arbeit</p>
          
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 text-left">
            <p className="text-green-800 font-medium mb-2">💚 HULK sagt:</p>
            <p className="text-green-700 text-sm">
              "Du hast das drauf, Capitano! Zeig was du gelernt hast! SMASH IT! 💪"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 text-left">
            <p className="font-semibold mb-2">ℹ️ Info:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 20 Fragen aus allen Themen</li>
              <li>• Etwa 15 Minuten</li>
              <li>• +10 XP pro richtige Antwort</li>
              <li>• +100 Bonus bei 90%+</li>
            </ul>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg"
          >
            Start! 🚀
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const percent = Math.round((score / klassenarbeitFragen.length) * 100);
    const grade = percent >= 90 ? '1' : percent >= 75 ? '2' : percent >= 60 ? '3' : percent >= 45 ? '4' : '5';
    
    return (
      <div className="px-4 pt-6 text-center">
        <div className="text-6xl mb-4">{percent >= 60 ? '🏆' : '💪'}</div>
        <h1 className="text-3xl font-bold mb-2">{score}/{klassenarbeitFragen.length}</h1>
        <p className="text-xl text-gray-600 mb-2">{percent}% - Note {grade}</p>
        <p className="text-gray-500 mb-6">
          {percent >= 90 ? 'LEGENDÄR! Perfekt vorbereitet! 💚' : 
           percent >= 60 ? 'Gut gemacht! Du bist bereit! 👍' : 
           'Weiter üben, du schaffst das! 💪'}
        </p>
        
        {/* Ergebnis-Übersicht */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 text-left">
          <p className="font-semibold mb-3">Deine Antworten:</p>
          <div className="flex flex-wrap gap-2">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              setStarted(false);
              setCurrent(0);
              setScore(0);
              setFinished(false);
              setAnswers([]);
              setSelected(null);
              setAnswered(false);
            }}
            className="w-full bg-purple-500 text-white py-4 rounded-2xl font-bold"
          >
            Nochmal versuchen
          </button>
          <Link href="/test">
            <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold">
              Zurück
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setAnswered(true);
    
    const correct = selected === question.correct;
    if (correct) {
      setScore(s => s + 1);
      addXP(10);
    }
    setAnswers([...answers, correct]);
  };

  const handleNext = () => {
    if (current < klassenarbeitFragen.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
      if (score >= 18) {
        addXP(100);
        confetti({ particleCount: 200, spread: 100 });
      }
    }
  };

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">Frage {current + 1}/20</span>
        <span className="text-green-600 font-bold">{score} richtig</span>
      </div>

      {/* Progress */}
      <div className="h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-purple-500 transition-all"
          style={{ width: `${((current + 1) / 20) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
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
                  ? 'bg-green-100 border-2 border-green-500'
                  : selected === i
                    ? 'bg-red-100 border-2 border-red-500'
                    : 'bg-gray-50 opacity-50'
                : selected === i
                  ? 'bg-purple-100 border-2 border-purple-500'
                  : 'bg-white border-2 border-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Action */}
      <button
        onClick={answered ? handleNext : handleCheck}
        disabled={selected === null && !answered}
        className={`w-full py-4 rounded-2xl font-bold ${
          selected === null && !answered
            ? 'bg-gray-200 text-gray-400'
            : 'bg-purple-500 text-white'
        }`}
      >
        {answered ? (current < 19 ? 'Weiter' : 'Ergebnis ansehen') : 'Prüfen'}
      </button>
    </div>
  );
}
