"use client";

import { useState } from "react";
import { CircularProgress } from "@mui/material";
import FadeInAnimation from "./animations/FadeIn";
import ScheduleIcon from "@mui/icons-material/Schedule";

function UncheckedItem({ task, handleStatusToggle }) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      onClick={async (e) => {
        e.stopPropagation();
        setLoading(true);

        const res = await handleStatusToggle({ ...task, status: "done" });

        if (res) {
          setLoading(false);
        }
      }}
      className="flex justify-center items-center cursor-pointer border-2 h-10 w-10 rounded-md border-yellow-400 transition-colors duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10"
    >
      {loading ? (
        <CircularProgress size={25} />
      ) : (
        <FadeInAnimation>
          <ScheduleIcon className="text-yellow-500 text-2xl transition-colors duration-200 " />
        </FadeInAnimation>
      )}
    </div>
  );
}

export default UncheckedItem;
