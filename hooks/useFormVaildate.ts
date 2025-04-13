import { useState } from "react";
import { ZodObject, ZodRawShape } from "zod";

export function useFormVaildate<T>(schema: ZodObject<ZodRawShape>) {
    const [errors, setErrors] = useState<Partial<T>>();

    const vaildateField = (name: string, value: string) => {
        const parsedResult = schema
            .pick({ [name]: true })
            .safeParse({ [name]: value });

        setErrors((prev) => ({
            ...prev,
            [name]: parsedResult.success
                ? undefined
                : parsedResult.error.flatten().fieldErrors[name],
        }));
    };

    return { errors, vaildateField };
}
