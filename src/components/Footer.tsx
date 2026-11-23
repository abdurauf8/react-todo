import TaskFilter from "./TaskFilter.tsx";

type Footer = {
  numberOfItems: number;
  filter: (category: string) => void;
};

export default function Footer({ numberOfItems, filter }: Footer) {
  return (
    <footer className="footer">
      <span className="todo-count">{numberOfItems} items left</span>
      <TaskFilter filter={filter} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
