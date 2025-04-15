"use client";
import { FormCard } from "./FormCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButon } from "./SubmitButton";
import { useFormVaildate } from "@/hooks/useFormVaildate";
import { LoginSchema } from "@/schema/auth";
import { LoginTypes } from "@/type/auth";
import { ChangeEvent, useActionState, useEffect } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { login } from "@/action/login";
import toast from "react-hot-toast";
export function LoginForm() {
    const [error, action] = useActionState(login, undefined);
    const { errors, vaildateField } = useFormVaildate<LoginTypes>(LoginSchema);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        vaildateField(name, value);
    };

    useEffect(() => {
        if (error?.errorMessage) {
            toast(error.errorMessage);
        }
    }, [error]);

    return (
        <FormCard
            title="로그인"
            footer={{ href: "/signup", lable: "아직 아이디가 없으신가요?" }}
        >
            <form className="space-y-6" action={action}>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="font-bold">
                        이메일
                    </Label>
                    <Input id="email" name="email" onChange={handleChange} />
                    {errors?.email && (
                        <ErrorMessage message={errors.email[0]} />
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="password" className="font-bold">
                        비밀번호
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                    {errors?.password && (
                        <ErrorMessage message={errors.password[0]} />
                    )}
                </div>
                <SubmitButon className="w-full">로그인</SubmitButon>
            </form>
        </FormCard>
    );
}
