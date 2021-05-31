import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    todosConcentradosGrid: {
        padding: `0px ${theme.spacing(5)}px`,
        marginBottom: theme.spacing(4),
    },
    link: {
        textDecoration: 'none',
    },
    todosConcentradosAdminButton: {
        height: 180,
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        borderRadius: theme.spacing(3),
        color: '#0E0C5A',
    },
    buttonImage: {
        width: 60,
        height: 60,
    },
}));

export default useStyles;