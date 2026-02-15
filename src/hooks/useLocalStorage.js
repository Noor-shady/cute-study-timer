import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Lazy Initialization: I use a function inside useState
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Look in the browser's memory for this specific key
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });