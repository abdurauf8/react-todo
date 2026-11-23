import { useState } from "react";
type FormProps = {
  addTask: (taskName: string) => void;
};

export default function Form({ addTask }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="header"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.length < 2) return;
        addTask(inputValue);
        setInputValue("");
      }}
    >
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
}
