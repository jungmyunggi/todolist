"use client";
import { FormCard } from "./FormCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormVaildate } from "@/hooks/useFormVaildate";
import { SignupTypes } from "@/type/auth";
import { signup } from "@/action/signup";
import { SubmitButon } from "./SubmitButton";
import { SignupSchema } from "@/schema/auth";
import { ChangeEvent, useActionState, useEffect } from "react";
import { ErrorMessage } from "./ErrorMessage";
import toast from "react-hot-toast";
export const SignupForm = () => {
    const [error, action] = useActionState(signup, undefined);
    const { errors, vaildateField } =
        useFormVaildate<SignupTypes>(SignupSchema);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        vaildateField(name, value);
    };
    useEffect(() => {
        if (error) {
            toast(error.errorMessage);
        }
    }, [error]);

    return (
        <FormCard
            title="회원가입"
            footer={{ lable: "이미 계정이 있으신가요?", href: "/login" }}
        >
            <form className="space-y-6" action={action}>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="font-bold">
                        이메일
                    </Label>
                    <Input
                        name="email"
                        id="email"
                        placeholder="이메일을 입력해주세요"
                        onChange={handleChange}
                        error={!!errors?.email}
                    />
                    {errors?.email && (
                        <ErrorMessage message={errors.email[0]} />
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="password" className="font-bold">
                        비밀번호
                    </Label>
                    <Input
                        name="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={handleChange}
                        type="password"
                        error={!!errors?.password}
                    />
                    {errors?.password && (
                        <ErrorMessage message={errors.password[0]} />
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="user_name" className="font-bold">
                        사용자 이름
                    </Label>
                    <Input
                        name="userName"
                        id="user_name"
                        placeholder="사용하실 이름을 입력해주세요"
                        onChange={handleChange}
                    />
                    {errors?.userName && (
                        <ErrorMessage message={errors.userName[0]} />
                    )}
                </div>
                <SubmitButon className="w-full">가입하기</SubmitButon>
            </form>
        </FormCard>
    );
};
