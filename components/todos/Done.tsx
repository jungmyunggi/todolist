import { Header } from "./Header";
import { Section } from "./Section";
import { getTodosByUser } from "@/data/todos";

export async function Done() {
    const todos = (await getTodosByUser()).filter(
        (item) => item.status === "done"
    );
    return (
        <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full col-span-1 sm:col-span-2 md:col-span-1">
            <Header title="Done" className="bg-emerald-200" />
            <Section todos={todos} color="emerald" status="done" />
        </div>
    );
}
