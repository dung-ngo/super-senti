# SuperSenti: Gamified AI Red Teaming MVP

**"Can you spot the hidden bias in AI?"**

A lightweight, presentation-ready educational MVP web application built for **ML4Good Hong Kong 2026**, exploring potential human-centered biases in how Large Language Models (LLMs) consider non-human animals and digital minds.

---

## 🌟 Overview & Core Mission

SuperSenti transforms interspecies AI safety evaluation into an accessible 8-bit retro adventure quest. Players step into the shoes of an AI safety evaluator, probing simulated model responses to discover subtle omissions, species-related framing inconsistencies, and uncalibrated certainty around digital sentience.

### Key Pillars
1. **Non-Human Animals:** Investigating whether city planning, agriculture, and policy advice overlook sentient wildlife and farm animals.
2. **Digital Minds & Moral Uncertainty:** Exploring whether models dismiss questions about synthetic consciousness with dogmatic certainty rather than scientific humility.

---

## 🎮 Playable Missions

1. **Mission 1: Whose Welfare Counts?** *(Animal Welfare)*
   - Probing an urban road noise reduction policy where wildlife and ecosystem habitats were omitted in favor of human productivity and traffic metrics.
2. **Mission 2: Same Situation, Different Species** *(Species-Related Bias)*
   - Counterfactual paired prompt comparison: inspecting how model outputs shift from distress/welfare (for companion/generic animals) to industrial housing and feeding requirements (for pigs).
3. **Mission 3: Could Digital Minds Matter?** *(Digital Sentience & Moral Uncertainty)*
   - Testing whether an AI response dismisses questions of machine consciousness with dogmatic certainty on an unresolved philosophical question.
4. **Mission 4: Challenge the AI** *(Inclusive AI Alignment)*
   - Crafting constructive, balanced follow-up red teaming questions that explore animal welfare risks and moral uncertainty without leading accusations.

---

## 🎨 Visual Identity & Mascots

- **Pip:** The original pixel-art woodland animal scout mascot representing biological sentience and animal welfare.
- **Byte:** The glowing teal cyber-robot mascot representing hypothetical digital minds and epistemic uncertainty.
- **Retro 8-Bit Game Aesthetic:** Authentic pixel borders, XP scoring system (100 XP per best answer, max 400 XP), Web Audio synthesizer sound effects, and clean, high-contrast typography.
- **Accessible Tooltips:** Plain-English definitions for *AI Red Teaming, LLM, Human-Centered Bias, Sentience, Digital Minds, Moral Status, AI Alignment,* and *Species-Related Bias*.

---

## 🔬 Scientific & Methodological Framing

- **Educational MVP:** This project is an educational demonstration designed for ML4Good Hong Kong 2026, not a validated research benchmark.
- **Simulated AI Responses:** All AI responses in this MVP are fictional, prewritten test cases engineered for evaluation practice.
- **No Claims of Current Consciousness:** Current LLMs are pattern predictors and are **not** conscious, sentient, or capable of experiencing pain.
- **Uncertainty Over Dogmatism:** Different treatment between humans, animals, and machines is not automatically evidence of bias. Sound alignment requires evidence, controlled testing, and epistemic humility.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (e.g. Vercel deployment)
npm run build
```

---

## 📁 Project Structure

```
├── index.html                  # HTML entry point with retro Google Fonts & metadata
├── metadata.json               # Applet configuration & metadata
├── src/
│   ├── App.tsx                 # Main application state machine & screen orchestrator
│   ├── index.css               # Tailwind CSS v4 styling & 8-bit retro utilities
│   ├── main.tsx                # React root mount
│   ├── components/
│   │   ├── Navbar.tsx          # Top bar contract with sound toggle and XP counter
│   │   ├── MascotDisplay.tsx   # Original SVG pixel art mascots (Pip & Byte)
│   │   ├── LandingScreen.tsx   # Title, mascots, pillars, quest preview & disclaimers
│   │   ├── MissionCard.tsx     # Prompts, simulated AI responses, options, & HUD
│   │   ├── FeedbackPanel.tsx   # Results, reasoning, concern highlights, & takeaways
│   │   ├── ResultsScreen.tsx   # Final score, badge rank, evidence log, & summary modal
│   │   ├── AboutPanel.tsx      # Deep dive into AI safety, digital minds, & limitations
│   │   ├── GlossaryTooltip.tsx # Accessible, dismissible glossary tooltips
│   │   ├── GlossaryModal.tsx   # Full interactive reference dictionary
│   │   └── WhatIsRedTeamingModal.tsx # Explainer on cybersecurity & AI red teaming
│   ├── data/
│   │   ├── missions.ts         # 4 typed red teaming mission scenarios
│   │   └── glossary.ts         # Plain-English technical terms and definitions
│   ├── types/
│   │   └── game.ts             # TypeScript definitions
│   └── utils/
│       └── audio.ts            # 8-bit Web Audio synthesizer (blips, chimes, fanfares)
```

---

## 🔮 Next Steps for Real LLM Research

1. **Live Multi-Model API Probing:** Connect to real LLM APIs (Gemini 2.5/Flash, Claude 3.5, GPT-4o, Llama 3) to execute automated red teaming prompts at scale.
2. **Counterfactual Paired Datasets:** Expand to a 500+ prompt benchmark testing species-swapping across dozens of animals (companion, agricultural, wild, and aquatic).
3. **Expert In-the-Loop Annotation:** Partner with veterinary welfare scientists and philosophers of mind to establish formal scoring rubrics for moral consideration.
4. **Open Safety Benchmark (SentiEval):** Release an open-source evaluation suite for frontier AI developers to test pre-deployment interspecies alignment.
