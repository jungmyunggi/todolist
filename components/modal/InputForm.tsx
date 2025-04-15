import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker } from "./TimePicker";
import { ko } from "date-fns/locale";
import { useState } from "react";
import { Button } from "../ui/button";
import { addTodo } from "@/action/todo";
import { useUserStore } from "@/store/useUserStore";
import { useModalStore } from "@/store/useModalStore";
import { redirect } from "next/navigation";
export function InputForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [hour, setHour] = useState("09");
    const [minute, setMinute] = useState("00");
    const [isPM, setIsPM] = useState(false);
    const closeModal = useModalStore((state) => state.closeModal);
    const userId = useUserStore((state) => state.user.id);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        new Date()
    );

    const to24HourFormat = (hour: string, isPM: boolean): string => {
        const h = parseInt(hour, 10);
        if (!isPM) {
            return h === 12 ? "00" : String(h).padStart(2, "0");
        } else {
            return h === 12 ? "12" : String(h + 12).padStart(2, "0");
        }
    };

    const handleSubmit = async () => {
        if (!selectedDate) return;

        const convertedHour = to24HourFormat(hour, isPM);
        const dueDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            parseInt(convertedHour),
            parseInt(minute)
        );

        const newTodo = {
            title,
            content,
            dueDate,
        };
        if (!userId) redirect("/login");
        await addTodo(userId, newTodo);
        closeModal();
    };

    return (
        <div className="flex flex-col space-y-2 w-full">
            {/* title */}
            <div className="space-y-1">
                <Label htmlFor="title" className="font-bold">
                    제목
                </Label>
                <Input
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            {/* content */}
            <div className="space-y-1">
                <Label htmlFor="content" className="font-bold">
                    세부 내용
                </Label>
                <Input
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            {/* calender + time */}
            <div className="flex flex-col items-center">
                <Calendar
                    locale={ko}
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border "
                />
                <TimePicker
                    hour={hour}
                    minute={minute}
                    isPM={isPM}
                    handleHour={setHour}
                    handleMinute={setMinute}
                    handlePM={setIsPM}
                />
            </div>

            <Button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-500  text-white rounded"
            >
                확인
            </Button>
        </div>
    );
}
