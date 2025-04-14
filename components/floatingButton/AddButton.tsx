"use client";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { InputForm } from "../modal/InputForm";
import { ModalFooter } from "../modal/ModalFooter";
export function AddButton() {
    const openModal = useModalStore((state) => state.openModal);
    const handleClick = () => {
        openModal({
            title: "일정 추가",
            content: <InputForm />,
            footer: <ModalFooter />,
        });
    };
    return (
        <Button
            className=" bg-blue-600 rounded-full hover:bg-blue-500"
            onClick={handleClick}
        >
            <Plus color="#fff" />
            <span className="hidden sm:inline">일정추가</span>
        </Button>
    );
}
