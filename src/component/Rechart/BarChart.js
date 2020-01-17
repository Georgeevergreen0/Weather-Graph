import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

class ChartBar extends PureComponent {


    render() {
        const data = this.props.graphToMap;
        const selected = this.props.selectValue;
        return (
            <BarChart
                width={this.props.width}
                height={350}
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis domain={[0, 'auto']}>
                    <Label value="Percentage" offset={0} position="left" angle={-90} />
                </YAxis>
                <XAxis dataKey="date" domain={['dataMin', 'auto']} />
                <Tooltip />
                <Legend iconType="rect" margin={{ top: 5, left: 10, right: 10, bottom: 20 }} />
                <Bar dataKey={selected} fill="#8884d8" />
            </BarChart>
        );
    }
}

export default ChartBar;
