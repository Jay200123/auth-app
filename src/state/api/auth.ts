import { StateCreator } from "zustand";
import { api } from "./apiClient";
import { AuthApiSlice } from "@/types";
import { PATH } from "@/constants";

export const createAuthApi: StateCreator<AuthApiSlice> = (set) => ({
  user: null,
  isAuthorized: false,
  login: async (payload) => {
    const res = await api.post(PATH.LOGIN, payload);
    set({
      user: res?.data?.details,
      isAuthorized: true,
    });
    localStorage.setItem("access", res.data.access);
    return res.data;
  },
  logout: async () => {
    await api.post(PATH.LOGOUT);
    set({ user: null });
    localStorage.setItem("access", "");
  },
});
