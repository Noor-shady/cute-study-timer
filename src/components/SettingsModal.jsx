import React, { useState, useEffect } from 'react';
import { X, Volume2, VolumeX, Save } from 'lucide-react';

export default function SettingsModal({ isOpen, onClose, currentSettings, onSave }) {
  // Local state to hold changes before the user clicks
  const [focusTime, setFocusTime] = useState(currentSettings.focus);
  const [breakTime, setBreakTime] = useState(currentSettings.break);
  const [soundEnabled, setSoundEnabled] = useState(currentSettings.sound);

  // Sync local state with actual settings every time the modal opens
  useEffect(() => {
    if (isOpen) {
      setFocusTime(currentSettings.focus);
      setBreakTime(currentSettings.break);
      setSoundEnabled(currentSettings.sound);
    }
  }, [isOpen, currentSettings]);

  // Handle saving the new settings
  const handleSave = () => {
    onSave({
      focus: Number(focusTime),
      break: Number(breakTime),
      sound: soundEnabled,
    });
    // Close the modal after saving
    onClose();
  };

  if (!isOpen) return null;

  return (