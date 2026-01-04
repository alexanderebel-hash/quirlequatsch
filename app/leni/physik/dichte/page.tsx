'use client';

import Link from 'next/link';

const modules = [
  {
    id: 'theorie',
    title: 'Die Archimedes-Story',
    subtitle: 'Warum gibt es Dichte?',
    icon: '📜',
    color: 'from-amber-500 to-orange-500',
    href: '/leni/physik/dichte/theorie',
    xp: '+10 XP',
    status: 'ready'
  },
  {
    id: 'formeln',
    title: 'Formeln & Dreieck',
    subtitle: 'ρ = m / V verstehen',
    icon: '📐',
    color: 'from-blue-500 to-blue-600',
    href: '/leni/physik/dichte/formeln',
    xp: '+15 XP',
    status: 'ready'
  },
  {
    id: 'einheiten',
    title: 'Einheiten umrechnen',
    subtitle: 'ml, cm³, l, g, kg',
    icon: '🔄',
    color: 'from-green-500 to-emerald-500',
    href: '/leni/physik/dichte/einheiten',
    xp: '+20 XP',
    status: 'ready'
  },
  {
    id: 'volumen',
    title: 'Volumen berechnen',
    subtitle: 'Würfel & Quader',
    icon: '📦',
    color: 'from-purple-500 to-purple-600',
    href: '/leni/physik/dichte/volumen',
    xp: '+15 XP',
    status: 'ready'
  },
  {
    id: 'dichte-rechnen',
    title: 'Dichte berechnen',
    subtitle: 'Aufgaben wie in der Arbeit',
    icon: '🧮',
    color: 'from-red-500 to-red-600',
    href: '/leni/physik/dichte/dichte-rechnen',
    xp: '+25 XP',
    status: 'ready'
  },
  {
    id: 'stofftabelle',
    title: 'Stoffdichten',
    subtitle: 'Gold, Wasser, Eisen...',
    icon: '📊',
    color: 'from-yellow-500 to-amber-500',
    href: '/leni/physik/dichte/stofftabelle',
    xp: '+10 XP',
    status: 'ready'
  },
  {
    id: 'spiele',
    title: 'Spiele',
    subtitle: 'Memory, Schwimmt/Sinkt, Sortieren',
    icon: '🎮',
    color: 'from-pink-500 to-rose-500',
    href: '/leni/physik/dichte/spiele',
    xp: 'Bonus XP',
    status: 'ready'
  },
  {
    id: 'test',
    title: 'Klassenarbeit',
    subtitle: '30 Minuten Simulation',
    icon: '📝',
    color: 'from-gray-600 to-gray-700',
    href: '/leni/physik/dichte/test',
    xp: '+50 XP',
    status: 'ready'
  },
];

export default function DichteOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-6">
        <Link href="/leni/physik" className="text-blue-200 text-sm mb-2 inline-block">
          ← Zurück zu Physik
        </Link>
        <h1 className="text-2xl font-bold">🔬 Volumen, Masse & Dichte</h1>
        <p className="text-blue-100">Physik Klasse 7 – Klassenarbeitsvorbereitung</p>
      </div>

      {/* Key Formula Card */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-blue-200">
          <p className="text-center text-gray-500 text-sm mb-2">Die wichtigste Formel:</p>
          <p className="text-center text-4xl font-bold text-blue-600 mb-2">ρ = m / V</p>
          <p className="text-center text-gray-600">Dichte = Masse ÷ Volumen</p>
          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-center gap-4 text-sm">
            <span className="text-gray-500">ρ in g/cm³</span>
            <span className="text-gray-500">m in g</span>
            <span className="text-gray-500">V in cm³</span>
          </div>
        </div>
      </div>

      {/* Butterfly Intro */}
      <div className="px-4 mb-4">
        <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-3xl">🦋</span>
          <div>
            <p className="font-medium text-purple-800">Hey Leni!</p>
            <p className="text-purple-700 text-sm mt-1">
              Ich zeig dir, wie Archimedes einen Betrüger entlarvt hat – 
              und warum Öl auf Wasser schwimmt. Physik kann echt spannend sein!
            </p>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-100 rounded-xl p-4 text-center">
            <p className="text-3xl mb-1">💧</p>
            <p className="text-sm font-semibold text-blue-800">Wasser</p>
            <p className="text-lg font-bold text-blue-600">1 g/cm³</p>
          </div>
          <div className="bg-green-100 rounded-xl p-4 text-center">
            <p className="text-3xl mb-1">📏</p>
            <p className="text-sm font-semibold text-green-800">Merken!</p>
            <p className="text-lg font-bold text-green-600">1 ml = 1 cm³</p>
          </div>
        </div>
      </div>

      {/* Progress Info */}
      <div className="px-4 mb-4">
        <div className="bg-gray-100 rounded-xl p-3 flex justify-between items-center">
          <span className="text-sm text-gray-600">Dein Fortschritt</span>
          <span className="font-bold text-blue-600">0 / 8 Module</span>
        </div>
      </div>

      {/* Modules List */}
      <div className="px-4 space-y-3">
        {modules.map((module, index) => (
          <Link key={module.id} href={module.href}>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                {index + 1}
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl shadow-sm`}>
                {module.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{module.title}</h3>
                <p className="text-sm text-gray-500">{module.subtitle}</p>
                <p className="text-xs text-blue-600 mt-0.5">{module.xp}</p>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Tip */}
      <div className="px-4 mt-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-medium text-yellow-800 mb-1">💡 Tipp für die Klassenarbeit:</p>
          <p className="text-yellow-700 text-sm">
            Immer zuerst die Einheiten umrechnen, dann die Formel einsetzen, 
            und am Ende einen Antwortsatz schreiben!
          </p>
        </div>
      </div>
    </div>
  );
}
