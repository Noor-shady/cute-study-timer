import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Lazy Initialization: I use a function inside useState