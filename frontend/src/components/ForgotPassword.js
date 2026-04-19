import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/forgot-password`, {
        email,
      });
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-4">
          <div className="card shadow p-4">

            <h3 className="text-center mb-3">Forgot Password</h3>

            <input
              className="form-control mb-3"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-warning w-100" onClick={handleForgot}>
              Send Reset Link
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;