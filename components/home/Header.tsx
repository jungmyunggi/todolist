"use client";

import { useUserStore } from "@/store/useUserStore";
import { HeaderTimer } from "./HeaderTimer";
import { Star } from "lucide-react";
export function Header() {
    const user = useUserStore((state) => state.user);

    return (
        <header className="flex justify-between w-[80%] bg-white p-5 rounded-lg shadow-lg">
            <div className="flex gap-3 items-center">
                {/* 프로젝트 이름 + 사용자 이름 + 환영합니다 */}
                <span className="font-bold text-md md:text-2xl">
                    내 일정 관리
                </span>
                <span className="animate-pulse hidden md:inline text-blue-500 text-xs">
                    {user.userName
                        ? `${user.userName}님 환영합니다`
                        : "로그인이 필요합니다"}
                </span>
            </div>
            <div className="flex gap-3 items-center">
                {/* 중요 TODO + 현재 시각 */}
                <Star />
                <HeaderTimer />
            </div>
        </header>
    );
}
