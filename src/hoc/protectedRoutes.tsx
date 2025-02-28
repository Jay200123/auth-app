"use client";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/state/store";

const protectedRoutes = (WrappedComponents: any, userRole: string[]) => {
  return (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem("access");
      const user = token ? useStore.getState().user : null;

      if (!token || !user) {
        router.replace("/");
      }

      if (user?.role && !userRole.includes(user.role)) {
        router.replace("/unauthorized");
      }
      return () => {};
    }, [router]);

    if (useStore.getState().isAuthorized) {
      return null;
    }

    return <WrappedComponents {...props} />;
  };
};
