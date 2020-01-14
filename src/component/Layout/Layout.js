import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import Header from "./Header/Header"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        "overflow-x": "hidden",
    },
    toolBaroffset: theme.mixins.toolbar,
    navigationOffset: {
        minHeight: 56
    }
}));


const Layout = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const [locationValue, setLocationValue] = useState("/search");

    useEffect(() => {
        setLocationValue(location.pathname)
    }, [location])

    const setLocation = (value) => {
        setLocationValue(value);
    }

    return (
        <div className={classes.root}>
            <div className={classes.toolBaroffset}></div>
            <div className={classes.navigationOffset}></div>
            <Header locationValue={locationValue} setLocation={setLocation} />
            {props.children}
        </div>
    )
}


export default Layout;