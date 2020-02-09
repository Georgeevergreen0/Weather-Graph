import React, { useEffect } from "react";
import image from "../../asset/weather-day.jpg";
import SnackBar from "./SnackBar"
import searchImage from "../../asset/weather-search.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';
import Rechart from "../Rechart/Rechart";
import WeatherCard from "../ReuseableComponent/weatherCard";
import WeatherResult from "../ReuseableComponent/weatherResult"
import WeatherRadio from "../ReuseableComponent/WeatherRadio";
import Map from "../ReuseableComponent/Map";


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "95%",
    margin: "8px auto",
  },
  heading: {
    padding: theme.spacing(8, 0),
    textAlign: "center",
    backgroundImage: `URL(${searchImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  graph: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  select: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Search = (props) => {
  const classes = useStyles();

  useEffect(function () {
    window.document.body.style.backgroundImage = `URL(${image})`;
  }, []);

  const searchWithEnter = (event) => {
    if (event.which === 13) {
      props.searchCityWeather()
    }
  }

  return (
    <div>

      <div className={classes.heading}>
        <Typography variant="h3" >WEATHER GRAPH</Typography>
        <Typography variant="subtitle2" >The Best Weather Application</Typography>
      </div>

      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <WbSunnyIcon color="primary" />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Show me the weather in city..."
          inputProps={{ 'aria-label': 'Search Weather' }}
          onChange={props.setSearchInputValue}
          value={props.searchInputValue}
          error={props.searchResultFail !== ""}
          onKeyPress={searchWithEnter}
          autoComplete="true"
          autoCorrect="true"
        />
        <Divider className={classes.divider} orientation="vertical" color="primary" />
        {props.searchingState ? <IconButton aria-label="search">
          <CircularProgress color="primary" size="24px" />
        </IconButton> : <IconButton type="submit" aria-label="search" onClick={props.searchCityWeather}>
            <SearchIcon color="primary" />
          </IconButton>}
      </Paper>

      <Container>
        <WeatherResult weatherResult={props.searchResultSuccess} />
      </Container>

      {props.twentyFourHoursHistory.length === 0 ? null : <Container className={classes.graph} >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <WeatherCard graphToMap={props.twentyFourHoursHistory} />
          </Grid>
          <Grid item xs={12} className={classes.select}>
            <Paper>
              <WeatherRadio selectValue={props.selectValue} setSelectValue={props.setSelectValue} />
            </Paper>
          </Grid>
          <Grid item xs={12} >
            <Rechart selectValue={props.selectValue} graphToMap={props.fiveDaysHistory} />
          </Grid>
          <Grid item xs={12} >
            <Map weatherResult={props.searchResultSuccess} />
          </Grid>
        </Grid>
      </Container>}



      <SnackBar snackBarValue={props.snackBarValue}
        setSnackBarValue={props.setSnackBarValue}
        searchResultFail={props.searchResultFail}
        setSearchResultFail={props.setSearchResultFail}
      />

    </div>
  )
}

export default Search;