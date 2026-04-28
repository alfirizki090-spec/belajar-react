import { useState } from "react";

export default function FormSignUp() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const namaTerisi = nama.length > 0;
  const emailValid = email.includes("@") && email.includes(".");
  const passwordKuat = password.length >= 8 && /[A-Z]/.test(password);

  const formSiapKirim = namaTerisi && emailValid && passwordKuat;

  function eksekusiSubmit(event) {
    event.preventDefault();

    alert(
      `MENGIRIM DATA KE SERVER...\nNama: ${nama}\nEmail: ${email}\nPassword: ${password}`,
    );
  }

  return (
    <div style={{ border: "2px solid black", padding: "20px", width: "350px" }}>
      <h2>Pendaftaran Akun Baru</h2>

      <form onSubmit={eksekusiSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nama Lengkap:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
          {email.length > 0 && !emailValid && (
            <span style={{ color: "red", fontSize: "12px" }}>
              Email tidak valid
            </span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
          <div style={{ fontSize: "12px", marginTop: "5px" }}>
            <p
              style={{
                color: password.length >= 8 ? "green" : "red",
                margin: 0,
              }}
            >
              {password.length >= 8 ? "✅" : "❌"} Min. 8 karakter
            </p>
            <p
              style={{
                color: /[A-Z]/.test(password) ? "green" : "red",
                margin: 0,
              }}
            >
              {/[A-Z]/.test(password) ? "✅" : "❌"} Min. 1 Huruf Besar
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={!formSiapKirim}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: formSiapKirim ? "blue" : "gray",
            color: "white",
            cursor: formSiapKirim ? "pointer" : "not-allowed",
          }}
        >
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
}
