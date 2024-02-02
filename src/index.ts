import { useEffect, RefObject } from "react";

type AllowedEvents = MouseEvent | TouchEvent | KeyboardEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    callback: (event: AllowedEvents) => void,
): void {
  useEffect(() => {
    const listener = (event: AllowedEvents) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    const eventTypes: (keyof DocumentEventMap)[] = ["mousedown", "touchstart"];

    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, listener as EventListener);
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback(event);
      }
    };

    document.addEventListener("keydown", handleKeydown as EventListener);

    return () => {
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, listener as EventListener);
      });
      document.removeEventListener("keydown", handleKeydown as EventListener);
    };
  }, [ref, callback]);
}

export default useClickOutside;
