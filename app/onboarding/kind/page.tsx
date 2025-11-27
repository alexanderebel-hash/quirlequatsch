'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '../OnboardingContext';
import { ArrowLeft, ArrowRight, User, Calendar, GraduationCap } from 'lucide-react';

export default function KindPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.childName.trim()) newErrors.childName = 'Bitte gib den Namen deines Kindes ein';
    if (!data.childAge) newErrors.childAge = 'Bitte gib das Alter an';
    else if (data.childAge < 5 || data.childAge > 18) newErrors.childAge = 'Das Alter muss zwischen 5 und 18 liegen';
    if (!data.childGrade) newErrors.childGrade = 'Bitte wähle die Klassenstufe';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) router.push('/onboarding/lernprofil');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">👧👦</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Über dein Kind</h2>
        <p className="text-gray-500">Erzähl uns ein bisschen über dein Kind.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name deines Kindes</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={data.childName}
              onChange={(e) => updateData({ childName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.childName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-indigo-500'}`}
              placeholder="z.B. Leon"
            />
          </div>
          {errors.childName && <p className="text-red-500 text-sm mt-1">{errors.childName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Alter</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              min={5}
              max={18}
              value={data.childAge || ''}
              onChange={(e) => updateData({ childAge: parseInt(e.target.value) || null })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.childAge ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-indigo-500'}`}
              placeholder="z.B. 10"
            />
          </div>
          {errors.childAge && <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Klassenstufe</label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={data.childGrade || ''}
              onChange={(e) => updateData({ childGrade: parseInt(e.target.value) || null })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors appearance-none bg-white ${errors.childGrade ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-indigo-500'}`}
            >
              <option value="">Klasse wählen...</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(grade => (
                <option key={grade} value={grade}>{grade}. Klasse</option>
              ))}
            </select>
          </div>
          {errors.childGrade && <p className="text-red-500 text-sm mt-1">{errors.childGrade}</p>}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button onClick={() => router.push('/onboarding/eltern')} className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Zurück
        </button>
        <button onClick={handleNext} className="flex-1 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
          Weiter <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
