import { api } from "./apiClient";
import { StateCreator } from "zustand";
import { BrandApiSlice } from "@/types/brand";

export const createBrandApi: StateCreator<BrandApiSlice> = (_set) => ({
  getAllBrands: async () => {
    const res = await api.get("/brands");
    return res.data;
  },
  getBrandById: async (id) => {
    const res = await api.get(`/brand/${id}`);
    return res.data;
  },
  createBrand: async (payload) => {
    const res = await api.post("/brands", payload);
    return res.data;
  },
  updateBrand: async (id, payload) => {
    const res = await api.patch(`/brand/edit/${id}`, payload);
    return res.data;
  },
  deleteBrand: async (id) => {
    const res = await api.get(`/brand/${id}`);
    return res.data;
  },
});
