import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import './Palette.css';
import Navbar from './Navbar.js';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel) {
        this.setState({ level: newLevel });
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar 
                    level = {level}
                    changeLevel = {this.changeLevel}
                    handleChange = {this.changeFormat}
                />
                {/* Navbar goes here */}
                <div className="Palette-colors">{colorBoxes}</div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette;