'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight, Volume2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { vocabulary, shuffleArray, Vocab } from '../data/vocabulary';

export default function LeniFranzoesischTippenPage() {
  const [vocabList] = useState<Vocab[]>(() => shuffleArray(vocabulary).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [askForFrench] = useState(() => Math.random() > 0.5);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentVocab = vocabList[currentIndex];

  useEffect(() => { inputRef.current?.focus(); }, [currentIndex]);

  const speakFrench = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, []);

  const checkAnswer = () => {
    const correctAnswer = askForFrench ? currentVocab.fr : currentVocab.de;
    const userAnswer = userInput.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();
    const normalize = (s: string) => s.replace(/[!?.,:;]/g, '').trim();
    const isMatch = normalize(userAnswer) === normalize(correct);
    setIsChecked(true);
    setIsCorrect(isMatch);
    if (isMatch) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < vocabList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setIsChecked(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      setIsFinished(true);
      if (score >= vocabList.length - 2) confetti({ particleCount: 100, spread: 70 });
    }
  };

  const getHint = () => {
    const answer = askForFrench ? currentVocab.fr : currentVocab.de;
    return answer.substring(0, Math.ceil(answer.length / 2)) + '...';
  };

  if (isFinished) {
    const percent = Math.round((score / vocabList.length) * 100);
    return (
      <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">{percent >= 80 ? '🌟' : percent >= 60 ? '👍' : '💪'}</div>
        <h1 className="text-2xl font-bold mb-2">{score} von {vocabList.length} richtig!</h1>
        <p className="text-gray-500 mb-6">{percent}%</p>
        <div className="space-y-3">
          <button onClick={() => window.location.reload()} className="w-full py-4 bg-blue-500 text-white rounded-xl font-bold">🔄 Nochmal üben</button>
          <Link href="/leni/franzoesisch"><button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold">Zurück</button></Link>
        </div>
      </div>
    );
  }

  const correctAnswer = askForFrench ? currentVocab.fr : currentVocab.de;

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href="/leni/franzoesisch" className="flex items-center gap-2 text-gray-500 hover:text-gray-700"><ArrowLeft className="w-5 h-5" /></Link>
        <span className="font-medium text-gray-700">{currentIndex + 1}/{vocabList.length}</span>
        <span className="text-emerald-600 font-bold">{score} ✓</span>
      </div>

      <div className="h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / vocabList.length) * 100}%` }} />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 text-center">
        <div className="text-5xl mb-4">{currentVocab.icon}</div>
        <p className="text-2xl font-bold text-gray-800 mb-2">{askForFrench ? currentVocab.de : currentVocab.fr}</p>
        <p className="text-gray-500 text-sm">{askForFrench ? 'Schreibe auf Französisch:' : 'Schreibe auf Deutsch:'}</p>
        {!askForFrench && <button onClick={() => speakFrench(currentVocab.fr)} className="mt-3 inline-flex items-center gap-1 text-blue-500 text-sm"><Volume2 className="w-4 h-4" /> Vorlesen</button>}
      </div>

      <div className="mb-4">
        <input ref={inputRef} type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && !isChecked && checkAnswer()} disabled={isChecked} placeholder="Tippe hier..." className={`w-full p-4 text-xl text-center rounded-xl border-2 focus:outline-none ${isChecked ? isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50' : 'border-blue-300 focus:border-blue-500'}`} />
      </div>

      {!isChecked && (
        <div className="flex justify-center mb-4">
          <button onClick={() => setShowHint(true)} className="flex items-center gap-2 text-amber-600 text-sm">
            <Lightbulb className="w-4 h-4" />{showHint ? getHint() : 'Hinweis zeigen'}
          </button>
        </div>
      )}

      {isChecked && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`rounded-xl p-4 mb-4 text-center ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          {isCorrect ? <p className="font-bold flex items-center justify-center gap-2"><Check className="w-5 h-5" /> Richtig!</p> : <div><p className="font-bold flex items-center justify-center gap-2"><X className="w-5 h-5" /> Nicht ganz...</p><p className="mt-1">Richtig wäre: <strong>{correctAnswer}</strong></p></div>}
        </motion.div>
      )}

      {!isChecked ? (
        <button onClick={checkAnswer} disabled={!userInput.trim()} className={`w-full py-4 rounded-xl font-bold ${userInput.trim() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>✓ Prüfen</button>
      ) : (
        <button onClick={nextQuestion} className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">Weiter <ChevronRight className="w-5 h-5" /></button>
      )}
    </div>
  );
}
