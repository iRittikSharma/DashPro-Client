"use client";
import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Drawer from "@/components/Drawer";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUserDetails } from "@/lib/getUserDetails";

import { useUserStore } from "@/store/userStore";
import { useAuthStore } from "@/store/authStore";
export default function Home() {
  // const token = useAuth();
  const setUser = useUserStore((state) => state.setUser);
  const { token, setToken } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const localtoken = localStorage.getItem("token");
      if (!localtoken) {
        router.push("/signin"); // Redirect to login if no token
      } else {
        try {
          const data = await getUserDetails(localtoken);
          if (!data && !data._id && !data.name) {
            router.push("/signin");
          }
          console.log(data);
          setUser(data._id, data.name); // Store user data in the user store
          setToken(localtoken);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [router, token]);
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <Drawer />
      <div className="lg:w-1/5">
        <Dashboard />
      </div>
      <div className=" lg:w-4/5 overflow-y-scroll">
        <Main />
      </div>
    </div>
  );
}
