// Kita WAJIB mengambil fitur useState dari "gudang" React agar bisa digunakan
import { useState } from "react";

export default function Penghitung() {
    // 1. Kita siapkan memori ajaibnya (State), nilai awalnya 0
    const [angka, setAngka] = useState(0);

    // 2. Fungsi ini akan dijalankan setiap kali tombol diklik
    function TambahSatu() {
    // Kita gunakan remote control 'setAngka' untuk memperbarui nilainya
    // Ingat, kita tidak boleh nulis "angka = angka + 1"
        setAngka(angka + 1) ;
    }
    return(
        <div style={{ border: '2px solid green', padding: '10px', marginTop: '20px' }}>
            <h3>Mari Berhitung</h3>

            {/* 3. Kita cetak nilai memori 'angka' ke layar pakai portal kurung kurawal */}
            <p>Kamu sudah menekan tombol sebanyak: {angka} kali</p>

            {/* 4. Kita sambungkan tombol dengan fungsi tambahSatu */}
            <button onClick={TambahSatu}>Tambah Angka!</button>
        </div>
    );
}