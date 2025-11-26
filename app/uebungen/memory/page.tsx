'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MemoryGame } from '@/components/learning/MemoryGame';
import { memoryExercises } from '@/lib/data/exercises';

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

function MemoryPageContent() {
  const searchParams = useSearchParams();
  const themaFromUrl = searchParams.get('thema');
  const [selectedThema, setSelectedThema] = useState<string | null>(themaFromUrl);

  useEffect(() => {
    if (themaFromUrl) {
      setSelectedThema(themaFromUrl);
    }
  }, [themaFromUrl]);

  const data = selectedThema ? memoryExercises[selectedThema as keyof typeof memoryExercises] : null;

  // Wenn Thema gewählt → Spiel anzeigen
  if (selectedThema && data) {
    return (
      <div className="px-4 pt-6">
        <button 
          onClick={() => setSelectedThema(null)} 
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Anderes Thema wählen</span>
        </button>
        <MemoryGame 
          title={data.title}
          description={data.description}
          pairs={data.pairs}
          themaId={selectedThema}
        />
      </div>
    );
  }

  // Thema-Auswahl anzeigen
  return (
    <div className="px-4 pt-6">
      <Link href="/ueben">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">🎴 Memory</h1>
      <p className="text-gray-500 mb-6">Wähle ein Thema:</p>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
        <p className="text-green-800 font-medium">
          💚 HULK Tipp: Memory trainiert dein Gehirn!
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

export default function MemoryPage() {
  return (
    <Suspense fallback={<div className="px-4 pt-6 text-center">Lädt...</div>}>
      <MemoryPageContent />
    </Suspense>
  );
}
