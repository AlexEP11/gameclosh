"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    message: string;
    countdown: number;
    redirectTo: string;
}

export const Countdown = ({ message, countdown, redirectTo }: Props) => {
    const [seconds, setSeconds] = useState(countdown);
    const router = useRouter();

    useEffect(() => {
        if (seconds === 0) {
            router.push(redirectTo);
            return;
        }

        const timer = setTimeout(() => {
            setSeconds(seconds - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds, redirectTo, router]);

    return (
        <div className="flex items-center gap-1">
            <span>{message}</span>
            <span className="font-bold">{seconds}</span>
            <span>...</span>
        </div>
    );
};
