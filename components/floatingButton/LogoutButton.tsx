"use client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { deleteSession } from "@/action/sessions";
import { useUserStore } from "@/store/useUserStore";
import { redirect } from "next/navigation";
export function LogoutButton() {
    const updateUser = useUserStore((state) => state.updateUser);

    const handleLogout = async () => {
        await deleteSession();
        updateUser({
            id: undefined,
            email: undefined,
            createdAt: undefined,
            password: undefined,
            updatedAt: undefined,
            userName: undefined,
        });
        redirect("/login");
    };
    return (
        <Button
            className=" bg-red-600 rounded-full hover:bg-red-500"
            onClick={handleLogout}
        >
            <LogOut /> <span className="hidden sm:inline">로그아웃</span>
        </Button>
    );
}
