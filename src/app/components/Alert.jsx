import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alert() {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnHover
      theme="dark"
      limit={1}
    />
  );
}

export default Alert;
