import { toast } from "react-toastify";

export default function triggerAlert(alertType, message, duration = 3000) {
  const alertOptions = {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "dark",
    toastId: "form-toast",
  };

  switch (alertType) {
    case "success":
      toast.success(message, {
        ...alertOptions,
        className: "mt-[70px] text-[16px]",
      });
      break;

    case "error":
      toast.error(message, {
        ...alertOptions,
        className: "mt-[70px] text-[16px]",
      });
      break;

    case "warning":
      toast.warn(message, {
        ...alertOptions,

        className: "text-[16px]",
      });
      break;
  }
}
