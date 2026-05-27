import { useStore } from "./store";

export default function KontrolKeranjang() {
  const tambahKeranjang = useStore((state) => state.tambahKeranjang);
  const kurangiKeranjang = useStore((state) => state.kurangiKeranjang);
  const kosongkanKeranjang = useStore((state) => state.kosongkanKeranjang);

  return (
    <div>
      <button onClick={tambahKeranjang}>+</button>
      <button onClick={kurangiKeranjang}>-</button>
      <button onClick={kosongkanKeranjang}>Kosongkan</button>
    </div>
  );
}
