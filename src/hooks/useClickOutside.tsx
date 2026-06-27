import { useEffect } from "react";
import type { RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref.current;

      // Ignore the event if the element does not exist or the click happened inside it.
      if (!element || element.contains(event.target as Node)) {
        return;
      }

      // Run the provided callback only when the user clicks/touches outside the element.
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // Clean up event listeners when the component using this hook unmounts.
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
