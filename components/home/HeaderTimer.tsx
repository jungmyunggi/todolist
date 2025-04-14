"use client";

import { useEffect, useState } from "react";

export function HeaderTimer() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const weekDay = date.toLocaleDateString("ko-KR", { weekday: "long" });

        const timeStr = date.toLocaleTimeString("ko-KR", { hour12: false });

        return `${year}년 ${month}월 ${day}일 ${weekDay} ${timeStr}`;
    };

    return <span className="hidden md:inline">{time && formatTime(time)}</span>;
}
