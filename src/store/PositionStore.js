import { create } from 'zustand';
import { combine } from 'zustand/middleware'

const usePositionStore = create(
  combine(
    { position: { x: 0, y: 0 } },  
    (set) => ({
      setPosition: (position) => set({ position }) 
    })
  )
);
export default usePositionStore;