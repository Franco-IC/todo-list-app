export default function handlePagination(
  tasksSelection,
  tasksLength,
  pendingTasksLength,
  completedTasksLength,
  tasksPerPage
) {
  return (
    (tasksLength > tasksPerPage && tasksSelection === "all") ||
    (pendingTasksLength > tasksPerPage && tasksSelection === "pending") ||
    (completedTasksLength > tasksPerPage && tasksSelection === "completed")
  );
}
