'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, ChevronRight } from 'lucide-react';
import { gerechtigkeitContent } from '../../data/content';

const karikatur = gerechtigkeitContent.karikatur;

export default function KarikaturPage() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const elements = [
    { id: 'links', title: 'Linke Seite', content: karikatur.linkeSeite, color: 'from-red-500 to-rose-600' },
    { id: 'rechts', title: 'Rechte Seite', content: karikatur.rechteSeite, color: 'from-green-500 to-emerald-600' },
    { id: 'schlucht', title: 'Die Schlucht', content: 'Symbolisiert die schwer überwindbare Kluft zwischen Arm und Reich', color: 'from-gray-600 to-gray-700' },
    { id: 'dialog', title: 'Der Dialog', content: `Frage: "${karikatur.dialog.frage}" - Antwort: "${karikatur.dialog.antwort}"`, color: 'from-blue-500 to-indigo-600' }
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni/sozialkunde/gerechtigkeit" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
          <span className="text-3xl">🖼️</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Karikatur-Analyse
        </h1>
        <p className="text-gray-500">"{karikatur.titel}" von {karikatur.autor}</p>
      </div>

      {/* Lillebi Info */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Karikatur verstehen</p>
            <p className="text-white/90 text-sm">
              Klick auf die Elemente unten, um mehr über die Karikatur zu erfahren!
            </p>
          </div>
        </div>
      </div>

      {/* Beschreibung */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">📋 Beschreibung</h3>
        <p className="text-gray-600 text-sm mb-4">{karikatur.beschreibung}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-red-800 mb-1">LINKS (ARM)</p>
            <p className="text-sm text-red-700">{karikatur.linkeSeite}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-green-800 mb-1">RECHTS (REICH)</p>
            <p className="text-sm text-green-700">{karikatur.rechteSeite}</p>
          </div>
        </div>
      </div>

      {/* Interaktive Elemente */}
      <h3 className="font-semibold text-gray-800 mb-4">🎯 Interaktive Analyse</h3>
      <div className="space-y-3 mb-6">
        {elements.map((element) => (
          <button
            key={element.id}
            onClick={() => setSelectedElement(selectedElement === element.id ? null : element.id)}
            className={`w-full text-left transition-all ${
              selectedElement === element.id ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <div className={`bg-gradient-to-r ${element.color} rounded-2xl p-4 text-white`}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">{element.title}</p>
                <span className="text-2xl">{selectedElement === element.id ? '▼' : '▶'}</span>
              </div>
              {selectedElement === element.id && (
                <p className="text-white/90 text-sm mt-3 pt-3 border-t border-white/20">
                  {element.content}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Dialog */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-100">
        <h3 className="font-semibold text-gray-800 mb-3">💬 Der entscheidende Dialog</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-3">
            <p className="text-xs font-semibold text-gray-500 mb-1">Person links fragt:</p>
            <p className="text-gray-800 font-medium">"{karikatur.dialog.frage}"</p>
          </div>
          <div className="bg-white rounded-xl p-3">
            <p className="text-xs font-semibold text-gray-500 mb-1">Person rechts antwortet:</p>
            <p className="text-gray-800 font-medium">"{karikatur.dialog.antwort}"</p>
          </div>
        </div>
      </div>

      {/* Deutung */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 mb-6 border border-purple-100">
        <h3 className="font-semibold text-gray-800 mb-3">🔍 Deutung</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{karikatur.deutung}</p>
      </div>

      {/* Analysefragen */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">❓ Analysefragen</h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">1. Was wird kritisiert?</p>
            <p className="text-sm text-gray-600">→ Soziale Ungleichheit durch Herkunft</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">2. Welche Position nimmt der Karikaturist ein?</p>
            <p className="text-sm text-gray-600">→ Kritisch gegenüber ungerechter Verteilung</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">3. Wer ist der Adressat?</p>
            <p className="text-sm text-gray-600">→ Die Gesellschaft, Politiker</p>
          </div>
        </div>
      </div>

      {/* Lillebi Motivation */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-gray-600 text-sm">
            Super! Du verstehst jetzt die Karikatur. Teste dein Wissen im Quiz!
          </p>
        </div>
      </div>

      {/* Quiz Button */}
      <Link href="/leni/sozialkunde/gerechtigkeit/quiz">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">Quiz starten</p>
            <p className="text-white/80 text-sm">6 Fragen zur Gerechtigkeit</p>
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
}
