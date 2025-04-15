import { Header } from "./Header";
import { Section } from "./Section";
import { getTodosByUser } from "@/data/todos";

export async function Inprogress() {
    const todos = (await getTodosByUser()).filter(
        (item) => item.status === "inprogress"
    );
    return (
        <div className="flex flex-col shadow-lg h-full rounded-lg overflow-hidden">
            <Header title="In progress" className="bg-blue-200" />
            <Section todos={todos} color="blue" status="inprogress" />
        </div>
    );
}
