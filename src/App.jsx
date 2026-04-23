import './App.css'
import Profil from './Profil';

export default function App() {
  return (
<div>
  <h1>Daftar Tim Kita</h1>
  <Profil nama="Andi" pekerjaan="Frontend Developer" />
  <Profil nama="Budi" pekerjaan="Backend Developer" />
  <Profil nama="Citra" pekerjaan="UI/UX Developer" />
  
</div>
  );
}