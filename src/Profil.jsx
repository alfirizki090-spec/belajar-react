export default function Profil(props) {
  return (
    <div>
      <h2>Halo, nama aku {props.nama}</h2>
      <p>Pekerjaanku adalah {props.pekerjaan}</p>
      <hr />
    </div>
  );
}
