"use server";
import db from "@/db";
import { todo } from "@/db/schema";
import { NewTodoType } from "@/type/todo";
import { BASE_URL } from "@/constant/route";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
export const addTodo = async (userId: string, newTodo: NewTodoType) => {
    await db.insert(todo).values({
        ...newTodo,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "todo",
        isImportant: false,
    });
    revalidatePath(BASE_URL);
};
export const deleteTodo = async (todoId: string) => {
    await db.delete(todo).where(eq(todo.id, todoId));
    revalidatePath(BASE_URL);
};
export const updateTodo = async (
    todoId: string,
    status: "todo" | "inprogress" | "done"
) => {
    await db.update(todo).set({ status: status }).where(eq(todo.id, todoId));
    revalidatePath(BASE_URL);
};

export const updateImportant = async (todoId: string, important: boolean) => {
    await db
        .update(todo)
        .set({ isImportant: important })
        .where(eq(todo.id, todoId));
    revalidatePath(BASE_URL);
};
