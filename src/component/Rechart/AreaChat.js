import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

//       {
//         "dt": 1578409200,
//         "main": {
//           "temp": 284.92,
//           "pressure": 1020,
//           "humidity": 90,
//         }

class ChartArea extends PureComponent {
    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        return (
            <AreaChart
                width={this.props.width}
                height={350}
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
                baseValue="dataMin"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis domain={['dataMin', 'auto']}>
                    <Label value="Celcius" offset={0} position="left" angle={-90} />
                </YAxis>
                <XAxis dataKey="date" domain={['dataMin', 'auto']} />
                <Tooltip />
                <Legend iconType="triangle" margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                <Area type="monotone" dataKey={selected} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        );
    }
}


export default ChartArea