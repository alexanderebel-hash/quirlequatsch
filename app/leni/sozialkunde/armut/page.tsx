'use client';

import Link from 'next/link';
import { ArrowLeft, Brain, ChevronRight } from 'lucide-react';
import { armutContent } from '../data/content';

export default function ArmutPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni/sozialkunde" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
          <span className="text-3xl">🌍</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {armutContent.title}
        </h1>
        <p className="text-gray-500">{armutContent.description}</p>
      </div>

      {/* Lillebi Info */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Wichtig zu wissen!</p>
            <p className="text-white/90 text-sm">
              {armutContent.definition}
            </p>
          </div>
        </div>
      </div>

      {/* Grundbedürfnisse */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">🔑 Grundbedürfnisse</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {armutContent.grundbeduerfnisse.map((bedarf) => (
            <div key={bedarf} className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-sm font-medium text-blue-800">{bedarf}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Die zwei Arten */}
      <h2 className="font-semibold text-gray-800 mb-4">🌐 Zwei Arten von Armut</h2>
      <div className="space-y-4 mb-6">
        {armutContent.arten.map((art) => (
          <div key={art.id} className={`bg-gradient-to-r ${art.color} rounded-2xl p-5 text-white`}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{art.emoji}</span>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-1">{art.name}</h3>
                <p className="text-white/90 text-sm italic">"{art.definition}"</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              {art.id === 'absolut' && art.merkmale && (
                <ul className="space-y-2">
                  {art.merkmale.map((merkmal, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/90 text-sm">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span>{merkmal}</span>
                    </li>
                  ))}
                </ul>
              )}
              {art.id === 'relativ' && (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                      In Deutschland (OECD)
                    </p>
                    <p className="text-white/90 text-sm">{art.deutschland}</p>
                  </div>
                  {art.beispiel && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20">
                      <div>
                        <p className="text-xs text-white/70 mb-1">Durchschnitt:</p>
                        <p className="text-white font-medium">{art.beispiel.durchschnitt}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70 mb-1">Armutsgrenze:</p>
                        <p className="text-white font-medium">{art.beispiel.armut}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Vergleich: Arm vs. Reich */}
      <h2 className="font-semibold text-gray-800 mb-4">⚖️ Vergleich: Arm vs. Reich</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>😢</span>
            Leben in Armut
          </h3>
          <ul className="space-y-2">
            {armutContent.vergleich.armut.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-red-500 font-bold mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-5 border border-emerald-300">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>😊</span>
            Leben in Reichtum
          </h3>
          <ul className="space-y-2">
            {armutContent.vergleich.reichtum.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wichtige Erkenntnis */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 mb-6 border border-yellow-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold text-gray-800 mb-2">Wichtig!</p>
            <p className="text-gray-700 text-sm italic">
              {armutContent.vergleich.wichtig}
            </p>
          </div>
        </div>
      </div>

      {/* Zusammenfassung */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">📝 Zusammenfassung</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Absolute Armut:</strong> Unter 1,90$/Tag - Grundbedürfnisse nicht erfüllt</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Relative Armut:</strong> Weniger als 50% des Durchschnitts im jeweiligen Land</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Absolute Armut kommt vor allem in <strong>Entwicklungsländern</strong> vor</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Relative Armut ist vom <strong>Umfeld abhängig</strong></span>
          </li>
        </ul>
      </div>

      {/* Lillebi Motivation */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-gray-600 text-sm">
            Jetzt verstehst du den Unterschied! Teste dein Wissen im Quiz.
          </p>
        </div>
      </div>

      {/* Quiz Button */}
      <Link href="/leni/sozialkunde/armut/quiz">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">Quiz starten</p>
            <p className="text-white/80 text-sm">6 Fragen zu Armut & Reichtum</p>
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
}
