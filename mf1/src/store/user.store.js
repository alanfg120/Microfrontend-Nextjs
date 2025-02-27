import fetchGitHubUsers from "@/services/users.service";
import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [],
  cant: 5,
  loading: false,
  setUsers: async (cant,users) => {
    return set((state) => {
      return {
        cant: state.cant + 1,
        users: [...state.users, ...users],
        loading: false
      };
    });
  },
  setInitialUsers: (users) => {
    return set({
      users: [...users],
    });
  },
  setloading: (loading) => set({
     loading: loading
  })
}))

export default useUserStore;
