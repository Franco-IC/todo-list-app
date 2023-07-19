"use client";

import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import taskFieldsValidations from "@/utils/taskFieldsValidations";
import triggerAlert from "@/utils/triggerAlert";

function NewTaskForm({ openModal }) {
  const { user, addTask } = useContext(Context);
  const [formState, setFormState] = useState({
    author: user,
    status: "pending",
    title: "",
    description: "",
  });
  const [remainingCharacters, setRemainingCharacters] = useState(100);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "description") {
      setRemainingCharacters(100 - value.length);
    }
    setFormState({ ...formState, [name]: value });
  }

  function resetForm() {
    setFormState({
      ...formState,
      title: "",
      description: "",
    });
    setRemainingCharacters(100);
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      taskFieldsValidations(formState.title, formState.description);

      const newTask = addTask(formState);

      if (!newTask) {
        throw new Error("Something went wrong, please try again");
      }

      openModal(false);
      triggerAlert("success", "Task created successfully");
    } catch (error) {
      triggerAlert("error", error.message);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto items-center max-w-[300px] w-[300px] "
    >
      <label htmlFor="task-title" className="self-start text-lg mb-1">
        Title
      </label>
      <input
        type="text"
        autoComplete="off"
        maxLength={50}
        id="task-title"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="w-full mb-6 p-2 bg-gray-700 rounded-sm"
      />

      <label htmlFor="task-description" className="self-start text-lg mb-1">
        Description
      </label>
      <textarea
        type="text"
        autoComplete="off"
        rows={5}
        maxLength={100}
        id="task-description"
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-2 bg-gray-700 rounded-sm resize-none"
      />
      <p className="text-gray-400 text-sm mt-2">
        {remainingCharacters} characters remaining
      </p>

      <button
        type="submit"
        className="bg-emerald-700 hover:bg-emerald-800 text-gray-300 px-4 mt-12 h-12 w-fit rounded-2xl transition-all cursor-pointer"
      >
        Create Task
      </button>
    </form>
  );
}

export default NewTaskForm;
