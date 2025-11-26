'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Check, Copy } from 'lucide-react';

export default function LeniBioTestPage() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const updateAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const submitTest = () => {
    setSubmitted(true);
  };

  const generateResult = () => {
    let result = '=== LENIS BIO-TEST: ZELLEN ===\n\n';
    result += 'TEIL 1: Begriffe\n';
    result += '────────────────\n';
    result += `1. Welcher Zelltyp hat KEINEN echten Zellkern?\n   → ${answers.t1 || '(leer)'}\n`;
    result += `2. Welche Organelle ist das "Kraftwerk der Zelle"?\n   → ${answers.t2 || '(leer)'}\n`;
    result += `3. Welche Organelle macht Fotosynthese?\n   → ${answers.t3 || '(leer)'}\n`;
    result += `4. Was haben Pflanzenzellen, aber Tierzellen NICHT? (2 Dinge)\n   → ${answers.t4 || '(leer)'}\n`;
    
    result += '\nTEIL 2: Richtig oder Falsch?\n';
    result += '────────────────────────────\n';
    result += `5. Bakterien sind Eukaryoten. → ${answers.t5 || '(nicht gewählt)'}\n`;
    result += `6. Pflanzenzellen haben Chloroplasten. → ${answers.t6 || '(nicht gewählt)'}\n`;
    result += `7. Tierzellen haben eine Zellwand. → ${answers.t7 || '(nicht gewählt)'}\n`;
    result += `8. Prokaryoten sind größer als Eukaryoten. → ${answers.t8 || '(nicht gewählt)'}\n`;
    result += `9. Ribosomen gibt es in ALLEN Zellen. → ${answers.t9 || '(nicht gewählt)'}\n`;
    
    result += '\nTEIL 3: Erklären\n';
    result += '────────────────\n';
    result += `10. Unterschied Pro-/Eukaryoten:\n   → ${answers.t10 || '(leer)'}\n`;
    result += `11. Warum können Pflanzen eigene Nahrung herstellen?\n   → ${answers.t11 || '(leer)'}\n`;
    
    return result;
  };

  const copyResult = () => {
    navigator.clipboard.writeText(generateResult());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!started) {
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
        <Link href="/leni/bio" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>

        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold mb-2">Mini-Test</h1>
          <p className="text-gray-500 mb-6">Wie im echten Bio-Test!</p>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-6 text-left">
            <h3 className="font-semibold text-purple-800 mb-3">📋 Aufbau:</h3>
            <ul className="text-purple-700 space-y-2">
              <li>• Teil 1: Begriffe zuordnen (4 Punkte)</li>
              <li>• Teil 2: Richtig oder Falsch (5 Punkte)</li>
              <li>• Teil 3: Erklären (6 Punkte)</li>
            </ul>
            <p className="text-purple-600 text-sm mt-4">Insgesamt: 15 Punkte</p>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
          >
            🚀 Test starten
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-2xl font-bold mb-2">Deine Antworten</h1>
          <p className="text-gray-500">Kopiere den Text und schick ihn zur Korrektur!</p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 mb-4">
          <pre className="whitespace-pre-wrap text-sm font-mono text-gray-700 leading-relaxed">
            {generateResult()}
          </pre>
        </div>

        <button
          onClick={copyResult}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-3 ${
            copied 
              ? 'bg-emerald-500 text-white' 
              : 'bg-purple-500 text-white hover:bg-purple-600'
          }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Kopiert!' : 'Kopieren'}
        </button>

        <button
          onClick={() => { setStarted(false); setSubmitted(false); setAnswers({}); }}
          className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
        >
          🔄 Nochmal machen
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setStarted(false)} className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Abbrechen</span>
        </button>
        <span className="text-gray-700 font-medium">📝 Bio-Test</span>
      </div>

      {/* Teil 1 */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 1: Begriffe (4 Punkte)</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              1. Welcher Zelltyp hat KEINEN echten Zellkern?
            </label>
            <input
              type="text"
              value={answers.t1 || ''}
              onChange={(e) => updateAnswer('t1', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              placeholder="Deine Antwort..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2. Welche Organelle ist das "Kraftwerk der Zelle"?
            </label>
            <input
              type="text"
              value={answers.t2 || ''}
              onChange={(e) => updateAnswer('t2', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              placeholder="Deine Antwort..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              3. Welche Organelle macht Fotosynthese?
            </label>
            <input
              type="text"
              value={answers.t3 || ''}
              onChange={(e) => updateAnswer('t3', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              placeholder="Deine Antwort..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              4. Was haben Pflanzenzellen, aber Tierzellen NICHT? (2 Dinge)
            </label>
            <input
              type="text"
              value={answers.t4 || ''}
              onChange={(e) => updateAnswer('t4', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              placeholder="Deine Antwort..."
            />
          </div>
        </div>
      </div>

      {/* Teil 2 */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 2: Richtig oder Falsch? (5 Punkte)</h3>
        
        {[
          { key: 't5', text: '5. Bakterien sind Eukaryoten.' },
          { key: 't6', text: '6. Pflanzenzellen haben Chloroplasten.' },
          { key: 't7', text: '7. Tierzellen haben eine Zellwand aus Cellulose.' },
          { key: 't8', text: '8. Prokaryotische Zellen sind größer als eukaryotische.' },
          { key: 't9', text: '9. Ribosomen gibt es in ALLEN Zellen.' },
        ].map((q) => (
          <div key={q.key} className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">{q.text}</p>
            <div className="flex gap-3">
              <button
                onClick={() => updateAnswer(q.key, 'richtig')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  answers[q.key] === 'richtig'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Richtig
              </button>
              <button
                onClick={() => updateAnswer(q.key, 'falsch')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  answers[q.key] === 'falsch'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Falsch
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Teil 3 */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 3: Erklären (6 Punkte)</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              10. Erkläre den wichtigsten Unterschied zwischen Pro- und Eukaryoten (2-3 Sätze)
            </label>
            <textarea
              value={answers.t10 || ''}
              onChange={(e) => updateAnswer('t10', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none min-h-[100px]"
              placeholder="Deine Erklärung..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              11. Warum können Pflanzen ihre eigene Nahrung herstellen, Tiere aber nicht?
            </label>
            <textarea
              value={answers.t11 || ''}
              onChange={(e) => updateAnswer('t11', e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none min-h-[100px]"
              placeholder="Deine Erklärung..."
            />
          </div>
        </div>
      </div>

      <button
        onClick={submitTest}
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
      >
        📋 Antworten abgeben
      </button>
    </div>
  );
}
