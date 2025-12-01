'use client';

import React from 'react';

interface Point {
  x: number;
  y: number;
}

interface TriangleProps {
  vertices?: {
    A: Point;
    B: Point;
    C: Point;
  };
  showLabels?: boolean;
  showSides?: boolean;
  showAngles?: boolean;
  highlightSide?: 'a' | 'b' | 'c' | null;
  highlightAngle?: 'alpha' | 'beta' | 'gamma' | null;
  sideValues?: {
    a?: string;
    b?: string;
    c?: string;
  };
  angleValues?: {
    alpha?: string;
    beta?: string;
    gamma?: string;
  };
  interactive?: boolean;
  onSideClick?: (side: 'a' | 'b' | 'c') => void;
  onAngleClick?: (angle: 'alpha' | 'beta' | 'gamma') => void;
  className?: string;
}

export function Triangle({
  vertices = {
    A: { x: 200, y: 50 },
    B: { x: 50, y: 250 },
    C: { x: 350, y: 250 }
  },
  showLabels = true,
  showSides = true,
  showAngles = true,
  highlightSide = null,
  highlightAngle = null,
  sideValues = {},
  angleValues = {},
  interactive = false,
  onSideClick,
  onAngleClick,
  className = ''
}: TriangleProps) {
  const { A, B, C } = vertices;

  // Calculate midpoints for side labels
  const midAB = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
  const midBC = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
  const midCA = { x: (C.x + A.x) / 2, y: (C.y + A.y) / 2 };

  // Offset for side labels (perpendicular to sides)
  const offsetDistance = 20;
  
  // Side c (AB) - opposite to C
  const sideC_dx = B.x - A.x;
  const sideC_dy = B.y - A.y;
  const sideC_length = Math.sqrt(sideC_dx * sideC_dx + sideC_dy * sideC_dy);
  const sideC_offsetX = -sideC_dy / sideC_length * offsetDistance;
  const sideC_offsetY = sideC_dx / sideC_length * offsetDistance;

  // Side a (BC) - opposite to A
  const sideA_dx = C.x - B.x;
  const sideA_dy = C.y - B.y;
  const sideA_length = Math.sqrt(sideA_dx * sideA_dx + sideA_dy * sideA_dy);
  const sideA_offsetX = -sideA_dy / sideA_length * offsetDistance;
  const sideA_offsetY = sideA_dx / sideA_length * offsetDistance;

  // Side b (CA) - opposite to B
  const sideB_dx = A.x - C.x;
  const sideB_dy = A.y - C.y;
  const sideB_length = Math.sqrt(sideB_dx * sideB_dx + sideB_dy * sideB_dy);
  const sideB_offsetX = -sideB_dy / sideB_length * offsetDistance;
  const sideB_offsetY = sideB_dx / sideB_length * offsetDistance;

  const getSideColor = (side: 'a' | 'b' | 'c') => {
    if (highlightSide === side) return '#5856D6';
    return '#64748b';
  };

  const getAngleColor = (angle: 'alpha' | 'beta' | 'gamma') => {
    if (highlightAngle === angle) return '#AF52DE';
    return '#94a3b8';
  };

  const handleSideClick = (side: 'a' | 'b' | 'c') => {
    if (interactive && onSideClick) {
      onSideClick(side);
    }
  };

  const handleAngleClick = (angle: 'alpha' | 'beta' | 'gamma') => {
    if (interactive && onAngleClick) {
      onAngleClick(angle);
    }
  };

  return (
    <svg 
      viewBox="0 0 400 300" 
      className={`w-full h-auto ${className}`}
      style={{ maxWidth: '500px', margin: '0 auto', display: 'block' }}
    >
      {/* Triangle sides */}
      <line 
        x1={A.x} y1={A.y} x2={B.x} y2={B.y} 
        stroke={getSideColor('c')} 
        strokeWidth={highlightSide === 'c' ? 3 : 2}
        className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
        onClick={() => handleSideClick('c')}
      />
      <line 
        x1={B.x} y1={B.y} x2={C.x} y2={C.y} 
        stroke={getSideColor('a')} 
        strokeWidth={highlightSide === 'a' ? 3 : 2}
        className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
        onClick={() => handleSideClick('a')}
      />
      <line 
        x1={C.x} y1={C.y} x2={A.x} y2={A.y} 
        stroke={getSideColor('b')} 
        strokeWidth={highlightSide === 'b' ? 3 : 2}
        className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
        onClick={() => handleSideClick('b')}
      />

      {/* Angle arcs */}
      {showAngles && (
        <>
          {/* Angle at A (alpha) */}
          <path
            d={`M ${A.x + 30} ${A.y} A 30 30 0 0 1 ${A.x + 21} ${A.y + 21}`}
            fill="none"
            stroke={getAngleColor('alpha')}
            strokeWidth={highlightAngle === 'alpha' ? 2.5 : 1.5}
            className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
            onClick={() => handleAngleClick('alpha')}
          />
          
          {/* Angle at B (beta) */}
          <path
            d={`M ${B.x + 21} ${B.y - 21} A 30 30 0 0 1 ${B.x + 30} ${B.y}`}
            fill="none"
            stroke={getAngleColor('beta')}
            strokeWidth={highlightAngle === 'beta' ? 2.5 : 1.5}
            className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
            onClick={() => handleAngleClick('beta')}
          />
          
          {/* Angle at C (gamma) */}
          <path
            d={`M ${C.x - 30} ${C.y} A 30 30 0 0 1 ${C.x - 21} ${C.y - 21}`}
            fill="none"
            stroke={getAngleColor('gamma')}
            strokeWidth={highlightAngle === 'gamma' ? 2.5 : 1.5}
            className={interactive ? 'cursor-pointer hover:opacity-80' : ''}
            onClick={() => handleAngleClick('gamma')}
          />
        </>
      )}

      {/* Vertices (points) */}
      <circle cx={A.x} cy={A.y} r="4" fill="#1e293b" />
      <circle cx={B.x} cy={B.y} r="4" fill="#1e293b" />
      <circle cx={C.x} cy={C.y} r="4" fill="#1e293b" />

      {/* Vertex labels */}
      {showLabels && (
        <>
          <text x={A.x} y={A.y - 15} textAnchor="middle" className="text-lg font-bold fill-slate-800">A</text>
          <text x={B.x - 15} y={B.y + 20} textAnchor="middle" className="text-lg font-bold fill-slate-800">B</text>
          <text x={C.x + 15} y={C.y + 20} textAnchor="middle" className="text-lg font-bold fill-slate-800">C</text>
        </>
      )}

      {/* Side labels */}
      {showSides && (
        <>
          {/* Side c (AB) */}
          <text 
            x={midAB.x + sideC_offsetX} 
            y={midAB.y + sideC_offsetY} 
            textAnchor="middle" 
            className={`text-base font-semibold ${highlightSide === 'c' ? 'fill-[#5856D6]' : 'fill-slate-600'}`}
          >
            c{sideValues.c ? ` = ${sideValues.c}` : ''}
          </text>
          
          {/* Side a (BC) */}
          <text 
            x={midBC.x + sideA_offsetX} 
            y={midBC.y + sideA_offsetY + 5} 
            textAnchor="middle" 
            className={`text-base font-semibold ${highlightSide === 'a' ? 'fill-[#5856D6]' : 'fill-slate-600'}`}
          >
            a{sideValues.a ? ` = ${sideValues.a}` : ''}
          </text>
          
          {/* Side b (CA) */}
          <text 
            x={midCA.x + sideB_offsetX} 
            y={midCA.y + sideB_offsetY} 
            textAnchor="middle" 
            className={`text-base font-semibold ${highlightSide === 'b' ? 'fill-[#5856D6]' : 'fill-slate-600'}`}
          >
            b{sideValues.b ? ` = ${sideValues.b}` : ''}
          </text>
        </>
      )}

      {/* Angle labels */}
      {showAngles && (
        <>
          <text 
            x={A.x + 40} 
            y={A.y + 10} 
            textAnchor="middle" 
            className={`text-sm font-medium ${highlightAngle === 'alpha' ? 'fill-[#AF52DE]' : 'fill-slate-500'}`}
          >
            α{angleValues.alpha ? ` = ${angleValues.alpha}` : ''}
          </text>
          
          <text 
            x={B.x + 40} 
            y={B.y - 10} 
            textAnchor="middle" 
            className={`text-sm font-medium ${highlightAngle === 'beta' ? 'fill-[#AF52DE]' : 'fill-slate-500'}`}
          >
            β{angleValues.beta ? ` = ${angleValues.beta}` : ''}
          </text>
          
          <text 
            x={C.x - 40} 
            y={C.y - 10} 
            textAnchor="middle" 
            className={`text-sm font-medium ${highlightAngle === 'gamma' ? 'fill-[#AF52DE]' : 'fill-slate-500'}`}
          >
            γ{angleValues.gamma ? ` = ${angleValues.gamma}` : ''}
          </text>
        </>
      )}
    </svg>
  );
}
