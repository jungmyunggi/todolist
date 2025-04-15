import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function ISODateToKoreanDate(date: string) {
    const koreanDate = new Date(date);

    const year = koreanDate.getFullYear();
    const month = String(koreanDate.getMonth() + 1).padStart(2, "0");
    const day = String(koreanDate.getDate()).padStart(2, "0");

    const hour = koreanDate.getHours();
    const meridiem = hour < 12 ? "오전" : "오후";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${year}-${month}-${day} ${meridiem} ${displayHour}시까지`;
}
