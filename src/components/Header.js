import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: '#000',
    },

    typography: {
        flexGrow: 1,
        textAlign: 'center',
    }
    
}))

const Header = () => {
    const classes = useStyles();

    return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar variant="dense">
                    <Typography variant="h5" className={classes.typography}>
                        <strong>MovieLog<sub>.com</sub></strong>
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header;
