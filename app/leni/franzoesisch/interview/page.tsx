'use client';

import Link from 'next/link';

const modules = [
  {
    id: 'fragen',
    title: 'Fragen stellen',
    subtitle: 'Lerne, deinen Partner zu fragen',
    icon: '❓',
    color: 'from-blue-500 to-blue-600',
    href: '/leni/franzoesisch/interview/fragen',
    xp: '+20 XP'
  },
  {
    id: 'antworten',
    title: 'Antworten geben',
    subtitle: 'Übe, über dich zu erzählen',
    icon: '💬',
    color: 'from-red-500 to-red-600',
    href: '/leni/franzoesisch/interview/antworten',
    xp: '+20 XP'
  },
  {
    id: 'vokabeln',
    title: 'Vokabeln',
    subtitle: 'Zahlen, Monate, Haustiere',
    icon: '📚',
    color: 'from-purple-500 to-purple-600',
    href: '/leni/franzoesisch/interview/vokabeln',
    xp: '+15 XP'
  },
  {
    id: 'dialog',
    title: 'Dialog üben',
    subtitle: 'Komplettes Interview simulieren',
    icon: '🎭',
    color: 'from-green-500 to-green-600',
    href: '/leni/franzoesisch/interview/dialog',
    xp: '+30 XP'
  },
  {
    id: 'spiele',
    title: 'Spiele',
    subtitle: 'Memory & Speed-Quiz',
    icon: '🎮',
    color: 'from-pink-500 to-pink-600',
    href: '/leni/franzoesisch/interview/spiele',
    xp: 'Bonus XP'
  },
  {
    id: 'test',
    title: 'Prüfungs-Simulation',
    subtitle: 'Wie in der echten Prüfung',
    icon: '📝',
    color: 'from-gray-600 to-gray-700',
    href: '/leni/franzoesisch/interview/test',
    xp: '+50 XP'
  },
];

export default function InterviewOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-red-50 pb-24">
      {/* Header - French Flag Colors */}
      <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 text-blue-900 px-4 py-6">
        <Link href="/leni/franzoesisch" className="text-blue-700 text-sm">← Zurück</Link>
        <h1 className="text-2xl font-bold mt-2">🇫🇷 Se présenter</h1>
        <p className="text-blue-700">Sich vorstellen – Partner-Interview</p>
      </div>

      {/* Exam Info */}
      <div className="px-4 py-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-4">
          <p className="font-semibold text-yellow-800">📋 Prüfungsformat:</p>
          <p className="text-yellow-700 text-sm mt-1">
            Du interviewst deinen Partner UND wirst interviewt. 
            Übe beides: Fragen stellen & Antworten geben!
          </p>
        </div>
      </div>

      {/* Butterfly Comment */}
      <div className="px-4 mb-4">
        <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl">🦋</span>
          <div>
            <p className="text-purple-800">
              "Hey Leni! Für die mündliche Prüfung musst du die Fragen UND die Antworten können. 
              Fang mit den Fragen an – die sind am wichtigsten!"
            </p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="px-4 space-y-3">
        {modules.map((module, index) => (
          <Link key={module.id} href={module.href}>
            <div className="bg-white rounded-2xl p-4 shadow-sm border flex items-center gap-4 active:scale-[0.98] transition-transform">
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

      {/* Quick Reference Card */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 text-white">
          <p className="font-semibold mb-2">🆘 Hilfs-Phrasen für die Prüfung:</p>
          <div className="text-sm space-y-1 text-blue-100">
            <p>• "Pardon? Tu peux répéter?" – Kannst du wiederholen?</p>
            <p>• "Plus lentement, s'il te plaît." – Langsamer, bitte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
