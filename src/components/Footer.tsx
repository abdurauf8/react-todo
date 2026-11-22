import TaskFilter from "./TaskFilter.tsx";

export default function Footer({ filter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TaskFilter filter={filter} />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}
