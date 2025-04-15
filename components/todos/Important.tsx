import { getTodosByUser } from "@/data/todos";
import { Header } from "./Header";
import { Section } from "./Section";

export async function Important() {
    const todos = (await getTodosByUser()).filter((item) => item.isImportant);

    return (
        <div className="flex flex-col shadow-lg h-full w-full rounded-lg overflow-hidden">
            {/* 헤더 */}
            <Header title="IMPORTANT" className="bg-yellow-200" />
            {/* 섹션 */}
            <Section
                todos={todos}
                color="yellow"
                status={"todo"}
                isImportant={true}
            />
        </div>
    );
}
