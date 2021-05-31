import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import useStyles from '../styles/commit-history';
import Layout from '../components/layout';
import Breadcrumbs from '../components/breadcrumbs';
import GoBackButton from '../components/goBackButton';
import PageTitle from '../components/pageTitle';
import {
    Box,
    Grid,
    Paper,

} from '@material-ui/core';

// Images
import QuestionBankIcon from '../assets/bancoDePreguntasBlue.svg';


const QuestionBank = () => {
    const classes = useStyles();


    const breadcrumbs = {
        crumbs: [],
        actualLinkName: 'Commit history',
    };



    return (
        <Layout>

            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <Box mt={2}>
                <GoBackButton linkTo='/'/>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.titleGrid}>
                    <PageTitle redFont='Com' inheritFont='mit history'/>
                </Grid>

                <Grid item xs={12} className={classes.marginBottomGrid}>
                    <Paper elevation={1} className={classes.actionsPaper}>
                        <Box className={clsx(classes.questionBankPageInfoBox, classes.blueFontColor)}>
                            <img src={QuestionBankIcon} alt='Icon commit ' className={classes.questionBankIcon}/>
                            List the commit changes of your project.
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    )
};

export default QuestionBank;
