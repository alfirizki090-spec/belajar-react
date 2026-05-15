import { useState, useEffect } from "react";

export default function DaftarUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ambilDataUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=5",
        );
        const data = await response.json();

        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data dari internet:", error);
        setIsLoading(false);
      }
    };
    ambilDataUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Memuat data pengguna... Mohon tunggu sebentar</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Daftar Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> <br />
            Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
