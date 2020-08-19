import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div style={style_nav}>
      <h1>{props.title}</h1>
      <Link style={{ color: "white" }} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={{ color: "white" }} to="/about">
        About
      </Link>
    </div>
  );
};
const style_nav = {
  backgroundColor: "rgb(36, 4, 61)",
  color: "white",
  textAlign: "center",
  padding: "10px",
  margin: "5px 0px",
};

export default NavBar;
