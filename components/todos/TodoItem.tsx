"use client";
import { TodoType } from "@/type/todo";
import clsx from "clsx";
import { ISODateToKoreanDate } from "@/lib/utils";
import { useItemStore } from "@/store/useItemStore";
import { Ellipsis } from "lucide-react";
import { deleteTodo, updateImportant } from "@/action/todo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const bgColorMap = {
    rose: "bg-rose-100",
    blue: "bg-blue-100",
    emerald: "bg-emerald-100",
};
type Props = {
    item: TodoType;
    color: string;
    status: "todo" | "inprogress" | "done";
};
export function TodoItem({ item, color, status }: Props) {
    const itemId = useItemStore((state) => state.itemId);
    const isActive = itemId === item.id;
    const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        await deleteTodo(item.id);
        alert("선택하신 일정이 삭제되었습니다");
    };
    const handleImportant = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        await updateImportant(item.id, !item.isImportant);
        alert(
            item.isImportant
                ? "중요한 일정에서 삭제되었습니다"
                : "중요한 일정에 추가되었습니다"
        );
    };
    return (
        <div
            className={clsx(
                bgColorMap[color as keyof typeof bgColorMap],
                "p-3 rounded shadow-md transform transition-all duration-300 cursor-pointer select-none",
                isActive && "scale-101"
            )}
            draggable
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                e.dataTransfer.setData("text/plain", item.id.toString());
            }}
        >
            <div className="flex justify-between">
                <p
                    className={clsx(
                        "text-bold",
                        status === "done" && "line-through"
                    )}
                >
                    {item.title}
                </p>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className={
                            "text-gray-400 hover:text-gray-700 focus:outline-none"
                        }
                    >
                        <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleDelete}>
                            삭제하기
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleImportant}>
                            {item.isImportant
                                ? "중요한 일정에서 삭제"
                                : "중요한 일정에 추가"}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <p
                className={clsx(
                    "transition-all duration-500 ease-in-out overflow-hidden ",
                    isActive
                        ? "opacity-100 max-h-40 mt-2"
                        : "opacity-0 max-h-0",
                    status === "done" && "line-through"
                )}
            >
                {item.content}
            </p>
            <p className="text-sm text-gray-400">
                {ISODateToKoreanDate(item.dueDate.toString())}
            </p>
        </div>
    );
}
