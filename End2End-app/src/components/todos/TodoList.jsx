import TodoItem from "./TodoItem";

export default function TodoList({ todos, onSelect, selectedId }) {
  return (
    <aside className="w-1/4 border-r p-4">
      <h2 className="font-semibold mb-4">Todos</h2>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isSelected={selectedId === todo.id}
          onClick={() => onSelect(todo)}
        />
      ))}
    </aside>
  );
}
