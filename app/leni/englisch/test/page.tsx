'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Check, Copy } from 'lucide-react';

export default function LeniEnglischTestPage() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const updateAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const generateResult = () => {
    let result = '=== LENIS ENGLISCH-KLASSENARBEIT ===\n\n';
    
    result += 'TEIL 1: Reading Comprehension (4 Punkte)\n';
    result += '────────────────────────────────────────\n';
    const readingAnswers = ['q1', 'q2', 'q3', 'q4'];
    const questions = [
      'What does Minji usually do every weekend?',
      'What is Minji doing right now?',
      'What did Minji do yesterday?',
      'Why does Minji love her job?'
    ];
    readingAnswers.forEach((key, i) => {
      result += `${i + 1}. ${questions[i]}\n   → ${answers[key] || '(nicht beantwortet)'}\n`;
    });

    result += '\nTEIL 2: Zeitformen identifizieren (5 Punkte)\n';
    result += '─────────────────────────────────────────────\n';
    const tenseQuestions = [
      '"The demon hunters always protect the city."',
      '"Look! Joon is playing his magic guitar."',
      '"Yesterday, we visited the museum."',
      '"She doesn\'t like horror movies."',
      '"The students are doing their homework right now."'
    ];
    for (let i = 1; i <= 5; i++) {
      result += `${i + 4}. ${tenseQuestions[i-1]}\n   → ${answers[`tense${i}`] || '(nicht gewählt)'}\n`;
    }

    result += '\nTEIL 3: Lücken ausfüllen (8 Punkte)\n';
    result += '──────────────────────────────────\n';
    const fillQuestions = [
      'My sister usually _____ (watch) TV in the evening.',
      'Look! The dog _____ (run) in the park.',
      'Last week, I _____ (see) a great film.',
      'They _____ (not/play) football yesterday.',
      '_____ you _____ (do) your homework right now?',
      'She _____ (be) very happy yesterday.',
      'We always _____ (go) to school by bus.',
      '_____ Mike _____ (like) pizza?'
    ];
    for (let i = 10; i <= 17; i++) {
      result += `${i}. ${fillQuestions[i-10]}\n   → ${answers[`fill${i}`] || '(leer)'}\n`;
    }

    result += '\nTEIL 4: Verben einsetzen (8 Punkte)\n';
    result += '─────────────────────────────────────\n';
    const verbQuestions = [
      'Simple Present: She _____ (play) tennis every Saturday.',
      'Present Progressive: Look! They _____ (dance) in the street.',
      'Simple Past: Yesterday, I _____ (find) a coin.',
      'Verneinung: He _____ (not/like) vegetables.',
      'Present Progressive: Right now, we _____ (study) English.',
      'Simple Past: Last night, they _____ (catch) a big fish.',
      'Simple Present: My brother _____ (go) to school by bike.',
      'Simple Past Frage: _____ you _____ (see) the film?'
    ];
    for (let i = 1; i <= 8; i++) {
      result += `${i + 17}. ${verbQuestions[i-1]}\n   → ${answers[`verb${i}`] || '(leer)'}\n`;
    }

    result += '\nTEIL 5: Writing (10 Punkte)\n';
    result += '───────────────────────────\n';
    result += `Gewählte Option: ${answers.writingChoice || '(nicht gewählt)'}\n\n`;
    result += 'Text:\n';
    result += '─────────────────────────────────────\n';
    result += (answers.writing || '(leer)') + '\n';
    result += '─────────────────────────────────────\n';

    result += '\n══════════════════════════════════════\n';
    result += 'ENDE DER KLASSENARBEIT\n';
    
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
        <Link href="/leni/englisch" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück</span>
        </Link>

        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold mb-2">Mini-Klassenarbeit</h1>
          <p className="text-gray-500 mb-6">Wie im echten Englisch-Test!</p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6 text-left">
            <h3 className="font-semibold text-indigo-800 mb-3">📋 Aufbau (35 Punkte):</h3>
            <ul className="text-indigo-700 space-y-2">
              <li>• Teil 1: Reading Comprehension (4 Punkte)</li>
              <li>• Teil 2: Zeitformen identifizieren (5 Punkte)</li>
              <li>• Teil 3: Lücken ausfüllen (8 Punkte)</li>
              <li>• Teil 4: Verben einsetzen (8 Punkte)</li>
              <li>• Teil 5: Writing - Brief/Tagebuch (10 Punkte)</li>
            </ul>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg"
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
          <p className="text-gray-500">Kopiere und schick zur Korrektur!</p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 mb-4 max-h-[400px] overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono text-gray-700 leading-relaxed">
            {generateResult()}
          </pre>
        </div>

        <button
          onClick={copyResult}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-3 ${
            copied ? 'bg-emerald-500 text-white' : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Kopiert!' : 'Kopieren'}
        </button>

        <button
          onClick={() => { setStarted(false); setSubmitted(false); setAnswers({}); }}
          className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold"
        >
          🔄 Nochmal machen
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setStarted(false)} className="flex items-center gap-2 text-gray-500">
          <ArrowLeft className="w-5 h-5" />
          <span>Abbrechen</span>
        </button>
        <span className="text-gray-700 font-medium flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Englisch-Test
        </span>
      </div>

      {/* Teil 1: Reading */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 1: Reading Comprehension (4 Punkte)</h3>
        
        <div className="bg-gray-50 p-4 rounded-xl mb-4 text-sm">
          <p className="font-semibold mb-2">The K-POP Concert</p>
          <p>Minji is a famous K-POP singer. She usually performs in Seoul every weekend. Right now, she is singing on stage and her fans are dancing. Yesterday, she visited a school and talked to the students. She loves her job because music makes people happy.</p>
        </div>

        {['What does Minji usually do every weekend?', 'What is Minji doing right now?', 'What did Minji do yesterday?', 'Why does Minji love her job?'].map((q, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">{i + 1}. {q}</p>
            <input
              type="text"
              value={answers[`q${i + 1}`] || ''}
              onChange={(e) => updateAnswer(`q${i + 1}`, e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm"
              placeholder="Deine Antwort..."
            />
          </div>
        ))}
      </div>

      {/* Teil 2: Identify Tenses */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 2: Zeitformen identifizieren (5 Punkte)</h3>
        
        {[
          'The demon hunters always protect the city.',
          'Look! Joon is playing his magic guitar.',
          'Yesterday, we visited the museum.',
          "She doesn't like horror movies.",
          'The students are doing their homework right now.'
        ].map((sentence, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm text-gray-700 mb-2">{i + 5}. "{sentence}"</p>
            <select
              value={answers[`tense${i + 1}`] || ''}
              onChange={(e) => updateAnswer(`tense${i + 1}`, e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm"
            >
              <option value="">-- Wähle die Zeitform --</option>
              <option value="Simple Present">Simple Present</option>
              <option value="Present Progressive">Present Progressive</option>
              <option value="Simple Past">Simple Past</option>
            </select>
          </div>
        ))}
      </div>

      {/* Teil 3: Fill in blanks */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 3: Lücken ausfüllen (8 Punkte)</h3>
        
        {[
          'My sister usually _____ (watch) TV in the evening.',
          'Look! The dog _____ (run) in the park.',
          'Last week, I _____ (see) a great film.',
          'They _____ (not/play) football yesterday.',
          '_____ you _____ (do) your homework right now?',
          'She _____ (be) very happy yesterday.',
          'We always _____ (go) to school by bus.',
          '_____ Mike _____ (like) pizza?'
        ].map((q, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm text-gray-700 mb-2">{i + 10}. {q}</p>
            <input
              type="text"
              value={answers[`fill${i + 10}`] || ''}
              onChange={(e) => updateAnswer(`fill${i + 10}`, e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm"
              placeholder="Deine Antwort..."
            />
          </div>
        ))}
      </div>

      {/* Teil 4: Verben */}
      <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 4: Verben einsetzen (8 Punkte)</h3>
        
        {[
          'Simple Present: She _____ (play) tennis every Saturday.',
          'Present Progressive: Look! They _____ (dance) in the street.',
          'Simple Past: Yesterday, I _____ (find) a coin.',
          'Verneinung: He _____ (not/like) vegetables.',
          'Present Progressive: Right now, we _____ (study) English.',
          'Simple Past: Last night, they _____ (catch) a big fish.',
          'Simple Present: My brother _____ (go) to school by bike.',
          'Simple Past Frage: _____ you _____ (see) the film?'
        ].map((q, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm text-gray-700 mb-2">{i + 18}. {q}</p>
            <input
              type="text"
              value={answers[`verb${i + 1}`] || ''}
              onChange={(e) => updateAnswer(`verb${i + 1}`, e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm"
              placeholder="Deine Antwort..."
            />
          </div>
        ))}
      </div>

      {/* Teil 5: Writing */}
      <div className="bg-white rounded-2xl p-5 mb-6 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">Teil 5: Writing (10 Punkte)</h3>
        
        <div className="bg-yellow-50 p-3 rounded-xl mb-4 text-sm border border-yellow-200">
          <p><strong>Option A:</strong> Brief an Freund über deinen gestrigen Tag</p>
          <p><strong>Option B:</strong> Tagebucheintrag über heute</p>
          <p className="mt-2 text-yellow-700">→ Nutze alle 3 Zeitformen! (8-10 Sätze)</p>
        </div>

        <select
          value={answers.writingChoice || ''}
          onChange={(e) => updateAnswer('writingChoice', e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm mb-3"
        >
          <option value="">-- Wähle Option A oder B --</option>
          <option value="Option A: Brief">Option A: Brief</option>
          <option value="Option B: Tagebuch">Option B: Tagebucheintrag</option>
        </select>

        <textarea
          value={answers.writing || ''}
          onChange={(e) => updateAnswer('writing', e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm min-h-[200px]"
          placeholder="Schreibe hier deinen Text (8-10 Sätze)..."
        />
      </div>

      <button
        onClick={() => setSubmitted(true)}
        className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg"
      >
        📋 Antworten abgeben
      </button>
    </div>
  );
}
