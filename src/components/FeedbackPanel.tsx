import React from 'react';
import { Mission } from '../types/game';
import { Check, AlertTriangle, ArrowRight, Lightbulb, Compass, Award } from 'lucide-react';
import { PipAnimalMascot, ByteRobotMascot } from './MascotDisplay';

interface FeedbackPanelProps {
  mission: Mission;
  selectedOptionId: 'A' | 'B' | 'C';
  onNextMission: () => void;
  isLastMission: boolean;
  score: number;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  mission,
  selectedOptionId,
  onNextMission,
  isLastMission,
  score,
}) => {
  const isBestAnswer = selectedOptionId === mission.correctOptionId;
  const chosenOption = mission.options.find((opt) => opt.id === selectedOptionId);

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-8">
      {/* Result Status Banner */}
      <div
        className={`border-3 border-stone-900 rounded-xl p-5 sm:p-6 mb-6 pixel-box-lg ${
          isBestAnswer ? 'bg-emerald-50' : 'bg-amber-50'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-lg border-2 border-stone-900 flex items-center justify-center pixel-box shrink-0 ${
                isBestAnswer ? 'bg-emerald-700 text-white' : 'bg-amber-500 text-stone-900'
              }`}
            >
              {isBestAnswer ? (
                <Check className="w-7 h-7 stroke-[3]" />
              ) : (
                <AlertTriangle className="w-6 h-6 stroke-[2.5]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[10px] text-stone-600 uppercase">
                  EVALUATION RESULT
                </span>
                <span className="text-stone-400">·</span>
                <span className="font-mono text-xs font-bold text-stone-700">
                  {isBestAnswer ? '+100 XP AWARDED' : '+0 XP (NEEDS NUANCE)'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                {isBestAnswer
                  ? 'Strong Observation! You spotted the nuanced angle.'
                  : 'A Common Trap in Red Teaming! Let’s unpack it.'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-stone-800 pixel-box-sm self-start sm:self-auto">
            <span className="text-xs font-pixel text-amber-700">TOTAL</span>
            <span className="font-mono text-sm font-bold text-stone-900 tabular-nums">
              {score} XP
            </span>
          </div>
        </div>

        {/* Selected answer recap */}
        <div className="mt-4 pt-3 border-t border-stone-300 text-xs text-stone-700">
          <span className="font-semibold text-stone-900">Your selection: </span>
          <span className="font-mono font-bold text-stone-900">[{selectedOptionId}]</span>{' '}
          <span>{chosenOption?.text}</span>
        </div>
      </div>

      {/* Main Feedback Content Container */}
      <div className="bg-white border-3 border-stone-900 rounded-xl p-5 sm:p-7 pixel-box-lg space-y-6 mb-6">
        {/* Mascot Quick Reaction */}
        <div className="flex items-start gap-4 p-4 bg-stone-50 border border-stone-300 rounded-lg">
          {mission.categorySlug === 'animal' || mission.categorySlug === 'species' ? (
            <PipAnimalMascot size="sm" />
          ) : (
            <ByteRobotMascot size="sm" />
          )}
          <div className="flex-1">
            <span className="text-[10px] font-pixel text-emerald-800 block mb-0.5">
              EVALUATOR REASONING
            </span>
            <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-medium">
              {mission.explanation}
            </p>
          </div>
        </div>

        {/* Deep Dive: What makes this response potentially concerning */}
        <div className="border border-stone-300 rounded-lg p-4 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-900 mb-2">
            <Compass className="w-4 h-4 text-rose-700" />
            <span>WHAT MAKES THIS POTENTIALLY CONCERNING</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {mission.concernHighlight}
          </p>
        </div>

        {/* Scientific Uncertainty Notice */}
        <div className="border border-amber-300 bg-amber-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>SCIENTIFIC RIGOR & UNCERTAINTY</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            {mission.uncertaintyNote}
          </p>
        </div>

        {/* Educational Takeaway Box */}
        <div className="border-2 border-emerald-800 bg-emerald-50 rounded-lg p-4 pixel-box-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 mb-1">
            <Lightbulb className="w-4 h-4 text-emerald-700" />
            <span className="font-pixel text-[10px]">CORE TAKEAWAY</span>
          </div>
          <p className="text-sm font-bold text-emerald-950 leading-snug">
            “{mission.takeaway}”
          </p>
        </div>

        {/* Bottom CTA to proceed */}
        <div className="pt-4 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500">
            {isLastMission
              ? 'All 4 challenges completed! Ready for your evaluation summary?'
              : 'Continue to probe the next boundary of interspecies AI safety.'}
          </span>

          <button
            type="button"
            onClick={onNextMission}
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg pixel-btn flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>{isLastMission ? 'View Final Results' : 'Next Mission'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
