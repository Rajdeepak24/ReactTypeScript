import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DataTypes from "./Components/DataTypes";
import InputFields from "./Components/InputFields";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos)
  return (
    <>
      <div className="App">
        {/* <DataTypes/> */}
        <span className="heading">Taskify</span>
        <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
         todos={todos} 
         setTodos={setTodos}
         />
      </div>
    </>
  );
}

export default App;
