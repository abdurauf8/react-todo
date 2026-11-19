type TaskProps = {
  task: string;
  status?: string;
};

export default function Task({ task, status = "" }: TaskProps) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task}</span>
          <span className="created">{new Date().toLocaleString("ru-RU")}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value="Editing task" />
    </li>
  );
}
