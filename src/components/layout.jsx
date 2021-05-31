import React from 'react';
import useStyles from "../styles/layout";
import {CssBaseline, Paper} from '@material-ui/core';
import Sidebar from "./sidebar";

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <Sidebar/>
            <main className={classes.root}>
                <Paper className={classes.paperContent}>
                    {children}
                </Paper>
            </main>
        </>
    );
};

export default Layout;
