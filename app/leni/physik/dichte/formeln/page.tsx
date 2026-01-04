'use client';

import Link from 'next/link';
import { useState } from 'react';

type Variable = 'rho' | 'm' | 'V' | null;

export default function FormelnPage() {
  const [selectedVariable, setSelectedVariable] = useState<Variable>(null);

  const getFormula = () => {
    switch (selectedVariable) {
      case 'rho':
        return { 
          formula: 'ρ = m / V', 
          words: 'Dichte = Masse ÷ Volumen',
          color: 'text-green-600',
          bg: 'bg-green-50'
        };
      case 'm':
        return { 
          formula: 'm = ρ · V', 
          words: 'Masse = Dichte × Volumen',
          color: 'text-blue-600',
          bg: 'bg-blue-50'
        };
      case 'V':
        return { 
          formula: 'V = m / ρ', 
          words: 'Volumen = Masse ÷ Dichte',
          color: 'text-purple-600',
          bg: 'bg-purple-50'
        };
      default:
        return { 
          formula: '?', 
          words: 'Tippe auf das, was du suchst!',
          color: 'text-gray-400',
          bg: 'bg-gray-50'
        };
    }
  };

  const result = getFormula();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4">
        <Link href="/leni/physik/dichte" className="text-blue-200 text-sm">
          ← Zurück zur Übersicht
        </Link>
        <h1 className="text-xl font-bold mt-2">📐 Das Formeldreieck</h1>
        <p className="text-blue-200 text-sm">Tippe auf das, was du SUCHST</p>
      </div>

      <div className="px-4 py-6">
        {/* Instruction */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <p className="text-yellow-800 text-center">
            <strong>So funktioniert's:</strong> Tippe auf die Größe, die du berechnen willst. 
            Die Formel erscheint automatisch!
          </p>
        </div>

        {/* Formula Triangle */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border mb-6">
          <div className="relative mx-auto" style={{ width: '240px', height: '200px' }}>
            {/* Triangle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="240" height="200" viewBox="0 0 240 200">
                <polygon 
                  points="120,10 10,190 230,190" 
                  fill="#E0F2FE" 
                  stroke="#60A5FA" 
                  strokeWidth="3"
                />
                <line x1="40" y1="100" x2="200" y2="100" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            
            {/* m Button (top) */}
            <button
              onClick={() => setSelectedVariable('m')}
              className={`absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all shadow-md ${
                selectedVariable === 'm' 
                  ? 'bg-blue-500 text-white scale-110 ring-4 ring-blue-200' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
            >
              m
            </button>
            
            {/* ρ Button (bottom left) */}
            <button
              onClick={() => setSelectedVariable('rho')}
              className={`absolute bottom-2 left-6 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all shadow-md ${
                selectedVariable === 'rho' 
                  ? 'bg-green-500 text-white scale-110 ring-4 ring-green-200' 
                  : 'bg-green-100 text-green-600 hover:bg-green-200'
              }`}
            >
              ρ
            </button>
            
            {/* V Button (bottom right) */}
            <button
              onClick={() => setSelectedVariable('V')}
              className={`absolute bottom-2 right-6 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all shadow-md ${
                selectedVariable === 'V' 
                  ? 'bg-purple-500 text-white scale-110 ring-4 ring-purple-200' 
                  : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
              }`}
            >
              V
            </button>
          </div>
        </div>

        {/* Result Display */}
        <div className={`rounded-2xl p-6 shadow-lg border mb-6 transition-all ${result.bg}`}>
          <p className="text-center text-gray-500 text-sm mb-2">
            {selectedVariable ? 'Deine Formel:' : 'Wähle eine Größe aus!'}
          </p>
          <p className={`text-center text-4xl font-bold mb-2 ${result.color}`}>
            {result.formula}
          </p>
          <p className="text-center text-gray-600">{result.words}</p>
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <p className="font-semibold text-gray-700 mb-2">Legende:</p>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg">ρ</span>
            <div>
              <span className="text-gray-700 font-medium">Dichte</span>
              <span className="text-gray-500 text-sm ml-2">(griechisch: Rho)</span>
              <span className="text-gray-500 text-sm block">Einheit: g/cm³</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">m</span>
            <div>
              <span className="text-gray-700 font-medium">Masse</span>
              <span className="text-gray-500 text-sm block">Einheit: g (oder kg)</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg">V</span>
            <div>
              <span className="text-gray-700 font-medium">Volumen</span>
              <span className="text-gray-500 text-sm block">Einheit: cm³ (oder ml)</span>
            </div>
          </div>
        </div>

        {/* Trick Tip */}
        <div className="bg-purple-100 rounded-xl p-4 mt-6 flex items-start gap-3">
          <span className="text-2xl">🦋</span>
          <div>
            <p className="font-medium text-purple-800">Der Trick:</p>
            <p className="text-purple-700 text-sm mt-1">
              Was du suchst, deckst du im Dreieck ab! Was übrig bleibt, ist deine Formel. 
              <strong> Oben allein = geteilt durch unten.</strong> 
              <strong> Unten nebeneinander = mal!</strong>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <Link
          href="/leni/physik/dichte/einheiten"
          className="block w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-semibold text-center active:scale-95 transition-transform"
        >
          Weiter: Einheiten umrechnen →
        </Link>
      </div>
    </div>
  );
}
