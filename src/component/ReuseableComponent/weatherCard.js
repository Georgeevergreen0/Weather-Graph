
import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        overflowX: "auto",
        marginBottom: "16px",
        "& > :first-child": {
            marginLeft: "auto"
        },
        "& > :last-child": {
            marginRight: "auto"
        },
    },
    gridItem: {
        minWidth: 150,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "stretch"
    },
    card: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        textAlign: "center"
    },
    media: {
        backgroundImage: 'linear-gradient(45deg, #3f51b5,#fff)',
    }
});

const WeatherCard = (props) => {
    const classes = useStyles();
    const data = props.graphToMap;

    return (
        <Grid container wrap="nowrap" spacing={1} className={classes.root}>
            {data.map((mapValue, index) => {
                return (
                    <Grid item key={index} className={classes.gridItem}>
                        <Card className={classes.card}>
                            <CardHeader title={mapValue.main} subheader={mapValue.description} />
                            <CardMedia
                                src={`http://openweathermap.org/img/wn/${mapValue.icon}@2x.png`}
                                component="img"
                                title="weather Images"
                                className={classes.media}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="div">
                                    {mapValue.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
            })}
        </Grid>
    );
}

export default WeatherCard;
