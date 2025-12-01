# Frontend Developer Instructions: LernBoost (quirlequatsch)

## Tech Stack

### Core Framework
- **Next.js**: 16.0.4 (App Router)
- **React**: 19.2.0 with React Compiler enabled (babel-plugin-react-compiler)
- **TypeScript**: 5.x (Strict mode)
- **Node**: 20+

### Styling
- **Tailwind CSS**: 4.x with custom Apple Design System
- **CSS Custom Properties**: For theming and dynamic values
- **Framer Motion**: 12.23.24 for animations and interactions

### State Management
- **Zustand**: 5.0.8 with persistence middleware
- **React Context**: For onboarding flow state

### UI/UX Libraries
- **lucide-react**: 0.554.0 for icons
- **@dnd-kit**: 6.3.1 for drag & drop interactions
- **canvas-confetti**: 1.9.4 for celebration effects
- **clsx + tailwind-merge**: For conditional class management

### Backend Integration
- **Supabase**: 2.86.0 (PostgreSQL database + Auth)
- **Environment Variables**: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

---

## Apple Design System Implementation

### Typography Scale

The project uses iOS-inspired typography with semantic classes:

```tsx
// Typography Classes (defined in globals.css)
.text-large-title  // 34px/41px, Bold, -0.5px letter-spacing
.text-title1       // 28px/34px, Bold, -0.3px
.text-title2       // 22px/28px, Bold, -0.2px
.text-title3       // 20px/25px, Semibold, -0.1px
.text-headline     // 17px/22px, Semibold
.text-body         // 17px/22px, Regular
.text-callout      // 16px/21px, Regular
.text-subheadline  // 15px/20px, Regular
.text-footnote     // 13px/18px, Regular
.text-caption      // 12px/16px, Regular
.text-caption2     // 11px/13px, Regular
```

### Color System

```tsx
// Primary Colors (Tailwind extended)
primary: '#007AFF'      // iOS Blue
success/hulk: '#34C759' // iOS Green (brand color)
warning: '#FF9500'      // iOS Orange
danger: '#FF3B30'       // iOS Red
purple: '#AF52DE'       // iOS Purple
indigo: '#5856D6'       // iOS Indigo

// CSS Variables (globals.css)
--color-blue: #007AFF
--color-hulk: #34C759
--color-hulk-dark: #28A745
```

### Border Radius Standards

```tsx
rounded-xs:  4px
rounded-sm:  8px
rounded-md:  12px   // Default for cards
rounded-lg:  16px   // Large cards
rounded-xl:  20px   // Buttons, inputs
rounded-2xl: 24px
```

### Shadow System

```tsx
shadow-xs: '0 1px 2px rgba(0, 0, 0, 0.04)'
shadow-sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)'
shadow-md: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)'
shadow-lg: '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)'
```

---

## Component Patterns

### 1. Client Components (Default Pattern)

All interactive components use `'use client'` directive:

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card"
    >
      {/* content */}
    </motion.div>
  );
}
```

### 2. Button Component Pattern (Variant-Based)

```tsx
'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'hulk' | 'success' | 'danger' | 'plain';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`btn-${variant} ${sizes[size]}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
```

### 3. Card Component Pattern

```tsx
interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  elevated?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  padding = 'md', 
  elevated = false,
  className = '',
  onClick 
}: CardProps) {
  return (
    <div 
      className={`
        ${elevated ? 'card-elevated' : 'card'}
        p-${padding}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
```

### 4. Zustand Store Pattern

```tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  // State
  value: number;
  // Actions
  increment: () => void;
  reset: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      value: 0,
      
      increment: () => set((state) => ({ value: state.value + 1 })),
      
      reset: () => set({ value: 0 }),
    }),
    {
      name: 'store-name-storage',
    }
  )
);
```

### 5. Learning Component Pattern (Quiz, Memory, Sorting)

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fireSuccessConfetti } from '@/lib/utils/confetti';
import { useUserStore } from '@/lib/store/userStore';

interface LearningComponentProps {
  items: Item[];
  themaId: string;
  onComplete: (score: number, total: number) => void;
}

export function LearningComponent({ items, themaId, onComplete }: LearningComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { addXP } = useUserStore();
  
  const handleCorrectAnswer = (xp: number) => {
    setScore((prev) => prev + 1);
    addXP(xp);
    fireSuccessConfetti();
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <Progress value={progress} variant="hulk" />
      
      {/* Content with AnimatePresence for transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* learning content */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

---

## Styling Conventions

### 1. CSS Utility Classes (Prefer Tailwind)

```tsx
// ✅ GOOD: Use Tailwind utilities
<div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md">

// ❌ AVOID: Inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### 2. Custom Utility Classes (globals.css)

```tsx
// Pre-defined utility classes for common patterns
<button className="btn-primary">      // Primary blue button
<button className="btn-hulk">         // Brand green button
<div className="card">                // Standard card
<div className="card-elevated">       // Card with elevation
<div className="glass">               // Glassmorphism effect
<p className="text-subheadline">      // iOS subheadline style
```

### 3. Conditional Classes (clsx + tailwind-merge)

```tsx
import { cn } from '@/lib/utils';

// Use cn() helper for conditional classes
<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class',
  className // Allow external className override
)}>
```

### 4. Responsive Design

```tsx
// Mobile-first approach with iOS/iPadOS optimizations
<div className="
  text-body                 // Base (mobile)
  md:text-title3           // Tablet (768px+)
  lg:text-title2           // Desktop (1024px+)
  p-4 md:p-6 lg:p-8        // Responsive spacing
">

// Tablet-specific (defined in globals.css)
@media (min-width: 768px) {
  /* Larger touch targets */
  button { min-height: 48px; }
}

// Landscape optimization
@media (min-width: 768px) and (orientation: landscape) {
  .landscape-grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

## Animation Patterns

### 1. Framer Motion Interactions

```tsx
import { motion } from 'framer-motion';

// Standard button interaction
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>

// Card entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>

// List stagger animation
<motion.div variants={containerVariants}>
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants} />
  ))}
</motion.div>

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### 2. CSS Animations (Pre-defined)

```tsx
// Use pre-defined animation classes
<div className="animate-fade-in-up delay-200">
<div className="animate-fade-in-left delay-300">

// Available delays: .delay-100 through .delay-800
```

### 3. Confetti Celebrations

```tsx
import { fireSuccessConfetti } from '@/lib/utils/confetti';

// Trigger on successful actions
const handleSuccess = () => {
  fireSuccessConfetti();
  // ... other logic
};
```

---

## State Management Conventions

### 1. Zustand for Global State

```tsx
// Use Zustand for app-wide state (user progress, XP, level)
import { useUserStore } from '@/lib/store/userStore';

function Component() {
  const { xp, level, addXP } = useUserStore();
  
  return <div>Level {level} - {xp} XP</div>;
}
```

### 2. Local State for UI

```tsx
// Use useState for component-specific UI state
const [isOpen, setIsOpen] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(0);
```

### 3. React Context for Feature Flows

```tsx
// Use Context for multi-step flows (e.g., onboarding)
// See: app/onboarding/OnboardingContext.tsx
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);
  return (
    <OnboardingContext.Provider value={{ state, setState }}>
      {children}
    </OnboardingContext.Provider>
  );
}
```

---

## API Integration Patterns

### 1. Supabase Client Usage

```tsx
import { supabase } from '@/lib/supabase/client';
import type { Child, LearningProfile } from '@/lib/supabase/types';

// Query data
const { data, error } = await supabase
  .from('children')
  .select('*')
  .eq('family_id', familyId)
  .single();

// Insert data
const { data, error } = await supabase
  .from('learning_profiles')
  .insert({
    child_id: childId,
    favorite_subjects: ['math', 'science'],
    motivation_type: 'intrinsic'
  })
  .select()
  .single();

// Update data
const { data, error } = await supabase
  .from('children')
  .update({ total_xp: newXP })
  .eq('id', childId);
```

### 2. Type Safety

```tsx
// Always use generated TypeScript types
import type { Database } from '@/lib/supabase/types';

type Child = Database['public']['Tables']['children']['Row'];
type ChildInsert = Database['public']['Tables']['children']['Insert'];
type ChildUpdate = Database['public']['Tables']['children']['Update'];
```

### 3. Error Handling

```tsx
'use client';

import { useState } from 'react';

function DataComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('table')
        .select('*');
      
      if (supabaseError) throw supabaseError;
      
      // Handle success
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <div>Lädt...</div>;
  if (error) return <div className="text-danger">{error}</div>;
  
  return <div>Content</div>;
}
```

---

## Accessibility Guidelines

### 1. Focus Management

```tsx
// Focus states are auto-applied via globals.css
*:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}

// Use semantic HTML
<button>Click me</button>  // ✅ GOOD
<div onClick={}>Click</div> // ❌ AVOID
```

### 2. ARIA Labels

```tsx
// Add ARIA labels for screen readers
<button aria-label="Schließen" onClick={onClose}>
  <X className="w-5 h-5" />
</button>

<input
  aria-label="E-Mail Adresse"
  aria-describedby="email-help"
  type="email"
/>
<span id="email-help" className="text-footnote">
  Wir senden dir keine Spam-Mails
</span>
```

### 3. Keyboard Navigation

```tsx
// Ensure all interactive elements are keyboard accessible
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick();
  }
};

<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
```

---

## Performance Best Practices

### 1. React Compiler Optimization

```tsx
// React 19 compiler handles memoization automatically
// No need for useMemo/useCallback in most cases

// ✅ GOOD: Let React Compiler optimize
function Component({ data }) {
  const filtered = data.filter(item => item.active);
  return <List items={filtered} />;
}

// ❌ UNNECESSARY: Manual memoization
function Component({ data }) {
  const filtered = useMemo(() => 
    data.filter(item => item.active), [data]
  );
  return <List items={filtered} />;
}
```

### 2. Image Optimization

```tsx
import Image from 'next/image';

// Use Next.js Image component
<Image
  src="/images/mascot.png"
  alt="Hulk Maskottchen"
  width={200}
  height={200}
  priority={aboveTheFold}
/>
```

### 3. Dynamic Imports

```tsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Lädt...</div>,
  ssr: false
});
```

---

## Do's ✅

1. **Always use `'use client'` for interactive components**
2. **Use Apple Design System typography classes** (text-title1, text-body, etc.)
3. **Use pre-defined color utilities** (bg-primary, text-hulk, etc.)
4. **Wrap buttons with framer-motion** for interactions
5. **Use fireSuccessConfetti()** for positive feedback
6. **Update Zustand store** for XP/progress changes
7. **Use TypeScript types** from lib/supabase/types.ts
8. **Follow mobile-first responsive** design
9. **Use semantic HTML** for accessibility
10. **Test keyboard navigation** for all interactive elements
11. **Use cn() helper** for conditional className merging
12. **Add ARIA labels** for icon-only buttons
13. **Use AnimatePresence** for enter/exit animations
14. **Keep components pure** and let React Compiler optimize
15. **Use Card component** for consistent styling

---

## Don'ts ❌

1. **Don't use inline styles** - use Tailwind utilities
2. **Don't create custom animations** - use framer-motion or pre-defined CSS
3. **Don't manually memoize** - React 19 Compiler handles it
4. **Don't use div for buttons** - use semantic `<button>`
5. **Don't hardcode colors** - use theme variables
6. **Don't forget error boundaries** for async operations
7. **Don't skip loading states** in data fetching
8. **Don't use any type** - properly type all props
9. **Don't nest layouts** deeper than necessary
10. **Don't duplicate Zustand logic** - use store actions
11. **Don't skip alt text** on images
12. **Don't use px units** for responsive design
13. **Don't create one-off components** - reuse existing patterns
14. **Don't skip TypeScript strict checks**
15. **Don't use setTimeout** for animations - use framer-motion

---

## Example: Complete Feature Component

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Progress from '@/components/ui/Progress';
import { fireSuccessConfetti } from '@/lib/utils/confetti';
import { useUserStore } from '@/lib/store/userStore';
import { cn } from '@/lib/utils';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  xp: number;
}

interface QuizProps {
  questions: QuizQuestion[];
  themaId: string;
  onComplete: (score: number) => void;
}

export function Quiz({ questions, themaId, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const { addXP } = useUserStore();

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correct;
    setIsAnswered(true);
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
      addXP(currentQuestion.xp);
      fireSuccessConfetti();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-subheadline">
            Frage {currentIndex + 1} von {questions.length}
          </span>
          <span className="text-subheadline">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} variant="hulk" size="prominent" />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card padding="lg" className="mb-6">
            <h2 className="text-title3 mb-4">{currentQuestion.question}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={!isAnswered ? { scale: 1.01 } : {}}
                  whileTap={!isAnswered ? { scale: 0.99 } : {}}
                  onClick={() => !isAnswered && setSelectedOption(index)}
                  disabled={isAnswered}
                  className={cn(
                    'w-full p-4 rounded-xl border-2 text-left transition-all',
                    'flex items-center justify-between',
                    !isAnswered && selectedOption === index && 'border-primary bg-blue-50',
                    !isAnswered && selectedOption !== index && 'border-gray-200 hover:border-gray-300',
                    isAnswered && index === currentQuestion.correct && 'border-success bg-green-50',
                    isAnswered && selectedOption === index && index !== currentQuestion.correct && 'border-danger bg-red-50',
                    isAnswered && selectedOption !== index && index !== currentQuestion.correct && 'opacity-50'
                  )}
                >
                  <span className="text-body">{option}</span>
                  {isAnswered && (
                    <span>
                      {index === currentQuestion.correct ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : selectedOption === index ? (
                        <X className="w-5 h-5 text-danger" />
                      ) : null}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-3">
        {!isAnswered ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            variant="hulk"
            size="lg"
            fullWidth
          >
            Antwort prüfen
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            variant="primary"
            size="lg"
            fullWidth
            rightIcon={<ChevronRight className="w-5 h-5" />}
          >
            {currentIndex < questions.length - 1 ? 'Nächste Frage' : 'Fertig'}
          </Button>
        )}
      </div>
    </div>
  );
}
```

---

## Project-Specific Context

### App Structure
- **Multi-child support**: Each child (Leni, Lilly, Lenny, Milan) has their own routes
- **Subject organization**: /leni/bio, /leni/englisch, /leni/franzoesisch
- **Activity types**: /lernen (learning), /quiz, /memory, /sortieren (sorting), /test
- **Onboarding flow**: Multi-step wizard in /onboarding

### Key Features
- **XP System**: Users earn XP for completing activities
- **Mascot System**: Custom AI-generated mascots for each child
- **Learning Profiles**: Personalized learning preferences
- **Progress Tracking**: Per-topic progress and achievements
- **Streak System**: Daily activity tracking

### Data Flow
1. **Client-side state**: Zustand for user XP, progress (with localStorage persistence)
2. **Server data**: Supabase for families, children, profiles, mascots
3. **Static data**: Learning content in /lib/data/*.ts files

---

## Common Tasks & Solutions

### Adding a New Quiz
```tsx
// 1. Create data file
// lib/data/bio-quiz.ts
export const bioQuizData = [
  { id: '1', question: '...', options: [], correct: 0, xp: 10 }
];

// 2. Create page
// app/leni/bio/quiz/page.tsx
import { Quiz } from '@/components/learning/Quiz';
import { bioQuizData } from '@/lib/data/bio-quiz';

export default function BioQuizPage() {
  return <Quiz questions={bioQuizData} themaId="bio" onComplete={handleComplete} />;
}
```

### Adding Animation to Existing Component
```tsx
import { motion } from 'framer-motion';

// Wrap with motion component
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="existing-classes"
>
```

### Adding New Button Variant
```tsx
// 1. Add to tailwind.config.ts colors
// 2. Add variant in Button.tsx
const variants = {
  // ...existing
  newVariant: 'bg-[color] hover:bg-[darker] text-white'
};

// 3. Update type
type ButtonVariant = 'primary' | 'secondary' | 'newVariant';
```

---

## Database Schema Reference

```typescript
// Tables: families, children, learning_profiles, mascots

// Key relationships:
// - families → children (one-to-many)
// - children → learning_profiles (one-to-one)
// - children → mascots (one-to-one)

// Common queries:
const child = await supabase
  .from('children')
  .select('*, learning_profiles(*), mascots(*)')
  .eq('id', childId)
  .single();
```

---

## Testing Checklist

Before committing new features:

- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px, 1024px)
- [ ] Tested keyboard navigation
- [ ] Tested screen reader (basic check)
- [ ] Loading states work
- [ ] Error states handle gracefully
- [ ] XP updates reflect in store
- [ ] Animations are smooth (60fps)
- [ ] TypeScript has no errors
- [ ] Works in Safari & Chrome
- [ ] Dark mode compatible (if applicable)
- [ ] Works with slow network (throttling)

---

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Zustand Docs](https://zustand.docs.pmnd.rs/)
- [Supabase JS Docs](https://supabase.com/docs/reference/javascript)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
