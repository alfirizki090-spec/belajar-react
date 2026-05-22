import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const dataGaib = null;
  dataGaib.map();
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      {/* KOTAK KIRI: Sidebar (Mati/Permanen) */}
      <div
        style={{
          width: "200px",
          borderRight: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <h2>Mini IG</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5" }}>
          <li>
            <Link to="/dashboard">Beranda</Link>
          </li>
          <li>
            <Link to="/dashboard/search">Cari</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profil</Link>
          </li>
        </ul>
      </div>

      {/* KOTAK KANAN: Layar Utama (Dinamis) */}
      <div style={{ padding: "20px", flex: 1 }}>
        {/* INI ADALAH LUBANG MUTLAKNYA */}
        <Outlet />
      </div>
    </div>
  );
}
