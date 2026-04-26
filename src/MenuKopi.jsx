export default function MenuKopi(Daftar) {
    return(
        <div>
            <hr />
            <p>{Daftar.namaMenu} {Daftar.harga} {Daftar.deskripsi}</p>
        </div>
    );
}