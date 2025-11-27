'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '../OnboardingContext';
import { supabase } from '../../../lib/supabase/client';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const mascotQuestions = [
  { id: 'element', text: 'Welche Superkraft hätte dein Begleiter?', field: 'mascotElement' as const, options: [
    { value: 'fire', label: 'Feuer - mutig und stark', icon: '🔥' },
    { value: 'water', label: 'Wasser - ruhig und clever', icon: '💧' },
    { value: 'lightning', label: 'Blitz - schnell', icon: '⚡' },
    { value: 'nature', label: 'Natur - freundlich', icon: '🌿' },
    { value: 'magic', label: 'Magie - kreativ', icon: '✨' },
    { value: 'moon', label: 'Mond - weise', icon: '🌙' },
  ]},
  { id: 'size', text: 'Wie groß ist dein Begleiter?', field: 'mascotSize' as const, options: [
    { value: 'tiny', label: 'Klein (Hosentasche)', icon: '🐁' },
    { value: 'medium', label: 'Mittel (wie ein Hund)', icon: '🐕' },
    { value: 'large', label: 'Groß (wie du)', icon: '🦁' },
    { value: 'giant', label: 'Riesig', icon: '🐉' },
  ]},
  { id: 'personality', text: 'Wie ist dein Begleiter drauf?', field: 'mascotPersonality' as const, options: [
    { value: 'funny', label: 'Lustig', icon: '😄' },
    { value: 'cuddly', label: 'Kuschelig', icon: '🤗' },
    { value: 'brave', label: 'Mutig', icon: '🦸' },
    { value: 'smart', label: 'Schlau', icon: '🤓' },
    { value: 'chill', label: 'Chillig', icon: '😴' },
    { value: 'mischievous', label: 'Frech', icon: '🎭' },
  ]},
  { id: 'special', text: 'Was macht ihn einzigartig?', field: 'mascotSpecialFeature' as const, options: [
    { value: 'crown', label: 'Trägt eine Krone', icon: '👑' },
    { value: 'wings', label: 'Hat Flügel', icon: '🦋' },
    { value: 'sparkle', label: 'Glitzert', icon: '✨' },
    { value: 'accessory', label: 'Accessoire', icon: '🎀' },
    { value: 'color_change', label: 'Wechselt Farbe', icon: '🌈' },
    { value: 'magic_eyes', label: 'Magische Augen', icon: '🔮' },
  ]},
];

export default function MascotPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const question = mascotQuestions[currentQuestion];
  const showNameInput = currentQuestion === mascotQuestions.length;

  const handleSelect = (value: string) => {
    updateData({ [question.field]: value });
  };

  const saveToSupabase = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const { data: familyData, error: familyError } = (await supabase.from('families').insert({ email: data.email, parent_name: data.parentName } as any).select().single()) as any;
      if (familyError) throw familyError;
      const { data: childData, error: childError } = (await supabase.from('children').insert({ family_id: familyData?.id, name: data.childName, age: data.childAge, grade: data.childGrade } as any).select().single()) as any;
      if (childError) throw childError;
      await supabase.from('learning_profiles').insert({
        child_id: childData?.id,
        favorite_activities: data.favoriteActivities,
        motivation_type: data.motivationType,
        problem_solving_style: data.problemSolvingStyle,
        processing_preference: data.processingPreference,
        social_preference: data.socialPreference,
        favorite_subjects: data.favoriteSubjects,
        attention_span: data.attentionSpan,
        feedback_need: data.feedbackNeed,
        challenge_preference: data.challengePreference,
        preferred_activity_types: data.preferredActivityTypes,
      } as any);
      await supabase.from('mascots').insert({
        child_id: childData?.id,
        name: data.mascotName,
        element: data.mascotElement,
        size: data.mascotSize,
        personality: data.mascotPersonality,
        special_feature: data.mascotSpecialFeature,
        custom_detail: data.mascotCustomDetail,
      } as any);
      updateData({ familyId: familyData?.id, childId: childData?.id });
      router.push('/onboarding/fertig');
    } catch (err: any) {
      setError(err.message || 'Fehler beim Speichern');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (showNameInput) {
      saveToSupabase();
    } else if (currentQuestion === mascotQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  if (showNameInput) {
    return (
      <div>
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎨</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fast fertig!</h2>
          <p className="text-gray-500">Gib deinem Begleiter einen Namen.</p>
        </div>
        <div className="space-y-5 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name deines Begleiters</label>
            <input type="text" value={data.mascotName} onChange={(e) => updateData({ mascotName: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg" placeholder="z.B. Blitzi, Luna..." maxLength={20} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Noch etwas Besonderes? (optional)</label>
            <input type="text" value={data.mascotCustomDetail} onChange={(e) => updateData({ mascotCustomDetail: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none" placeholder="z.B. liebt Pizza..." maxLength={100} />
          </div>
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-4">{error}</div>}
        <div className="flex gap-3">
          <button onClick={() => setCurrentQuestion(prev => prev - 1)} disabled={isSubmitting} className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Zurück
          </button>
          <button onClick={handleNext} disabled={!data.mascotName.trim() || isSubmitting} className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${data.mascotName.trim() && !isSubmitting ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Speichern...</> : <>Fertigstellen <ArrowRight className="w-5 h-5" /></>}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{question.options[0]?.icon}</div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">{question.text}</h2>
        <p className="text-gray-500 text-sm">Frage {currentQuestion + 1} von {mascotQuestions.length + 1}</p>
      </div>
      <div className="flex gap-1 mb-6">
        {[...mascotQuestions, { id: 'name' }].map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= currentQuestion ? 'bg-purple-500' : 'bg-gray-200'}`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {question.options.map((option) => (
          <button key={option.value} onClick={() => handleSelect(option.value)} className={`p-4 rounded-xl text-center transition-all ${data[question.field] === option.value ? 'bg-purple-100 border-2 border-purple-500' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}>
            <span className="text-3xl block mb-2">{option.icon}</span>
            <span className="text-sm font-medium text-gray-700">{option.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={() => currentQuestion === 0 ? router.push('/onboarding/lernprofil') : setCurrentQuestion(prev => prev - 1)} className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Zurück
        </button>
        <button onClick={handleNext} disabled={!data[question.field]} className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${data[question.field] ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
          Weiter <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
