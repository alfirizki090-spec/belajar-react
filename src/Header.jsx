import { useStore } from "./store.js";

export default function Header() {
  const keranjang = useStore((state) => state.keranjang);
  return (
    <div>
      <p>Jumlah Barang: {keranjang}</p>
    </div>
  );
}
