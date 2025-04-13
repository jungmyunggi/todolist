"use server";

import { SignupSchema } from "@/schema/auth";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import db from "@/db";
import { user } from "@/db/schema";
import { redirect } from "next/navigation";
export const signup = async (_: unknown, formData: FormData) => {
    try {
        const vaildateFields = SignupSchema.safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
            userName: formData.get("userName"),
        });
        if (!vaildateFields.success) {
            return { errorMessage: "잘못된 입력값이 있습니다" };
        }

        const { email, password, userName } = vaildateFields.data;

        const exisitingUser = await getUserByEmail(email);
        if (exisitingUser) {
            return {
                errorMessage: "이미 존재하는 사용자입니다",
            };
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await db
            .insert(user)
            .values({ userName, email, password: hashedPassword });
    } catch (error) {
        console.error(error);
        return {
            errorMessage: "회원가입중 오류발생!",
        };
    }
    redirect("/login");
};
