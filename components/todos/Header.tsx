"use client";

import { TODO_ROUTES } from "@/constant/route";
import { redirect } from "next/navigation";
type Props = {
    title: string;
    className: string;
};
export function Header({ title, className }: Props) {
    const redirect_path = title
        .toUpperCase()
        .replace(" ", "_") as keyof typeof TODO_ROUTES;
    return (
        <header
            className={`${className} p-3 cursor-pointer`}
            onClick={() => redirect(TODO_ROUTES[redirect_path])}
        >
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </header>
    );
}
