import { useState, useEffect, useCallback, useRef } from 'react';

export default function useTimer(initialSettings = { focus: 25, break: 5, sound: true }) {
  // State Management
  const [settings, setSettings] = useState(initialSettings);
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(settings.focus * 60);
  const [isActive, setIsActive] = useState(false);

  // Audio References
  const bellSound = useRef(typeof Audio !== "undefined" ? new Audio('/sounds/bell.mp3') : null);
  const clickSound = useRef(typeof Audio !== "undefined" ? new Audio('/sounds/click.mp3') : null);

  const playClick = useCallback(() => {
    if (settings.sound && clickSound.current) {
        // Reset sound to start
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(e => console.log("Audio play blocked:", e));
    }
  }, [settings.sound]);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      
      // Play the bell sound
      if (settings.sound && bellSound.current) {
        bellSound.current.play().catch(e => console.log("Audio play blocked:", e));
      }

      // Automatically switch to the next mode
      const nextMode = mode === 'focus' ? 'break' : 'focus';
      setMode(nextMode);
      setTimeLeft(settings[nextMode] * 60);
      // Pause so I can physically start my break/focus
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode, settings]);

  // Control Functions
  const toggleTimer = useCallback(() => {
    playClick();
    setIsActive((prev) => !prev);
  }, [playClick]);

  const resetTimer = useCallback(() => {
    playClick();
    setIsActive(false);
    setTimeLeft(settings[mode] * 60);
  }, [mode, settings, playClick]);

  const skipSession = useCallback(() => {
    playClick();
    const nextMode = mode === 'focus' ? 'break' : 'focus';
    setMode(nextMode);
    setTimeLeft(settings[nextMode] * 60);
    setIsActive(false);
  }, [mode, settings, playClick]);

  const updateSettings = useCallback((newSettings) => {
    setSettings(newSettings);
    // Reset to focus mode when settings change
    setMode('focus');
    setIsActive(false);
    setTimeLeft(newSettings.focus * 60);
  }, []);

  return {
    timeLeft,
    isActive,
    mode,
    settings,
    toggleTimer,
    resetTimer,
    skipSession,
    updateSettings
  };
}