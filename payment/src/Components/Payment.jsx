import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Data from "./Data";
import "./Style/Payment.css";

export const Payment = () => {
  const [open, setOpen] = useState(false);

  //function for open dialog-box
  const handleClickOpen = () => {
    setOpen(true);
  };

  //function for close dialog-box
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="btn" variant="contained" onClick={handleClickOpen}>
        Payment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Data func={handleClose} />
      </Dialog>
    </div>
  );
};

export default Payment;
