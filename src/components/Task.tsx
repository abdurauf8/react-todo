import { useState } from "react";

type TaskProps = {
  id: number;
  task: string;
  date: string;
  deleteTask: (id: number) => void;
  updateTask: (id: number, newValue: string) => void;
  toggleCompleted: (id: number) => void;
  isCompleted: boolean;
};

export default function Task({
  id,
  task,
  date,
  deleteTask,
  updateTask,
  toggleCompleted,
  isCompleted,
}: TaskProps) {
  const [data, setData] = useState({
    className: isCompleted ? "completed" : "active",
    inputValue: task,
  });

  return (
    <li className={data.className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            toggleCompleted(id);
            if (e.target.checked) {
              setData((prev) => ({ ...prev, className: "completed" }));
              return;
            }
            setData((prev) => ({ ...prev, className: "active" }));
          }}
        />
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
