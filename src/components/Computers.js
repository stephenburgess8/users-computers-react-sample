import React, { Component } from 'react';
import ComputerTable from './ComputerTable';
import Paginator from './Paginator';

class Computers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			perPage: 10
		}

		this.changePerPage = this.changePerPage.bind(this);
	}
	render() {
		const computers = this.props.computers.slice(this.state.offset, this.state.offset + this.state.perPage);
		const links = [];
		let initial = parseInt(this.state.offset / this.state.perPage, 10) + 1;
		initial = initial > 5 ? initial - 5 : 1;
		for (let i = initial; i < initial + 5; i++) {
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
			<div className="Computers">
				<h1>Computers</h1>
				<ComputerTable
					offset={this.state.offset}
					perPage={this.state.perPage}
					items={computers}
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

export default Computers;
