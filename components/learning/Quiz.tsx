'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Progress from '@/components/ui/Progress';
import { fireSuccessConfetti } from '@/lib/utils/confetti';
import { useUserStore } from '@/lib/store/userStore';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number | number[];
  explanation: string;
  xp: number;
  image?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  themaId: string;
  onComplete: (score: number, total: number) => void;
  multipleChoice?: boolean;
}

export function Quiz({ questions, themaId, onComplete, multipleChoice = false }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const { addXP } = useUserStore();

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    if (multipleChoice) {
      setSelectedOptions((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setSelectedOptions([index]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;

    const correctAnswer = currentQuestion.correct;
    let correct = false;

    if (Array.isArray(correctAnswer)) {
      correct =
        selectedOptions.length === correctAnswer.length &&
        selectedOptions.every((opt) => correctAnswer.includes(opt));
    } else {
      correct = selectedOptions.length === 1 && selectedOptions[0] === correctAnswer;
    }

    setIsCorrect(correct);
    setIsAnswered(true);
    setShowExplanation(true);

    if (correct) {
      setScore((prev) => prev + 1);
      addXP(currentQuestion.xp);
      fireSuccessConfetti();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptions([]);
      setIsAnswered(false);
      setIsCorrect(false);
      setShowExplanation(false);
    } else {
      onComplete(score + (isCorrect ? 1 : 0), questions.length);
    }
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return selectedOptions.includes(index)
        ? 'border-[#007AFF] bg-blue-50'
        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
    }

    const correctAnswer = currentQuestion.correct;
    const isThisCorrect = Array.isArray(correctAnswer)
      ? correctAnswer.includes(index)
      : correctAnswer === index;

    if (isThisCorrect) {
      return 'border-[#34C759] bg-green-50';
    }
    if (selectedOptions.includes(index) && !isThisCorrect) {
      return 'border-[#FF3B30] bg-red-50';
    }
    return 'border-gray-200 opacity-50';
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

      {/* Question Card */}
      <Card padding="lg" className="mb-6">
        <h2 className="text-title3 mb-4">{currentQuestion.question}</h2>

        {currentQuestion.image && (
          <div className="mb-4 rounded-xl overflow-hidden bg-gray-100">
            <img
              src={currentQuestion.image}
              alt="Frage-Bild"
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              className={`
                w-full p-4 rounded-xl border-2 text-left
                transition-all duration-200
                flex items-center justify-between
                ${getOptionStyle(index)}
              `}
            >
              <span className="text-body">{option}</span>
              {isAnswered && (
                <span>
                  {(Array.isArray(currentQuestion.correct)
                    ? currentQuestion.correct.includes(index)
                    : currentQuestion.correct === index) ? (
                    <Check className="w-5 h-5 text-[#34C759]" />
                  ) : selectedOptions.includes(index) ? (
                    <X className="w-5 h-5 text-[#FF3B30]" />
                  ) : null}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </Card>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6"
          >
            <Card
              padding="md"
              className={isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${isCorrect ? 'bg-green-100' : 'bg-red-100'}
                  `}
                >
                  {isCorrect ? (
                    <Check className="w-5 h-5 text-[#34C759]" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-[#FF9500]" />
                  )}
                </div>
                <div>
                  <p className={`text-headline mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? '🎉 Richtig!' : '💡 Erklärung'}
                  </p>
                  <p className="text-body text-gray-700">{currentQuestion.explanation}</p>
                  {isCorrect && (
                    <p className="text-footnote text-green-600 mt-2">
                      +{currentQuestion.xp} XP verdient!
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex gap-3">
        {!isAnswered ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0}
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
            {currentIndex < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis ansehen'}
          </Button>
        )}
      </div>
    </div>
  );
}
