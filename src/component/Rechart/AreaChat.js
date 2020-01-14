import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';



class ChartArea extends PureComponent {
    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        let icon = "square"
        if (selected === "temp") {
            icon = "triangle"
        }
        if (selected === "pressure") {
            icon = "circle"
        }
        if (selected === "humidity") {
            icon = "square"
        }
        return (
            <AreaChart
                width={this.props.width}
                height={300}
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
                baseValue="dataMin"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis domain={['dataMin', 'dataMax']} />
                <XAxis dataKey="date" domain={['dataMin', 'dataMax']} />
                <Tooltip />
                <Legend iconType={icon} margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                <Area type="monotone" dataKey={selected} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        );
    }
}


export default ChartArea