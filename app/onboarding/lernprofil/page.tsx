'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '../OnboardingContext';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  subtitle: string;
  type: 'single' | 'multiple';
  maxSelections?: number;
  options: { value: string; label: string; icon?: string }[];
  field: keyof ReturnType<typeof useOnboarding>['data'];
}

const questions: Question[] = [
  { id: 'q1', text: 'Lieblingsbeschäftigungen', subtitle: 'Was macht dein Kind am liebsten? (bis zu 3)', type: 'multiple', maxSelections: 3, field: 'favoriteActivities', options: [
    { value: 'reading', label: 'Lesen, Geschichten, Wortspiele', icon: '📚' },
    { value: 'math_puzzles', label: 'Rechnen, Rätsel, Experimente', icon: '🧮' },
    { value: 'creative', label: 'Malen, Zeichnen, Basteln', icon: '🎨' },
    { value: 'music', label: 'Musik, Singen, Instrumente', icon: '🎵' },
    { value: 'sports', label: 'Sport, Tanzen, Bewegung', icon: '⚽' },
    { value: 'social', label: 'Mit Freunden spielen', icon: '👫' },
    { value: 'reflection', label: 'Allein nachdenken', icon: '💭' },
    { value: 'nature', label: 'Natur, Tiere, draußen', icon: '🌿' },
    { value: 'philosophy', label: 'Große Fragen stellen', icon: '🤔' },
  ]},
  { id: 'q2', text: 'Motivations-Typ', subtitle: 'Was motiviert dein Kind beim Lernen?', type: 'single', field: 'motivationType', options: [
    { value: 'autonomy', label: 'Selbst entscheiden, WIE es lernt', icon: '🎯' },
    { value: 'mastery', label: 'Merken, dass es besser wird', icon: '📈' },
    { value: 'social', label: 'Mit anderen zusammen lernen', icon: '👥' },
    { value: 'rewards', label: 'Belohnungen (Sterne, XP)', icon: '⭐' },
  ]},
  { id: 'q3', text: 'Problemlösungs-Strategie', subtitle: 'Wie geht dein Kind an neue Aufgaben heran?', type: 'single', field: 'problemSolvingStyle', options: [
    { value: 'hands_on', label: 'Sofort ausprobieren', icon: '🔧' },
    { value: 'reflective', label: 'Erst nachdenken und planen', icon: '🧠' },
    { value: 'social', label: 'Andere um Rat fragen', icon: '💬' },
    { value: 'analytical', label: 'Muster und Logik suchen', icon: '🔍' },
  ]},
  { id: 'q4', text: 'Verarbeitungs-Präferenz', subtitle: 'Womit merkt sich dein Kind Dinge am besten?', type: 'single', field: 'processingPreference', options: [
    { value: 'multimodal', label: 'Verschiedene Arten (Video+Text)', icon: '📺' },
    { value: 'real_world', label: 'Echte Beispiele aus dem Alltag', icon: '🏠' },
    { value: 'storytelling', label: 'Geschichten und Metaphern', icon: '📖' },
    { value: 'creative', label: 'Selbst etwas erstellen', icon: '🏗️' },
  ]},
  { id: 'q5', text: 'Soziale Lern-Präferenz', subtitle: 'Wie lernt dein Kind am liebsten?', type: 'single', field: 'socialPreference', options: [
    { value: 'alone', label: 'Ganz alleine in Ruhe', icon: '🧘' },
    { value: 'pair', label: 'Mit einem guten Freund', icon: '👯' },
    { value: 'small_group', label: 'In kleiner Gruppe (3-5)', icon: '👨‍👩‍👧‍👦' },
    { value: 'mixed', label: 'Wechselnd: mal allein, mal zusammen', icon: '🔄' },
  ]},
  { id: 'q6', text: 'Lieblings-Schulfächer', subtitle: 'Was interessiert dein Kind? (bis zu 3)', type: 'multiple', maxSelections: 3, field: 'favoriteSubjects', options: [
    { value: 'languages', label: 'Sprachen, Deutsch', icon: '📝' },
    { value: 'math_science', label: 'Mathe, Naturwissenschaften', icon: '🔬' },
    { value: 'art', label: 'Kunst, Werken, Gestalten', icon: '🎭' },
    { value: 'music', label: 'Musik', icon: '🎹' },
    { value: 'sports', label: 'Sport', icon: '🏃' },
    { value: 'nature', label: 'Sachkunde, Natur', icon: '🐾' },
    { value: 'diverse', label: 'Ganz unterschiedlich', icon: '🌈' },
  ]},
  { id: 'q7', text: 'Aufmerksamkeits-Zeitfenster', subtitle: 'Wie lange kann sich dein Kind konzentrieren?', type: 'single', field: 'attentionSpan', options: [
    { value: '5_10_min', label: '5-10 Min, dann Abwechslung', icon: '⚡' },
    { value: '15_20_min', label: '15-20 Minuten am Stück', icon: '⏱️' },
    { value: '30_plus_min', label: '30+ Min wenn interessant', icon: '🎯' },
    { value: 'variable', label: 'Sehr unterschiedlich', icon: '🔄' },
  ]},
  { id: 'q8', text: 'Feedback-Bedürfnis', subtitle: 'Wie wichtig ist Rückmeldung?', type: 'single', field: 'feedbackNeed', options: [
    { value: 'frequent', label: 'Braucht sehr oft Bestätigung', icon: '✅' },
    { value: 'occasional', label: 'Gelegentlich reicht', icon: '👍' },
    { value: 'self_check', label: 'Überprüft lieber selbst', icon: '🔎' },
    { value: 'improvement_focused', label: 'Will wissen WIE es besser geht', icon: '📊' },
  ]},
  { id: 'q9', text: 'Herausforderungs-Level', subtitle: 'Welche Aufgaben bevorzugt dein Kind?', type: 'single', field: 'challengePreference', options: [
    { value: 'easy', label: 'Eher leichtere mit vielen Erfolgen', icon: '😊' },
    { value: 'medium', label: 'Mittelschwer', icon: '⚖️' },
    { value: 'hard', label: 'Schwierige Herausforderungen', icon: '🏆' },
    { value: 'variable', label: 'Wechselnd je nach Tagesform', icon: '🎲' },
  ]},
  { id: 'q10', text: 'Lieblings-Aktivitätsformen', subtitle: 'Welche Lernaktivitäten mag dein Kind? (bis zu 3)', type: 'multiple', maxSelections: 3, field: 'preferredActivityTypes', options: [
    { value: 'quiz', label: 'Quizze & Multiple-Choice', icon: '❓' },
    { value: 'writing', label: 'Texte schreiben', icon: '✍️' },
    { value: 'drag_drop', label: 'Drag-and-Drop', icon: '🔀' },
    { value: 'games', label: 'Mini-Spiele & Simulationen', icon: '🎮' },
    { value: 'creative', label: 'Kreative Projekte', icon: '🎨' },
    { value: 'mixed', label: 'Gemischt – viel Abwechslung', icon: '🌟' },
  ]},
];

export default function LernprofilPage() {
  const router = useRouter();
  const { data, updateData } = useOnboarding();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const getCurrentValue = () => {
    const value = data[question.field as keyof typeof data];
    if (question.type === 'multiple') return Array.isArray(value) ? value : [];
    return typeof value === 'string' ? value : '';
  };

  const handleSelect = (value: string) => {
    if (question.type === 'single') {
      updateData({ [question.field]: value });
    } else {
      const current = getCurrentValue() as string[];
      if (current.includes(value)) {
        updateData({ [question.field]: current.filter(v => v !== value) });
      } else if (!question.maxSelections || current.length < question.maxSelections) {
        updateData({ [question.field]: [...current, value] });
      }
    }
  };

  const isSelected = (value: string) => {
    const current = getCurrentValue();
    if (question.type === 'single') return current === value;
    return (current as string[]).includes(value);
  };

  const canProceed = () => {
    const value = getCurrentValue();
    if (question.type === 'single') return !!value;
    return (value as string[]).length > 0;
  };

  const handleNext = () => {
    if (isLastQuestion) {
      router.push('/onboarding/mascot');
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      router.push('/onboarding/kind');
    } else {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full font-bold mb-3">{currentQuestion + 1}</div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">{question.text}</h2>
        <p className="text-gray-500 text-sm">{question.subtitle}</p>
      </div>

      <div className="flex gap-1 mb-6">
        {questions.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= currentQuestion ? 'bg-indigo-500' : 'bg-gray-200'}`} />
        ))}
      </div>

      <div className="space-y-2 mb-6 max-h-[400px] overflow-y-auto">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${isSelected(option.value) ? 'bg-indigo-100 border-2 border-indigo-500 text-indigo-800' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}
          >
            {option.icon && <span className="text-2xl">{option.icon}</span>}
            <span className="font-medium">{option.label}</span>
            {isSelected(option.value) && <span className="ml-auto text-indigo-600">✓</span>}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={handleBack} className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2">
          <ChevronLeft className="w-5 h-5" /> Zurück
        </button>
        <button onClick={handleNext} disabled={!canProceed()} className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${canProceed() ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
          {isLastQuestion ? 'Weiter zum Begleiter' : 'Weiter'} <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
