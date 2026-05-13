import { useState } from "react";

export default function SaklarLampu() {
  const [menyala, setMenyala] = useState(false);

  return (
    <div>
      <h2>Latihan Saklar</h2>
      <button onClick={() => setMenyala(true)}>Nyalakan Lampu!</button>
      <button onClick={() => setMenyala(false)}>Matikan Lampu!</button>
      <br />
      <br />
      {menyala && <div>💡 TERANG BENDERANG! CAHAYA ILAHI MUNCUL!</div>}
    </div>
  );
}
