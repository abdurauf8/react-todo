type TaskProps = {
  id: number;
  task: string;
  date: string;
  deleteTask: (id: number) => void;
};

export default function Task({ id, task, date, deleteTask }: TaskProps) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        ></button>
      </div>
      <input type="text" className="edit" value="Editing task" />
    </li>
  );
}
