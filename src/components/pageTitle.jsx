import React from "react";
import useStyles from "../styles/pageTitle";
import {Typography} from "@material-ui/core";

const PageTitle = ({redFont, inheritFont}) => {
    const classes = useStyles();

    return (
        <Typography
            variant='h1'
            gutterBottom
            className={classes.root}
        >
            <span>{redFont}</span>{inheritFont}
        </Typography>
    );
};

export default PageTitle;
