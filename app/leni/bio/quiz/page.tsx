'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const quizData = [
  {
    question: 'Was ist der WICHTIGSTE Unterschied zwischen Pro- und Eukaryoten?',
    options: ['Die Größe', 'Der Zellkern (Prokaryoten haben keinen echten)', 'Die Farbe', 'Die Zellmembran'],
    correct: 1,
    explanation: 'Prokaryoten haben keinen echten Zellkern - die DNA liegt frei im Zytoplasma!',
  },
  {
    question: 'Welche Organelle macht Fotosynthese?',
    options: ['Mitochondrien', 'Ribosomen', 'Chloroplasten', 'Golgi-Apparat'],
    correct: 2,
    explanation: 'Chloroplasten enthalten Chlorophyll und wandeln Licht in Zucker um.',
  },
  {
    question: 'Was haben Pflanzenzellen, aber Tierzellen NICHT?',
    options: ['Zellkern', 'Mitochondrien', 'Zellwand & Chloroplasten', 'Ribosomen'],
    correct: 2,
    explanation: 'Pflanzenzellen haben zusätzlich: Zellwand, Chloroplasten, große Vakuole (ZCV!)',
  },
  {
    question: 'Wie nennt man das "Kraftwerk der Zelle"?',
    options: ['Zellkern', 'Mitochondrien', 'Chloroplasten', 'Ribosomen'],
    correct: 1,
    explanation: 'Mitochondrien produzieren ATP - die Energie für alle Zellprozesse.',
  },
  {
    question: 'Bakterien sind...',
    options: ['Eukaryoten', 'Prokaryoten', 'Pflanzenzellen', 'Tierzellen'],
    correct: 1,
    explanation: 'Bakterien sind Prokaryoten - sie haben keinen echten Zellkern.',
  },
  {
    question: 'Welche Zelle ist GRÖSSER?',
    options: ['Prokaryotische Zelle (1-10 µm)', 'Eukaryotische Zelle (10-100 µm)'],
    correct: 1,
    explanation: 'Eukaryoten sind etwa 10x größer als Prokaryoten!',
  },
  {
    question: 'Welche Organelle haben ALLE Zellen (auch Bakterien)?',
    options: ['Zellkern', 'Mitochondrien', 'Chloroplasten', 'Ribosomen'],
    correct: 3,
    explanation: 'Ribosomen braucht jede Zelle um Proteine herzustellen!',
  },
  {
    question: 'Wo befindet sich die DNA bei Prokaryoten?',
    options: ['Im Zellkern', 'Frei im Zytoplasma (Nucleoid)', 'In den Mitochondrien', 'In der Zellwand'],
    correct: 1,
    explanation: 'Prokaryoten haben keinen Zellkern - die DNA liegt frei als Nucleoid.',
  },
];

export default function LeniQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [lastGain, setLastGain] = useState(0);
  const [showGain, setShowGain] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentQuestion];
  const XP_PER_CORRECT = 15;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === question.correct) {
      setScore(prev => prev + 1);
      setXp(prev => prev + XP_PER_CORRECT);
      setLastGain(XP_PER_CORRECT);
      setShowGain(true);
      setTimeout(() => setShowGain(false), 1000);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (score >= quizData.length - 2) {
        confetti({ particleCount: 100, spread: 70 });
      }
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setXp(0);
    setLastGain(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percent = Math.round((score / quizData.length) * 100);
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🌟' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">{score} von {quizData.length} richtig!</h1>

        {/* XP Earned Display */}
        <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
          <Zap className="w-5 h-5 text-purple-600" />
          <span className="font-bold text-purple-700 text-lg">+{xp} XP verdient!</span>
        </div>

        <p className="text-gray-500 mb-6">{percent}% - {percent >= 80 ? 'Super!' : percent >= 60 ? 'Gut gemacht!' : 'Weiter üben!'}</p>

        <div className="space-y-3">
          <button onClick={restart} className="w-full py-4 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors">
            🔄 Nochmal spielen
          </button>
          <Link href="/leni/bio">
            <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Zurück zur Übersicht
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/bio" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-medium text-gray-700">Frage {currentQuestion + 1}/{quizData.length}</span>
        <div className="relative">
          <div className={`flex items-center gap-1.5 bg-purple-100 rounded-full px-3 py-1.5 transition-transform ${showGain ? 'scale-110' : 'scale-100'}`}>
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="font-bold text-purple-700">{xp}</span>
          </div>
          {showGain && (
            <span className="absolute -top-4 right-0 text-purple-500 font-bold text-sm animate-bounce">
              +{lastGain}
            </span>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
          style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm mb-4">
        <p className="text-lg md:text-xl font-semibold text-gray-800">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered}
            className={`
              w-full p-4 md:p-5 rounded-xl text-left font-medium transition-all
              ${isAnswered
                ? index === question.correct
                  ? 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800'
                  : selectedAnswer === index
                    ? 'bg-red-100 border-2 border-red-500 text-red-800'
                    : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                : selectedAnswer === index
                  ? 'bg-purple-100 border-2 border-purple-500'
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300'
              }
            `}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {isAnswered && index === question.correct && <Check className="w-5 h-5 text-emerald-600" />}
              {isAnswered && selectedAnswer === index && index !== question.correct && <X className="w-5 h-5 text-red-600" />}
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4"
        >
          <p className="text-blue-800 text-sm md:text-base">💡 {question.explanation}</p>
        </motion.div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <button
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
        >
          {currentQuestion < quizData.length - 1 ? 'Weiter' : 'Ergebnis'}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
