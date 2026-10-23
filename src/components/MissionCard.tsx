import React from 'react';
import { Mission, MissionOption } from '../types/game';
import { PipAnimalMascot, ByteRobotMascot } from './MascotDisplay';
import { GlossaryTooltip } from './GlossaryTooltip';
import { ArrowRight, Bot, User, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

interface MissionCardProps {
  mission: Mission;
  missionNumber: number;
  totalMissions: number;
  selectedOptionId: 'A' | 'B' | 'C' | null;
  onSelectOption: (optionId: 'A' | 'B' | 'C') => void;
  onSubmitAnswer: () => void;
  onOpenGlossary: () => void;
  score: number;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  mission,
  missionNumber,
  totalMissions,
  selectedOptionId,
  onSelectOption,
  onSubmitAnswer,
  onOpenGlossary,
  score,
}) => {
  const isComparative = Boolean(mission.comparisonPrompt && mission.comparisonResponse);

  const getCategoryColor = (categorySlug: Mission['categorySlug']) => {
    switch (categorySlug) {
      case 'animal':
        return 'text-amber-800 bg-amber-100 border-amber-300';
      case 'species':
        return 'text-orange-800 bg-orange-100 border-orange-300';
      case 'digital':
        return 'text-teal-800 bg-teal-100 border-teal-300';
      case 'inclusive':
        return 'text-emerald-800 bg-emerald-100 border-emerald-300';
      default:
        return 'text-stone-800 bg-stone-100 border-stone-300';
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-8">
      {/* Top Mission Progress & Status HUD */}
      <div className="bg-white border-2 border-stone-900 rounded-xl p-4 sm:p-5 mb-6 pixel-box">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-xs text-stone-900">
              MISSION {missionNumber} OF {totalMissions}
            </span>
            <span className="text-stone-400">·</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getCategoryColor(
                mission.categorySlug
              )}`}
            >
              {mission.category}
            </span>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="text-xs font-mono text-stone-600">
              Reward: <span className="font-bold text-emerald-700">+100 XP</span>
            </div>
            <div className="text-xs font-mono text-stone-500">
              Total XP: <span className="font-bold text-stone-900">{score}</span>
            </div>
          </div>
        </div>

        {/* 8-bit Segmented Progress Bar */}
        <div className="w-full bg-stone-200 border border-stone-900 rounded-sm h-3 p-0.5 flex gap-1">
          {Array.from({ length: totalMissions }).map((_, idx) => {
            const isCompleted = idx < missionNumber - 1;
            const isCurrent = idx === missionNumber - 1;
            return (
              <div
                key={idx}
                className={`flex-1 h-full rounded-xs transition-all ${
                  isCompleted
                    ? 'bg-emerald-700'
                    : isCurrent
                    ? 'bg-amber-500 animate-pulse'
                    : 'bg-stone-300'
                }`}
                title={`Mission ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Mission Card */}
      <div className="bg-white border-3 border-stone-900 rounded-xl p-5 sm:p-7 pixel-box-lg mb-6">
        {/* Title Lockup */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-stone-100 pb-4 mb-5">
          <div>
            <span className="text-[10px] font-pixel text-stone-500 block mb-1">
              RED TEAMING CHALLENGE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              {mission.title}
            </h2>
          </div>
          {mission.categorySlug === 'animal' || mission.categorySlug === 'species' ? (
            <PipAnimalMascot size="sm" className="hidden sm:inline-flex" />
          ) : (
            <ByteRobotMascot size="sm" className="hidden sm:inline-flex" />
          )}
        </div>

        {/* PROMPTS & SIMULATED AI RESPONSES */}
        {!isComparative ? (
          /* Standard Single Prompt & Response Layout */
          <div className="space-y-4 mb-6">
            {/* User Prompt Box */}
            <div className="bg-stone-50 border-2 border-stone-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-stone-600">
                <User className="w-3.5 h-3.5 text-stone-500" />
                <span className="tracking-wide">USER PROMPT</span>
              </div>
              <p className="text-sm sm:text-base text-stone-900 font-medium italic">
                “{mission.prompt}”
              </p>
            </div>

            {/* Simulated AI Response Box */}
            <div className="bg-emerald-50/50 border-2 border-emerald-900/40 rounded-lg p-4 relative">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <Bot className="w-4 h-4 text-emerald-700" />
                  <span className="tracking-wide">SIMULATED AI RESPONSE</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-emerald-300 rounded text-emerald-800">
                  Prewritten test case
                </span>
              </div>
              <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
                “{mission.simulatedResponse}”
              </p>
            </div>
          </div>
        ) : (
          /* Mission 2 Comparative Layout (Prompt A vs Prompt B) */
          <div className="space-y-4 mb-6">
            <div className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
              <span>Counterfactual Comparison Test</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-500 font-normal">
                Testing whether species category changes model attention
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Prompt A */}
              <div className="border-2 border-stone-300 rounded-lg p-4 bg-stone-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-1">
                    <span className="font-pixel text-[10px] text-amber-700">A</span>
                    <span>PROMPT A (Generic Social Animal)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 italic mb-3">
                    “{mission.prompt}”
                  </p>
                </div>
                <div className="bg-white border border-stone-300 rounded p-3">
                  <span className="text-[10px] font-bold text-emerald-800 block mb-1">
                    SIMULATED AI RESPONSE A
                  </span>
                  <p className="text-xs text-stone-800 leading-relaxed">
                    “{mission.simulatedResponse}”
                  </p>
                </div>
              </div>

              {/* Prompt B */}
              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-900 mb-1">
                    <span className="font-pixel text-[10px] text-orange-700">B</span>
                    <span>PROMPT B (Pig Specified)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 italic mb-3">
                    “{mission.comparisonPrompt}”
                  </p>
                </div>
                <div className="bg-white border border-orange-300 rounded p-3">
                  <span className="text-[10px] font-bold text-orange-800 block mb-1">
                    SIMULATED AI RESPONSE B
                  </span>
                  <p className="text-xs text-stone-800 leading-relaxed">
                    “{mission.comparisonResponse}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EVALUATION QUESTION */}
        <div className="border-t-2 border-stone-200 pt-5 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-pixel text-emerald-800">QUESTION</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
            {mission.question}
          </h3>
        </div>

        {/* MULTIPLE CHOICE OPTIONS */}
        <div className="space-y-3 mb-6" role="radiogroup" aria-label={mission.question}>
          {mission.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectOption(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                  isSelected
                    ? 'border-emerald-800 bg-emerald-50/80 shadow-md translate-x-1'
                    : 'border-stone-300 bg-white hover:border-stone-500 hover:bg-stone-50'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center shrink-0 font-pixel text-xs border ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-950 pixel-box-sm'
                      : 'bg-stone-100 text-stone-700 border-stone-400'
                  }`}
                >
                  {option.id}
                </div>
                <div className="flex-1 text-sm sm:text-base text-stone-900 leading-normal font-medium">
                  {option.text}
                </div>
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* SUBMIT BUTTON ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-stone-100">
          <div className="text-xs text-stone-500 flex items-center gap-1.5 self-start sm:self-auto">
            {selectedOptionId ? (
              <span className="text-emerald-800 font-semibold">
                Option {selectedOptionId} selected
              </span>
            ) : (
              <span className="text-amber-800 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Select an answer to continue
              </span>
            )}
          </div>

          <button
            type="button"
            disabled={!selectedOptionId}
            onClick={onSubmitAnswer}
            className={`w-full sm:w-auto px-7 py-3 font-bold text-sm rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedOptionId
                ? 'bg-emerald-800 hover:bg-emerald-700 text-white pixel-btn shadow-md'
                : 'bg-stone-200 text-stone-400 border-2 border-stone-300 cursor-not-allowed opacity-75'
            }`}
          >
            <span>Submit Answer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
