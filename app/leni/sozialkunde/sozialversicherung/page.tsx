'use client';

import Link from 'next/link';
import { ArrowLeft, Brain, ChevronRight } from 'lucide-react';
import { sozialversicherungContent } from '../data/content';

export default function SozialversicherungPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni/sozialkunde" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
          <span className="text-3xl">🏥</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {sozialversicherungContent.title}
        </h1>
        <p className="text-gray-500">{sozialversicherungContent.description}</p>
      </div>

      {/* Lillebi Info */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Wichtig zu wissen!</p>
            <p className="text-white/90 text-sm">
              Die Sozialversicherung ist eine Pflichtversicherung für alle Arbeitnehmer. 
              Sie schützt dich und deine Familie vor verschiedenen Lebensrisiken.
            </p>
          </div>
        </div>
      </div>

      {/* Die 5 Säulen */}
      <h2 className="font-semibold text-gray-800 mb-4">🏛️ Die fünf Säulen</h2>
      <div className="space-y-4 mb-6">
        {sozialversicherungContent.saeulen.map((saeule, index) => (
          <div key={saeule.id} className={`bg-gradient-to-r ${saeule.color} rounded-2xl p-5 text-white`}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{saeule.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium bg-white/20 px-2 py-0.5 rounded">
                    Säule {index + 1}
                  </span>
                </div>
                <h3 className="font-bold text-xl">{saeule.name}</h3>
              </div>
            </div>

            <div className="space-y-3 bg-white/10 rounded-xl p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Risiko
                </p>
                <p className="text-white font-medium">{saeule.risiko}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Wer ist versichert?
                </p>
                <p className="text-white/90 text-sm">{saeule.versicherte}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Leistungen
                </p>
                <p className="text-white/90 text-sm">{saeule.leistungen}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
                  Finanzierung
                </p>
                <p className="text-white/90 text-sm">{saeule.finanzierung}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Merksatz */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold text-gray-800 mb-2">Merksatz</p>
            <p className="text-gray-600 text-sm italic">
              {sozialversicherungContent.merksatz}
            </p>
          </div>
        </div>
      </div>

      {/* Zusammenfassung */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">📝 Zusammenfassung</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Die Sozialversicherung besteht aus <strong>5 Säulen</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Jede Säule schützt vor einem bestimmten <strong>Lebensrisiko</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Es ist eine <strong>Pflichtversicherung</strong> für Arbeitnehmer</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Meist zahlen Arbeitgeber und Arbeitnehmer <strong>je zur Hälfte</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>Auch deine <strong>Familie ist mitversichert</strong></span>
          </li>
        </ul>
      </div>

      {/* Lillebi Motivation */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-gray-600 text-sm">
            Super! Du kennst jetzt alle 5 Säulen. Teste dein Wissen mit dem Quiz!
          </p>
        </div>
      </div>

      {/* Quiz Button */}
      <Link href="/leni/sozialkunde/sozialversicherung/quiz">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">Quiz starten</p>
            <p className="text-white/80 text-sm">8 Fragen zu den 5 Säulen</p>
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
}
