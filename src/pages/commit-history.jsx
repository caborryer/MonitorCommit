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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


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
                <Card className={classes.root}>
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
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Layout>
    )
};

export default QuestionBank;
