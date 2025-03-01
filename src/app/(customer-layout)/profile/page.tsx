"use client";
import { useStore } from "@/state/store";
import protectedRoutes from "@/hoc/protectedRoutes";

const userProfile = () => {
  const { logout } = useStore();
  return (
    <>
      <h3>Hi there! Customer </h3>
      <button onClick={logout}>You may Logout now!</button>
    </>
  );
};

export default protectedRoutes(userProfile, ["User"]);
