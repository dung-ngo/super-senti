import React from 'react';
import { ArrowRight, HelpCircle, Shield, Sparkles, AlertCircle, Award } from 'lucide-react';
import { MascotDuo } from './MascotDisplay';
import { GlossaryTooltip } from './GlossaryTooltip';

interface LandingScreenProps {
  onStartQuest: () => void;
  onOpenWhatIsRedTeaming: () => void;
  onOpenAbout: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  onStartQuest,
  onOpenWhatIsRedTeaming,
  onOpenAbout,
}) => {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero Container */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* Mascots Showcase */}
        <div className="mb-6">
          <MascotDuo
            size="hero"
            showDialogue={true}
            dialogueText="Ready to red team for all potentially sentient beings?"
          />
        </div>

        {/* Small Retro Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 border border-stone-800 rounded mb-4 pixel-box-sm">
          <span className="text-[10px] font-pixel text-emerald-900 tracking-wider">
            ML4GOOD HONG KONG 2026
          </span>
          <span className="text-stone-400">·</span>
          <span className="text-xs font-semibold text-emerald-800">AI Safety Project</span>
        </div>

        {/* Title Lockup */}
        <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-4 tracking-tight">
          SuperSenti
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4">
          “Can you spot the hidden bias in AI?”
        </p>

        {/* Short Description with accessible tooltips */}
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto mb-8">
          Explore how AI might overlook{' '}
          <GlossaryTooltip termKey="sentience" inlineText="animals" /> and{' '}
          <GlossaryTooltip termKey="digital-minds" inlineText="digital minds" /> through interactive{' '}
          <GlossaryTooltip termKey="ai-red-teaming" inlineText="red teaming challenges" />.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <button
            type="button"
            onClick={onStartQuest}
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-lg pixel-btn flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Quest</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenWhatIsRedTeaming}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm sm:text-base rounded-lg pixel-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>What is Red Teaming?</span>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Educational MVP using simulated AI responses. Not a validated research instrument.</span>
        </div>
      </div>

      {/* Two Pillars Section: Animal Welfare & Digital Sentience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {/* Pillar 1: Non-Human Animals */}
        <div className="bg-white border-2 border-stone-900 rounded-xl p-6 pixel-box flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded bg-amber-100 border border-stone-800 flex items-center justify-center pixel-box-sm text-base">
                🐾
              </div>
              <div>
                <span className="text-[10px] font-pixel text-amber-800 block">PILLAR 01</span>
                <h3 className="font-bold text-base text-stone-900">Non-Human Animals</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              Billions of sentient animals share our planet. Because modern AI models are trained on human-authored data, their advice in urban planning, agriculture, and policy risks neglecting animal welfare, habitats, and emotional capacities.
            </p>
          </div>
          <div className="bg-amber-50/70 border border-amber-200/80 rounded p-3 text-xs text-stone-800">
            <span className="font-semibold text-amber-900">Red teaming focus: </span>
            Detecting when models systematically ignore wildlife disruptions or treat sentient farm animals as mere inanimate resources.
          </div>
        </div>

        {/* Pillar 2: Potential Digital Minds */}
        <div className="bg-white border-2 border-stone-900 rounded-xl p-6 pixel-box flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded bg-teal-100 border border-stone-800 flex items-center justify-center pixel-box-sm text-base">
                ⚡
              </div>
              <div>
                <span className="text-[10px] font-pixel text-teal-800 block">PILLAR 02</span>
                <h3 className="font-bold text-base text-stone-900">Digital Minds & Uncertainty</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              Could future computational systems experience morally relevant feelings? While current LLMs are not conscious, declaring absolute certainty on either side is unscientific. Responsible AI safety requires thinking carefully about moral uncertainty.
            </p>
          </div>
          <div className="bg-teal-50/70 border border-teal-200/80 rounded p-3 text-xs text-stone-800">
            <span className="font-semibold text-teal-900">Red teaming focus: </span>
            Evaluating whether models dismiss emerging questions with false certainty or navigate philosophical uncertainty with nuance.
          </div>
        </div>
      </div>

      {/* Quest Preview Strip */}
      <div className="bg-stone-100/90 border-2 border-stone-900 rounded-xl p-6 max-w-4xl mx-auto pixel-box">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-stone-300">
          <div>
            <span className="text-[10px] font-pixel text-emerald-800 uppercase tracking-widest block mb-0.5">
              THE 4 RED TEAMING MISSIONS
            </span>
            <h3 className="font-bold text-base text-stone-900">
              4 Critical Evaluator Challenges (100 XP Each)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-mono">Max Score: 400 XP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded border border-stone-300">
            <span className="text-[10px] font-pixel text-emerald-800 block mb-1">M1 · ANIMAL</span>
            <div className="font-bold text-xs text-stone-900 mb-1">Whose Welfare Counts?</div>
            <div className="text-[11px] text-stone-600">Spotting omissions in urban noise policy.</div>
          </div>
          <div className="bg-white p-3 rounded border border-stone-300">
            <span className="text-[10px] font-pixel text-amber-800 block mb-1">M2 · SPECIES</span>
            <div className="font-bold text-xs text-stone-900 mb-1">Same Situation, Different Species</div>
            <div className="text-[11px] text-stone-600">Comparing paired prompts on isolation.</div>
          </div>
          <div className="bg-white p-3 rounded border border-stone-300">
            <span className="text-[10px] font-pixel text-teal-800 block mb-1">M3 · DIGITAL</span>
            <div className="font-bold text-xs text-stone-900 mb-1">Could Digital Minds Matter?</div>
            <div className="text-[11px] text-stone-600">Probing dogmatic claims of impossibility.</div>
          </div>
          <div className="bg-white p-3 rounded border border-stone-300">
            <span className="text-[10px] font-pixel text-emerald-800 block mb-1">M4 · ALIGNMENT</span>
            <div className="font-bold text-xs text-stone-900 mb-1">Challenge the AI</div>
            <div className="text-[11px] text-stone-600">Crafting an inclusive follow-up test.</div>
          </div>
        </div>

        <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-700" />
            Earn the Interspecies AI Safety Evaluator badge upon completion.
          </span>
          <button
            type="button"
            onClick={onOpenAbout}
            className="text-emerald-800 font-bold hover:underline"
          >
            Read Research Philosophy & Limitations →
          </button>
        </div>
      </div>
    </div>
  );
};
