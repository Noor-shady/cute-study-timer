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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm transition-opacity">
      
      <div 
        role="dialog" 
        aria-modal="true"
        className="relative w-full max-w-sm p-6 bg-white/90 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white"
      >
        {/* Header & Close Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-700">Timer Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close Settings"
          >
            <X size={20} />
          </button>
        </div>

        {/* Inputs Section */}
        <div className="space-y-4">
          
          <div className="flex items-center justify-between">
            <label className="text-slate-600 font-medium">Focus (minutes)</label>
            <input 
              type="number" 
              min="1" 
              max="120"
              value={focusTime}
              onChange={(e) => setFocusTime(e.target.value)}
              className="w-20 p-2 text-center bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-amber-400 outline-none text-slate-700 font-bold"
            />
          </div>