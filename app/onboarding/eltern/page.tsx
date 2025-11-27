'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '../OnboardingContext';
import { Mail, User, ArrowRight } from 'lucide-react';

export default function ElternPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.parentName.trim()) newErrors.parentName = 'Bitte gib deinen Namen ein';
    if (!data.email.trim()) newErrors.email = 'Bitte gib deine E-Mail ein';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Bitte gib eine gültige E-Mail ein';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) router.push('/onboarding/kind');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">👋</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Willkommen bei LernBoost!</h2>
        <p className="text-gray-500">Zuerst ein paar Infos über dich als Elternteil.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dein Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={data.parentName}
              onChange={(e) => updateData({ parentName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.parentName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-indigo-500'}`}
              placeholder="z.B. Anna Müller"
            />
          </div>
          {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Deine E-Mail-Adresse</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-indigo-500'}`}
              placeholder="deine@email.de"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="text-indigo-800 text-sm">🔒 Deine Daten sind sicher. Wir verwenden sie nur, um LernBoost für dein Kind zu personalisieren.</p>
        </div>
      </div>

      <button onClick={handleNext} className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
        Weiter <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
