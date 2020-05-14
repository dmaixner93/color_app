import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import'./Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        console.log(e.target.value);
    }
    render() {
        const { level, changeLevel, handleChange } = this.props;
        return (
            <header className="Navbar">
                <div className="logo">
                    <span>reactcolorpicker</span>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={handleChange}>
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;