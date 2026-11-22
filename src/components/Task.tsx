type TaskProps = {
  task: string;
  status?: string;
};

export default function Task({ task, date }: TaskProps) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value="Editing task" />
    </li>
  );
}
