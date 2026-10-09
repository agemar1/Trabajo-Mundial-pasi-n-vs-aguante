import React from 'react';

interface SolDeMayoProps {
  className?: string;
  size?: number;
}

export const SolDeMayo: React.FC<SolDeMayoProps> = ({ className = "w-12 h-12", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sol de Mayo de la Bandera Argentina"
      role="img"
    >
      <circle cx="50" cy="50" r="18" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
      {/* 16 straight and 16 wavy rays */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = i * 22.5;
        return (
          <g key={`straight-${i}`} transform={`rotate(${angle} 50 50)`}>
            <polygon points="48.5,10 51.5,10 50,2" fill="#F59E0B" />
            <polygon points="47.5,31 52.5,31 50,11" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
          </g>
        );
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = i * 22.5 + 11.25;
        return (
          <g key={`wavy-${i}`} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M48.5 31 C 45 22, 53 18, 50 10 C 49 14, 51 22, 51.5 31 Z"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="0.8"
            />
          </g>
        );
      })}
      {/* Face features (traditional Sun of May) */}
      <circle cx="43" cy="47" r="2" fill="#78350F" />
      <circle cx="57" cy="47" r="2" fill="#78350F" />
      <path d="M41 43 Q43 41 45 43" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M55 43 Q57 41 59 43" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M50 47 L48.5 52 L51.5 52 Z" fill="#D97706" />
      <path d="M44 56 Q50 61 56 56" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
};
