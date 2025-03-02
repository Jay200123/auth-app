import { persist, createJSONStorage } from "zustand/middleware";
import { Store } from "@/types";
import { createAuthApi } from "./api/auth";
import { createBrandApi } from "./api/brand";
import { create } from "zustand";

export const useStore = create<Store>()(
  persist(
    (...a) => ({
      ...createAuthApi(...a),
      ...createBrandApi(...a),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
