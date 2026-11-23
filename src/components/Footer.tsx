import TaskFilter from "./TaskFilter.tsx";

type Footer = {
  numberOfItems: number;
  filter: (category: string) => void;
  clearCompleted: () => void;
};

export default function Footer({
  numberOfItems,
  filter,
  clearCompleted,
}: Footer) {
  return (
    <footer className="footer">
      <span className="todo-count">{numberOfItems} items left</span>
      <TaskFilter filter={filter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
