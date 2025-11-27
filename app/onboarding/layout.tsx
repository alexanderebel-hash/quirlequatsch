'use client';

import { usePathname } from 'next/navigation';
import { OnboardingProvider } from './OnboardingContext';

const steps = [
  { path: '/onboarding/eltern', label: 'Eltern', number: 1 },
  { path: '/onboarding/kind', label: 'Kind', number: 2 },
  { path: '/onboarding/lernprofil', label: 'Lernprofil', number: 3 },
  { path: '/onboarding/mascot', label: 'Begleiter', number: 4 },
  { path: '/onboarding/fertig', label: 'Fertig', number: 5 },
];

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentStep = steps.findIndex(s => s.path === pathname) + 1;
  const progress = (currentStep / steps.length) * 100;

  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">🎯 LernBoost Setup</h1>
            <p className="text-white/80 text-sm">Schritt {currentStep} von {steps.length}</p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.path} className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${index + 1 <= currentStep 
                    ? 'bg-white text-indigo-600' 
                    : 'bg-white/30 text-white'
                  }
                `}>
                  {index + 1 < currentStep ? '✓' : step.number}
                </div>
                <span className={`text-xs mt-1 ${index + 1 <= currentStep ? 'text-white' : 'text-white/60'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
}
