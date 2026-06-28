import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type StoredValueValidator<T> = (value: unknown) => value is T;

function useLocalStorage<T>(
  key: string,
  initialValue: T,
  validateStoredValue?: StoredValueValidator<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Read the saved value only once when the hook initializes.
      const item = window.localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      const parsedValue: unknown = JSON.parse(item);

      if (
        validateStoredValue !== undefined &&
        !validateStoredValue(parsedValue)
      ) {
        return initialValue;
      }

      return parsedValue as T;
    } catch (error) {
      console.error(error);

      // Fall back to the initial value if localStorage is unavailable or invalid.
      return initialValue;
    }
  });

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (value) => {
      setStoredValue((previousValue) => {
        // Supports both direct values and updater functions, like React's useState.
        const valueToStore =
          value instanceof Function ? value(previousValue) : value;

        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.error(error);
        }

        return valueToStore;
      });
    },
    [key],
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
