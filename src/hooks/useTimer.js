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