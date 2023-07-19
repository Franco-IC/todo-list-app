import triggerAlert from "@/utils/triggerAlert";
import CheckedItem from "./CheckedItem";
import UncheckedItem from "./UncheckedItem";
import SlideAnimation from "./animations/SlideIn.jsx";

function TaskCard({ task, handleDelete, handleStatusToggle }) {
  function handleClick(taskID) {
    const ToastMsg = () => {
      return (
        <div className="flex flex-col">
          Are you sure? This action can't be undone
          <br />
          <button
            className="mt-2 w-fit self-center justify-self-end bg-rose-800 hover:bg-red-900 text-slate-100 px-2 py-1 rounded-md"
            onClick={() => handleDelete(taskID)}
          >
            Delete
          </button>
        </div>
      );
    };

    triggerAlert("warning", ToastMsg);
  }
  return (
    <SlideAnimation>
      <article className="p-5 h-[220px] w-[400px] flex flex-col bg-zinc-800 rounded-md shadow-lg shadow-black">
        <div className="display flex justify-between relative">
          <div className="flex flex-col w-[80%]">
            <h1 className="text-2xl ">{task.title} </h1>
            <p className="break-words ">{task.description} </p>
          </div>

          {task.status === "pending" ? (
            <UncheckedItem
              task={task}
              handleStatusToggle={handleStatusToggle}
            />
          ) : (
            <CheckedItem task={task} handleStatusToggle={handleStatusToggle} />
          )}
        </div>

        <button
          onClick={() => handleClick(task.id)}
          className="justify-self-end self-end mt-auto rounded-md font-semibold bg-rose-800 hover:bg-red-900 px-3 p-2 flex items-center justify-center text-slate-100 transition-colors duration-200 "
        >
          Delete
        </button>
      </article>
    </SlideAnimation>
  );
}

export default TaskCard;
