import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pesanError, setPesanError] = useState("");

  const navigate = useNavigate();

  const jalankanLogin = (e) => {
    e.preventDefault();

    if (username === "alfi" && password === "12345") {
      navigate("/dashboard");
    } else {
      setPesanError("Username atau Password salah!");
    }
  };

  return (
    <div>
      <h2>Login Mini Instagram</h2>
      <form onSubmit={jalankanLogin}>
        <label>Login</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {pesanError && (
          <p style={{ color: "red", margin: "5px 0" }}>{pesanError}</p>
        )}
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}
