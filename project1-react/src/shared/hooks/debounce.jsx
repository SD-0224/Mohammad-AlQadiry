import { useEffect, useState } from "react";
export function useDebounce(callback, delay) {
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (...args) => {
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
        setTimeoutId(newTimeoutId);
    };
}