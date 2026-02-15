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
      <h1 
        className={`text-8xl md:text-9xl font-black tracking-wider ${textColor} drop-shadow-sm transition-colors duration-500`}
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {formattedMinutes}:{formattedSeconds}
      </h1>
      
      <div className={`mt-4 px-6 py-2 rounded-full bg-white bg-opacity-40 shadow-sm border border-white border-opacity-50`}>
        <p className={`text-lg font-bold uppercase tracking-widest ${textColor} opacity-80`}>
          {labelText}
        </p>
      </div>
    </div>
  );
}