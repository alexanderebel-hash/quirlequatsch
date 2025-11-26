'use client';

import Link from 'next/link';
import { TrendingUp, Zap, Brain, Award } from 'lucide-react';

export default function LeniHomePage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-4 max-w-2xl mx-auto">
      {/* Eleganter Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Hey Leni 👋
          </h1>
          <p className="text-gray-500">Bereit für heute?</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 rounded-xl px-3 py-2 flex items-center gap-1">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-purple-700">847 XP</span>
          </div>
        </div>
      </div>

      {/* Streak & Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-bold text-purple-600">5</p>
          <p className="text-xs text-gray-500">Tage Streak</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-bold text-indigo-600">12</p>
          <p className="text-xs text-gray-500">Level</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
          <p className="text-2xl font-bold text-violet-600">86%</p>
          <p className="text-xs text-gray-500">Genauigkeit</p>
        </div>
      </div>

      {/* Motivation Card */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium">Du machst das richtig gut!</p>
            <p className="text-purple-200 text-sm">Diese Woche 23% besser als letzte</p>
          </div>
        </div>
      </div>

      {/* Fächer */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Deine Fächer</h2>
      <div className="space-y-3 mb-6">
        <Link href="/leni/bio">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔬</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Biologie</p>
              <p className="text-sm text-gray-500">Zellen-Test am Donnerstag</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-emerald-600">60%</p>
              <p className="text-xs text-gray-400">Fortschritt</p>
            </div>
          </div>
        </Link>

        <Link href="/leni/uebungen?fach=mathe">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📐</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Mathematik</p>
              <p className="text-sm text-gray-500">Algebra, Geometrie, Terme</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-blue-600">78%</p>
              <p className="text-xs text-gray-400">Fortschritt</p>
            </div>
          </div>
        </Link>

        <Link href="/leni/uebungen?fach=englisch">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🇬🇧</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Englisch</p>
              <p className="text-sm text-gray-500">Vokabeln, Grammatik, Texte</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-red-600">65%</p>
              <p className="text-xs text-gray-400">Fortschritt</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/leni/test">
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white text-center hover:shadow-lg transition-shadow">
            <Brain className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Quiz starten</p>
          </div>
        </Link>
        <Link href="/leni/profil">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-5 text-white text-center hover:shadow-lg transition-shadow">
            <Award className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Achievements</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
