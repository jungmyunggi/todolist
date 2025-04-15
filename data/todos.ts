import { verifySession } from "@/action/sessions";
import db from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodosByUser = async () => {
    const session = await verifySession();
    const response = await db.query.user.findFirst({
        where: eq(user.id, session.id),
        with: {
            todos: {
                orderBy: (todo, { desc }) => [desc(todo.dueDate)],
            },
        },
    });
    return response?.todos || [];
};
