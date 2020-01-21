import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import PlaceIcon from '@material-ui/icons/Place';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import GpsOffIcon from '@material-ui/icons/GpsOff';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Setting = (props) => {
    const classes = useStyles();

    useEffect(function () {
        window.document.body.style.backgroundImage = 'linear-gradient(#fff,#fff)';
    }, [])

    const [refreshValue, setRefreshValue] = React.useState(true);
    const [unitValue, setUnitValue] = React.useState('C');
    const [switchValue, setSwitchValue] = React.useState([]);


    const refreshHandler = event => {
        setRefreshValue(event.target.checked);
    };

    const unitHandler = event => {
        setUnitValue(event.target.value);
    };

    const switchHandler = value => (event) => {
        const currentIndex = switchValue.indexOf(value);
        const newChecked = [...switchValue];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSwitchValue(newChecked);
    };




    return (<div>
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>

            <Divider />

            <ListItem>
                <ListItemIcon>
                    <AutorenewIcon color="primary" />
                </ListItemIcon>
                <ListItemText id="auto-refresh" primary="Auto refresh" secondary={refreshValue ? "Enabled" : "Disabled"} />
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={refreshValue}
                        onChange={refreshHandler}
                        value="auto refresh"
                        color="primary"
                    />
                </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" />

            <ListItem>
                <ListItemIcon>
                    <WbSunnyIcon color="primary" />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Tempreture" secondary="Set default tempreture unit" />
                <ListItemSecondaryAction>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                        <Select
                            labelId="Tempreture"
                            id="demo-simple-select"
                            value={unitValue}
                            onChange={unitHandler}
                        >
                            <MenuItem value="C">&deg;C</MenuItem>
                            <MenuItem value="F">&deg;F</MenuItem>
                        </Select>
                    </FormControl>
                </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" />
            <ListItem>
                <ListItemIcon>
                    {switchValue.indexOf('place') !== -1 ? <PlaceIcon color="primary" /> : <LocationOffIcon color="primary" />}
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Use current location" secondary={switchValue.indexOf('place') !== -1 ? "On" : "Off"} />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={switchHandler('place')}
                        checked={switchValue.indexOf('place') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
                        color="primary"
                    />
                </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" />
            <ListItem>
                <ListItemIcon>
                    {switchValue.indexOf('map') !== -1 ? <GpsFixedIcon color="primary" /> : <GpsOffIcon color="primary" />}
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Display map" secondary={switchValue.indexOf('map') !== -1 ? "On" : "Off"} />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={switchHandler('map')}
                        checked={switchValue.indexOf('map') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
                        color="primary"
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>

        <Typography variant="subtitle2" color="primary" component="p" align="center" >
            <Typography gutterBottom variant="subtitle2" color="textSecondary" component="span">Designed by </Typography> <br />
            Evergreen George  <br />
            <Typography gutterBottom variant="subtitle2" color="textSecondary" component="span">&copy;2020</Typography>
        </Typography>
    </div>
    );
}

export default Setting