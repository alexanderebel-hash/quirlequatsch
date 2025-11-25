'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'orange' | 'green' | 'purple' | 'red' | 'yellow' | 'teal' | 'indigo';
  progress: number;
  totalSections: number;
  completedSections: number;
}

const colorClasses: Record<string, string> = {
  blue: 'icon-container-blue',
  orange: 'icon-container-orange',
  green: 'icon-container-green',
  purple: 'icon-container-purple',
  red: 'icon-container-red',
  yellow: 'icon-container-yellow',
  teal: 'icon-container-teal',
  indigo: 'icon-container-indigo',
};

const statusColors: Record<string, { bg: string; text: string }> = {
  neu: { bg: 'bg-blue-500', text: 'text-white' },
  'in-arbeit': { bg: 'bg-orange-500', text: 'text-white' },
  fertig: { bg: 'bg-green-500', text: 'text-white' },
};

export function ThemeCard({
  id,
  title,
  description,
  icon,
  color,
  progress,
  totalSections,
  completedSections,
}: ThemeCardProps) {
  const status = progress === 0 ? 'neu' : progress === 100 ? 'fertig' : 'in-arbeit';
  const statusLabel = progress === 0 ? 'Neu' : progress === 100 ? 'Fertig ✓' : 'In Arbeit';

  return (
    <Link href={`/themen/${id}`}>
      <div
        className="
          bg-white rounded-2xl p-5 
          shadow-sm hover:shadow-md 
          transition-all duration-300 
          cursor-pointer 
          border border-black/[0.04]
          hover:scale-[1.01] hover:-translate-y-0.5
          active:scale-[0.99]
        "
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Colored Icon Container */}
            <div
              className={`
                w-12 h-12 rounded-xl 
                flex items-center justify-center 
                text-2xl
                ${colorClasses[color] || colorClasses.blue}
              `}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-headline text-black">{title}</h3>
              <p className="text-subheadline">{description}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-footnote">
              {completedSections}/{totalSections} Abschnitte
            </span>
            <span
              className={`
                text-xs font-medium px-2 py-0.5 rounded-full
                ${statusColors[status].bg} ${statusColors[status].text}
              `}
            >
              {statusLabel}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.max(progress, 0)}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
