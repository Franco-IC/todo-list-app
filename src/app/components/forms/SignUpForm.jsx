"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

import triggerAlert from "@/utils/triggerAlert";
import { CircularProgress } from "@mui/material";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function SignUpForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);

      if (!formState.username.trim() || !formState.password.trim())
        throw new Error("Username/Password fields can't be empty");

      if (
        formState.username.trim().length < 6 ||
        formState.password.trim().length < 6
      ) {
        throw new Error(
          "Username/Password should be at least 6 characters long"
        );
      }

      const signUpResponse = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        formState,
        {
          headers: {
            "Content-Type": "application/json",
            api_key: API_KEY,
          },
        }
      );

      if (signUpResponse.data.error) {
        throw new Error(signUpResponse.data.error);
      }

      const nextAuthResponse = await signIn("credentials", {
        username: formState.username.trim(),
        password: formState.password.trim(),
        redirect: false,
      });

      if (nextAuthResponse.error) {
        throw new Error(nextAuthResponse.error);
      }

      setLoading(false);
      triggerAlert(
        "success",
        "Account created successfully, signing in...",
        1500
      );

      setTimeout(() => {
        return router.replace("/");
      }, 1000);
    } catch (error) {
      if (error.response) {
        setLoading(false);
        return triggerAlert("error", error.response.data.error);
      }

      setLoading(false);
      return triggerAlert("error", error.message);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto items-center max-w-[300px] w-[300px] "
    >
      <input
        type="text"
        autoComplete="off"
        name="username"
        value={formState.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-[80%] mb-6 p-2 bg-gray-700 rounded-sm"
      />
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-[80%] p-2 bg-gray-700 rounded-sm"
      />
      <button
        type="submit"
        value={"Sign Up"}
        className="bg-emerald-500 hover:bg-emerald-700 px-4 mt-8 h-12 w-fit rounded-2xl transition-all cursor-pointer"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            Creating your account <CircularProgress size={25} />
          </div>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
}

export default SignUpForm;
