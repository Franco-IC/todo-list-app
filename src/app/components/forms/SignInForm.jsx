"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import triggerAlert from "@/utils/triggerAlert";
import { signIn } from "next-auth/react";
import { CircularProgress } from "@mui/material";

function SignInForm() {
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

      const nextAuthResponse = await signIn("credentials", {
        username: formState.username,
        password: formState.password,
        redirect: false,
      });

      if (nextAuthResponse.error) throw new Error("Invalid credentials");

      setLoading(false);
      return router.replace("/");
    } catch (error) {
      setLoading(false);
      return triggerAlert("error", error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto items-center max-w-[300px] w-[300px]"
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
        className="bg-blue-500 hover:bg-blue-700 px-4 mt-8 h-12 w-fit rounded-2xl transition-all cursor-pointer "
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            Signing In <CircularProgress size={25} />
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}

export default SignInForm;
