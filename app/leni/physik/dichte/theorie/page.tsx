'use client';

import Link from 'next/link';
import { useState } from 'react';

const storyParts = [
  {
    title: 'Der misstrauische König',
    text: 'Vor über 2000 Jahren lebte König Hieron auf der Insel Sizilien. Er bestellte bei einem Goldschmied eine wunderschöne Krone aus purem Gold. Als die Krone fertig war, wurde der König misstrauisch: Hat der Goldschmied wirklich das ganze Gold verwendet?',
    emoji: '👑',
  },
  {
    title: 'Das Problem',
    text: 'Die Krone wog genauso viel wie der ursprüngliche Goldbarren. Aber vielleicht hatte der Goldschmied einen Teil des Goldes gestohlen und durch billigeres Silber ersetzt? Die Krone einschmelzen wollte der König auf keinen Fall – sie war viel zu schön.',
    emoji: '🤔',
  },
  {
    title: 'Archimedes wird gerufen',
    text: 'Der König rief den klügsten Mann der Stadt: den berühmten Mathematiker und Erfinder Archimedes. "Finde heraus, ob die Krone aus reinem Gold ist – ohne sie zu beschädigen!" Archimedes grübelte tagelang, fand aber keine Lösung...',
    emoji: '🧠',
  },
  {
    title: 'HEUREKA! Ich hab\'s gefunden!',
    text: 'Eines Abends stieg Archimedes in seine volle Badewanne. Als er sich hineinsetzte, schwappte Wasser über den Rand. Und plötzlich hatte er die Erleuchtung! Er sprang aus der Wanne und rannte nackt durch die Straßen von Syrakus. Er rief immer wieder: "HEUREKA! HEUREKA!" – Das bedeutet: "Ich hab\'s gefunden!"',
    emoji: '🛁',
  },
  {
    title: 'Die Entdeckung: DICHTE',
    text: 'Archimedes hatte erkannt: Verschiedene Materialien haben unterschiedliche DICHTEN. Gold ist DICHTER als Silber. Das bedeutet: Bei der gleichen Masse braucht Gold weniger Platz als Silber! Wenn die Krone also heimlich Silber enthält, muss sie bei gleicher Masse ein GRÖSSERES Volumen haben als echtes Gold.',
    emoji: '💡',
    keyInsight: true,
  },
  {
    title: 'Der Betrug wird aufgedeckt',
    text: 'Archimedes tauchte die Krone in einen Wasserbehälter und maß genau, wie viel Wasser sie verdrängte. Dann nahm er ein Stück reines Gold mit der gleichen Masse und tauchte es auch ein. Ergebnis: Die Krone verdrängte MEHR Wasser! Sie hatte also ein größeres Volumen – und damit eine niedrigere Dichte. Der Goldschmied hatte betrogen und wurde bestraft!',
    emoji: '⚖️',
  },
];

export default function TheoriePage() {
  const [currentPart, setCurrentPart] = useState(0);
  const part = storyParts[currentPart];

  const goNext = () => {
    if (currentPart < storyParts.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  const goPrev = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-amber-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="text-xl font-bold mt-2">📜 Die Archimedes-Story</h1>
        <p className="text-amber-100 text-sm">Wie die Dichte entdeckt wurde</p>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-4">
        <div className="flex gap-1">
          {storyParts.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full transition-colors ${
                i <= currentPart ? 'bg-amber-500' : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-amber-700 mt-2">
          Teil {currentPart + 1} von {storyParts.length}
        </p>
      </div>

      {/* Story Card */}
      <div className="px-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 mb-6">
          <div className="text-center mb-4">
            <span className="text-7xl">{part.emoji}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
            {part.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            {part.text}
          </p>
        </div>

        {/* Key Insight Box (only on part 5) */}
        {part.keyInsight && (
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 mb-6">
            <p className="font-bold text-blue-800 text-center mb-2">🔑 Die Erkenntnis:</p>
            <p className="text-blue-700 text-center text-lg font-medium">
              Dichte = Masse / Volumen
            </p>
            <p className="text-blue-600 text-center text-sm mt-2">
              Verschiedene Stoffe haben unterschiedliche Dichten!
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          {currentPart > 0 && (
            <button
              onClick={goPrev}
              className="flex-1 py-4 border-2 border-amber-400 text-amber-600 rounded-xl font-semibold active:scale-95 transition-transform"
            >
              ← Zurück
            </button>
          )}
          {currentPart < storyParts.length - 1 ? (
            <button
              onClick={goNext}
              className="flex-1 py-4 bg-amber-500 text-white rounded-xl font-semibold active:scale-95 transition-transform"
            >
              Weiter →
            </button>
          ) : (
            <Link
              href="/leni/physik/dichte/formeln"
              className="flex-1 py-4 bg-green-500 text-white rounded-xl font-semibold text-center active:scale-95 transition-transform"
            >
              Zu den Formeln →
            </Link>
          )}
        </div>

        {/* Butterfly Comment */}
        <div className="bg-purple-100 rounded-xl p-4 mt-6 flex items-start gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-purple-800 text-sm">
            {currentPart === 0 && "Eine spannende Geschichte – vor über 2000 Jahren!"}
            {currentPart === 1 && "Wie löst man dieses Rätsel?"}
            {currentPart === 2 && "Archimedes war ein Genie!"}
            {currentPart === 3 && "Heureka ist Griechisch für 'Ich hab's gefunden!'"}
            {currentPart === 4 && "Das ist der Schlüssel: DICHTE!"}
            {currentPart === 5 && "So wurde der Betrug aufgedeckt. Jetzt lernst du die Formeln!"}
          </p>
        </div>
      </div>
    </div>
  );
}
