import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState("Alfi");

  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
}
