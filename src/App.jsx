import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DaftarPengguna from "./DaftarPengguna";
import DetailPengguna, { detailPenggunaLoader } from "./DetailPengguna";
import Profil from "./Profil";
import MenuKopi from "./MenuKopi";
import TombolAksi from "./TombolAksi";
import Penghitung from "./Penghitung";
import MesinKetikan from "./formInput";
import FormSignUp from "./formSignUp";
import FormLogin from "./formLogin";
import DaftarPasukan from "./daftarPasukan";
import SaklarLampu from "./SaklarLampu";
import Rekrutmen from "./Rekrutmen";
import DaftarUser from "./DaftarUser";
import BukuTamu from "./BukuTamu";
import Navigasi from "./Navigasi";
import HalamanHome from "./HalamanHome";
import HalamanProfil from "./HalamanProfil";
import Login from "./Login";
import Dashboard from "./Dashboard";
import HalamanEror from "./HalamanError";

function CatatanTahap1() {
  const dataTim = [
    { id: 1, nama: "Andi", pekerjaan: "Frontend Developer" },
    { id: 2, nama: "Budi", pekerjaan: "Backend Developer" },
    { id: 3, nama: "Citra", pekerjaan: "UI/UX Developer" },
    { id: 4, nama: "Deni", pekerjaan: "Data Scientist" },
    { id: 5, nama: "Eka", pekerjaan: "Project Manager" },
  ];
  return (
    <div
      style={{ border: "2px solid green", padding: "10px", marginTop: "20px" }}
    >
      <h1>Daftar Tim Kita (Otomatis)</h1>
      {dataTim.map((anggota) => (
        <Profil
          key={anggota.id}
          nama={anggota.nama}
          pekerjaan={anggota.pekerjaan}
        />
      ))}
    </div>
  );
}

function UjianTahap1() {
  const daftarMenu = [
    {
      id: 1,
      namaMenu: "Kopi Kenangan Mantan",
      harga: "Rp 20.000",
      deskripsi: "Manisnya pas, seperti janji manisnya.",
    },
    {
      id: 2,
      namaMenu: "Kopi Susu Gula Aren",
      harga: "Rp 18.000",
      deskripsi: "Klasik, menenangkan, bikin melek.",
    },
    {
      id: 3,
      namaMenu: "Americano Dingin",
      harga: "Rp 15.000",
      deskripsi: "Pahit, sekuat kenyataan hidup.",
    },
    {
      id: 4,
      namaMenu: "Matcha Latte",
      harga: "Rp 25.000",
      deskripsi: "Hijau, lembut, dan bikin tenang.",
    },
  ];
  return (
    <div
      style={{ border: "2px solid green", padding: "10px", marginTop: "20px" }}
    >
      <h2>Daftar Menu</h2>
      {daftarMenu.map((urutan) => (
        <MenuKopi
          key={urutan.id}
          namaMenu={urutan.namaMenu}
          harga={urutan.harga}
          deskripsi={urutan.deskripsi}
        />
      ))}
    </div>
  );
}

function CatatanTahap2() {
  return (
    <div
      style={{ border: "2px solid green", padding: "10px", marginTop: "20px" }}
    >
      <h2>Catatan tahap 2 :Interaktifitas</h2>
      <TombolAksi />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DaftarPengguna />,
  },
  {
    path: "/pengguna/:id",
    element: <DetailPengguna />,
    loader: detailPenggunaLoader,
  },
  {
    path: "/login",
    element: <Login />,
    caseSensitive: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <HalamanEror />,
    children: [
      {
        path: "",
        element: <h3>ini halaman feed foto</h3>,
      },
      {
        path: "search",
        element: <h3>ini halaman search</h3>,
      },
      {
        path: "profile",
        element: <h3>ini halaman profil</h3>,
      },
    ],
  },
  {
    path: "*",
    element: <HalamanEror />,
  },
]);

export default function App() {
  {
    /*
  return (
    <div>
      <CatatanTahap1 />
      <UjianTahap1 />
      <CatatanTahap2 />
      <Penghitung />
      <MesinKetikan />
      <FormSignUp />
      <FormLogin />
      <DaftarPasukan />
      <SaklarLampu />
      <Rekrutmen />
      <DaftarUser />
      <BukuTamu />
       <Navigasi /> 
      <Routes>
        <Route path="/" element={<HalamanHome />} />
        <Route path="/profil" element={<HalamanProfil />} />
      </Routes> 
    </div>
  );
  */
  }
  return <RouterProvider router={router} />;
}
