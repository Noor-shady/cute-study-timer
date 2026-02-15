import { useState, useEffect, useCallback, useRef } from 'react';

export default function useTimer(initialSettings = { focus: 25, break: 5, sound: true }) {
  // State Management
  const [settings, setSettings] = useState(initialSettings);
  const [mode, setMode] = useState('focus');