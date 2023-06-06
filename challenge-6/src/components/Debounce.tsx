import { useEffect, useRef } from "react";

type props = {
    delay: number;
    callback: Function;
}
export const Debounce = ({ delay, callback }: props) => {

    const timoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Clean up the timeout on component unmount
        if (timoutRef.current) {
            clearTimeout(timoutRef.current);
        }
    }, []);

    const invokeCallback = (...args: any[]) => {

        if (timoutRef.current) {
            clearTimeout(timoutRef.current);
        }

        timoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }

    return null;
}