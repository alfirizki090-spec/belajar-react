export default function TombolAksi() {
  function TanganiKlik() {
    alert("Halo! Tombolnya berhasil di klik nih.");
  }
  return (
    <div>
      <p>Coba klik tombol di bawah ini ya:</p>
      {/* Kita pasang onClick di tag button dan panggil nama fungsinya */}
      <button onClick={TanganiKlik}>Klik Aku Dongs</button>
    </div>
  );
}
