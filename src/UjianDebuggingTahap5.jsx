import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ... (Komponen-komponen di atas anggap sudah ada di sini)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/toko",
    element: <Toko />,
    errorElement: <ErorSistem />,
    children: [
      {
        path: "komik",
        element: <h3>Daftar Komik</h3>,
      },
    ],
  },
  {
    path: "*",
    element: <Eror404 />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
