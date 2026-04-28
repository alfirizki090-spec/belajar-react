import { useState } from "react";

export default function DaftarPasukan() {
  const [nama, setNama] = useState("");
  const [kodeRahasia, setKodeRahasia] = useState("");
  const [senjata, setSenjata] = useState("");

  function prosesPendaftaran(event) {
    event.preventDefault();
    console.log(
      `Prajurit ${nama} dengan Sandi ${kodeRahasia} siap tempur membawa ${senjata}`,
    );

    setNama("");
    setKodeRahasia("");
    setSenjata("");
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
    </div>
  );
}
