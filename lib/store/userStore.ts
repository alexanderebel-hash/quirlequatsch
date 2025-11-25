import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState, UserProgress } from '../data/types';

interface UserStore extends UserState {
  // Actions
  addXP: (amount: number) => void;
  markSectionRead: (themaId: string, sectionId: string) => void;
  completeExercise: (themaId: string, exerciseId: string, score: number) => void;
  recordTestResult: (themaId: string, score: number) => void;
  updateStreak: () => void;
  resetProgress: () => void;
}

const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 200) + 1;
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isYesterday = (date: Date): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      name: 'Capitano',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date(),
      themenProgress: {},
      achievements: [],

      addXP: (amount: number) => {
        set((state) => {
          const newXP = state.xp + amount;
          const newLevel = calculateLevel(newXP);
          return {
            xp: newXP,
            level: newLevel,
          };
        });
      },

      markSectionRead: (themaId: string, sectionId: string) => {
        set((state) => {
          const themaProgress = state.themenProgress[themaId] || {
            themaId,
            sectionsRead: [],
            exercisesCompleted: [],
            bestTestScore: 0,
            testAttempts: 0,
          };

          if (!themaProgress.sectionsRead.includes(sectionId)) {
            return {
              themenProgress: {
                ...state.themenProgress,
                [themaId]: {
                  ...themaProgress,
                  sectionsRead: [...themaProgress.sectionsRead, sectionId],
                  lastAccessed: new Date(),
                },
              },
              xp: state.xp + 5, // +5 XP for reading a section
              level: calculateLevel(state.xp + 5),
            };
          }
          return state;
        });
      },

      completeExercise: (themaId: string, exerciseId: string, score: number) => {
        set((state) => {
          const themaProgress = state.themenProgress[themaId] || {
            themaId,
            sectionsRead: [],
            exercisesCompleted: [],
            bestTestScore: 0,
            testAttempts: 0,
          };

          const alreadyCompleted = themaProgress.exercisesCompleted.includes(exerciseId);

          return {
            themenProgress: {
              ...state.themenProgress,
              [themaId]: {
                ...themaProgress,
                exercisesCompleted: alreadyCompleted
                  ? themaProgress.exercisesCompleted
                  : [...themaProgress.exercisesCompleted, exerciseId],
                lastAccessed: new Date(),
              },
            },
            xp: alreadyCompleted ? state.xp : state.xp + score,
            level: calculateLevel(alreadyCompleted ? state.xp : state.xp + score),
          };
        });
      },

      recordTestResult: (themaId: string, score: number) => {
        set((state) => {
          const themaProgress = state.themenProgress[themaId] || {
            themaId,
            sectionsRead: [],
            exercisesCompleted: [],
            bestTestScore: 0,
            testAttempts: 0,
          };

          const isNewBest = score > themaProgress.bestTestScore;
          const xpReward = isNewBest ? 50 : 25;

          return {
            themenProgress: {
              ...state.themenProgress,
              [themaId]: {
                ...themaProgress,
                bestTestScore: Math.max(score, themaProgress.bestTestScore),
                testAttempts: themaProgress.testAttempts + 1,
                lastAccessed: new Date(),
              },
            },
            xp: state.xp + xpReward,
            level: calculateLevel(state.xp + xpReward),
          };
        });
      },

      updateStreak: () => {
        set((state) => {
          const lastActive = new Date(state.lastActive);

          if (isToday(lastActive)) {
            // Already active today, no change
            return state;
          } else if (isYesterday(lastActive)) {
            // Streak continues
            return {
              streak: state.streak + 1,
              lastActive: new Date(),
              xp: state.xp + 25, // Streak bonus
              level: calculateLevel(state.xp + 25),
            };
          } else {
            // Streak broken
            return {
              streak: 1,
              lastActive: new Date(),
            };
          }
        });
      },

      resetProgress: () => {
        set({
          xp: 0,
          level: 1,
          streak: 0,
          lastActive: new Date(),
          themenProgress: {},
          achievements: [],
        });
      },
    }),
    {
      name: 'capitano-user-storage',
    }
  )
);
