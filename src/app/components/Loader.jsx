"use client";

import { CircularProgress } from "@mui/material";

function Loader({ message = "Loading" }) {
  return (
    <div className="flex gap-5 items-center justify-center absolute top-[40%]">
      <h1 className="text-2xl"> {message}</h1>
      <CircularProgress />
    </div>
  );
}

export default Loader;
