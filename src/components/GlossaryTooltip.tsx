import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, X, ExternalLink } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';

interface GlossaryTooltipProps {
  termKey: string;
  children?: React.ReactNode;
  inlineText?: string;
  onOpenFullGlossary?: () => void;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({
  termKey,
  children,
  inlineText,
  onOpenFullGlossary,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const termData = GLOSSARY_TERMS[termKey] || {
    id: termKey,
    term: inlineText || termKey,
    simpleDefinition: 'A key concept in interspecies AI safety.',
    extendedExplanation: 'Explore how AI models evaluate moral status across entities.',
    whyItMatters: 'Important for rigorous AI red teaming.',
  };

  const displayText = children || inlineText || termData.term;

  // Handle outside click to dismiss
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      if (
        isOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <span className="relative inline-flex items-baseline align-baseline">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline decoration-dotted decoration-emerald-500/80 underline-offset-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm"
        title={`Learn about ${termData.term}`}
      >
        <span>{displayText}</span>
        <HelpCircle
          className="w-3.5 h-3.5 inline text-emerald-600 hover:text-emerald-800 transition-colors shrink-0"
          aria-hidden="true"
        />
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label={`Definition: ${termData.term}`}
          className="absolute z-50 left-0 sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-2 w-72 sm:w-80 bg-white border-2 border-stone-900 rounded-lg pixel-box p-3.5 text-stone-900 text-left shadow-xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-stone-200 pb-1.5 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-pixel text-emerald-800 uppercase tracking-wider">
                Glossary
              </span>
              <span className="text-xs text-stone-400">·</span>
              <span className="font-bold text-xs text-stone-900 truncate">
                {termData.term}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 -mr-1 -mt-1 text-stone-500 hover:text-stone-900 rounded focus:outline-none focus:ring-1 focus:ring-stone-800"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Simple Definition */}
          <p className="text-xs text-stone-800 leading-relaxed font-normal mb-2">
            {termData.simpleDefinition}
          </p>

          {/* Why It Matters */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded p-2 text-[11px] text-emerald-950 leading-normal">
            <span className="font-semibold text-emerald-900">Why it matters: </span>
            {termData.whyItMatters}
          </div>

          {/* Footer with full glossary trigger if available */}
          {onOpenFullGlossary && (
            <div className="mt-2.5 pt-1.5 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenFullGlossary();
                }}
                className="text-[11px] font-medium text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>View all terms</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Arrow */}
          <div className="absolute top-full left-6 sm:left-1/2 sm:-translate-x-1/2 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-stone-900 rotate-45 -mt-1.5" />
        </div>
      )}
    </span>
  );
};
