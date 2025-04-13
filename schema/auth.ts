import { z } from "zod";

// email, userName, password
export const SignupSchema = z.object({
    email: z.string().email({ message: "유효한 이메일을 입력해주세요" }),
    password: z
        .string()
        .min(8, { message: "비밀번호는 8자 이상 입력해주세요" })
        .regex(/[A-z]/, {
            message: "패스워드는 최소 1개 이상의 영어를 포함해야합니다",
        })
        .regex(/[0-9]/, {
            message: "패스워드는 최소 1개 이상의 숫자를 포함해야합니다.",
        }),
    userName: z
        .string()
        .min(1, { message: "이름을 입력해주세요" })
        .regex(/[가-힣]/, { message: "이름은 한글만 가능합니다" }),
});

export const LoginSchema = z.object({
    email: z.string().email({ message: "유효한 이메일을 입력해주세요" }),
    password: z.string().min(1, { message: "비밀번호를 입력해주세요" }),
});
