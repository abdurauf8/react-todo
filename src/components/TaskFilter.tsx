import { useState } from "react";
type TaskFIlter = {
  filter: (category: string) => void;
};

export default function TaskFilter({ filter }: TaskFIlter) {
  const [className, setClassName] = useState({
    all: "selected",
    active: "",
    completed: "",
  });

  return (
    <ul className="filters">
      <li>
        <button
          className={className.all}
          onClick={() => {
            if (!className.all) {
              setClassName({ all: "selected", active: "", completed: "" });
              filter("all");
            }
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={className.active}
          onClick={() => {
            if (!className.active) {
              setClassName({ all: "", active: "selected", completed: "" });
              filter("active");
            }
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={className.completed}
          onClick={() => {
            if (!className.completed) {
              setClassName({ all: "", active: "", completed: "selected" });
              filter("completed");
            }
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
