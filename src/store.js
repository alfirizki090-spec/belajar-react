import { create } from "zustand";

export const useStore = create((set) => ({
  keranjang: 0,
  tambahKeranjang: () => set((state) => ({ keranjang: state.keranjang + 1 })),
  kurangiKeranjang: () =>
    set((state) => {
      if (state.keranjang > 0) {
        return { keranjang: state.keranjang - 1 };
      } else {
        return {
          keranjang: 0,
        };
      }
    }),
  kosongkanKeranjang: () => set({ keranjang: 0 }),
}));
