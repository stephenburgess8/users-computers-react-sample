import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tile from './Tile';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Link to="/users">
          <Tile
            iconClassName="fa-user"
            label="Users"
            quantity={ this.props.userCount }
          />
        </Link>
        <Link to="/computers">
          <Tile
            iconClassName="fa-desktop"
            label="Computers"
            quantity={ this.props.computerCount }
          />
        </Link>
      </div>
    );
  }
}

export default Dashboard;
