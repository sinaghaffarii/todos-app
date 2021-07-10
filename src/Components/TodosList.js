import React from "react";
import { BiMessageSquareCheck } from "react-icons/bi";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const removeHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const editHandler = ({ id }) => {
    const newTodo = todos.find((todo) => todo.id === id);
    setEditTodo(newTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <button className="btn btn-1" onClick={() => completeHandler(todo)}>
            <BiMessageSquareCheck  className="check"/>
          </button>
          <button className="btn btn-2" onClick={() => editHandler(todo)}>
            <BiMessageSquareEdit className="edit"/>
          </button>
          <button className="btn btn-3" onClick={() => removeHandler(todo)}>
            <BiTrash className="delete"/>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
