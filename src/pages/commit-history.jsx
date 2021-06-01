import React, {useEffect, useState} from 'react';
import {commitHistory} from '../config/axios';
import {USER, REPONAME} from "../config/secrets";
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
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// Images
import QuestionBankIcon from '../assets/bancoDePreguntasBlue.svg';



const QuestionBank = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [commits, setCommits] = useState([]);

    console.log(commits)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const breadcrumbs = {
        crumbs: [],
        actualLinkName: 'Commit history',
    };

    // const getCommits = async () => {
    //     const response = await commitHistory({userName: USER, repoName: REPONAME});
    //     if (response.data.statusCode === 200) {
    //         setCommits(response.data);
    //     } else {
    //         console.error(
    //             "Ocurrio un problema al obtener los commits",
    //             "Error",
    //             3000
    //         );
    //     }
    // }

    const getCommits =() => {
        commitHistory({userName: USER, repoName: REPONAME}).then((res) => {
            console.log(res)
            if (res.statusCode === 200) {
                setCommits(res.data.totalRepos);
            }

        }).catch((err) => {
            console.error(`error: ${err}`)
        })
    }

    useEffect(() => {
        getCommits();

    }, []);




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
                <Grid item xs={12} className={classes.cardContainer}>
                    {commits?.map((commit, index) => (
                        <Card key ={index} className={classes.root} >

                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={commit.author?.login}
                                subheader={commit.commit?.author?.date}

                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {commit.commit?.message}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Message:</Typography>
                                    <Typography paragraph>
                                        {commit.commit?.message}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                    )) }
                </Grid>
            </Grid>
        </Layout>
    )
};

export default QuestionBank;
