"use client";

import { useState } from "react";
import NewTaskModal from "../NewTaskModal";
import SlideAnimation from "../animations/SlideIn.jsx";

function NoTasksContainer() {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal(true);
  }

  return (
    <SlideAnimation>
      <div className="flex flex-col min-h-[400px] justify-center items-center lg:min-h-[600px] ">
        <h1 className="text-2xl font-bold text-center">No tasks yet</h1>

        <button
          onClick={handleClick}
          className="bg-violet-600 hover:bg-violet-800 px-4 mt-6 h-12 w-fit rounded-2xl transition-all  "
        >
          Create one
        </button>

        <NewTaskModal isOpen={openModal} setOpen={setOpenModal} />
      </div>
    </SlideAnimation>
  );
}

export default NoTasksContainer;
