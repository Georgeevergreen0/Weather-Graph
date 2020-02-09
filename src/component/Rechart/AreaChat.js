import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer
} from 'recharts';

class ChartArea extends PureComponent {
    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        return (
            <ResponsiveContainer height={400}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10, right: 20, left: 10, bottom: 10,
                    }}
                    baseValue="dataMin"
                >
                    <YAxis domain={['dataMin', 'auto']}>
                        <Label value="Celcius" offset={0} position="left" angle={-90} />
                    </YAxis>
                    <XAxis dataKey="date" domain={['dataMin', 'auto']} />
                    <Tooltip />
                    <Legend iconType="triangle" margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                    <Area type="monotone" dataKey={selected} stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

        );
    }
}


export default ChartArea