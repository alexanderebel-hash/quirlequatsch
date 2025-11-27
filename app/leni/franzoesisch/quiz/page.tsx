'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { vocabulary, shuffleArray, Vocab } from '../data/vocabulary';

export default function LeniFranzoesischQuizPage() {
  const [vocabList] = useState<Vocab[]>(() => shuffleArray(vocabulary).slice(0, 15));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [askForFrench] = useState(() => Math.random() > 0.5);

  const currentVocab = vocabList[currentQuestion];

  const getOptions = useCallback(() => {
    const correct = askForFrench ? currentVocab.fr : currentVocab.de;
    const wrongAnswers: string[] = [];
    const allVocab = shuffleArray(vocabulary);
    for (const v of allVocab) {
      const answer = askForFrench ? v.fr : v.de;
      if (answer !== correct && !wrongAnswers.includes(answer) && wrongAnswers.length < 3) wrongAnswers.push(answer);
    }
    return shuffleArray([correct, ...wrongAnswers]);
  }, [currentVocab, askForFrench]);

  const [options] = useState<string[]>(() => getOptions());

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    const correct = askForFrench ? currentVocab.fr : currentVocab.de;
    if (options[index] === correct) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < vocabList.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (score >= vocabList.length - 3) confetti({ particleCount: 100, spread: 70 });
    }
  };

  const speakFrench = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (isFinished) {
    const percent = Math.round((score / vocabList.length) * 100);
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🌟' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">{score} von {vocabList.length} richtig!</h1>
        <p className="text-gray-500 mb-6">{percent}% - {percent >= 80 ? 'Génial!' : percent >= 60 ? 'Très bien!' : 'Encore!'}</p>
        <div className="space-y-3">
          <button onClick={() => window.location.reload()} className="w-full py-4 bg-blue-500 text-white rounded-xl font-bold">🔄 Nochmal spielen</button>
          <Link href="/leni/franzoesisch"><button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold">Zurück zur Übersicht</button></Link>
        </div>
      </div>
    );
  }

  const correctAnswer = askForFrench ? currentVocab.fr : currentVocab.de;

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/franzoesisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700"><ArrowLeft className="w-5 h-5" /></Link>
        <span className="font-medium text-gray-700">Frage {currentQuestion + 1}/{vocabList.length}</span>
        <span className="text-emerald-600 font-bold">{score} ✓</span>
      </div>

      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / vocabList.length) * 100}%` }} />
      </div>

      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm mb-4 text-center">
        <div className="text-4xl mb-3">{currentVocab.icon}</div>
        <p className="text-xl md:text-2xl font-semibold text-gray-800">{askForFrench ? currentVocab.de : currentVocab.fr}</p>
        <p className="text-gray-500 text-sm mt-2">{askForFrench ? 'Wie heißt das auf Französisch?' : 'Was bedeutet das auf Deutsch?'}</p>
        {!askForFrench && <button onClick={() => speakFrench(currentVocab.fr)} className="mt-3 inline-flex items-center gap-1 text-blue-500 text-sm"><Volume2 className="w-4 h-4" /> Vorlesen</button>}
      </div>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(index)} disabled={isAnswered} className={`w-full p-4 md:p-5 rounded-xl text-left font-medium transition-all ${isAnswered ? option === correctAnswer ? 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800' : selectedAnswer === index ? 'bg-red-100 border-2 border-red-500 text-red-800' : 'bg-gray-50 border-2 border-gray-200 opacity-50' : selectedAnswer === index ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border-2 border-gray-200 hover:border-blue-300'}`}>
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {isAnswered && option === correctAnswer && <Check className="w-5 h-5 text-emerald-600" />}
              {isAnswered && selectedAnswer === index && option !== correctAnswer && <X className="w-5 h-5 text-red-600" />}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <button onClick={nextQuestion} className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
          {currentQuestion < vocabList.length - 1 ? 'Weiter' : 'Ergebnis'} <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
