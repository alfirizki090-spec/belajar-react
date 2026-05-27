import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { tema, setTema } = useContext(ThemeContext);

  const handleUbahTema = () => {
    setTema(tema === "terang" ? "gelap" : "terang");
  };
  return (
    <nav className="navigasi">
      <h2>Logo Aplikasi</h2>
      <button onClick={handleUbahTema} className="tombol-tema">
        Ubah ke mode {tema === "terang" ? "gelap" : "terang"}
      </button>
    </nav>
  );
}
