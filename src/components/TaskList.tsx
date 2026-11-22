import Task from "./Task.tsx";

export default function TaskList({ todos, deleteTask, updateTask }) {
  return (
    <ul className="todo-list">
      {/* <Task task="Completed task" status="completed" />
      <Task task="Editing task" status="editing" />
      <Task task="Active task" /> */}

      {todos.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          task={task.name}
          date={task.date}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}
