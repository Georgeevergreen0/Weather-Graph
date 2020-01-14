import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(1, 0)
    },
    root: {
        flexGrow: 1,
    },
    heading: {
        flexGrow: 1,
        textAlign: "center"
    },
    item: {
        padding: theme.spacing(2)
    },
    flex: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}));

const WeatherResult = (props) => {
    const classes = useStyles();
    const makeDate = (date) => {
        const currentDate = new Date(date * 1000);
        return currentDate.toLocaleTimeString();
    }
    const makeDiv = (text, value) => {
        return (
            <div className={classes.flex}>
                <Typography component="span" variant="subtitle2" gutterBottom>{text}</Typography>
                <Typography component="span" variant="subtitle2" gutterBottom>{value}</Typography>
            </div>
        )
    }

    return (
        props.weatherResult.map((openWeatherMap) => (
            <Paper className={classes.paper} key={openWeatherMap.id}  >
                <Grid container spacing={0} className={classes.root} >
                    <Grid item xs={12} className={classes.heading}>
                        <Typography variant="h6">Weather Graph</Typography>
                        <Typography variant="body2" gutterBottom>{openWeatherMap.name} as at {makeDate(openWeatherMap.dt)}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.item} style={{ backgroundImage: "linear-gradient( 45deg, #3f51b5, #fff)" }}>
                        <Typography variant="h3">{openWeatherMap.main.temp}&deg;C</Typography>
                        {openWeatherMap.weather.map((value) => (
                            <Fragment key={value.id}>
                                <img alt="yes" src={`http://openweathermap.org/img/wn/${value.icon}@2x.png`} />
                                {makeDiv(value.main, value.description)}
                            </Fragment>
                        ))}
                        <div className={classes.flex} >
                            <Typography component="span" variant="subtitle2" gutterBottom>Logitude</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom>{openWeatherMap.coord.lon}&deg; </Typography>
                        </div>
                        <div className={classes.flex} >
                            <Typography component="span" variant="subtitle2" gutterBottom>Latitude</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom> {openWeatherMap.coord.lat}&deg;</Typography>
                        </div>
                        <div className={classes.flex} >
                            <Typography component="span" variant="subtitle2" gutterBottom>Feels Like</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom>{openWeatherMap.main.feels_like}&deg;C </Typography>
                        </div>
                        <div className={classes.flex}>
                            <Typography component="span" variant="subtitle2" gutterBottom>Minimum Temp</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom>{openWeatherMap.main.temp_min}&deg;C </Typography>
                        </div>
                        <div className={classes.flex} >
                            <Typography component="span" variant="subtitle2" gutterBottom>Maximium Temp</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom>{openWeatherMap.main.temp_max}&deg;C </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.item}>
                        <Typography component="div" variant="h5" gutterBottom>RIGHT NOW</Typography>
                        <Divider />
                        {makeDiv("City", openWeatherMap.name)}
                        {makeDiv("Country Code", openWeatherMap.sys.country)}
                        <div className={classes.flex} >
                            <Typography component="span" variant="subtitle2" gutterBottom>Time Zone</Typography>
                            <Typography component="span" variant="subtitle2" gutterBottom>{openWeatherMap.timezone / 3600}</Typography>
                        </div>
                        {makeDiv("Cloudiness", `${openWeatherMap.clouds.all}`)}
                        {makeDiv("Pressure", `${openWeatherMap.main.pressure}hPa`)}
                        {makeDiv("Humidity", `${openWeatherMap.main.humidity}%`)}
                        {makeDiv("Wind Speed", `${openWeatherMap.wind.speed}meter/sec`)}
                        {makeDiv("Wind Direction", `${openWeatherMap.wind.deg}deg`)}
                        {makeDiv("Sunrise Time", makeDate(openWeatherMap.sys.sunrise))}
                        {makeDiv("Sunset Time", makeDate(openWeatherMap.sys.sunset))}
                    </Grid>
                </Grid>
            </Paper>
        ))
    );
}


export default WeatherResult;