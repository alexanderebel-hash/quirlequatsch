'use client';

import Link from 'next/link';
import { Sparkles, Star, Heart } from 'lucide-react';

export default function LillyHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4">
      {/* Magischer Header */}
      <div className="text-center mb-6">
        <span className="text-6xl md:text-7xl lg:text-8xl block mb-2">🦄</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 mb-1">
          Hallo Lilly! ✨
        </h1>
        <p className="text-pink-400 text-lg">
          Bereit für ein bisschen Magie? 🌈
        </p>
      </div>

      {/* Sterne-Anzeige */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-yellow-100 rounded-full px-4 py-2 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-400" />
          <span className="font-bold text-yellow-600 text-lg">24 Sterne</span>
        </div>
        <div className="bg-pink-100 rounded-full px-4 py-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500 fill-pink-400" />
          <span className="font-bold text-pink-600 text-lg">3 Herzen</span>
        </div>
      </div>

      {/* Magische Motivation */}
      <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-3xl p-5 md:p-6 mb-6 text-center border-2 border-pink-300">
        <p className="text-lg md:text-xl text-purple-700 font-medium">
          🌟 Du bist toll! Jeder Stern bringt dich weiter! 🌟
        </p>
      </div>

      {/* Große, freundliche Buttons */}
      <div className="space-y-4">
        <Link href="/lilly/uebungen">
          <div className="bg-gradient-to-r from-pink-400 to-rose-500 rounded-3xl p-6 md:p-8 text-white text-center shadow-lg active:scale-[0.98] transition-transform">
            <span className="text-4xl md:text-5xl block mb-2">🎮</span>
            <p className="font-bold text-xl md:text-2xl">Spielen & Lernen</p>
            <p className="text-pink-100 text-sm md:text-base">Sammle Sterne! ⭐</p>
          </div>
        </Link>

        <Link href="/lilly/lernen">
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-3xl p-6 md:p-8 text-white text-center shadow-lg active:scale-[0.98] transition-transform">
            <span className="text-4xl md:text-5xl block mb-2">📚</span>
            <p className="font-bold text-xl md:text-2xl">Neues Entdecken</p>
            <p className="text-purple-100 text-sm md:text-base">Spannende Themen 🔮</p>
          </div>
        </Link>

        <Link href="/lilly/test">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 md:p-8 text-white text-center shadow-lg active:scale-[0.98] transition-transform">
            <span className="text-4xl md:text-5xl block mb-2">🏆</span>
            <p className="font-bold text-xl md:text-2xl">Quiz-Zeit!</p>
            <p className="text-yellow-100 text-sm md:text-base">Zeig was du kannst! 💪</p>
          </div>
        </Link>
      </div>

      {/* Fortschritt */}
      <div className="mt-6 bg-white rounded-3xl p-5 shadow-sm border-2 border-pink-200">
        <div className="flex items-center justify-between mb-3">
          <p className="font-bold text-gray-700 text-lg">Deine Reise 🗺️</p>
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className={`w-6 h-6 ${i <= 3 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <div className="h-4 bg-pink-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-[60%]" />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">Du bist super! Weiter so! 🌈</p>
      </div>
    </div>
  );
}
