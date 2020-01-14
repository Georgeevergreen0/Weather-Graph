import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        borderRadius: theme.spacing(1)
    }
}));

const SimpleSnackBar = (props) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setSnackBarValue(false)
        props.setSearchResultFail("")
    };

    return (
        <Snackbar
            ContentProps={{ className: classes.root }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={props.snackBarValue}
            autoHideDuration={5000}
            onClose={handleClose}
            message={props.searchResultFail}
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}

export default SimpleSnackBar;
