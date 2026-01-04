'use client';

import Link from 'next/link';
import { useState } from 'react';

const numbers = [
  { num: 10, french: 'dix' },
  { num: 11, french: 'onze' },
  { num: 12, french: 'douze' },
  { num: 13, french: 'treize' },
  { num: 14, french: 'quatorze' },
  { num: 15, french: 'quinze' },
  { num: 16, french: 'seize' },
  { num: 17, french: 'dix-sept' },
  { num: 18, french: 'dix-huit' },
  { num: 19, french: 'dix-neuf' },
  { num: 20, french: 'vingt' },
];

const months = [
  { german: 'Januar', french: 'janvier' },
  { german: 'Februar', french: 'février' },
  { german: 'März', french: 'mars' },
  { german: 'April', french: 'avril' },
  { german: 'Mai', french: 'mai' },
  { german: 'Juni', french: 'juin' },
  { german: 'Juli', french: 'juillet' },
  { german: 'August', french: 'août' },
  { german: 'September', french: 'septembre' },
  { german: 'Oktober', french: 'octobre' },
  { german: 'November', french: 'novembre' },
  { german: 'Dezember', french: 'décembre' },
];

const pets = [
  { german: 'Katze', french: 'un chat', emoji: '🐱' },
  { german: 'Hund', french: 'un chien', emoji: '🐶' },
  { german: 'Kaninchen', french: 'un lapin', emoji: '🐰' },
  { german: 'Hamster', french: 'un hamster', emoji: '🐹' },
  { german: 'Pferd', french: 'un cheval', emoji: '🐴' },
  { german: 'Fisch', french: 'un poisson', emoji: '🐠' },
];

type Category = 'numbers' | 'months' | 'pets';

export default function VokabelnPage() {
  const [category, setCategory] = useState<Category>('numbers');
  const [showTranslations, setShowTranslations] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-24">
      {/* Header */}
      <div className="bg-purple-600 text-white px-4 py-4">
        <Link href="/leni/franzoesisch/interview" className="text-purple-200 text-sm">← Zurück</Link>
        <h1 className="text-xl font-bold mt-2">📚 Vokabeln</h1>
        <p className="text-purple-200 text-sm">Zahlen, Monate & Haustiere</p>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-4">
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setCategory('numbers')}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              category === 'numbers'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🔢 Zahlen
          </button>
          <button
            onClick={() => setCategory('months')}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              category === 'months'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            📅 Monate
          </button>
          <button
            onClick={() => setCategory('pets')}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              category === 'pets'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🐾 Tiere
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="px-4 mb-4">
        <button
          onClick={() => setShowTranslations(!showTranslations)}
          className="w-full py-2 bg-yellow-100 text-yellow-800 rounded-xl font-medium"
        >
          {showTranslations ? '👁️ Übersetzung ausblenden' : '👁️ Übersetzung anzeigen'}
        </button>
      </div>

      {/* Content */}
      <div className="px-4">
        {/* Numbers */}
        {category === 'numbers' && (
          <>
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Zahlen 10-20</h3>
              <div className="space-y-2">
                {numbers.map((item) => (
                  <div
                    key={item.num}
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.num}
                      </div>
                      <span className="text-lg font-semibold text-purple-900">
                        {item.french}
                      </span>
                    </div>
                    {!showTranslations && (
                      <span className="text-gray-400 text-sm">Tippe zum Anzeigen</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue-800 mb-2">💡 Wichtig für die Prüfung:</p>
              <p className="text-blue-700 text-sm">
                • "J'ai treize ans" = Ich bin 13 (wörtlich: Ich habe 13 Jahre)<br />
                • Im Französischen HAT man sein Alter, man IST es nicht!
              </p>
            </div>
          </>
        )}

        {/* Months */}
        {category === 'months' && (
          <>
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Die 12 Monate</h3>
              <div className="grid grid-cols-2 gap-2">
                {months.map((item, index) => (
                  <div
                    key={item.german}
                    className="p-3 bg-purple-50 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold text-purple-900">
                        {item.french}
                      </span>
                    </div>
                    {showTranslations && (
                      <span className="text-sm text-gray-600 ml-8">{item.german}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue-800 mb-2">💡 Wichtig für die Prüfung:</p>
              <p className="text-blue-700 text-sm">
                • "Mon anniversaire, c'est le quinze octobre" = Mein Geburtstag ist am 15. Oktober<br />
                • Monate schreibt man klein!<br />
                • "le premier janvier" = der 1. Januar (Ausnahme!)
              </p>
            </div>
          </>
        )}

        {/* Pets */}
        {category === 'pets' && (
          <>
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Haustiere</h3>
              <div className="space-y-2">
                {pets.map((item) => (
                  <div
                    key={item.german}
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <p className="text-lg font-semibold text-purple-900">
                          {item.french}
                        </p>
                        {showTranslations && (
                          <p className="text-sm text-gray-600">{item.german}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="font-semibold text-blue-800 mb-2">💡 Wichtig für die Prüfung:</p>
              <p className="text-blue-700 text-sm">
                • "J'ai un chat" = Ich habe eine Katze<br />
                • "Je n'ai pas d'animaux" = Ich habe keine Haustiere<br />
                • "Il/Elle s'appelle..." = Er/Sie heißt...
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 mb-2">✅ Beispiel-Dialog:</p>
              <p className="text-green-700 text-sm">
                <span className="font-semibold">Partner:</span> "Tu as un chien?"<br />
                <span className="font-semibold">Du:</span> "Oui, j'ai un chien. Il s'appelle Bello."
              </p>
            </div>
          </>
        )}

        {/* Butterfly Tip */}
        <div className="bg-purple-100 rounded-xl p-4 mt-4 flex items-start gap-3">
          <span className="text-xl">🦋</span>
          <p className="text-purple-800 text-sm">
            "Leni, lerne die Vokabeln, die du für DEINE Prüfung brauchst: 
            Dein Alter, deinen Geburtstag, deine Haustiere!"
          </p>
        </div>
      </div>
    </div>
  );
}
