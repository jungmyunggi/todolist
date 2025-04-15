import { create } from "zustand";

type ModalConfig = {
    title: string;
    description?: string;
    content?: React.ReactNode;
    footer: React.ReactNode;
};

type State = {
    isOpen: boolean;
    config?: ModalConfig;
};

type Action = {
    openModal: (config: ModalConfig) => void;
    closeModal: () => void;
};

export const useModalStore = create<State & Action>((set) => ({
    isOpen: false,
    config: undefined,
    openModal: (config) => set({ isOpen: true, config }),
    closeModal: () => set({ isOpen: false, config: undefined }),
}));
