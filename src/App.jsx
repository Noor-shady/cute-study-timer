import React, { useState, useEffect, useRef } from 'react';
import { Settings as SettingsIcon, Award } from 'lucide-react';

// Import Components
import TimerDisplay from './components/TimerDisplay';
import MascotRenderer from './components/MascotRenderer';
import Controls from './components/Controls';
import SettingsModal from './components/SettingsModal';

// Import Hooks & Helpers
import useTimer from './hooks/useTimer';
import useLocalStorage from './hooks/useLocalStorage';
import { getMascotMessage } from './utils/helpers';

export default function App() {
  // Bring in the Timer Engine
  const { 
    timeLeft, isActive, mode, settings, 
    toggleTimer, resetTimer, skipSession, updateSettings 
  } = useTimer();

  // Bring in Local Storage for Gamification
  const [totalMinutes, setTotalMinutes] = useLocalStorage('study-timer-score', 0);