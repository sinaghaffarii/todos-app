import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={input}
          onChange={inputHandler}
          placeholder="Add Todos Here!"
        />
        <button type="submit">{editTodo ? "OK" : "ADD"}</button>
      </form>
    </div>
  );
};

export default Form;
