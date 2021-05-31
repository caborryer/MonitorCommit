import React from "react";
import {Link} from "react-router-dom";
import useStyles from "../styles/goBackButton";

// Images
import BackIcon from "../assets/backred.svg";

const GoBackButton = ({linkTo}) => {
    const classes = useStyles();

    return (
        <Link to={linkTo} className={classes.root}>
            <img src={BackIcon} alt='Botón de volver'/>
            <span className={classes.goBackText}>Volver</span>
        </Link>
    );
};

export default GoBackButton;
