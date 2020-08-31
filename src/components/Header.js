import React from 'react';
import './header.css';
import HdIcon from '@material-ui/icons/Hd';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
    Typography,
    AppBar,
    Toolbar,
    IconButton
} from '@material-ui/core';

const Header = () => {
    return (
            <AppBar position="static" className="header">
                <Toolbar variant="dense" className="header__nav">

                    <IconButton variant="h6" color="inherit">
                        <HdIcon />
                    </IconButton>
                    <Typography className="brand__name">
                        <strong>MovieLog <sub>.com</sub></strong>
                    </Typography>
                <div className="share-icons">
                    <FacebookIcon className="facebook"/>
                    <TwitterIcon className="twitter"/>
                    <LinkedInIcon className="linkedin"/>
                </div>
                </Toolbar>
            </AppBar>
    )
}

export default Header;
