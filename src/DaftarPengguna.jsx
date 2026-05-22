import { Link } from "react-router-dom";

export default function DaftarPengguna() {
  return (
    <div>
      <h2>Halaman Katalog Pengguna</h2>
      <p>Klik salah satu nama di bawah ini untuk melihat profilnya:</p>
      <ul>
        <li>
          <Link to="/pengguna/1">Lihat Profil Emily</Link>
        </li>
        <li>
          <Link to="/pengguna/2">Lihat Profil Michael</Link>
        </li>
        <li>
          <Link to="/pengguna/3">Lihat Profil Sophia</Link>
        </li>
      </ul>
    </div>
  );
}
