import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

class ChartLine extends PureComponent {

    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        return (
            <LineChart
                width={this.props.width}
                height={350}
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis domain={['dataMin', 'auto']}>
                    <Label value="hPa" offset={0} position="left" angle={-90} />
                </YAxis>
                <XAxis dataKey="date" domain={['dataMin', 'auto']} />
                <Tooltip />
                <Legend iconType="diamond" margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                <Line type="monotone" dataKey={selected} stroke="#8884d8" />
            </LineChart>
        );
    }
}

export default ChartLine;
