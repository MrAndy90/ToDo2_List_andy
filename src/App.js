import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([
    "Put Shelf up",
    "Make this app",
    "Ring Garage",
  ]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database & fetch new 2todos as they get added/removed
  useEffect(() => {
    // this code here .... fires when the app.js loads
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // Stops Refresh
    console.log("😆", "Please work");
    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting 2do button
  };

  return (
    <div className="App">
      <h1>Mr Andy's 2do 🎢</h1>
      <form>
        <FormControl>
          <InputLabel>✔️Write a 2DO</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add 2TO
        </Button>
        {/* <button type="submit" onClick={addTodo}>ADD 2TO</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
