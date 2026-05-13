import { useState } from "react";

export default function Rekrutmen() {
  const [inputan, setInputan] = useState({ nama: "", posisi: "" });
  const [database, setDatabase] = useState([]);

  function prosesSubmit(event) {
    event.preventDefault();
    setDatabase([...database, inputan]);
    setInputan({ nama: "", posisi: "" });
  }

  return (
    <div>
      <h2>Sistem Rekrutmen Pegawai</h2>

      <form onSubmit={prosesSubmit}>
        <input
          placeholder="Nama Pegawai"
          value={inputan.nama}
          onChange={(e) => setInputan({ ...inputan, nama: e.target.value })}
        />
        <br />
        <br />
        <input
          placeholder="Posisi Pekerjaan"
          value={inputan.posisi}
          onChange={(e) => setInputan({ ...inputan, posisi: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Simpan</button>
      </form>
      <hr />

      <h3>Daftar Pegawai</h3>

      {database.map((item, index) => (
        <div key={index}>
          <p>nama: {item.nama}</p>
          <p>posisi: {item.posisi}</p>
        </div>
      ))}
    </div>
  );
}
