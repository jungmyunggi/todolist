"use client";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

export function UpButton() {
    return (
        <Button
            className="bg-black rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUp /> <span className="hidden sm:inline">위로가기</span>
        </Button>
    );
}
