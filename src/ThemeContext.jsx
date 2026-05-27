import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("terang");

  return <ThemeContext value={{ tema, setTema }}>{children}</ThemeContext>;
}
