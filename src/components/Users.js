import React, { Component } from 'react';
import UserTable from './UserTable';
import Paginator from './Paginator';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 10
        }

        this.changePerPage = this.changePerPage.bind(this);
    }
    render() {
        const users = this.props.users.slice(this.state.offset, this.state.offset + this.state.perPage);
        const links = [];
        let initial = parseInt(this.state.offset / this.state.perPage, 10) + 1;
        initial = initial > 5 ? initial - 5 : 1;
        for (let i = initial; i < initial + 10; i++) {
            const newOffset = this.state.perPage * (i - 1);
            links.push(
                <span
                    className='Paginator--button'
                    key={ this.state.offset + this.state.perPage + i }
                    onClick={this.changeOffset.bind(this, newOffset)}
                >{i}</span>
            );
        }
        const perPageChanger = <input
            className="Paginator--input-per-page"
            onChange={this.changePerPage}
            type="number"
            value={this.state.perPage}
        />;
        return (
            <div className="Users-wrapper">
                <h1>Users</h1>
                <UserTable
                    offset={this.state.offset}
                    perPage={this.state.perPage}
                    items={users}
                />
                <Paginator
                    links={links}
                    perPageChanger={perPageChanger}
                />
            </div>
        );
    }

    changeOffset(newOffset, event) {
        this.setState(() => ({offset: newOffset}));
    }

    changePerPage(event) {
        this.setState({ perPage: parseInt(event.target.value, 10) });
    }
}

export default Users;
