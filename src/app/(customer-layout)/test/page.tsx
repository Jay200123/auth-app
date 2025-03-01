"use client";
import protectedRoutes from "@/hoc/protectedRoutes";

const adminPage = () => {
  return (
    <>
      <h3>Hi there! Admin </h3>
    </>
  );
};

export default protectedRoutes(adminPage, ["Admin"]);
