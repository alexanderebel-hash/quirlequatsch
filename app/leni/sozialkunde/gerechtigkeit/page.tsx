'use client';

import Link from 'next/link';
import { ArrowLeft, Brain, Image, ChevronRight } from 'lucide-react';
import { gerechtigkeitContent } from '../data/content';

export default function GerechtigkeitPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni/sozialkunde" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
          <span className="text-3xl">⚖️</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {gerechtigkeitContent.title}
        </h1>
        <p className="text-gray-500">{gerechtigkeitContent.description}</p>
      </div>

      {/* Lillebi Info */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Wichtig zu wissen!</p>
            <p className="text-white/90 text-sm">
              Gerechtigkeit bedeutet für jeden etwas anderes. Es gibt vier verschiedene Dimensionen, 
              wie man Gerechtigkeit verstehen kann.
            </p>
          </div>
        </div>
      </div>

      {/* Die 4 Dimensionen */}
      <h2 className="font-semibold text-gray-800 mb-4">🎯 Die vier Dimensionen</h2>
      <div className="space-y-4 mb-6">
        {gerechtigkeitContent.dimensionen.map((dimension) => (
          <div key={dimension.id} className={`bg-gradient-to-r ${dimension.color} rounded-2xl p-5 text-white`}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{dimension.emoji}</span>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-1">{dimension.name}</h3>
                <p className="text-white/90 text-sm italic">"{dimension.definition}"</p>
              </div>
            </div>

            <div className="space-y-3 bg-white/10 rounded-xl p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Was bedeutet das?
                </p>
                <p className="text-white/90 text-sm">{dimension.details}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Beispiel
                </p>
                <p className="text-white font-medium">{dimension.beispiel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zusammenfassung */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">📝 Zusammenfassung</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Verfahrensgerechtigkeit:</strong> Gleiche Rechte für alle</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Leistungsgerechtigkeit:</strong> Wer mehr leistet, bekommt mehr</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Bedarfsgerechtigkeit:</strong> Jeder nach seinen Bedürfnissen</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Teilhabegerechtigkeit:</strong> Niemand wird ausgeschlossen</span>
          </li>
        </ul>
      </div>

      {/* Lillebi Motivation */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-gray-600 text-sm">
            Jetzt kennst du die 4 Dimensionen! Schau dir noch die Karikatur an.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-3">
        <Link href="/leni/sozialkunde/gerechtigkeit/karikatur">
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Image className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">Karikatur analysieren</p>
              <p className="text-white/80 text-sm">"Ist das Gerechtigkeit?"</p>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>

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
    </div>
  );
}
