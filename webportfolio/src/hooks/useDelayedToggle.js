import { useState, useEffect } from "react";

export function useDelayedToggle(initialState, delay) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => setState(!initialState), delay);
    return () => clearTimeout(timer); // Cleanup timer
  }, [initialState, delay]);

  return state;
}
