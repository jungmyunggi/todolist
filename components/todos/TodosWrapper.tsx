import { Todo } from "./Todo";
import { Inprogress } from "./Inprogress";
import { Done } from "./Done";

export async function TodosWrapper() {
    return (
        <div className="flex-1 min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%]">
            <Todo />
            <Inprogress />
            <Done />
        </div>
    );
}
