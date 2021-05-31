import {makeStyles} from '@material-ui/core/styles';
import {DRAWER_WIDTH} from "../shared/utils";

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        backgroundColor: '#0E0C5A',
        padding: `${theme.spacing(3)}px ${theme.spacing(4)}px ${theme.spacing(2)}px`,
        height: '100vh',
    },
    paperContent: {
        backgroundColor: '#F5F9FF',
        borderRadius: '25px',
        height: '100%',
        padding: theme.spacing(3),
        overflowY: 'auto',
    }
}));

export default useStyles;
