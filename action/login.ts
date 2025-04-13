"use server";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schema/auth";
import bcrypt from "bcryptjs";
import { createSession } from "./sessions";
import { redirect } from "next/navigation";
export const login = async (_: unknown, formData: FormData) => {
    try {
        const vaildateFields = LoginSchema.safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        if (!vaildateFields.success) {
            return { errorMessage: "잘못된 입력값이 있습니다" };
        }
        //로그인 폼 정보
        const { email, password } = vaildateFields.data;
        const existingUser = await getUserByEmail(email);
        if (!existingUser) {
            return { errorMessage: "없는 사용자입니다. 이메일을 확인해주세요" };
        }
        // 사용자 정보
        const { id, userName, password: userPassword } = existingUser;
        // 비밀번호 일치 여부 확인
        const passwordMatch = await bcrypt.compare(password, userPassword);

        if (!passwordMatch) {
            return {
                errorMessage: "비밀번호가 일치하지 않습니다",
            };
        }

        // 세션 생성
        await createSession({ id, userName });
    } catch (error) {
        console.error(error);
        return {
            errorMessage: "로그인중 오류발생!",
        };
    }
    redirect("/");
};
