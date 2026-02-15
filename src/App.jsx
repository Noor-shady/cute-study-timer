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
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const prevModeRef = useRef(mode);
  useEffect(() => {
    // If the mode just changed from 'focus' to 'break', they finished a session!
    if (prevModeRef.current === 'focus' && mode === 'break') {
      setTotalMinutes((prev) => prev + settings.focus);
    }
    prevModeRef.current = mode;
  }, [mode, settings.focus, setTotalMinutes]);

  // Dynamic UI Variables
  const isFocus = mode === 'focus';
  const bgColor = isFocus ? 'bg-amber-50' : 'bg-blue-50';
  const headerColor = isFocus ? 'text-amber-900' : 'text-blue-900';
  const message = getMascotMessage(mode, totalMinutes);

  return (