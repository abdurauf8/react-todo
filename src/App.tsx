import { useState } from "react";
import "./App.css";
import Form from "./components/NewTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const initialData = [
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
  ];
  const [todos, setTodos] = useState({
    allTodos: initialData,
    forRendering: initialData,
  });

  const addTask = (taskName: string) => {
    const newId = Math.max(...todos.allTodos.map((task) => task.id)) + 1;
    const newTask = {
      id: newId,
      name: taskName,
      date: new Date().toLocaleString("ru-RU"),
      isCompleted: false,
    };
    setTodos((prev) => ({
      ...prev,
      allTodos: [...prev.allTodos, newTask],
      forRendering: [...prev.allTodos, newTask],
    }));
  };

  const deleteTask = (id: number) => {
    setTodos((prev) => ({
      ...prev,
      allTodos: prev.allTodos.filter((task) => task.id !== id),
      forRendering: prev.allTodos.filter((task) => task.id !== id),
    }));
  };

  const updateTask = (id: number, newValue: string) => {
    setTodos((prev) => ({
      ...prev,
      allTodos: prev.allTodos.map((task) => {
        if (task.id === id) {
          return { ...task, name: newValue };
        }
        return task;
      }),
      forRendering: prev.allTodos.map((task) => {
        if (task.id === id) {
          return { ...task, name: newValue };
        }
        return task;
      }),
    }));
  };

  const toggleCompleted = (id: number) => {
    setTodos((prev) => ({
      ...prev,
      allTodos: prev.allTodos.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
      forRendering: prev.allTodos.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    }));
  };

  const filter = (name: string) => {
    if (name === "active") {
      setTodos((prev) => ({
        ...prev,
        forRendering: prev.allTodos.filter((task) => !task.isCompleted),
      }));
    } else if (name === "completed") {
      setTodos((prev) => ({
        ...prev,
        forRendering: prev.allTodos.filter((task) => task.isCompleted),
      }));
    } else if (name === "all") {
      setTodos((prev) => ({ ...prev, forRendering: prev.allTodos }));
    }
  };

  const clearCompleted = () => {
    setTodos((prev) => ({
      ...prev,
      allTodos: prev.allTodos.filter((task) => !task.isCompleted),
      forRendering: prev.allTodos.filter((task) => !task.isCompleted),
    }));
  };

  return (
    <>
      <section className="todoapp main">
        <Form addTask={addTask} />
        <TaskList
          todos={todos.forRendering}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleCompleted={toggleCompleted}
        />
        <Footer filter={filter} clearCompleted={clearCompleted} />
      </section>
    </>
  );
}

export default App;
