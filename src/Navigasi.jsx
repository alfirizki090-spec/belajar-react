import { Link } from "react-router-dom";
export default function Navigasi() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/profil">Profil</Link>
    </div>
  );
}
