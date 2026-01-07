import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todo.trim()) return
    setTodos([...todos, { text: todo, completed: false }])
    setTodo("")
  }

  const toggleTodo = (index) => {
    const updated = [...todos]
    updated[index].completed = !updated[index].completed
    setTodos(updated)
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="New todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <ul className="space-y-2">
          {todos.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={item.completed}
                onCheckedChange={() => toggleTodo(index)}
              />
              <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
