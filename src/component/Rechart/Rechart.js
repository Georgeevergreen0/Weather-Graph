import React from "react";
import LineChart from "./LineChart"
import AreaChart from "./AreaChat";
import BarChart from "./BarChart";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 1),
        "overflow-x": "auto",
        "& >:first-child": {
            margin: "auto"
        }
    }
}));

const Rechart = (props) => {
    const classes = useStyles();
    const width = props.width

    if (props.graphToMap.length === 0) {
        return null
    }
    if (props.selectValue === "temp") {
        return (<Paper className={classes.root}>
            <AreaChart selectValue={props.selectValue} width={width} graphToMap={props.graphToMap} />
        </Paper>)
    }
    if (props.selectValue === "pressure") {
        return (<Paper className={classes.root}>
            <LineChart selectValue={props.selectValue} width={width} graphToMap={props.graphToMap} />
        </Paper>)
    }
    if (props.selectValue === "humidity") {
        return (<Paper className={classes.root}>
            <BarChart selectValue={props.selectValue} width={width} graphToMap={props.graphToMap} />
        </Paper>)
    }

}

export default Rechart;