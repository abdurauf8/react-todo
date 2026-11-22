import Task from "./Task.tsx";

export default function TaskList({ todos }) {
  return (
    <ul className="todo-list">
      {/* <Task task="Completed task" status="completed" />
      <Task task="Editing task" status="editing" />
      <Task task="Active task" /> */}

      {todos.map((task) => (
        <Task key={task.id} task={task.name} date={task.date} />
      ))}
    </ul>
  );
}
