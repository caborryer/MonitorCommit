import {makeStyles} from '@material-ui/core/styles';
import {DRAWER_WIDTH} from "../shared/utils";

const useStyles = makeStyles((theme) => ({
    root: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
        backgroundColor: '#0E0C5A',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    monitoringImg: {
        display: 'block',
        marginBottom: theme.spacing(4),
    },
    userIcon: {
        display: 'block',
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        marginBottom: theme.spacing(1),
    },
    userName: {
        color: 'white',
        fontSize: '22px',
        fontWeight: 700,
    },
    settingIcon: {
        marginLeft: theme.spacing(2),
    },
    workPosition: {
        color: 'white',
        fontSize: '18px',
    },
    logOutButton: {
        '& span': {
            justifyContent: 'flex-start',
        }
    },
    divider: {
        margin: `${theme.spacing(2)}px 0px`,
        backgroundColor: 'white',
    },
    link: {
        textDecoration: 'none',
    },
    sidebarButton: {
        cursor: 'pointer',
        color: 'white',
        fontSize: '18px',
        borderRadius: '10px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    sidebarButtonSelected: {
        cursor: 'default',
        backgroundColor: 'white',
        color: '#0E0C5A',
        borderLeft: `${theme.spacing(2)}px solid #FF4545`,
        paddingLeft: 0,
    },
    sidebarButtonSelectedGreen: {
        cursor: 'default',
        backgroundColor: 'white',
        color: '#0E0C5A',
        borderLeft: `${theme.spacing(2)}px solid #7AF99C`,
        paddingLeft: 0,
    },
    sidebarButtonSelectedRose: {
        cursor: 'default',
        backgroundColor: 'white',
        color: '#0E0C5A',
        borderLeft: `${theme.spacing(2)}px solid #FF00EB`,
        paddingLeft: 0,
    },
    sidebarButtonSelectedRed:{
        cursor: 'default',
        backgroundColor: 'white',
        color: '#0E0C5A',
        borderLeft: `${theme.spacing(2)}px solid #FF4545`,
        paddingLeft: 0,
    },
    sidebarIconImg: {
        margin: `0px ${theme.spacing(1)}px`,
    },
}));

export default useStyles;
