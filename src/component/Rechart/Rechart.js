import React from "react";
import AreaChart from "./AreaChat";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//       {
//         "dt": 1578409200,
//         "main": {
//           "temp": 284.92,
//           "pressure": 1020,
//           "humidity": 90,
//         }

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



    return (<Paper className={classes.root}>
        <AreaChart selectValue={props.selectValue} width={width} graphToMap={props.graphToMap} />
    </Paper>)

}

export default Rechart;