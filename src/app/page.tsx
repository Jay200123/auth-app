"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useStore } from "@/state/store";

export default function Home() {
  const router = useRouter();
  const { login, logout } = useStore();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await login(values);
      if (res?.details?.role === "User") {
        window.alert("User is User");
        router.push("/profile");
        window.alert(`${res?.message}`);
      } else {
        window.alert("User is Admin");
        router.push("/test");
        window.alert(`${res?.message}`);
      }
    },
  });
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        onClick={() => {
          logout();
          window.alert("User Successfully Logout");
        }}
        className="bg-blue-500 text-white p-2.5 rounded-md mt-2"
      >
        Logout
      </button>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[22rem] flex flex-col items-center"
      >
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full border border-gray rounded-md p-2.5"
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full border border-gray rounded-md p-2.5"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2.5 rounded-md mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
