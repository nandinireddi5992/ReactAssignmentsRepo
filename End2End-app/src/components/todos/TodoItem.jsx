export default function TodoItem({ todo, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded cursor-pointer mb-2 
      ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}`}
    >
      <p className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </p>
    </div>
  );
}
