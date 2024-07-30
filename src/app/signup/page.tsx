"use client";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { SignUpUser } from "@/lib/signUp";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp= async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    const response = await SignUpUser(email, password, name);

    console.log("vishal", response);

    if (response && response.token) {
      // Store the token in localStorage and Zustand store
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setUser(response.id, response.name);
      // Redirect to the home page or any other page
      router.push("/");
    } else {
      // Handle error (e.g., display error message)
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <section className="bg-custom-gradient max-h-[100vh]">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full mt-[10%] min-w-[35%] bg-card-color rounded-lg shadow border md:mt-[8%] sm:max-w-md xl:p-7 bg-gray-800 border-customBorder">
            <div className=" min-w-[100%] p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl mb-10 text-center font-bold text-gray-900 md:text-4xl">
                Welcome to <span className="text-customHighlight">Workflo</span>
                !
              </h1>
              <form className="min-w-full space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-inputColor text-gray-900 rounded-lg block w-full p-2.5 border-input"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-inputColor text-gray-900 rounded-lg block w-full p-2.5 border-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-inputColor text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignUp}
                  className="w-full text-white bg-submitButton hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
