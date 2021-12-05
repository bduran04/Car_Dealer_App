//create the drop down using UI library 

import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Cars } from '../Cars.js';
import { useState } from 'react';
import Select from '@mui/material/Select';

const CarMenu = (props) => {
const [car, setCar] = useState('');

    const updateCarName = (event) => {
        //taking the property event & when user clicks, creates a event propogation. 
        // the target of the event = menuItem tag. This is destructurig the value from target
        const { 
          target: { value },
        } = event;
        console.log(value);
        setCar(value);
      };

//find a way to post process the data so that line 36 only maps unique values 

    return (
        <div>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={car}
                    onChange={updateCarName}
                    input={<OutlinedInput label="Name" />}
                >
                    {Cars.map((car) => (
                        <MenuItem
                            key={car.make}
                            value={car.make}
                        >
                            {car.make}
                        </MenuItem>
                    ))}
                </Select>
        </div>
    )
};

export default CarMenu;