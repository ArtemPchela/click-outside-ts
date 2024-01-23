import { useEffect, useRef, RefObject } from "react";

type Event = MouseEvent | TouchEvent | KeyboardEvent;

function useClickOutside<T extends HTMLElement = HTMLDivElement, U = boolean>(
    handler: (event: Event) => void,
    extraParam?: U,
): RefObject<T> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const mouseListener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        const keyListener = (event: KeyboardEvent) => {
            if (extraParam && event.key === "Escape") {
                handler(event);
            }
        };

        document.addEventListener("mousedown", mouseListener);
        document.addEventListener("touchstart", mouseListener);
        document.addEventListener("keydown", keyListener);

        return () => {
            document.removeEventListener("mousedown", mouseListener);
            document.removeEventListener("touchstart", mouseListener);
            document.removeEventListener("keydown", keyListener);
        };
    }, [ref, handler, extraParam]);

    return ref;
}

export default useClickOutside;
