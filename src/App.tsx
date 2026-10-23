import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingScreen } from './components/LandingScreen';
import { MissionCard } from './components/MissionCard';
import { FeedbackPanel } from './components/FeedbackPanel';
import { ResultsScreen } from './components/ResultsScreen';
import { AboutPanel } from './components/AboutPanel';
import { GlossaryModal } from './components/GlossaryModal';
import { WhatIsRedTeamingModal } from './components/WhatIsRedTeamingModal';
import { MISSIONS } from './data/missions';
import { ScreenType, MissionResult } from './types/game';
import {
  playRetroBlip,
  playOptionSelect,
  playSuccessChime,
  playReflectTone,
  playVictoryFanfare,
} from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('landing');
  const [currentMissionIndex, setCurrentMissionIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<'A' | 'B' | 'C' | null>(null);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, MissionResult>>({});
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isRedTeamingModalOpen, setIsRedTeamingModalOpen] = useState<boolean>(false);

  const currentMission = MISSIONS[currentMissionIndex] || MISSIONS[0];

  // Sound toggle handler
  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        playRetroBlip(true);
      }
      return next;
    });
  };

  // Start Quest
  const handleStartQuest = () => {
    playRetroBlip(soundEnabled);
    // If user previously finished, start fresh
    if (Object.keys(userAnswers).length === MISSIONS.length) {
      setCurrentMissionIndex(0);
      setScore(0);
      setUserAnswers({});
    }
    setSelectedOptionId(null);
    setCurrentScreen('mission');
  };

  // Option selection
  const handleSelectOption = (optionId: 'A' | 'B' | 'C') => {
    setSelectedOptionId(optionId);
    playOptionSelect(soundEnabled);
  };

  // Submit Answer
  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return;

    const isBest = selectedOptionId === currentMission.correctOptionId;
    const points = isBest ? 100 : 0;

    const answerRecord: MissionResult = {
      missionId: currentMission.id,
      selectedOptionId,
      isBestAnswer: isBest,
      pointsAwarded: points,
    };

    setUserAnswers((prev) => ({
      ...prev,
      [currentMission.id]: answerRecord,
    }));

    if (isBest) {
      setScore((prev) => Math.min(400, prev + points));
      playSuccessChime(soundEnabled);
    } else {
      playReflectTone(soundEnabled);
    }

    setCurrentScreen('feedback');
  };

  // Next Mission or Final Results
  const handleNextMission = () => {
    playRetroBlip(soundEnabled);
    const nextIndex = currentMissionIndex + 1;
    if (nextIndex < MISSIONS.length) {
      setCurrentMissionIndex(nextIndex);
      setSelectedOptionId(null);
      setCurrentScreen('mission');
    } else {
      playVictoryFanfare(soundEnabled);
      setCurrentScreen('results');
    }
  };

  // Play Again restart
  const handlePlayAgain = () => {
    playRetroBlip(soundEnabled);
    setCurrentMissionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setUserAnswers({});
    setCurrentScreen('mission');
  };

  // Navigation router
  const handleNavigate = (screen: ScreenType) => {
    playRetroBlip(soundEnabled);
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950 retro-grid-bg">
      {/* Universal Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        score={score}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onNavigate={handleNavigate}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
      />

      {/* Screen Render Engine */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        {currentScreen === 'landing' && (
          <LandingScreen
            onStartQuest={handleStartQuest}
            onOpenWhatIsRedTeaming={() => setIsRedTeamingModalOpen(true)}
            onOpenAbout={() => handleNavigate('about')}
          />
        )}

        {currentScreen === 'mission' && (
          <MissionCard
            mission={currentMission}
            missionNumber={currentMissionIndex + 1}
            totalMissions={MISSIONS.length}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleSelectOption}
            onSubmitAnswer={handleSubmitAnswer}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
            score={score}
          />
        )}

        {currentScreen === 'feedback' && selectedOptionId && (
          <FeedbackPanel
            mission={currentMission}
            selectedOptionId={selectedOptionId}
            onNextMission={handleNextMission}
            isLastMission={currentMissionIndex === MISSIONS.length - 1}
            score={score}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            score={score}
            userAnswers={userAnswers}
            onPlayAgain={handlePlayAgain}
            onOpenAbout={() => handleNavigate('about')}
          />
        )}

        {currentScreen === 'about' && (
          <AboutPanel
            onBackToMissions={() => {
              playRetroBlip(soundEnabled);
              setCurrentScreen(
                Object.keys(userAnswers).length === MISSIONS.length ? 'results' : 'mission'
              );
            }}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        )}
      </main>

      {/* Interactive Reference Modals */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <WhatIsRedTeamingModal
        isOpen={isRedTeamingModalOpen}
        onClose={() => setIsRedTeamingModalOpen(false)}
        onStartQuest={handleStartQuest}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-300 py-6 text-center text-xs text-stone-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[10px] text-emerald-800">SuperSenti</span>
            <span>·</span>
            <span>ML4Good Hong Kong 2026 Presentation MVP</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Educational simulation · Fictional test cases</span>
            <span>·</span>
            <button
              type="button"
              onClick={() => setIsGlossaryOpen(true)}
              className="text-emerald-800 hover:underline"
            >
              Glossary
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => handleNavigate('about')}
              className="text-emerald-800 hover:underline"
            >
              About
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
