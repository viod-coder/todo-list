import React from "react";

const TodoElement = (props) => {
  const getStyle = () => {
    return {
      backgroundColor: "#eee",
      textDecoration: props.el.completed ? "line-through" : "none",
      color: "blue",
      padding: "10px",

      borderBottom: "1px solid red",
      fontSize: "20px",
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          onChange={props.toggleComplet}
          defaultChecked={props.el.completed}
        />
        {"   "}
        {props.el.title}
        <button style={STYLE_BTN} onClick={props.delTodo}>
          x
        </button>
      </p>
    </div>
  );
};
const STYLE_BTN = {
  backgroundColor: "red",
  borderRadius: "50%",
  color: "white",
  fontSize: "20px",
  float: "right",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  margin: "0px 15px",
};

export default TodoElement;
