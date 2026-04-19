import { useState } from "react";
import axios from "axios";
import BASE_URL from "../api";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const handleReset = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/reset-password/${token}`,
        { password }
      );
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

            <h3 className="text-center mb-3">Reset Password</h3>

            <input
              className="form-control mb-3"
              type="password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-danger w-100" onClick={handleReset}>
              Reset Password
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;