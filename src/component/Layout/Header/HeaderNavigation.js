import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';
import SettingsOnIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        boxShadow: theme.shadows[20],
    }
}));

const HeaderNavigation = (props) => {
    const classes = useStyles();
    let history = useHistory();



    const handleChange = (event, newValue) => {
        props.setLocation(newValue);
        history.push(newValue);
    };


    return (
        < BottomNavigation value={props.locationValue} onChange={handleChange} className={classes.root} >
            <BottomNavigationAction label="Search" value="/search" icon={<SearchIcon />} />
            <BottomNavigationAction label="Recents" value="/history" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Settings" value="/setting" icon={<SettingsOnIcon />} />
        </BottomNavigation >
    );
}


export default HeaderNavigation;