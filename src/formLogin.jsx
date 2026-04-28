import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const prosesLogin = (event) => {
    event.preventDefault();
    console.log("Bos, ada yang login nih!");
    console.log("Email yang dimasukkan:", email);
    console.log("Password yang dimasukkan:", password);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={prosesLogin}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}
