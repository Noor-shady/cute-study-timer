import React from 'react';

export default function TimerDisplay({ timeLeft, mode }) {
  // Math magic to convert raw seconds into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;