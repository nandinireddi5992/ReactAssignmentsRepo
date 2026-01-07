import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Todos App</h1>

      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
    </nav>
  );
}
