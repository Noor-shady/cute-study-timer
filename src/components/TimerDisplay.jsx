import React from 'react';

export default function TimerDisplay({ timeLeft, mode }) {
  // Math magic to convert raw seconds into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Dynamic styling: Cozy warm colors for focus, calm cool colors for breaks
  const isFocus = mode === 'focus';
  const textColor = isFocus ? 'text-amber-800' : 'text-blue-800';
  const labelText = isFocus ? 'Time to Focus' : 'Take a Breather';

  return (
    <div className="flex flex-col items-center justify-center my-6">