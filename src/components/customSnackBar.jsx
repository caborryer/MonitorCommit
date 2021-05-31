import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";

const CustomSnackbar = ({open, execOnCloseFunction, severity, message}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={execOnCloseFunction}
        >
            <MuiAlert onClose={execOnCloseFunction} severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default CustomSnackbar;
