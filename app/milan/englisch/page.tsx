'use client';

import Link from 'next/link';

const modules = [
  {
    id: 'morning',
    title: '☀️ In the Morning',
    subtitle: 'Unit 2 – Körper, Frühstück & mehr',
    description: 'Körperteile, Adjektive, have got, Frühstücksvokabeln und Yes/No Questions',
    color: 'from-orange-400 to-amber-400',
    href: '/milan/englisch/morning',
    lessons: 6,
    status: 'available',
    xp: '100+ XP'
  },
  {
    id: 'school',
    title: '🏫 At School',
    subtitle: 'Unit 3 – Coming Soon',
    description: 'Schulfächer, Stundenplan, classroom phrases',
    color: 'from-blue-400 to-cyan-400',
    href: '#',
    lessons: 5,
    status: 'locked',
    xp: '80+ XP'
  },
  {
    id: 'hobbies',
    title: '⚽ Hobbies',
    subtitle: 'Unit 4 – Coming Soon',
    description: 'Freizeitaktivitäten, Sportarten, present continuous',
    color: 'from-green-400 to-emerald-400',
    href: '#',
    lessons: 6,
    status: 'locked',
    xp: '90+ XP'
  }
];

export default function MilanEnglischPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-6">
        <Link href="/milan" className="text-blue-200 text-sm">← Zurück zu Capitano's Welt</Link>
        <h1 className="text-3xl font-bold mt-2">🇬🇧 English</h1>
        <p className="text-blue-100 mt-1">5. Klasse Gymnasium</p>
      </div>

      {/* Capitano Intro */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100 flex items-start gap-3">
          <span className="text-4xl">🚀</span>
          <div>
            <p className="font-semibold text-gray-800">Capitano sagt:</p>
            <p className="text-gray-600 text-sm">
              "Welcome, Miner! Hier lernst du Englisch wie ein Pro. Let's level up your English skills! 🎮"
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600">1</p>
            <p className="text-xs text-gray-600">Module</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">6</p>
            <p className="text-xs text-gray-600">Lektionen</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-orange-600">0</p>
            <p className="text-xs text-gray-600">XP</p>
          </div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Deine Units</h2>
        
        <div className="space-y-4">
          {modules.map((module) => (
            <Link 
              key={module.id}
              href={module.status === 'locked' ? '#' : module.href}
              className={module.status === 'locked' ? 'pointer-events-none' : ''}
            >
              <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border ${
                module.status === 'locked' ? 'opacity-60' : ''
              }`}>
                {/* Color Header */}
                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-800">{module.title}</h3>
                        {module.status === 'locked' && <span className="text-xl">🔒</span>}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{module.subtitle}</p>
                      <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                      
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>📚 {module.lessons} Lektionen</span>
                        <span>⭐ {module.xp}</span>
                      </div>
                      
                      {module.status === 'available' && (
                        <div className="mt-3">
                          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                            ✓ Verfügbar
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {module.status === 'available' && (
                      <div className="text-blue-500 text-2xl">›</div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">💡</span>
            <h3 className="font-bold">Lerntipps von Capitano</h3>
          </div>
          <ul className="space-y-2 text-sm text-orange-50">
            <li>• Mach jeden Tag eine Lektion – konstant sein ist wichtig!</li>
            <li>• Sprich die Wörter laut aus – das hilft beim Merken!</li>
            <li>• Spiel die Games für Bonus-XP!</li>
            <li>• Irregulären Plural üben: foot→feet, tooth→teeth</li>
          </ul>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="px-4 mt-6">
        <div className="bg-purple-100 rounded-xl p-4">
          <p className="text-purple-800 text-sm">
            <strong>🚀 Nächste Units:</strong> School & Hobbies kommen bald! 
            Schließ erst "In the Morning" ab, um sie freizuschalten.
          </p>
        </div>
      </div>
    </div>
  );
}
