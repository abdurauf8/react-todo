import TaskFilter from "./TaskFilter.tsx";

export default function Footer() {
    return (
        <>
            <p>1 items left</p>
            <TaskFilter />
            <button>Clear completed</button>
        </>
    )
}