import { useState } from "react";

type TaskProps = {
  id: number;
  task: string;
  date: string;
  deleteTask: (id: number) => void;
  updateTask: (id: number, newValue: string) => void;
};

export default function Task({
  id,
  task,
  date,
  deleteTask,
  updateTask,
}: TaskProps) {
  const [data, setData] = useState({
    className: "activa",
    inputValue: task,
  });

  return (
    <li className={data.className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{task}</span>
          <span className="created">{date}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => setData({ ...data, className: "editing" })}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={data.inputValue}
        onChange={(e) => setData({ ...data, inputValue: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateTask(id, data.inputValue);
            setData({ ...data, className: "active" });
          }
        }}
      />
    </li>
  );
}
