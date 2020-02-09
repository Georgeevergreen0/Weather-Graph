import React from "react";
import LineChart from "./LineChart"
import AreaChart from "./AreaChat";
import BarChart from "./BarChart";
import Paper from '@material-ui/core/Paper';


const Rechart = (props) => {

    if (props.graphToMap.length === 0) {
        return null
    }
    if (props.selectValue === "temp") {
        return (<Paper>
            <AreaChart selectValue={props.selectValue} graphToMap={props.graphToMap} />
        </Paper>)
    }
    if (props.selectValue === "pressure") {
        return (<Paper >
            <LineChart selectValue={props.selectValue} graphToMap={props.graphToMap} />
        </Paper>)
    }
    if (props.selectValue === "humidity") {
        return (<Paper >
            <BarChart selectValue={props.selectValue} graphToMap={props.graphToMap} />
        </Paper>)
    }

}

export default Rechart;