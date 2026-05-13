import { useState } from "react";

export default function DaftarPasukan() {
  const [nama, setNama] = useState("");
  const [kodeRahasia, setKodeRahasia] = useState("");
  const [senjata, setSenjata] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [daftarPasukan, setDaftarPasukan] = useState([]);

  function prosesPendaftaran(event) {
    event.preventDefault();
    console.log(
      `Prajurit ${nama} dengan Sandi ${kodeRahasia} siap tempur membawa ${senjata}`,
    );

    const prajuritBaru = {
      id: Date.now(),
      namaPrajurit: nama,
      sandiRahasia: kodeRahasia,
      jenisSenjata: senjata,
    };

    setDaftarPasukan([...daftarPasukan, prajuritBaru]);
    setNama("");
    setKodeRahasia("");
    setSenjata("");
    setBerhasil(true);
  }

  return (
    <div>
      <form onSubmit={prosesPendaftaran}>
        <div style={{ margin: "10px" }}>
          <label>Nama:</label>
          <br />
          <input
            type="text"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Kode Rahasia:</label>
          <br />
          <input
            type="password"
            value={kodeRahasia}
            onChange={(event) => setKodeRahasia(event.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Senjata:</label>
          <br />
          <input
            type="text"
            value={senjata}
            onChange={(event) => setSenjata(event.target.value)}
          />
        </div>
        <button type="submit" style={{ margin: "10px" }}>
          Input Pasukan
        </button>
      </form>
      {berhasil && <div>Pendaftaran sukses!</div>}
      <div style={{ marginTop: "30px" }}>
        <h2>Daftar Pasukan Terkini:</h2>

        {daftarPasukan.map((prajurit) => {
          return (
            // Atribut 'key' adalah syarat mutlak dari mesin React
            <div key={prajurit.id}>
              <p>
                <strong>Nama:</strong> {prajurit.namaPrajurit}
              </p>
              <p>
                <strong>Senjata:</strong> {prajurit.jenisSenjata}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
