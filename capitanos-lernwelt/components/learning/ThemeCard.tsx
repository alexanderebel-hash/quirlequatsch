'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  totalSections: number;
  completedSections: number;
  status: 'neu' | 'in-progress' | 'completed';
}

export function ThemeCard({
  id,
  title,
  description,
  icon,
  progress,
  totalSections,
  completedSections,
  status
}: ThemeCardProps) {
  const statusColors = {
    'neu': 'bg-blue-500',
    'in-progress': 'bg-orange-500',
    'completed': 'bg-green-500'
  };
  
  const statusLabels = {
    'neu': 'Neu',
    'in-progress': 'In Arbeit',
    'completed': 'Fertig ✓'
  };

  return (
    <Link href={`/themen/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md 
                   transition-shadow duration-300 cursor-pointer
                   border border-black/[0.04]"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 
                          flex items-center justify-center text-2xl">
              {icon}
            </div>
            <div>
              <h3 className="text-headline text-black">{title}</h3>
              <p className="text-subheadline">{description}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-footnote">
              {completedSections}/{totalSections} Abschnitte
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white
                           ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
