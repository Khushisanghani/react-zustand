import { create } from "zustand";
const useCount = create((set) => ({
    count:0,
    increment: () => set((state) => ({count : state.count + 1})),
    decrement: () => set((state) => ({count : state.count - 1})),
    removecount : () => set({count:0})
}))
export default useCount;