import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { numberDisplayFormat } from '../utilities';
import './Tile.css';

class Tile extends Component {
    render() {
        return (
            <div className="Tile">
                <h5 className="Tile-header">{ this.props.label }</h5>
                <div className="Tile-icon">
                    <i className={ "fa " + this.props.iconClassName }></i>
                </div>
                <h3>{ numberDisplayFormat(this.props.quantity) }</h3>
            </div>
        );
    }
}

Tile.propTypes = {
    iconClassName: PropTypes.string,
    label: PropTypes.string,
    quantity: PropTypes.number
};

Tile.defaultProps = {
    number: 0
}

export default Tile;
