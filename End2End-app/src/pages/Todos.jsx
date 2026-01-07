import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import * as todoService from "../services/todo.service";
import TodoList from "../components/todos/TodoList";
import UpdateTodoModal from "../components/todos/UpdateTodoModal";
import { Button } from "../components/ui/button";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await todoService.getTodos(user.uid);
    setTodos(data);
  };

  const updateTodo = async (title) => {
    await todoService.updateTodo(selected.id, { title });
    loadTodos();
  };

  return (
    <div className="flex h-[70vh] border rounded">
      <TodoList
        todos={todos}
        selectedId={selected?.id}
        onSelect={setSelected}
      />

      <div className="flex-1 p-6">
        {selected ? (
          <>
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <div className="mt-4 space-x-2">
              <Button onClick={() => setOpen(true)}>Edit</Button>
            </div>
          </>
        ) : (
          <p>Select a todo</p>
        )}
      </div>

      {selected && (
        <UpdateTodoModal
          open={open}
          setOpen={setOpen}
          todo={selected}
          onUpdate={updateTodo}
        />
      )}
    </div>
  );
}
