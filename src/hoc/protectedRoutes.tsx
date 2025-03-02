"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/state/store";

const protectedRoutes = (WrappedComponents: any, userRole: string[]) => {
  return (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const token = useStore.getState().token;
      const user = token ? useStore.getState().user : null;

      if (!token || (!user && !useStore.getState().isAuthorized)) {
        window.alert(
          "Warning : You are not authorized to access this page. Please login first."
        );
        router.replace("/");
      }

      if (user?.role && !userRole.includes(user.role)) {
        router.replace("/unauthorized");
      }

      return () => {};
    }, [router]);

    if (!useStore.getState().isAuthorized) {
      return null;
    }

    return <WrappedComponents {...props} />;
  };
};

export default protectedRoutes;
