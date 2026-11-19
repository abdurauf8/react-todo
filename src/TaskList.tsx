import Task from "./Task.tsx";

export default function TaskList() {
  return (
    <ul className="todo-list">
      <Task task="Completed task" status="completed" />
      <Task task="Editing task" status="editing" />
      <Task task="Active task" />
    </ul>
  );
}
