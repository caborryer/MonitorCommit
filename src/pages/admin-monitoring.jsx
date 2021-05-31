import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from '../styles/admin-monitor';
import Layout from '../components/layout';
import Breadcrumbs from "../components/breadcrumbs";
import GoBackButton from "../components/goBackButton";
import PageTitle from "../components/pageTitle";
import {Box, Button, Grid} from "@material-ui/core";

// Images
import BankQuestion from "../assets/Icontarjetas.svg";
import RankingIcon from "../assets/rankingIcon.png";

const AllConcentrated = () => {
    const classes = useStyles();

    const breadcrumbs = {
        crumbs: [],
        actualLinkName: 'Administrador',
    };

    return(
        <Layout>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <Box mt={2}>
                <GoBackButton linkTo='/'/>
            </Box>
            <Box mt={8}>
                <Grid container>
                    <Grid item xs={12} className={classes.todosConcentradosGrid}>
                        <PageTitle redFont='Adm' inheritFont='in config'/>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.todosConcentradosGrid}>
                        <Link to='/' className={classes.link}>
                            <Button
                                className={classes.todosConcentradosAdminButton}
                                fullWidth
                                startIcon={<img src={BankQuestion} alt='Icono de asignar pregunta' className={classes.buttonImage}/>}
                            >
                                Add
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.todosConcentradosGrid}>
                        <Link to='/' className={classes.link}>
                            <Button
                                className={classes.todosConcentradosAdminButton}
                                fullWidth
                                startIcon={<img src={RankingIcon} alt='Icono de ranking' className={classes.buttonImage}/>}
                            >
                                Stadistics
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default AllConcentrated