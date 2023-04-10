import { create } from "zustand";
const useParams = create((set) => ({
  login: false,
  setLogin: (param) => set((state) => ({ login: param })),

  user: {},
  setUser: (userObject) => set((state) => ({ user: userObject })),
}));
export { useParams };
