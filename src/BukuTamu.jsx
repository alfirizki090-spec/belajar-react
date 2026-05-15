import { useState, useEffect } from "react";

export default function BukuTamu() {
  // 1. Buat wadah state di sini (untuk daftarTamu dan namaBaru)
  const [daftarTamu, setDaftarTamu] = useState([]);
  const [tamuBaru, setTamuBaru] = useState("");

  // 2. Buat useEffect untuk fetch API di sini
  useEffect(() => {
    const ambilDataTamu = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=3",
        );
        const data = await response.json();
        setDaftarTamu(data);
      } catch (error) {
        console.error("Gagal Memuat Data", error);
      }
    };
    ambilDataTamu();
  }, []);

  // 3. Buat fungsi untuk menangani klik tombol tambah di sini
  function tambahTamu(event) {
    event.preventDefault();
    const tamuBentukObjek = { name: tamuBaru };
    setDaftarTamu([...daftarTamu, tamuBentukObjek]);
    setTamuBaru("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Buku Tamu VIP</h2>

      {/* 4. Buat input dan tombol di sini */}
      <form onSubmit={tambahTamu}>
        <input
          type="text"
          value={tamuBaru}
          onChange={(e) => setTamuBaru(e.target.value)}
        />
        <button type="submit">Tambah Tamu</button>
      </form>

      <hr />

      {/* 5. Lakukan perulangan .map() di sini untuk menampilkan daftarTamu */}
      <h3>Daftar Tamu</h3>
      {daftarTamu.map((item, index) => (
        <ul>
          {/* Render elemen <li> di sini */}
          <li key={index}>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
