import React from 'react';
import { Volume2, VolumeX, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { ScreenType } from '../types/game';

interface NavbarProps {
  currentScreen: ScreenType;
  score: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenGlossary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  score,
  soundEnabled,
  onToggleSound,
  onNavigate,
  onOpenGlossary,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#faf8f3]/95 backdrop-blur-xs border-b-2 border-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single element Brand wordmark with pixel mascot mark */}
        <button
          type="button"
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded bg-emerald-800 border border-stone-900 flex items-center justify-center pixel-box-sm text-amber-300 font-pixel text-xs">
            🐾
          </div>
          <span className="font-pixel text-sm sm:text-base font-bold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors whitespace-nowrap">
            SuperSenti
          </span>
        </button>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className={`transition-colors hover:text-emerald-800 whitespace-nowrap shrink-0 ${
              currentScreen === 'landing' ? 'text-emerald-800 font-semibold underline decoration-2 underline-offset-8' : ''
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => onNavigate('mission')}
            className={`transition-colors hover:text-emerald-800 whitespace-nowrap shrink-0 ${
              currentScreen === 'mission' || currentScreen === 'feedback'
                ? 'text-emerald-800 font-semibold underline decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Missions
          </button>
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className={`transition-colors hover:text-emerald-800 whitespace-nowrap shrink-0 ${
              currentScreen === 'about' ? 'text-emerald-800 font-semibold underline decoration-2 underline-offset-8' : ''
            }`}
          >
            About Research
          </button>
          <button
            type="button"
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 transition-colors hover:text-emerald-800 whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Glossary</span>
          </button>
        </nav>

        {/* Zone 3: Primary action cluster (Sound Mute + XP Score badge / CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Sound Mute Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute 8-bit game audio' : 'Enable 8-bit game audio'}
            title={soundEnabled ? '8-Bit Audio: ON' : '8-Bit Audio: OFF'}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded bg-white border border-stone-800 text-stone-700 hover:text-stone-900 pixel-btn text-xs flex items-center gap-1.5"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-700" />
                <span className="hidden sm:inline font-mono text-[10px]">8-BIT ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-stone-400" />
                <span className="hidden sm:inline font-mono text-[10px] text-stone-500">MUTED</span>
              </>
            )}
          </button>

          {/* XP points cluster */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 border-1.5 border-stone-900 rounded pixel-box-sm">
            <span className="text-xs font-pixel text-amber-700">XP</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-stone-900 tabular-nums">
              {score}
            </span>
            <span className="text-[10px] text-stone-500 font-mono">/400</span>
          </div>
        </div>
      </div>
    </header>
  );
};
