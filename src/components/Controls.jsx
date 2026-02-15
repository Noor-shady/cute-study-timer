import React from 'react';
import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';

export default function Controls({ isActive, onToggle, onReset, onSkip }) {
  return (
    <div className="flex items-center justify-center gap-6 my-8">