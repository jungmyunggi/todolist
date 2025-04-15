import { getTodosByUser } from "@/data/todos";
import { Header } from "./Header";
import { Section } from "./Section";

export async function Todo() {
    const todos = (await getTodosByUser()).filter(
        (item) => item.status === "todo"
    );

    return (
        <div className="flex flex-col shadow-lg h-full w-full rounded-lg overflow-hidden">
            {/* 헤더 */}
            <Header title="TODO" className="bg-rose-200" />
            {/* 섹션 */}
            <Section todos={todos} color="rose" status="todo" />
        </div>
    );
}
