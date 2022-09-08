import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function Model(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(true);

  const history = useNavigate();

  const handleClose = () => {
    if (props.msg === "Success") {
      setTimeout(() => {
        props.func();
      }, 1000);
    }
    if (props.msg === "Bad Request") {
      setTimeout(() => {
        props.func();
      }, 5000);
    }
    if (props.msg === "UnAuthorized") {
      history("/login");
    }
    if (props.msg === "Server Error") {
      setTimeout(() => {
        props.func();
      }, 5000);
    }

    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          color={props.msg === "Success" ? "green" : "orange"}
        >
          {props.msg !== "Success" ? <WarningAmberIcon /> : ""}
          &nbsp;&nbsp;
          {props.msg}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.msg === "UnAuthorized"
              ? "Click Ok to navigate on Login Page"
              : props.msg === "Success"
              ? "data sent successfuly to json file"
              : "somthing went wrong"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
