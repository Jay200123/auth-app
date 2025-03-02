import { AuthApiSlice } from "./auth";
import { BrandApiSlice } from "./brand";

export type Store = AuthApiSlice & BrandApiSlice;
