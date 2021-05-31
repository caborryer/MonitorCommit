import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        width: '76px',
    },
    goBackText: {
        color: '#FF4545',
        fontSize: theme.spacing(2),
        marginLeft: theme.spacing(0.5),
    },
}));

export default useStyles;
