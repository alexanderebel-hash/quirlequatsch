'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const themenInfo: Record<string, { icon: string; title: string; color: string }> = {
  auge: { icon: '👁️', title: 'Das Auge', color: 'blue' },
  ohr: { icon: '👂', title: 'Das Ohr', color: 'orange' },
  tiere: { icon: '🐘', title: 'Tier-Sinne', color: 'green' },
  haut: { icon: '🖐️', title: 'Die Haut', color: 'purple' },
  hilfsmittel: { icon: '♿', title: 'Hilfsmittel', color: 'teal' },
  'masse-volumen': { icon: '⚖️', title: 'Masse & Volumen', color: 'yellow' },
  temperatur: { icon: '🌡️', title: 'Temperatur', color: 'red' },
  diagramme: { icon: '📊', title: 'Diagramme', color: 'indigo' },
};

export default function ThemaUebungenPage() {
  const params = useParams();
  const themaId = params.thema as string;
  const thema = themenInfo[themaId];

  if (!thema) {
    return (
      <div className="min-h-screen bg-[#F2F2F7] px-4 pt-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Thema nicht gefunden</p>
          <Link href="/ueben" className="text-green-600 font-bold">Zurück zu Üben</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <Link href="/ueben">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </div>
      </Link>

      <div className="text-center mb-8">
        <span className="text-5xl block mb-2">{thema.icon}</span>
        <h1 className="text-2xl font-bold text-gray-900">{thema.title}</h1>
        <p className="text-gray-500">Wähle eine Übungsart:</p>
      </div>

      <div className="space-y-4">
        <Link href={`/uebungen/memory?thema=${themaId}`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎴</span>
              <div>
                <p className="font-bold text-xl">Memory</p>
                <p className="text-green-100 text-sm">Finde die passenden Paare</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={`/uebungen/quiz?thema=${themaId}`}>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-5 text-white active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <span className="text-4xl">❓</span>
              <div>
                <p className="font-bold text-xl">Quiz</p>
                <p className="text-purple-100 text-sm">Multiple Choice Fragen</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/uebungen/sortieren">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-5 text-white active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🔢</span>
              <div>
                <p className="font-bold text-xl">Sortieren</p>
                <p className="text-blue-100 text-sm">Richtige Reihenfolge finden</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
