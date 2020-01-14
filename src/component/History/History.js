import React, { useEffect } from "react";
import Container from '@material-ui/core/Container';
import WeatherResult from "../ReuseableComponent/weatherResult";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    heading: {
        color: theme.palette.background.paper,
        margin: theme.spacing(2, 0, 0, 0)
    },
}))


const History = (props) => {
    const classes = useStyles()

    useEffect(function () {
        window.document.body.style.backgroundImage = 'linear-gradient( #3f51b5,#fff)';
    }, [])


    return (
        <>
            <div className={classes.heading}>
                <Typography variant="h6" align="center" >WEATHER GRAPH</Typography>
                <Typography variant="body2" align="center" >History</Typography>
            </div>
            <Container>
                <WeatherResult weatherResult={props.searchResultSSuccessHistory} />
            </Container>
        </>
    )
}

export default History