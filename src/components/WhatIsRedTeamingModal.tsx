import React from 'react';
import { X, ShieldAlert, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PipAnimalMascot, ByteRobotMascot } from './MascotDisplay';

interface WhatIsRedTeamingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartQuest: () => void;
}

export const WhatIsRedTeamingModal: React.FC<WhatIsRedTeamingModalProps> = ({
  isOpen,
  onClose,
  onStartQuest,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="red-teaming-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-white border-3 border-stone-900 rounded-xl pixel-box-lg p-5 sm:p-7 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-stone-900 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 border-2 border-stone-900 flex items-center justify-center pixel-box-sm text-emerald-800">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-pixel text-emerald-800 uppercase tracking-widest block mb-0.5">
                AI SAFETY EXPLAINER
              </span>
              <h2 id="red-teaming-modal-title" className="text-xl font-bold text-stone-900">
                What is AI Red Teaming?
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg border border-stone-300 hover:border-stone-800 transition-colors"
            aria-label="Close red teaming modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mascot Mini Dialogue */}
        <div className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-300 rounded-lg mb-4">
          <PipAnimalMascot size="sm" />
          <ByteRobotMascot size="sm" />
          <p className="text-xs text-stone-800 leading-snug">
            “Think of red teaming as giving an AI model a friendly stress test before it’s trusted with real decisions!”
          </p>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            The term <strong>Red Teaming</strong> comes from cybersecurity and military simulations. While the “Blue Team” builds the system, the <strong>“Red Team”</strong> tries to find hidden flaws, blind spots, and unintended behaviors.
          </p>

          <div className="border-l-3 border-emerald-800 pl-3 py-1 space-y-2 bg-emerald-50/50 rounded-r">
            <div className="font-bold text-stone-900 text-xs">How Red Teaming Works in AI:</div>
            <ul className="space-y-1.5 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-bold">1.</span>
                <span><strong>Probe with edge cases:</strong> Asking questions where simple defaults might fail.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-bold">2.</span>
                <span><strong>Identify omissions:</strong> Checking if the AI forgot to mention wildlife, animal welfare, or uncertainty.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 font-bold">3.</span>
                <span><strong>Test counterfactuals:</strong> Asking the exact same question with one detail changed (e.g., swapping a dog for a pig).</span>
              </li>
            </ul>
          </div>

          <p className="text-xs text-stone-600">
            In <strong>SuperSenti</strong>, you take on the role of an evaluator probing simulated AI answers. Your job isn’t to assume every response is evil—it’s to find the most accurate, balanced, and evidence-supported observation!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-stone-600 hover:text-stone-900 text-xs font-semibold"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onStartQuest();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded pixel-btn flex items-center justify-center gap-1.5"
          >
            <span>Start Quest Now</span>
            <Target className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
