import { create } from "zustand";
import { user } from "@/type/user";

type State = {
    user: Partial<user>;
};
type Action = {
    updateUser: (user: State["user"]) => void;
};

export const useUserStore = create<State & Action>((set) => ({
    user: {
        id: undefined,
        userName: undefined,
    },
    updateUser: (user) => set(() => ({ user })),
}));
