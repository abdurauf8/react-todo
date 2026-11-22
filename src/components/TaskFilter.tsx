import { useState } from "react";

export default function TaskFilter() {
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
            }
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
