import React, { useState } from "react";

const Input = (props) => {
  const [newTodo, setnewTodo] = useState("");

  const inputHandler = (e) => {
    setnewTodo(e.target.value);
  };
  const ClickButton = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    }
    props.submitHandler(newTodo);
    setnewTodo("");
  };
  const enterButton = (e) => {
    e.target.style.background = "red";
  };
  const leaveButton = (e) => {
    e.target.style.background = "#555";
  };

  return (
    <form style={style_form}>
      <input
        style={style_input}
        type="text"
        onChange={inputHandler}
        value={newTodo}
      />
      <button
        style={style_btn}
        onClick={ClickButton} //{props.submitHandler.bind(this, newTodo)}
        onMouseEnter={enterButton}
        onMouseLeave={leaveButton}
      >
        ADD TODO
      </button>
    </form>
  );
};
const style_form = {
  display: "flex",
  margin: "10px 10px",
};
const style_input = {
  flex: "10",
  fontSize: "20px",
  margin: "0 10px",
  padding: "10px",
  border: "1px solid  grey",
  borderRadius: "5px",
};
const style_btn = {
  flex: "2",
  fontSize: "20px",
  backgroundColor: "#555",
  color: "#fff",
  padding: "10px",
  border: "0",
  cursor: "pointer",
  ":hover": {
    border: "1px solid  grey",
    borderRadius: "5px",
    backgroundColor: "red",
  },
};

export default Input;
