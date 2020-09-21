import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

const CustomizedSnackbars = ({ error }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "width": "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));

  function Alert(props) {
    return <MuiAlert elevation={8} variant="filled" {...props} />;
  }

  function GrowTransition(props) {
    return <Grow {...props} />;
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
        <div>
          {" "}
          <Alert severity="error" onClose={handleClose}>
            {error}
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
