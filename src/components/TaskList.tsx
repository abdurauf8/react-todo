import Task from "./Task.tsx";

type Task = {
  id: number;
  name: string;
  date: string;
  isCompleted: boolean;
};
type TaskListProps = {
  todos: Task[];
  deleteTask: (id: number) => void;
  updateTask: (id: number, newValue: string) => void;
  toggleCompleted: (id: number) => void;
};

export default function TaskList({
  todos,
  deleteTask,
  updateTask,
  toggleCompleted,
}: TaskListProps) {
  return (
    <ul className="todo-list">
      {todos.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          task={task.name}
          date={task.date}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleCompleted={toggleCompleted}
          isCompleted={task.isCompleted}
        />
      ))}
    </ul>
  );
}
