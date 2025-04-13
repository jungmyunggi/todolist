"use client";
import { verifySession } from "@/action/sessions";
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
    const updateUser = useUserStore((state) => state.updateUser);
    useEffect(() => {
        const setUser = async () => {
            const user = await verifySession();
            if (user) {
                updateUser(user);
            }
        };
        setUser();
    }, [updateUser]);

    return <>{children}</>;
}
