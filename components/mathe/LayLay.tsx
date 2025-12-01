'use client';

import React from 'react';

interface LayLayProps {
  size?: 'small' | 'medium' | 'large';
  mood?: 'idle' | 'happy' | 'encouraging' | 'thinking' | 'celebrating';
  message?: string;
  className?: string;
  showSpeechBubble?: boolean;
}

export function LayLay({
  size = 'medium',
  mood = 'idle',
  message,
  className = '',
  showSpeechBubble = true
}: LayLayProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const getEmoji = () => {
    switch (mood) {
      case 'happy':
        return '🦁✨';
      case 'encouraging':
        return '🦁💪';
      case 'thinking':
        return '🦁🤔';
      case 'celebrating':
        return '🦁🎉';
      default:
        return '🦁';
    }
  };

  const getAnimation = () => {
    switch (mood) {
      case 'celebrating':
        return 'animate-bounce';
      case 'happy':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* LayLay Avatar */}
      <div 
        className={`
          ${sizeClasses[size]} 
          bg-gradient-to-r from-[#FFB800] to-[#FF9500] 
          rounded-2xl flex items-center justify-center 
          ${getAnimation()}
          backdrop-blur
        `}
      >
        <span className={size === 'large' ? 'text-4xl' : size === 'medium' ? 'text-3xl' : 'text-2xl'}>
          {getEmoji()}
        </span>
      </div>

      {/* Speech Bubble */}
      {message && showSpeechBubble && (
        <div className="absolute top-0 left-full ml-4 min-w-[200px] max-w-[300px] z-10">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 relative">
            {/* Arrow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Feedback component with LayLay
interface LayLayFeedbackProps {
  type: 'success' | 'error' | 'hint' | 'motivation';
  message: string;
  onClose?: () => void;
}

export function LayLayFeedback({ type, message, onClose }: LayLayFeedbackProps) {
  const config = {
    success: {
      mood: 'celebrating' as const,
      bgColor: 'from-emerald-500 to-teal-600',
      icon: '✓'
    },
    error: {
      mood: 'encouraging' as const,
      bgColor: 'from-orange-500 to-red-600',
      icon: '✗'
    },
    hint: {
      mood: 'thinking' as const,
      bgColor: 'from-blue-500 to-indigo-600',
      icon: '💡'
    },
    motivation: {
      mood: 'happy' as const,
      bgColor: 'from-purple-500 to-pink-600',
      icon: '🔥'
    }
  };

  const { mood, bgColor, icon } = config[type];

  return (
    <div className={`bg-gradient-to-r ${bgColor} rounded-2xl p-5 text-white relative overflow-hidden animate-in slide-in-from-bottom duration-300`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
      
      <div className="relative flex items-start gap-4">
        <LayLay size="medium" mood={mood} showSpeechBubble={false} />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{icon}</span>
            <p className="font-bold text-lg">LayLay</p>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{message}</p>
        </div>

        {onClose && (
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
