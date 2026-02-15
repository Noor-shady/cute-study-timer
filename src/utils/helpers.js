/**
 * Converts raw seconds into a beautiful MM:SS string.
 * Example: 1500 -> "25:00"
 */
export const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    
    return `${paddedMinutes}:${paddedSeconds}`;
  };
  
  /**
   * Context-Aware Mascot Messages
   * Returns a cute, dynamic message based on the mode and how long I've studied.
   */
  export const getMascotMessage = (mode, totalFocusMinutes) => {
    if (mode === 'focus') {
      if (totalFocusMinutes === 0) return "Ready for our first session? Let's do this!";
      if (totalFocusMinutes >= 120) return "You are an absolute machine today! Stay focused!";
      return "Deep breaths. I'm right here studying with you.";
    } 
    
    if (mode === 'break') {
      if (totalFocusMinutes >= 120) {
        return "Wow, you've been working hard! Please drink some water and stretch your back!";
      }
      return "Time to rest your eyes. You earned this break!";
    }
  
    return "Let's be productive together!";
  };