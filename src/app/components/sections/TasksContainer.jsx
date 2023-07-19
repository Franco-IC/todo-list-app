"use client";

import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import triggerAlert from "@/utils/triggerAlert";
import getCurrentTasks from "@/utils/getCurrentTasks";
import handlePagination from "@/utils/handlePagination.js";
import { AnimatePresence } from "framer-motion";
import NoTasksContainer from "./NoTasksContainer";
import TaskCard from "../TaskCard";
import TasksPagination from "../TasksPagination";
import NewTaskModal from "../NewTaskModal";
import Loader from "../Loader";

import FadeInAnimation from "../animations/FadeIn";
import SlideAnimation from "../animations/SlideIn.jsx";

function TasksContainer() {
  const { tasks, loading, toggleTaskStatus, deleteTask } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksSelection, setTasksSelection] = useState("all"); // "all", "pending", "completed"
  const [openModal, setOpenModal] = useState(false);
  const tasksPerPage = 6;

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const completedTasks = tasks.filter((task) => task.status === "done");
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = getCurrentTasks(
    tasks,
    pendingTasks,
    completedTasks,
    tasksSelection,
    indexOfFirstTask,
    indexOfLastTask
  );

  if (loading) {
    return (
      <FadeInAnimation>
        <section className="flex flex-col items-center mt-10 lg:min-h-[800px] lg:w-[75%] ">
          <Loader message="Loading your tasks" />
        </section>
      </FadeInAnimation>
    );
  }

  const pagination = handlePagination(
    tasksSelection,
    tasks.length,
    pendingTasks.length,
    completedTasks.length,
    tasksPerPage
  );

  return !loading && tasks.length > 0 ? (
    <section className="flex flex-col items-center mt-10 lg:mt-16 lg:min-h-[800px] lg:w-[75%] ">
      <section className="w-full flex justify-between lg:px-10 items-center">
        <FadeInAnimation>
          <span>
            <label
              htmlFor="tasks-status-select"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="tasks-status-select"
              defaultValue={"all"}
              onChange={(e) => {
                if (e.target.value !== tasksSelection) {
                  setTasksSelection(e.target.value);
                  setCurrentPage(1);
                }
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="all"> 📝 Show all the tasks</option>
              <option value="pending">⏰ Pending tasks</option>
              <option value="completed">✔️ Completed tasks</option>
            </select>
          </span>
        </FadeInAnimation>

        <FadeInAnimation>
          <button
            onClick={() => {
              if (tasks.length < 30) setOpenModal(true);
              else
                triggerAlert(
                  "error",
                  "You have reached the maximum number of tasks allowed. Delete some tasks to create new ones"
                );
            }}
            className="bg-violet-600 hover:bg-violet-800 px-4 h-12 rounded-2xl transition-all  "
          >
            Create a new task
          </button>
        </FadeInAnimation>
      </section>

      <section className="grid grid-cols-1 gap-y-12 my-10 place-content-center lg:my-0 lg:gap-y-20 lg:gap-12 lg:p-10 lg:grid-cols-3">
        {currentTasks.length === 0 && tasksSelection !== "all" ? (
          <>
            <span></span>
            <SlideAnimation>
              <div className="flex flex-col items-center justify-center mt-14">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white ">
                  No {tasksSelection} tasks found 😿
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Try changing the filter
                </p>
              </div>
            </SlideAnimation>
            <span></span>
          </>
        ) : (
          <AnimatePresence mode="wait">
            {currentTasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  handleDelete={deleteTask}
                  handleStatusToggle={toggleTaskStatus}
                />
              );
            })}
          </AnimatePresence>
        )}
      </section>

      {pagination && (
        <AnimatePresence>
          <TasksPagination
            numberOfPages={Math.ceil(tasks.length / tasksPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </AnimatePresence>
      )}

      <NewTaskModal isOpen={openModal} setOpen={setOpenModal} />
    </section>
  ) : (
    !loading && <NoTasksContainer />
  );
}

export default TasksContainer;
