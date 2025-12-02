'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Scale, Coins, Gamepad2, FileText } from 'lucide-react';

const modules = [
  {
    href: '/leni/sozialkunde/sozialversicherung',
    icon: BookOpen,
    emoji: '🏥',
    title: 'Die 5 Säulen',
    description: 'Sozialversicherung verstehen',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    href: '/leni/sozialkunde/gerechtigkeit',
    icon: Scale,
    emoji: '⚖️',
    title: 'Gerechtigkeit',
    description: '4 Dimensionen + Karikatur',
    color: 'from-purple-500 to-purple-600',
  },
  {
    href: '/leni/sozialkunde/armut',
    icon: Coins,
    emoji: '🌍',
    title: 'Armut & Reichtum',
    description: 'Absolut vs. Relativ',
    color: 'from-orange-500 to-amber-600',
  },
  {
    href: '/leni/sozialkunde/spiele',
    icon: Gamepad2,
    emoji: '🎮',
    title: 'Spiele',
    description: 'Memory, Zuordnung & mehr',
    color: 'from-pink-500 to-rose-600',
  },
  {
    href: '/leni/sozialkunde/test',
    icon: FileText,
    emoji: '📝',
    title: 'Gesamt-Test',
    description: 'Alle Themen prüfen',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function LeniSozialkundePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-3xl mx-auto">
      {/* Header */}
      <Link href="/leni" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Zurück</span>
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
          <Scale className="w-8 h-8 text-orange-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🦋 Politische Bildung
        </h1>
        <p className="text-gray-500">Mit Lillebi die Gesellschaft verstehen</p>
      </div>

      {/* Media Resources */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">📚 Lernmaterialien</h3>
        <div className="space-y-3">
          <a 
            href="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/leni/sozialkunde/German_Social_Model_Foundations_to_Reality.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
          >
            <span className="text-2xl">📄</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">PowerPoint als PDF</p>
              <p className="text-sm text-gray-600">German Social Model - Foundations to Reality</p>
            </div>
          </a>
          
          <a 
            href="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/leni/sozialkunde/unnamed.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
          >
            <span className="text-2xl">📊</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Schaubild</p>
              <p className="text-sm text-gray-600">Visuelle Übersicht</p>
            </div>
          </a>

          <a 
            href="https://we1ptd8elomh5s95.public.blob.vercel-storage.com/leni/sozialkunde/Die_Sa%CC%88ulen_der_Gerechtigkeit.mp4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
          >
            <span className="text-2xl">🎬</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Video: Die Säulen der Gerechtigkeit</p>
              <p className="text-sm text-gray-600">Erklärvideo zu den vier Dimensionen</p>
            </div>
          </a>
        </div>
      </div>

      {/* Lillebi Welcome */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-semibold mb-1">Hallo Leni!</p>
            <p className="text-white/90 text-sm">
              Heute lernst du, wie Deutschland funktioniert: Sozialversicherung, Gerechtigkeit und Armut. 
              Politische Bildung ist wichtig für dein Leben!
            </p>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">Dein Fortschritt</span>
          <span className="text-orange-100">0/5 Module</span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-[0%]" />
        </div>
      </div>

      {/* Themen-Überblick */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-3">📋 Was lernst du?</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Die fünf Säulen der Sozialversicherung
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Dimensionen der Gerechtigkeit & Karikatur-Analyse
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Armut und Reichtum (absolut vs. relativ)
          </li>
        </ul>
      </div>

      {/* Merksatz */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold text-gray-800 mb-2">Merksatz</p>
            <p className="text-gray-600 text-sm italic">
              "Wenn ich Partner, Eltern oder Kinder kriege, ich auch das" - 
              Die Sozialversicherung schützt nicht nur dich, sondern auch deine Familie!
            </p>
          </div>
        </div>
      </div>

      {/* Module */}
      <h2 className="font-semibold text-gray-800 mb-4">🎯 Lernmodule</h2>
      <div className="space-y-3">
        {modules.map((module) => (
          <Link key={module.href} href={module.href}>
            <div className={`bg-gradient-to-r ${module.color} rounded-2xl p-4 text-white flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.98]`}>
              <span className="text-3xl">{module.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold text-lg">{module.title}</p>
                <p className="text-white/80 text-sm">{module.description}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <module.icon className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lillebi Motivation */}
      <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦋</span>
          <p className="text-gray-600 text-sm">
            Du schaffst das! Starte mit den 5 Säulen und arbeite dich durch alle Module.
          </p>
        </div>
      </div>
    </div>
  );
}
