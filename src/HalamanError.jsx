import { Link } from "react-router-dom";

export default function HalamanEror() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "80px", margin: "0" }}>🚧 404 🚧</h1>
      <h2>Waduh, kamu nyasar!</h2>
      <p>Alamat URL yang kamu ketik tidak ada di dalam sistem Instagram ini.</p>

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/login"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0095f6",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Kembali ke Peradaban (Login)
        </Link>
      </div>
    </div>
  );
}
