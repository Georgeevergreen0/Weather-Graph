import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer
} from 'recharts';

class ChartLine extends PureComponent {

    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        return (
            <ResponsiveContainer height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 10, right: 20, left: 10, bottom: 10,
                    }}
                >
                    <YAxis domain={['dataMin', 'auto']}>
                        <Label value="hPa" offset={0} position="left" angle={-90} />
                    </YAxis>
                    <XAxis dataKey="date" domain={['dataMin', 'auto']} />
                    <Tooltip />
                    <Legend iconType="diamond" margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                    <Line type="monotone" dataKey={selected} stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default ChartLine;
