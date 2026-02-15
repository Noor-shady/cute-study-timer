import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MascotRenderer({ mode }) {
  // Dynamic file selection: Swap the cat's activity based on the timer mode
  const animationPath = mode === 'focus' 
    ? '/animations/focus.lottie' 
    : '/animations/break.lottie';

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto my-4 transition-transform duration-300 hover:scale-105">
      
      <div className="absolute inset-0 bg-white/40 rounded-full shadow-xl backdrop-blur-md border-4 border-white/60 transition-colors duration-500"></div>