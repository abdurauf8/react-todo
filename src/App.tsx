import { useState } from "react";
import "./App.css";
import Form from "./components/NewTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [todos] = useState([
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

  return (
    <>
      <section className="todoapp main">
        <Form />
        <TaskList todos={todos} />
        <Footer />
      </section>
    </>
  );
}

export default App;
