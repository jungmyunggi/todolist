"use client";
import { Header } from "@/components/home/Header";
import { FloatingButton } from "@/components/floatingButton/FloatingButton";
import { AddButton } from "@/components/floatingButton/AddButton";
import { UpButton } from "@/components/floatingButton/UpButton";
import { ModalLayout } from "@/components/modal/ModalLayout";
import { LogoutButton } from "@/components/floatingButton/LogoutButton";
export function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full gap-4 items-center ">
            {/* header */}
            <Header />
            {/* floating button */}
            <FloatingButton>
                <LogoutButton />
                <AddButton />
                <UpButton />
            </FloatingButton>
            {/* modal */}
            <ModalLayout />
            {children}
        </div>
    );
}
