import React, { useState, useEffect } from "react";
import TodoElement from "./TodoElement";
import { todo } from "./state";
import Input from "./Input";

const TodoList = (props) => {
  const [todos, settodos] = useState([]); //useState(todo)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((res) => settodos(res));
  }, []);

  const changeCompleted = (id) => {
    const ini = [...todos];
    ini.forEach((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
    });
    settodos(ini);
  };

  const inputHandler = (t) => {
    //e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: t, completed: false }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((res) => settodos([...todos, res]));

    //const newTd = [...todos, { id: Math.random(), title: t, completed: false }];
    //settodos(newTd);
    //  console.log(t);
  };
  const deleteHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => settodos([...todos].filter((t) => t.id !== id)));
    // const newList = [...todos].filter((t) => t.id !== id);
    // settodos(newList);
  };

  return (
    <div>
      <Input submitHandler={inputHandler} />
      {todos.map((el) => {
        return (
          <TodoElement
            el={el}
            key={el.id}
            toggleComplet={changeCompleted.bind(this, el.id)}
            delTodo={deleteHandler.bind(this, el.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
