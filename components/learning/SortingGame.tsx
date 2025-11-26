'use client';

import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Check, RotateCcw, ArrowDown } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';
import { getRandomMessage } from '@/lib/utils/motivation';
import confetti from 'canvas-confetti';

interface SortingGameProps {
  title: string;
  instruction: string;
  items: string[];
  correctOrder: string[];
  xpReward: number;
}

function SortableItem({ id, label, index, isChecked, isCorrect }: {
  id: string;
  label: string;
  index: number;
  isChecked: boolean;
  isCorrect?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`
        flex items-center gap-3 p-4 rounded-xl bg-white border-2
        ${isDragging ? 'shadow-lg z-10 scale-105' : 'shadow-sm'}
        ${isChecked ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-200'}
      `}
    >
      <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>
      <span className="flex-1 text-sm">{label}</span>
      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">{index + 1}</span>
      {isChecked && <span className={isCorrect ? 'text-green-500' : 'text-red-500'}>{isCorrect ? '✓' : '✗'}</span>}
    </div>
  );
}

export function SortingGame({ title, instruction, items: initialItems, correctOrder, xpReward }: SortingGameProps) {
  const [items, setItems] = useState(() => {
    const shuffled = [...initialItems];
    do {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    } while (shuffled.every((item, i) => item === correctOrder[i]));
    return shuffled;
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState(getRandomMessage('encouragement'));
  const { addXP } = useUserStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleCheck = () => {
    const correct = items.every((item, i) => item === correctOrder[i]);
    setIsCorrect(correct);
    setIsChecked(true);
    setAttempts((prev) => prev + 1);

    if (correct) {
      addXP(attempts === 0 ? xpReward : Math.round(xpReward * 0.7));
      setMessage(getRandomMessage(attempts === 0 ? 'perfect' : 'correct'));
      confetti({ 
        particleCount: 100, 
        spread: 70, 
        origin: { y: 0.6 }, 
        colors: ['#34C759', '#FFD700'] 
      });
    } else {
      setMessage(getRandomMessage('incorrect'));
    }
  };

  const handleReset = () => {
    const shuffled = [...initialItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
    setIsChecked(false);
    setIsCorrect(false);
    setAttempts(0);
    setMessage(getRandomMessage('encouragement'));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{instruction}</p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
          <p className="text-sm text-green-800 font-medium">{message}</p>
        </div>

        <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
          <ArrowDown className="w-4 h-4" />
          <span>Ziehe die Elemente in die richtige Reihenfolge</span>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="space-y-2 mb-6">
              {items.map((item, index) => (
                <SortableItem
                  key={item}
                  id={item}
                  label={item}
                  index={index}
                  isChecked={isChecked}
                  isCorrect={isChecked ? item === correctOrder[index] : undefined}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {isChecked && (
          <div className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
            <p className="font-bold text-sm">{isCorrect ? '🎉 PERFEKT!' : '💡 Noch nicht ganz richtig. Versuch\'s nochmal!'}</p>
            {isCorrect && <p className="text-xs text-green-600 mt-1">+{attempts === 1 ? xpReward : Math.round(xpReward * 0.7)} XP</p>}
          </div>
        )}

        <button
          onClick={isChecked ? handleReset : handleCheck}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 ${
            isChecked ? 'bg-gray-100 text-gray-700' : 'bg-green-500 text-white'
          }`}
        >
          {isChecked ? (
            <>
              <RotateCcw className="w-5 h-5" />
              Nochmal spielen
            </>
          ) : (
            <>
              <Check className="w-5 h-5" />
              Überprüfen
            </>
          )}
        </button>
      </div>
    </div>
  );
}
