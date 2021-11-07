/* eslint-disable import/no-unresolved */
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import ContactForm from "../ContactForm/ContactForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // minWidth: "300px",
  // maxWidth: "800px",
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { title, tagline, images } = equipment;

  return (
    <div>
      <Button onClick={handleOpen}>Contact</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} width={{ xs: 300, sm: 500, md: 800 }}>
          <ContactForm title="Contact Sales" />
        </Box>
      </Modal>
    </div>
  );
}
