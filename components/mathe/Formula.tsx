'use client';

import React from 'react';

interface FormulaProps {
  children: React.ReactNode;
  variant?: 'display' | 'inline';
  highlight?: boolean;
  className?: string;
}

export function Formula({ 
  children, 
  variant = 'display',
  highlight = false,
  className = '' 
}: FormulaProps) {
  const baseClasses = variant === 'display'
    ? 'block text-center py-4 px-6 my-4 bg-slate-50 rounded-xl border-2 border-slate-200'
    : 'inline-block px-2 py-1 bg-slate-100 rounded';

  const highlightClasses = highlight
    ? 'border-[#5856D6] bg-[#5856D6]/5'
    : '';

  return (
    <div className={`${baseClasses} ${highlightClasses} ${className} font-mono`}>
      {children}
    </div>
  );
}

// Components for building formulas
export function Fraction({ 
  numerator, 
  denominator 
}: { 
  numerator: React.ReactNode; 
  denominator: React.ReactNode;
}) {
  return (
    <span className="inline-flex flex-col items-center mx-1">
      <span className="border-b-2 border-slate-800 px-2">{numerator}</span>
      <span className="px-2">{denominator}</span>
    </span>
  );
}

export function Sqrt({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center">
      <span className="text-2xl">√</span>
      <span className="border-t-2 border-slate-800 px-1">{children}</span>
    </span>
  );
}

export function Sup({ children }: { children: React.ReactNode }) {
  return <sup className="text-sm">{children}</sup>;
}

export function Sub({ children }: { children: React.ReactNode }) {
  return <sub className="text-sm">{children}</sub>;
}

// Preset formulas
export function SinusFormula({ highlight = false }: { highlight?: boolean }) {
  return (
    <Formula highlight={highlight}>
      <span className="text-xl md:text-2xl">
        <Fraction 
          numerator="a" 
          denominator={<>sin(α)</>} 
        />
        {' = '}
        <Fraction 
          numerator="b" 
          denominator={<>sin(β)</>} 
        />
        {' = '}
        <Fraction 
          numerator="c" 
          denominator={<>sin(γ)</>} 
        />
      </span>
    </Formula>
  );
}

export function KosinusFormula({ highlight = false, variant = 'a' }: { highlight?: boolean; variant?: 'a' | 'b' | 'c' }) {
  const formulas = {
    a: (
      <>
        a<Sup>2</Sup> = b<Sup>2</Sup> + c<Sup>2</Sup> - 2·b·c·cos(α)
      </>
    ),
    b: (
      <>
        b<Sup>2</Sup> = a<Sup>2</Sup> + c<Sup>2</Sup> - 2·a·c·cos(β)
      </>
    ),
    c: (
      <>
        c<Sup>2</Sup> = a<Sup>2</Sup> + b<Sup>2</Sup> - 2·a·b·cos(γ)
      </>
    ),
  };

  return (
    <Formula highlight={highlight}>
      <span className="text-xl md:text-2xl">
        {formulas[variant]}
      </span>
    </Formula>
  );
}

// Step-by-step formula display
interface FormulaStepProps {
  step: number;
  description: string;
  formula: React.ReactNode;
  highlight?: boolean;
}

export function FormulaStep({ step, description, formula, highlight = false }: FormulaStepProps) {
  return (
    <div className={`mb-4 p-4 rounded-xl border-2 ${highlight ? 'border-[#5856D6] bg-[#5856D6]/5' : 'border-slate-200 bg-white'}`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#5856D6] text-white flex items-center justify-center font-bold flex-shrink-0">
          {step}
        </div>
        <p className="text-slate-700 font-medium flex-1">{description}</p>
      </div>
      <div className="ml-11 font-mono text-lg bg-slate-50 p-3 rounded-lg">
        {formula}
      </div>
    </div>
  );
}
