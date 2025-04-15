"use client";

import { useUserStore } from "@/store/useUserStore";
import { HeaderTimer } from "./HeaderTimer";
import { Star } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
export function Header() {
    const user = useUserStore((state) => state.user);
    const path = usePathname();
    const router = useRouter();
    const handlePath = () => {
        if (path === "/") {
            router.push("/important");
        } else {
            router.push("/");
        }
    };
    return (
        <header className="flex justify-between w-[80%] bg-white p-5 rounded-lg shadow-xl border">
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
                <Star
                    onClick={handlePath}
                    className="hover:fill-yellow-500 hover:text-yellow-500 cursor-pointer"
                />
                <HeaderTimer />
            </div>
        </header>
    );
}
