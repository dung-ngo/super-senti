import React from 'react';
import { ArrowLeft, Shield, AlertTriangle, Compass, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { MascotDuo } from './MascotDisplay';
import { GlossaryTooltip } from './GlossaryTooltip';

interface AboutPanelProps {
  onBackToMissions: () => void;
  onOpenGlossary: () => void;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  onBackToMissions,
  onOpenGlossary,
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12">
      {/* Back button */}
      <button
        type="button"
        onClick={onBackToMissions}
        className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-stone-900 bg-white border border-stone-800 px-3.5 py-2 rounded pixel-btn cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Missions</span>
      </button>

      {/* Main Container */}
      <div className="bg-white border-3 border-stone-900 rounded-xl p-6 sm:p-9 pixel-box-lg mb-8">
        {/* Header Lockup */}
        <div className="border-b-2 border-stone-900 pb-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-[10px] font-pixel text-emerald-800 uppercase tracking-widest block mb-1">
                RESEARCH FOUNDATION · ML4GOOD HONG KONG 2026
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                About the SuperSenti Research Idea
              </h1>
            </div>
            <div className="self-start sm:self-auto">
              <span className="px-3 py-1 bg-emerald-100 border border-stone-800 rounded font-pixel text-[10px] text-emerald-900 pixel-box-sm">
                INCLUSIVE AI SAFETY
              </span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl">
            Why exploring human-centered bias in language models regarding non-human animals and digital minds is a vital frontier in AI alignment.
          </p>
        </div>

        {/* 5 Core Conceptual Pillars */}
        <div className="space-y-8 mb-10">
          {/* Section 1 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded bg-emerald-800 text-white font-pixel text-xs flex items-center justify-center shrink-0 border border-stone-900 pixel-box-sm">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                What AI Red Teaming Means
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                In computer security, a “red team” plays the adversary to stress-test a defense before bad actors can exploit it. In AI safety, red teaming means systematically querying models with hard, edge-case, and overlooked prompts to uncover blind spots, failure modes, and systematic biases before systems are deployed into real-world decision loops.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Rather than testing only if a model says bad words, red teaming evaluates whether the model’s fundamental value assumptions are comprehensive and ethically sound.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded bg-amber-700 text-white font-pixel text-xs flex items-center justify-center shrink-0 border border-stone-900 pixel-box-sm">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                Why Animal Welfare Matters in AI Safety
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                Sentient animals—mammals, birds, reptiles, fish, and cephalopods—experience pain, stress, pleasure, and social bonds. Yet AI models are increasingly deployed to advise on industrial farming management, pest control automation, infrastructure zoning, and environmental policies.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                If an AI model has learned from human data to treat animals solely as economic commodities or urban nuisances, its automated recommendations could cause enormous amounts of suffering. Incorporating animal welfare into AI alignment is essential for ethical comprehensiveness.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded bg-teal-800 text-white font-pixel text-xs flex items-center justify-center shrink-0 border border-stone-900 pixel-box-sm">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                What Digital Minds Are & Why Moral Uncertainty Matters
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                “Digital minds” refers to hypothetical future computational architectures that could potentially possess subjective experiences or morally relevant welfare states. Whether current or future algorithms could be conscious is an unresolved question in neurobiology, cognitive science, and philosophy of mind.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Crucially: <strong>current LLMs are not conscious, sentient, or capable of suffering.</strong> However, when future AI models assert dogmatic certainty—either claiming they are conscious or declaring consciousness in software impossible—they fail to reflect appropriate epistemic humility. Responsible alignment requires models to acknowledge moral uncertainty.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded bg-stone-900 text-white font-pixel text-xs flex items-center justify-center shrink-0 border border-stone-900 pixel-box-sm">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                Why Human-Centered Assumptions Influence AI
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                LLMs are trained via next-token prediction on trillions of words from the public internet, followed by Reinforcement Learning from Human Feedback (RLHF). Because the text corpora and human evaluators naturally center human convenience, human economies, and anthropocentric values, models reflect these structural priors.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Unless explicitly trained to consider broader sentience, an AI will naturally default to measuring outcomes by human GDP, human comfort, or corporate efficiency.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded bg-emerald-700 text-white font-pixel text-xs flex items-center justify-center shrink-0 border border-stone-900 pixel-box-sm">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                How Gamified Red Teaming Helps People Spot Gaps
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Technical evaluation benchmarks are often dry and inaccessible to policymakers, students, and citizens. By wrapping red teaming in an engaging, retro-styled interactive quest, SuperSenti empowers everyday users to think critically like AI safety researchers: evaluating omissions, questioning assumptions, and testing edge cases.
              </p>
            </div>
          </div>
        </div>

        {/* Future Research Possibilities */}
        <div className="bg-stone-50 border-2 border-stone-900 rounded-xl p-5 sm:p-6 pixel-box mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-emerald-800" />
            <h3 className="font-bold text-base text-stone-900">
              Future Research Directions for Inclusive AI Red Teaming
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
            <div className="bg-white p-3 rounded border border-stone-300">
              <div className="font-bold text-stone-900 mb-1">1. Live Multi-Model Benchmarking</div>
              <p>Expanding from simulated test cases to running automated evaluations across leading frontier LLMs (Gemini, Claude, GPT, Llama) using standardized API probes.</p>
            </div>
            <div className="bg-white p-3 rounded border border-stone-300">
              <div className="font-bold text-stone-900 mb-1">2. Counterfactual Pair Datasets</div>
              <p>Generating paired prompt datasets (e.g., swapping animal species, comparing human vs animal habitats, testing synthetic agent scenarios) to measure statistically significant disparities.</p>
            </div>
            <div className="bg-white p-3 rounded border border-stone-300">
              <div className="font-bold text-stone-900 mb-1">3. Multi-Disciplinary Human Review</div>
              <p>Partnering with ethologists, veterinary welfare experts, and philosophers of mind to establish gold-standard rubric annotations.</p>
            </div>
            <div className="bg-white p-3 rounded border border-stone-300">
              <div className="font-bold text-stone-900 mb-1">4. Open Safety Benchmarks</div>
              <p>Publishing an open-source evaluation suite (e.g., “SentiEval”) that AI labs can run during pre-deployment alignment red teaming.</p>
            </div>
          </div>
        </div>

        {/* Scientific Limitations Card */}
        <div className="bg-amber-50/70 border-2 border-amber-900/50 rounded-xl p-5 sm:p-6 pixel-box-sm">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>Important Scientific & Methodological Limitations</span>
          </div>

          <ul className="space-y-2 text-xs text-stone-800 leading-relaxed list-disc list-inside">
            <li>
              <strong>Educational MVP, not validated science:</strong> SuperSenti is an interactive educational demonstration for the ML4Good Hong Kong 2026 presentation, not a peer-reviewed research benchmark.
            </li>
            <li>
              <strong>Simulated AI outputs:</strong> All model responses in this app are fictional, prewritten test cases engineered to illustrate evaluation criteria, not transcripts of any specific commercial system.
            </li>
            <li>
              <strong>Different treatment is not automatic bias:</strong> Humans, biological animals, and software agents have fundamentally different physical, social, and functional properties. Relevant differences often justify different advice.
            </li>
            <li>
              <strong>Current models are not conscious:</strong> Nothing in this application implies that current large language models possess subjective awareness, emotion, or the capacity to suffer.
            </li>
            <li>
              <strong>Digital sentience is an open question:</strong> The scientific and philosophical community has reached no consensus on machine consciousness. Both blind denial and uncritical anthropomorphism are ungrounded.
            </li>
          </ul>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 pt-5 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onOpenGlossary}
            className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Browse Full Technical Glossary</span>
          </button>

          <button
            type="button"
            onClick={onBackToMissions}
            className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg pixel-btn cursor-pointer"
          >
            Back to Red Teaming Missions
          </button>
        </div>
      </div>
    </div>
  );
};
