import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const useAuth = (): string | null => {
  const { token, setToken } = useAuthStore();

  useEffect(() => {
    // Retrieve token from localStorage or other storage
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return token;
};
