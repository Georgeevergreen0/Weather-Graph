import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import HeaderDrawer from "./HeaderDrawer"
import HeaderNavigation from "./HeaderNavigation"




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacing: {
        flexGrow: 1,
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [drawerValue, setDrawer] = useState(false);

    const toggleSideDrawer = (value) => {
        setDrawer(value)
    }

    return (
        <>
            <HeaderDrawer toggleSideDrawer={toggleSideDrawer} drawerValue={drawerValue} locationValue={props.locationValue} />
            <AppBar position="sticky" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { toggleSideDrawer(true) }}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.spacing} ></div>
                    <Button rel="noopener noreferrer" href="https://github.com/georgeevergreen0" target="_blank" color="inherit"> <GitHub /></Button>
                    <Button rel="noopener noreferrer" href="https://twitter.com/georgeevergreen" target="_blank" color="inherit"> <Twitter /></Button>
                    <Button rel="noopener noreferrer" href="https://instagram.com/georgeevergreen" target="_blank" color="inherit"> <Instagram /></Button>
                </Toolbar>
                <HeaderNavigation locationValue={props.locationValue} setLocation={props.setLocation} />
            </AppBar>
        </>
    );
}

export default Header
