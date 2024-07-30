"use client";
import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Drawer from "@/components/Drawer";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const token = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (token === null) {
      router.push("/signin"); // Redirect to login if no token
    }
    else{
      // make call to the backend to get the user Data
    }
  }, [token, router]);
  return (
    <div className="flex h-screen overflow-hidden">
      <Drawer />
      <div className="w-1/5">
        <Dashboard />
      </div>
      <div className="w-4/5 overflow-y-scroll">
        <Main />
      </div>
    </div>
  );
}
