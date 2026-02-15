import React from 'react';
import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';

export default function Controls({ isActive, onToggle, onReset, onSkip }) {
  return (
    <div className="flex items-center justify-center gap-6 my-8">
      
      <button 
        onClick={onReset}
        className="p-4 rounded-2xl bg-white/50 text-slate-500 hover:bg-white/80 hover:text-slate-700 hover:scale-105 active:scale-95 transition-all shadow-sm backdrop-blur-sm"
        aria-label="Reset Timer"
      >
        <RotateCcw size={24} strokeWidth={2.5} />
      </button>

      {/* Main Play/Pause Button */}
      <button 
        onClick={onToggle}
        className="p-6 rounded-[2rem] bg-white text-slate-700 hover:text-slate-900 hover:shadow-lg hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center w-24 h-24"
        aria-label={isActive ? "Pause Timer" : "Start Timer"}
      >
        {isActive ? (
          <Pause size={40} className="fill-current" />
        ) : (
          // That's an optical alignment trick! I learned that on a Course I learned
          <Play size={40} className="fill-current ml-2" /> 
        )}
      </button>

      <button 
        onClick={onSkip}
        className="p-4 rounded-2xl bg-white/50 text-slate-500 hover:bg-white/80 hover:text-slate-700 hover:scale-105 active:scale-95 transition-all shadow-sm backdrop-blur-sm"
        aria-label="Skip to next session"
      >
        <SkipForward size={24} strokeWidth={2.5} />
      </button>

    </div>
  );
}