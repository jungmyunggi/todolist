import { user } from "@/db/schema";
import { user as userType } from "@/type/user";
import db from "@/db";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (
    email: string
): Promise<userType | null> => {
    try {
        const existingUser = await db.query.user.findFirst({
            where: eq(user.email, email),
        });

        if (!existingUser) {
            return null;
        }
        return existingUser;
    } catch (error) {
        console.error(error);
        throw new Error("문제발생!");
    }
};
