import TaskFilter from "./TaskFilter.tsx";

type Footer = {
  numberOfItems: number;
};

export default function Footer({ numberOfItems }: Footer) {
  return (
    <footer className="footer">
      <span className="todo-count">{numberOfItems} items left</span>
      <TaskFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
