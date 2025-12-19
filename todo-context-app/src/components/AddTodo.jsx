import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef(null);

  const handleAdd = () => {
    const title = inputRef.current.value.trim();
    if (!title) return;

    addTodo(title);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
