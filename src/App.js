import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";

const App = () => {
  //ReactDOM.render(document.title("gogo"));
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            // Fragment se foloseste daca avem mai multe chestii de render-uit
            <React.Fragment>
              <NavBar title="ToDo List Application" />
              <TodoList />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
