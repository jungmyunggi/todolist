import { create } from "zustand";

type State = {
    itemId: string | null;
};

type Action = {
    updateItemId: (itemId: State["itemId"]) => void;
};

export const useItemStore = create<State & Action>((set) => ({
    itemId: null,
    updateItemId: (itemId) => set(() => ({ itemId })),
}));
