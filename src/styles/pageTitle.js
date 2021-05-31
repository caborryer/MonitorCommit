import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#0E0C5A',
        fontSize: theme.spacing(3),
        fontWeight: 700,
        '& span': {
            borderBottom: `${theme.spacing(0.5)}px solid #FF4545`,
        },
    },
}));

export default useStyles;
