import { get } from "http";
import { Image } from "./image";

type Brand = {
  _id: string;
  brand_name: string;
  image: Image[];
};

type BrandsResponse = {
  success: boolean;
  message: string;
  details: Brand[];
};

type BrandResponse = {
  success: boolean;
  message: string;
  details: Brand | null;
};

type BrandActions = {
  getAllBrands: () => Promise<BrandsResponse>;
  getBrandById: (id: string) => Promise<BrandResponse>;
  createBrand: (payload: Brand) => Promise<BrandResponse>;
  updateBrand: (id: string, payload: Brand) => Promise<BrandResponse>;
  deleteBrand: (id: string) => Promise<BrandResponse>;
};

export type BrandApiSlice = BrandActions;
