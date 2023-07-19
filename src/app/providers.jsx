"use client";

import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/Context";

function Providers({ children }) {
  return (
    <SessionProvider>
      <ContextProvider>{children}</ContextProvider>
    </SessionProvider>
  );
}

export default Providers;
