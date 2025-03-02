"use client";
import protectedRoutes from "@/hoc/protectedRoutes";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/state/store";

const adminPage = () => {
  const { getAllBrands } = useStore();

  const { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  console.log(data);

  return (
    <div>
      <h3>Hi there! Admin </h3>
    </div>
  );
};

export default protectedRoutes(adminPage, ["Admin"]);
