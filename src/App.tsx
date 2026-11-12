import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Form from "./NewTaskForm.tsx";
import TaskList from "./TaskList.tsx";
import Footer from "./Footer.tsx";

function App() {
  const [count, setCoun] = useState(0);

  return (
    <>
      <h1 className="title">Todos</h1>
      <div>
        <Form />
        <TaskList />
        <Footer />
      </div>
    </>
  );
}

export default App;
