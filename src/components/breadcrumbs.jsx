import React from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import useStyles from "../styles/breadcrumbs";
import {Breadcrumbs as MDBreadcrumbs, Typography} from "@material-ui/core";

const Breadcrumbs = ({breadcrumbs}) => {
    const classes = useStyles();

    return (
        <MDBreadcrumbs aria-label="breadcrumb" className={classes.grayFontColor}>
            {breadcrumbs.crumbs.map((crumb, index) => {
                return (
                    <Link to={crumb.link} className={clsx(classes.grayFontColor, classes.link)} key={index}>
                        {crumb.name}
                    </Link>
                );
            })}
            <Typography className={classes.blueFontColor}>{breadcrumbs.actualLinkName}</Typography>
        </MDBreadcrumbs>
    );
};

export default Breadcrumbs;
