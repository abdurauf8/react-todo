import { useState } from "react";
import "./App.css";
import Form from "./components/NewTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "daily workout",
      date: new Date("2026-08-14, 14:23:51").toLocaleString("ru-RU"),
    },
    {
      id: 2,
      name: "homework",
      date: new Date("2026-08-14, 14:23:51").toLocaleString("ru-RU"),
    },
  ]);

  const addTask = (taskName: string) => {
    const newId = Math.max(...todos.map((task) => task.id)) + 1;
    const newTask = {
      id: newId,
      name: taskName,
      date: new Date().toLocaleString("ru-RU"),
    };
    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  return (
    <>
      <section className="todoapp main">
        <Form addTask={addTask} />
        <TaskList todos={todos} deleteTask={deleteTask} />
        <Footer />
      </section>
    </>
  );
}

export default App;
