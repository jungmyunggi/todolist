"use client";
import { TodoItem } from "./TodoItem";
import { TodoType } from "@/type/todo";
import { useItemStore } from "@/store/useItemStore";
import { updateTodo } from "@/action/todo";
type Props = {
    todos: TodoType[];
    color: string;
    status: "todo" | "inprogress" | "done";
};
export function Section({ todos, color, status }: Props) {
    const updateItem = useItemStore((state) => state.updateItemId);
    const itemId = useItemStore((state) => state.itemId);
    const handleUpdateItem = (id: string) => {
        if (itemId === id) {
            updateItem(null);
        } else {
            updateItem(id);
        }
    };
    const handleDragOver = (e: React.DragEvent<HTMLUListElement>) => {
        e.preventDefault();
    };
    const handleDrop = async (e: React.DragEvent<HTMLUListElement>) => {
        await updateTodo(e.dataTransfer.getData("text/plain"), status);
    };
    return (
        <ul
            className="flex-1 p-4 bg-white h-full "
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <div className="space-y-4 mb-4">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            onClick={() => handleUpdateItem(todo.id)}
                        >
                            <TodoItem
                                item={todo}
                                color={color}
                                status={status}
                            />
                        </li>
                    );
                })}
            </div>
        </ul>
    );
}
