import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const WeatherRadio = (props) => {
    const handleChange = event => {
        props.setSelectValue(event.target.value);
    };
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="position" name="position" value={props.selectValue} onChange={handleChange} row>
                <FormControlLabel
                    value="temp"
                    control={<Radio color="primary" />}
                    label="Temp"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="pressure"
                    control={<Radio color="primary" />}
                    label="Pressure"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="humidity"
                    control={<Radio color="primary" />}
                    label="Humidity"
                    labelPlacement="top"
                />
            </RadioGroup>
        </FormControl>
    );
}

export default WeatherRadio;
