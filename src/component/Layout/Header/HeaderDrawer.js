import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ImgMediaCard from "../../ReuseableComponent/Card";



const useStyles = makeStyles(theme => ({
    list: {
        minWidth: 250,
    },
}));


const HeaderDrawer = (props) => {
    const classes = useStyles()

    return (
        <Drawer open={props.drawerValue} onClose={() => { props.toggleSideDrawer(false) }}>
            <div
                className={classes.list}
                role="presentation"
                onClick={() => { props.toggleSideDrawer(false) }}
            >
                <List>
                    <ListItem selected={props.locationValue === "/search"} component={NavLink} to="/search" >
                        <ListItemIcon>
                            <SearchIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>

                    <Divider variant="middle" />

                    <ListItem selected={props.locationValue === "/history"} component={NavLink} to="/history">
                        <ListItemIcon>
                            <HistoryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Recents" />
                    </ListItem>

                    <Divider variant="middle" />

                    <ListItem selected={props.locationValue === "/setting"} component={NavLink} to="/setting">
                        <ListItemIcon>
                            <SettingsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>

                <Divider variant="middle" />

                <List>
                    <ImgMediaCard />
                </List>
            </div>
        </Drawer>
    )
}

export default HeaderDrawer;