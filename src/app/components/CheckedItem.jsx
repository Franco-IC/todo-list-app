"use client";

import { useState } from "react";
import { CircularProgress } from "@mui/material";
import FadeInAnimation from "./animations/FadeIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CheckedItem({ task, handleStatusToggle }) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      onClick={async (e) => {
        e.stopPropagation();
        setLoading(true);

        const res = await handleStatusToggle({ ...task, status: "pending" });

        if (res) {
          setLoading(false);
        }
      }}
      className="flex justify-center items-center cursor-pointer border-2 h-10 w-10 rounded-md border-emerald-400 transition-colors duration-200 hover:border-emerald-500 hover:bg-emerald-500 hover:bg-opacity-10"
    >
      {loading ? (
        <CircularProgress size={25} />
      ) : (
        <FadeInAnimation>
          <CheckCircleIcon className="fill-emerald-400 text-2xl transition-colors duration-200" />
        </FadeInAnimation>
      )}
    </div>
  );
}

export default CheckedItem;
