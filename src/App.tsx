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
      isCompleted: false,
    },
    {
      id: 2,
      name: "homework",
      date: new Date("2026-08-14, 14:23:51").toLocaleString("ru-RU"),
      isCompleted: false,
    },
  ]);
  const [category, setCategory] = useState("all");

  const addTask = (taskName: string) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((task) => task.id)) + 1 : 1;
    const newTask = {
      id: newId,
      name: taskName,
      date: new Date().toLocaleString("ru-RU"),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, newValue: string) => {
    if (newValue.length < 2) return;
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, name: newValue };
        }
        return task;
      }),
    );
  };

  const toggleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  const filter = (category: string) => {
    setCategory(category);
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((task) => !task.isCompleted));
  };

  return (
    <>
      <section className="todoapp main">
        <Form addTask={addTask} />
        <TaskList
          todos={
            category === "all"
              ? todos
              : todos.filter(
                  (task) => task.isCompleted === (category !== "active"),
                )
          }
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleCompleted={toggleCompleted}
        />
        <Footer
          numberOfItems={todos.reduce((acc, c) => {
            if (!c.isCompleted) acc++;
            return acc;
          }, 0)}
          filter={filter}
          clearCompleted={clearCompleted}
        />
      </section>
    </>
  );
}

export default App;
