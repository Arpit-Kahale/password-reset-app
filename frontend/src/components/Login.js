import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful");

    } catch (err) {
      alert(err.response?.data?.msg || "Server Error");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-4">
          <div className="card shadow p-4">

            <h3 className="text-center mb-3">Login</h3>

            <input
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-success w-100"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center mt-3">
              <Link to="/forgot">Forgot Password?</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;