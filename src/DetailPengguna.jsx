import { useLoaderData } from "react-router-dom";

export const detailPenggunaLoader = async ({ params }) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.messsage);
    return null;
  }
};

export default function DetailPengguna() {
  const user = useLoaderData();
  if (!user) {
    return <h2>Data pengguna tidak ditemukan</h2>;
  }
  return (
    <div>
      <h3>Profil Pengguna</h3>
      <img
        src={user.image}
        alt={user.firstName}
        style={{ width: "100px", borderRadius: "50%", background: "#eee" }}
      />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
    </div>
  );
}
