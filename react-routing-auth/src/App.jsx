import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Todos from "./pages/Todos.jsx";
import TodoDetails from "./pages/TodoDetails.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/todos/:todoId"
        element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
