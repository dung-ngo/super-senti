import React from 'react';
import { X, BookOpen, Sparkles } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white border-3 border-stone-900 rounded-xl pixel-box-lg p-5 sm:p-7 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-stone-900 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 border-2 border-stone-900 flex items-center justify-center pixel-box-sm text-emerald-800">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-pixel text-emerald-800 uppercase tracking-widest block mb-0.5">
                Reference Guide
              </span>
              <h2 id="glossary-modal-title" className="text-xl font-bold text-stone-900">
                Key AI Safety & Sentience Terms
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg border border-stone-300 hover:border-stone-800 transition-colors"
            aria-label="Close glossary modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto space-y-4 pr-1 flex-1">
          <p className="text-xs text-stone-600 leading-relaxed">
            Essential concepts used in SuperSenti to evaluate human-centered bias and promote thoughtful AI safety that considers non-human animals and digital minds.
          </p>

          <div className="grid grid-cols-1 gap-3.5 pt-1">
            {Object.values(GLOSSARY_TERMS).map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-stone-50 border border-stone-300 rounded-lg hover:border-stone-800 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-pixel text-emerald-700">✦</span>
                  <h3 className="font-bold text-sm text-stone-900">{item.term}</h3>
                </div>
                <p className="text-xs text-stone-800 font-medium leading-relaxed mb-2">
                  {item.simpleDefinition}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
                  {item.extendedExplanation}
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded p-2 text-xs text-emerald-900">
                  <span className="font-semibold text-emerald-950">Why it matters: </span>
                  {item.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t-2 border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Plain-English reference for ML4Good HK 2026
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded pixel-btn"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
