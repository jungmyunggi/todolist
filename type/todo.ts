import { todo } from "@/db/schema";

export type TodoType = typeof todo.$inferSelect;
export type NewTodoType = {
    title: string;
    content: string;
    dueDate: Date;
    isImportant?: boolean;
};
