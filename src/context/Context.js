"use client";

import { getTasks } from "@/utils/getTasks";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "@/utils/config";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const user = session?.user.name;

  async function loadTasks() {
    const fetchedTasks = await getTasks(user);

    if (fetchedTasks) {
      setTasks(fetchedTasks);
      setLoading(false);

      return;
    }

    setTasks([]);
    setLoading(false);
    return;
  }

  async function addTask(task) {
    try {
      if (tasks.length === 0) setLoading(true);

      const res = await fetch(`${API_BASE_URL}/tasks/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_key: API_KEY,
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      loadTasks();
    } catch (error) {
      return null;
    }
  }

  async function toggleTaskStatus(task) {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks/update/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          api_key: API_KEY,
        },
        body: JSON.stringify({ ...task }),
      });

      const data = await res.json();

      loadTasks();
    } catch (error) {
      return null;
    }
  }

  async function deleteTask(taskID) {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/tasks/delete/${taskID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          api_key: API_KEY,
        },
      });

      const data = await res.json();

      loadTasks();
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user]);

  return (
    <Context.Provider
      value={{
        user,
        tasks,
        loadTasks,
        addTask,
        deleteTask,
        toggleTaskStatus,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
