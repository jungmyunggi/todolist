import { useModalStore } from "@/store/useModalStore";
import { Button } from "../ui/button";
export function ModalFooter() {
    const closeModal = useModalStore((state) => state.closeModal);
    return (
        <Button onClick={closeModal} className="bg-black text-white w-full">
            취소
        </Button>
    );
}
