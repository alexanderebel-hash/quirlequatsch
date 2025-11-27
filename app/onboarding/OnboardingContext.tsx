'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingData {
  parentName: string;
  email: string;
  childName: string;
  childAge: number | null;
  childGrade: number | null;
  favoriteActivities: string[];
  motivationType: string;
  problemSolvingStyle: string;
  processingPreference: string;
  socialPreference: string;
  favoriteSubjects: string[];
  attentionSpan: string;
  feedbackNeed: string;
  challengePreference: string;
  preferredActivityTypes: string[];
  personalDetails: string;
  mascotName: string;
  mascotElement: string;
  mascotSize: string;
  mascotPersonality: string;
  mascotSpecialFeature: string;
  mascotCustomDetail: string;
  familyId: string | null;
  childId: string | null;
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  resetData: () => void;
}

const defaultData: OnboardingData = {
  parentName: '',
  email: '',
  childName: '',
  childAge: null,
  childGrade: null,
  favoriteActivities: [],
  motivationType: '',
  problemSolvingStyle: '',
  processingPreference: '',
  socialPreference: '',
  favoriteSubjects: [],
  attentionSpan: '',
  feedbackNeed: '',
  challengePreference: '',
  preferredActivityTypes: [],
  personalDetails: '',
  mascotName: '',
  mascotElement: '',
  mascotSize: '',
  mascotPersonality: '',
  mascotSpecialFeature: '',
  mascotCustomDetail: '',
  familyId: null,
  childId: null,
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const resetData = () => {
    setData(defaultData);
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
}
