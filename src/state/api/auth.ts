import { StateCreator } from "zustand";
import { api } from "./apiClient";
import { AuthApiSlice } from "@/types";
import { PATH } from "@/constants";

export const createAuthApi: StateCreator<AuthApiSlice> = (set) => ({
  user: null,
  token: "",
  isAuthorized: false,
  login: async (payload) => {
    const res = await api.post(PATH.LOGIN, payload);
    set({
      user: res?.data?.details,
      token: res?.data?.access,
      isAuthorized: true,
    });
    return res.data;
  },
  logout: async () => {
    await api.post(PATH.LOGOUT);
    set({ user: null, token: "", isAuthorized: false });
  },
});
