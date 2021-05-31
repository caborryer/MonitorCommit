import React from "react";
import clsx from "clsx";
import useStyles from "../styles/sidebar";
import {useHistory, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Divider, Drawer, Typography} from "@material-ui/core";
import {
    ADMINISTRATOR,
    MONITOR_YOUR_COMMIT,
    USERS,
    DATA_BANK,
    SERVICE_TESTING,
    CHARTS
} from "../shared/utils";
import {LAYOUT_ITEM_MENU} from "../types";

//Images
import PrincipalLogo from "../assets/logo2.PNG";
import UserIcon from "../assets/user_control.svg";
import SettingIcon from "../assets/settings.svg";
import LogOut from "../assets/log_out.svg";
import AdminIcon from "../assets/adminIcon.svg";
import AdminBlueIcon from "../assets/adminIconBlue.svg";
import QuestionBankIcon from "../assets/bancoDePreguntas.svg";
import QuestionBankBlueIcon from "../assets/bancoDePreguntasBlue.svg";
import WeAllRespondBlueIcon from "../assets/todosrespondemosazul.svg";
import CardBankIcon from "../assets/bancoDeTarjetas.svg";
import CardBankblueIcon from "../assets/bancoDeTarjetasBlue.png";
import WeAllRespond from "../assets/todosrespondemos.svg";
import AllConcentrated from "../assets/todosconcentrados.svg";
import AllblueConcentrated from "../assets/todosconcentradosblue.svg";
import WeAllKnow from "../assets/todossabemos.svg";
import WeAllKnowBlue from "../assets/todossabemosblue.svg";


const Sidebar = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const userName = "Admin"
    const selectedItemMenu = useSelector(
        (state) => state.layout.selectedItemMenu
    );

    const handleListItemClick = (itemMenu) => {
        dispatch({
            type: LAYOUT_ITEM_MENU,
            payload: itemMenu,
        });
    };


    return (
        <Drawer
            className={classes.root}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <Box mt={4}>
                <img
                    src={PrincipalLogo}
                    alt="Monitoring"
                    className={classes.monitoringImg}
                />
                <img
                    src={UserIcon}
                    alt="Icono de usuario"
                    className={classes.userIcon}
                />
                <Box display="flex" alignItems="flex-start">
                    <Typography variant="body1" className={classes.userName}>
                        {userName}
                    </Typography>
                    <img
                        src={SettingIcon}
                        alt="Icono de configuración"
                        className={classes.settingIcon}
                    />
                </Box>
                <Typography variant="body1" className={classes.workPosition}>
                    Gerente de cuenta
                </Typography>
                <Button
                    color="secondary"
                    fullWidth
                    className={classes.logOutButton}
                    startIcon={<img src={LogOut} alt="Icono de cierre de sesión"/>}

                >
                    Salir
                </Button>
                <Divider className={classes.divider}/>
                <Link to="/" className={classes.link}>
                    <Box
                        className={clsx(classes.sidebarButton, {
                            [classes.sidebarButtonSelected]:
                            selectedItemMenu === ADMINISTRATOR,
                        })}
                        onClick={() => handleListItemClick(ADMINISTRATOR)}
                    >
                        <img
                            src={
                                selectedItemMenu === ADMINISTRATOR ? AdminBlueIcon : AdminIcon
                            }
                            alt="Icono de administrador"
                            className={classes.sidebarIconImg}
                        />
                        Administrador
                    </Box>
                </Link>
                <Link to="/monitoring-commits" className={classes.link}>
                    <Box
                        className={clsx(classes.sidebarButton, {
                            [classes.sidebarButtonSelected]:
                            selectedItemMenu === MONITOR_YOUR_COMMIT,
                        })}
                        onClick={() => handleListItemClick(MONITOR_YOUR_COMMIT)}
                    >
                        <img
                            src={
                                selectedItemMenu === MONITOR_YOUR_COMMIT
                                    ? QuestionBankBlueIcon
                                    : QuestionBankIcon
                            }
                            alt="Icono de banco de preguntas"
                            className={classes.sidebarIconImg}
                        />
                        Monitor your commits
                    </Box>
                </Link>
                <Link to="/users" className={classes.link}>
                    <Box  className={clsx(classes.sidebarButton, {
                        [classes.sidebarButtonSelected]:
                        selectedItemMenu === USERS,
                    })}
                          onClick={() => handleListItemClick(USERS)}>
                        <img
                            src={
                                selectedItemMenu === USERS
                                    ? CardBankblueIcon
                                    : CardBankIcon

                            }
                            alt="Icono de banco de tarjetas"
                            className={classes.sidebarIconImg}
                        />
                        Users
                    </Box>
                </Link>
                <Link to='/data-bank' className={classes.link}>
                    <Box className={clsx(classes.sidebarButton, {
                        [classes.sidebarButtonSelectedGreen]: selectedItemMenu === DATA_BANK
                    })}
                         onClick={() => handleListItemClick(DATA_BANK)}>
                        <img
                            src={selectedItemMenu === DATA_BANK ? WeAllRespondBlueIcon : WeAllRespond}
                            alt='Icono de todos respondemos' className={classes.sidebarIconImg}/>
                        Data bank
                    </Box>
                </Link>
                <Link to="/service-testing" className={classes.link}>
                    <Box
                        className={clsx(classes.sidebarButton, {
                            [classes.sidebarButtonSelectedRose]:
                            selectedItemMenu === SERVICE_TESTING,
                        })}
                        onClick={() => handleListItemClick(SERVICE_TESTING)}
                    >
                        <img
                            src={
                                selectedItemMenu === SERVICE_TESTING
                                    ? AllblueConcentrated
                                    : AllConcentrated
                            }
                            alt="Icono de todos concentrados"
                            className={classes.sidebarIconImg}
                        />
                        Service testing
                    </Box>
                </Link>
                <Link to="/charts" className={classes.link}>
                    <Box
                        className={clsx(classes.sidebarButton, {
                            [classes.sidebarButtonSelectedRed]:
                            selectedItemMenu === CHARTS,
                        })}
                        onClick={() => handleListItemClick(CHARTS)}
                    >
                        <img
                            src={
                                selectedItemMenu === CHARTS
                                    ? WeAllKnowBlue
                                    : WeAllKnow
                            }
                            alt="charts"
                            className={classes.sidebarIconImg}
                        />
                        charts
                    </Box>
                </Link>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
