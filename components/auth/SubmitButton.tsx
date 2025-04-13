import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/ui/button";
export const SubmitButon = ({ children, ...other }: ButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" {...other} disabled={pending}>
            {children}
        </Button>
    );
};
