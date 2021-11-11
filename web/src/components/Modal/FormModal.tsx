/* eslint-disable import/no-unresolved */
import * as React from "react";
import { navigate } from "gatsby";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ContactForm from "../ContactForm/ContactForm";

import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { createTheme } from "@mui/material/styles";
import { useStyles } from "./Modal.styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3d547a",
    },
    secondary: {
      main: "#2e1b0c",
    },
  },
});

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  const buttons = [
    <Button
      key="1"
      color="primary"
      variant="outlined"
      onClick={() => navigate(-1)}
      startIcon={<ArrowBackIcon />}
    >
      Go back
    </Button>,
    <Button
      key="2"
      color="secondary"
      variant="contained"
      onClick={handleOpen}
      sx={{
        ":hover": {
          bgcolor: "#e3c4a8",
          color: "#000",
        },
      }}
    >
      Contact
    </Button>,
  ];

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > *": {
              mt: 5,
            },
          }}
        >
          <ButtonGroup
            orientation="horizontal"
            aria-label="horizontal button group"
          >
            {buttons}
          </ButtonGroup>
        </Box>
      </ThemeProvider>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={{ xs: 300, sm: 500, md: 800 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <IconButton
              onClick={handleClose}
              edge="end"
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <ContactForm title="Contact Sales" />
        </Box>
      </Modal>
    </div>
  );
}
