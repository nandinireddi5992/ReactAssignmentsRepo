import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/todos");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm border p-6 rounded space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
