import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleGrid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    marginBottomGrid: {
        marginBottom: theme.spacing(2),
    },
    questionBankIcon: {
        width: '65px',
        height: '65px',
        padding: theme.spacing(1.5),
    },
    actionsPaper: {
        padding: theme.spacing(2),
    },
    blueFontColor: {
        color: '#0E0C5A',
    },
    questionBankPageInfoBox: {
        width: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #0E0C5A',
        borderRadius: '10px',
        backgroundColor: '#F5F9FF',
        '@media (min-width:1210px)': {
            fontSize: theme.spacing(2),
        },
    },
    questionsGrid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerPaper: {
        borderRadius: '10px',
        padding: `0px ${theme.spacing(2)}px`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '40px',
        width: '100%',
    },
    questionsPaper: {
        cursor: 'pointer',
        width: '100%',
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#D9D9D9',
        },
        '&:active': {
            backgroundColor: '#AAAAAA',
        },
    },
    questionsPaperSelected: {
        cursor: 'default',
        borderLeft: `${theme.spacing(1.5)}px solid #FF4545`,
        paddingLeft: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
        '&:active': {
            backgroundColor: '#FFFFFF',
        },
    },
    paperTitle: {
        fontSize: theme.spacing(1.5),
        fontWeight: 600,
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.spacing(2),
        },
    },
    paperParagraph: {
        fontSize: theme.spacing(1.5),
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.spacing(2),
        },
    },
    fontSizeParagraph: {
        fontSize: theme.spacing(1.5),
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.spacing(2),
        },
    },
    questionButton: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        borderRadius: '10px',
        minHeight: '40px',
        minWidth: '40px',
    },
    buttonMarginBottom: {
        marginBottom: theme.spacing(0.5),
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpFiftyFiftyPaper: {
        borderRadius: '10px',
        padding: `0px ${theme.spacing(2)}px`,
        display: 'flex',
        alignItems: 'center',
        minHeight: '40px',
    },
    paperSelectInput: {
        borderRadius: '10px',
        padding: `3.5px ${theme.spacing(2)}px`,
        minHeight: '40px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    selectFormControl: {
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    grayFontColor: {
        color: 'rgba(30, 36, 121, 0.5)',
    },
    paperInput: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        borderRadius: '10px',
    },
    saveIcon: {
        color: '#7AF99C',
        fontSize: theme.spacing(3),
    },
    paperAnswer: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,
        borderRadius: '10px',
        width: '100%',
    },

}));

export default useStyles;
