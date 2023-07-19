import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NewTaskForm from "./forms/NewTaskForm";
import CloseIcon from "@mui/icons-material/Close";
import { Fade } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  bgcolor: "rgb(15 23 42)",
  boxShadow: 24,
  p: 4,
};

export default function NewTaskModal({ isOpen, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            className="cursor-pointer absolute top-3 right-3 text-white hover:text-gray-600"
          />

          <NewTaskForm openModal={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
