export default function getCurrentTasks(
  tasks,
  pendingTasks,
  completedTasks,
  selection,
  indexOfFirstTask,
  indexOfLastTask
) {
  switch (selection) {
    case "all":
      const currentTasks =
        tasks.length > 0 ? tasks.slice(indexOfFirstTask, indexOfLastTask) : "";

      return currentTasks;

    case "pending":
      const currentPendingTasks =
        pendingTasks.length > 0
          ? pendingTasks.slice(indexOfFirstTask, indexOfLastTask)
          : "";

      return currentPendingTasks;
    case "completed":
      const currentCompletedTasks =
        completedTasks.length > 0
          ? completedTasks.slice(indexOfFirstTask, indexOfLastTask)
          : "";

      return currentCompletedTasks;
    default:
      return tasks;
  }
}
