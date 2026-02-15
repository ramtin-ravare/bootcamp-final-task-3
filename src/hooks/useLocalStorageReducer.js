import { useEffect, useReducer } from "react";

export default function useLocalStorageReducer(
  key,
  reducerFunction,
  initialValue,
) {
  const storedValue = localStorage.getItem(key);
  const [state, dispatch] = useReducer(
    reducerFunction,
    storedValue ? JSON.parse(storedValue) : initialValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}
