'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { sozialversicherungQuiz, gerechtigkeitQuiz, armutQuiz } from '../data/content';

// Combine all quizzes and select a subset
const allQuestions = [...sozialversicherungQuiz.slice(0, 5), ...gerechtigkeitQuiz.slice(0, 4), ...armutQuiz.slice(0, 4)];

export default function SozialkundeTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = allQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === question.correct) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (score >= allQuestions.length - 3) {
        confetti({ particleCount: 100, spread: 70 });
      }
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percent = Math.round((score / allQuestions.length) * 100);
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🦋' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">{score} von {allQuestions.length} richtig!</h1>
        <p className="text-gray-500 mb-4">{percent}% - {percent >= 80 ? 'Hervorragend!' : percent >= 60 ? 'Gut gemacht!' : 'Weiter üben!'}</p>
        
        {/* Lillebi Feedback */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-5 mb-6 text-white">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🦋</span>
            <div className="text-left">
              <p className="font-semibold mb-1">Lillebi sagt:</p>
              <p className="text-white/90 text-sm">
                {percent >= 80 
                  ? "Wow! Du hast alle drei Themen drauf: Sozialversicherung, Gerechtigkeit und Armut. Super!" 
                  : percent >= 60
                  ? "Gut! Du kennst dich schon gut aus. Schau dir die Themen nochmal an, dann wird's perfekt."
                  : "Nicht aufgeben! Geh nochmal durch alle Module und versuch es erneut. Du schaffst das!"}
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button onClick={restart} className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors">
            🔄 Nochmal testen
          </button>
          <Link href="/leni/sozialkunde">
            <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Zur Übersicht
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
        <Link href="/leni/sozialkunde" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-medium text-gray-700">Frage {currentQuestion + 1}/{allQuestions.length}</span>
        <span className="text-emerald-600 font-bold">{score} ✓</span>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-pink-600 rounded-full transition-all"
          style={{ width: `${((currentQuestion + 1) / allQuestions.length) * 100}%` }}
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
                  ? 'bg-orange-100 border-2 border-orange-500'
                  : 'bg-white border-2 border-gray-200 hover:border-orange-300'
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

      {/* Lillebi Comment + Explanation */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 mb-4"
        >
          {/* Lillebi Feedback */}
          <div className={`rounded-xl p-4 ${
            selectedAnswer === question.correct 
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
              : 'bg-orange-50 border border-orange-200'
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-xl">🦋</span>
              <p className={`text-sm md:text-base font-medium ${
                selectedAnswer === question.correct ? 'text-white' : 'text-orange-800'
              }`}>
                {selectedAnswer === question.correct 
                  ? question.lillebiComment 
                  : "Hmm, nicht ganz. Schau nochmal."}
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm md:text-base">💡 {question.explanation}</p>
          </div>
        </motion.div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <button
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
        >
          {currentQuestion < allQuestions.length - 1 ? 'Weiter' : 'Ergebnis'}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
