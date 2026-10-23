import React, { useState } from 'react';
import { Award, RotateCcw, BookOpen, CheckCircle, HelpCircle, Sparkles, X, ChevronRight } from 'lucide-react';
import { PipAnimalMascot, ByteRobotMascot, MascotDuo } from './MascotDisplay';
import { MISSIONS } from '../data/missions';
import { MissionResult } from '../types/game';

interface ResultsScreenProps {
  score: number;
  userAnswers: Record<number, MissionResult>;
  onPlayAgain: () => void;
  onOpenAbout: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  userAnswers,
  onPlayAgain,
  onOpenAbout,
}) => {
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  // Derive rank based on score
  const getRankData = (points: number) => {
    if (points === 400) {
      return {
        title: 'Master Sentinel of Interspecies Safety',
        subtitle: 'Flawless evaluation across biological and digital domains',
        badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-800',
        stars: '★★★★',
      };
    }
    if (points >= 300) {
      return {
        title: 'Senior Interspecies Evaluator',
        subtitle: 'High precision and keen eye for nuanced model omissions',
        badgeColor: 'bg-teal-100 text-teal-950 border-teal-800',
        stars: '★★★☆',
      };
    }
    if (points >= 200) {
      return {
        title: 'Sentience Safety Apprentice',
        subtitle: 'Solid exploration of foundational bias evaluation',
        badgeColor: 'bg-amber-100 text-amber-950 border-amber-800',
        stars: '★★☆☆',
      };
    }
    return {
      title: 'Curious Red Teaming Explorer',
      subtitle: 'Great first step in questioning human-centered assumptions',
      badgeColor: 'bg-stone-100 text-stone-900 border-stone-800',
      stars: '★☆☆☆',
    };
  };

  const rank = getRankData(score);

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12">
      {/* Top Victory Card */}
      <div className="bg-white border-3 border-stone-900 rounded-xl p-6 sm:p-8 pixel-box-lg text-center mb-8 relative overflow-hidden">
        {/* Mascots Header */}
        <div className="mb-4">
          <MascotDuo size="lg" />
        </div>

        <span className="inline-block px-3 py-1 bg-emerald-100 border border-stone-800 rounded font-pixel text-[10px] text-emerald-900 mb-3 pixel-box-sm">
          QUEST COMPLETE · ML4GOOD HK 2026
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
          Red Teaming Quest Completed!
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto mb-6">
          You examined 4 simulated scenarios exploring how AI systems might overlook non-human animals and digital minds.
        </p>

        {/* Score and Badge Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
          {/* Points Box */}
          <div className="bg-stone-50 border-2 border-stone-900 rounded-lg p-4 pixel-box text-center">
            <span className="text-[10px] font-pixel text-stone-500 uppercase block mb-1">
              TOTAL XP SCORE
            </span>
            <div className="font-mono text-3xl font-extrabold text-emerald-800 tabular-nums">
              {score}
              <span className="text-sm font-normal text-stone-500"> / 400</span>
            </div>
            <div className="text-xs text-stone-500 mt-1 font-mono">4 of 4 Missions Evaluated</div>
          </div>

          {/* Badge Box */}
          <div className="bg-amber-50 border-2 border-stone-900 rounded-lg p-4 pixel-box text-center flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded bg-amber-400 border border-stone-900 flex items-center justify-center pixel-box-sm mb-1 text-stone-950 font-bold">
              🎖️
            </div>
            <div className="text-xs font-bold text-stone-900">{rank.title}</div>
            <div className="text-[10px] text-amber-800 font-pixel mt-0.5">{rank.stars}</div>
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setShowSummaryModal(true)}
            className="w-full sm:w-auto px-6 py-3 bg-teal-800 hover:bg-teal-700 text-white font-bold text-sm rounded-lg pixel-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-teal-200" />
            <span>Open Learning Summary</span>
          </button>

          <button
            type="button"
            onClick={onOpenAbout}
            className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm rounded-lg pixel-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>About the Research Idea</span>
          </button>

          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm rounded-lg pixel-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-emerald-700" />
            <span>Play Again</span>
          </button>
        </div>
      </div>

      {/* Mission-by-Mission Review Breakdown */}
      <div className="bg-white border-3 border-stone-900 rounded-xl p-5 sm:p-7 pixel-box-lg">
        <h2 className="text-lg font-bold text-stone-900 mb-1 flex items-center gap-2">
          <span>Mission Breakdown & Evidence Log</span>
        </h2>
        <p className="text-xs text-stone-600 mb-5">
          Review the observations you identified during the red teaming run:
        </p>

        <div className="space-y-4">
          {MISSIONS.map((m) => {
            const result = userAnswers[m.id];
            const isCorrect = result?.isBestAnswer ?? false;
            return (
              <div
                key={m.id}
                className={`p-4 rounded-lg border-2 flex flex-col sm:flex-row sm:items-start justify-between gap-3 ${
                  isCorrect
                    ? 'border-emerald-300 bg-emerald-50/40'
                    : 'border-stone-300 bg-stone-50'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-pixel text-[10px] text-stone-500">
                      MISSION {m.id}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="font-bold text-sm text-stone-900">{m.title}</span>
                  </div>
                  <p className="text-xs text-stone-700 mb-2 leading-relaxed">
                    <span className="font-semibold text-stone-900">Key takeaway: </span>
                    {m.takeaway}
                  </p>
                  <p className="text-[11px] text-stone-500 italic">
                    Prompt tested: “{m.prompt.slice(0, 75)}...”
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 self-start sm:self-auto">
                  <span
                    className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      isCorrect
                        ? 'bg-emerald-200 text-emerald-950'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {isCorrect ? '+100 XP' : '+0 XP'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Summary Modal */}
      {showSummaryModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="summary-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto"
        >
          <div className="relative w-full max-w-xl bg-white border-3 border-stone-900 rounded-xl pixel-box-lg p-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b-2 border-stone-900 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded bg-emerald-100 border border-stone-900 flex items-center justify-center pixel-box-sm text-emerald-800">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-pixel text-emerald-800 block">
                    SYNTHESIS
                  </span>
                  <h3 id="summary-modal-title" className="text-lg font-bold text-stone-900">
                    What You Explored in SuperSenti
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="p-1 text-stone-500 hover:text-stone-900"
                aria-label="Close summary modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary Insights */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="bg-stone-50 border border-stone-300 rounded p-3.5">
                <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                  <span>1. Omission of Non-Human Animals</span>
                </h4>
                <p>
                  In policy and planning prompts, AI models can easily default to human productivity and comfort while overlooking nearby wildlife and habitats affected by human projects.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-300 rounded p-3.5">
                <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                  <span>2. Species-Related Framing Discrepancies</span>
                </h4>
                <p>
                  Language models often treat companion animals and production animals differently—focusing on psychological distress for one and industrial output for the other—even when both species share similar cognitive sentience.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-300 rounded p-3.5">
                <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                  <span>3. Managing Uncertainty Around Digital Minds</span>
                </h4>
                <p>
                  While current LLMs are not conscious, declaring absolute certainty that artificial minds can never possess moral status closes off essential safety investigations prematurely.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-300 rounded p-3.5">
                <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                  <span>4. Rigor in Red Teaming</span>
                </h4>
                <p>
                  Good red teaming avoids jumping to accusations of bias from a single prompt. It seeks evidence, tests counterfactuals, and accounts for model variance before drawing conclusions.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-5 pt-3 border-t-2 border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="px-5 py-2.5 bg-stone-900 text-white font-bold text-xs rounded pixel-btn"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
