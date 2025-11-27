'use client';

import Link from 'next/link';
import { useOnboarding } from '../OnboardingContext';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PartyPopper, Sparkles, ArrowRight } from 'lucide-react';

export default function FertigPage() {
  const { data } = useOnboarding();

  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="text-center">
      <div className="text-7xl mb-6">
        <PartyPopper className="w-20 h-20 mx-auto text-yellow-500" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Willkommen, {data.childName}! 🎉
      </h2>
      
      <p className="text-gray-500 mb-8">
        Dein persönlicher Lernbegleiter <strong>{data.mascotName}</strong> ist bereit!
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Sparkles className="w-8 h-8 text-purple-500" />
          <span className="text-4xl">
            {data.mascotElement === 'fire' && '🔥'}
            {data.mascotElement === 'water' && '💧'}
            {data.mascotElement === 'lightning' && '⚡'}
            {data.mascotElement === 'nature' && '🌿'}
            {data.mascotElement === 'magic' && '✨'}
            {data.mascotElement === 'moon' && '🌙'}
          </span>
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
        <h3 className="text-xl font-bold text-purple-800 mb-2">{data.mascotName}</h3>
        <p className="text-purple-700 text-sm">
          Dein {data.mascotPersonality === 'funny' && 'lustiger'}
          {data.mascotPersonality === 'cuddly' && 'kuscheliger'}
          {data.mascotPersonality === 'brave' && 'mutiger'}
          {data.mascotPersonality === 'smart' && 'schlauer'}
          {data.mascotPersonality === 'chill' && 'entspannter'}
          {data.mascotPersonality === 'mischievous' && 'frecher'} Begleiter
        </p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
        <p className="text-emerald-800 text-sm">
          ✅ Profil gespeichert! LernBoost wird jetzt perfekt auf {data.childName} abgestimmt.
        </p>
      </div>

      <div className="space-y-3">
        <Link href={`/${data.childName.toLowerCase()}`}>
          <button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
            Los geht's! <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
        
        <Link href="/">
          <button className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-medium">
            Zur Startseite
          </button>
        </Link>
      </div>

      <p className="text-gray-400 text-xs mt-6">
        Family ID: {data.familyId?.slice(0, 8)}... | Child ID: {data.childId?.slice(0, 8)}...
      </p>
    </div>
  );
}
