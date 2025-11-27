'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const quizData = [
  { question: 'K-POP: The demon hunters always _______ (protect) the city.', options: ['protect', 'protects', 'are protecting', 'protected'], correct: 0, explanation: 'Simple Present mit "always" → Grundform "protect"' },
  { question: 'Look! Minji _______ (sing) her power song right now!', options: ['sing', 'sings', 'is singing', 'sang'], correct: 2, explanation: '"Look!" + "right now" = Present Progressive → is singing' },
  { question: 'Yesterday, Joon _______ (find) the legendary microphone.', options: ['find', 'finds', 'is finding', 'found'], correct: 3, explanation: '"Yesterday" = Simple Past → found (unregelmäßig!)' },
  { question: 'My brother usually _______ (go) to school by bike.', options: ['go', 'goes', 'is going', 'went'], correct: 1, explanation: '"Usually" = Simple Present, 3. Person → goes' },
  { question: 'Look! The cat _______ (sleep) under the table.', options: ['sleep', 'sleeps', 'is sleeping', 'slept'], correct: 2, explanation: '"Look!" = Present Progressive → is sleeping' },
  { question: '_______ you _______ (see) the ball yesterday?', options: ['Do / see', 'Did / saw', 'Did / see', 'Does / see'], correct: 2, explanation: 'Simple Past Frage: Did + Grundform → Did you see' },
  { question: 'K-POP: The hunters _______ (not/catch) the demon last night.', options: ["don't catch", "doesn't catch", "didn't catched", "didn't catch"], correct: 3, explanation: 'Simple Past Verneinung: didn\'t + Grundform → didn\'t catch' },
  { question: 'What _______ Mike _______ (wear) right now?', options: ['is / wearing', 'does / wear', 'do / wear', 'was / wearing'], correct: 0, explanation: '"Right now" = Present Progressive Frage → is wearing' },
  { question: 'She _______ (often/play) tennis on Saturdays.', options: ['is often playing', 'often plays', 'often play', 'often played'], correct: 1, explanation: '"Often" + Routine = Simple Present, 3. Person → often plays' },
  { question: 'Yesterday I _______ (be) very tired.', options: ['am', 'is', 'was', 'were'], correct: 2, explanation: '"Yesterday" = Simple Past, "I" → was' },
  { question: 'Welches Signalwort passt zu Simple Present?', options: ['now', 'yesterday', 'always', 'at the moment'], correct: 2, explanation: '"Always" = Gewohnheit → Simple Present' },
  { question: 'K-POP: Right now, the team _______ (fight) against demons.', options: ['fight', 'fights', 'is fighting', 'fought'], correct: 2, explanation: '"Right now" = Present Progressive → is fighting' },
  { question: 'She _______ (not/like) vegetables.', options: ["don't like", "doesn't like", "isn't liking", "didn't like"], correct: 1, explanation: 'Simple Present Verneinung, 3. Person → doesn\'t like (Zustandsverb!)' },
  { question: 'They _______ (visit) Paris last summer.', options: ['visit', 'visits', 'are visiting', 'visited'], correct: 3, explanation: '"Last summer" = Simple Past → visited' },
  { question: '_______ he _______ (like) pizza?', options: ['Is / liking', 'Does / like', 'Do / likes', 'Did / liked'], correct: 1, explanation: 'Simple Present Frage, 3. Person → Does he like (Zustandsverb!)' },
];

export default function LeniEnglischQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentQuestion];

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
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (score >= quizData.length - 3) {
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
    const percent = Math.round((score / quizData.length) * 100);
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🌟' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">{score} von {quizData.length} richtig!</h1>
        <p className="text-gray-500 mb-6">{percent}% - {percent >= 80 ? 'Super!' : percent >= 60 ? 'Gut gemacht!' : 'Weiter üben!'}</p>
        
        <div className="space-y-3">
          <button onClick={restart} className="w-full py-4 bg-indigo-500 text-white rounded-xl font-bold">
            🔄 Nochmal spielen
          </button>
          <Link href="/leni/englisch">
            <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold">
              Zurück zur Übersicht
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/englisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-medium text-gray-700">Frage {currentQuestion + 1}/{quizData.length}</span>
        <span className="text-emerald-600 font-bold">{score} ✓</span>
      </div>

      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
          style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
        />
      </div>

      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm mb-4">
        <p className="text-lg md:text-xl font-semibold text-gray-800">{question.question}</p>
      </div>

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
                  ? 'bg-indigo-100 border-2 border-indigo-500'
                  : 'bg-white border-2 border-gray-200 hover:border-indigo-300'
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

      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4"
        >
          <p className="text-blue-800 text-sm md:text-base">💡 {question.explanation}</p>
        </motion.div>
      )}

      {isAnswered && (
        <button
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          {currentQuestion < quizData.length - 1 ? 'Weiter' : 'Ergebnis'}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
