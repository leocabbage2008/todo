import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import InitTodos from "./default/todo.js";

function App() {
  const [todos, setTodos] = useState(InitTodos);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextTodos = [...todos];
    nextTodos.push({ text: input });
    setTodos(nextTodos);
    setInput("");
  };
  const handleDelete = (e) => {
    const modTodos = [...todos];
    modTodos.splice(e, 1);
    setTodos(modTodos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List todos={todos} deleteHandler={handleDelete}></List>
        <Form input={input} setValue={setInput} handleSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
