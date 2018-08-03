import React from 'react'
import { TableBody, TableHeader } from './Tables';
import './Table.css'

const UserTable = ({ items }) => {
	const columns = [
		'Display Name',
		'Email',
		'Last Log on'
	]

	return (
		<section className='Users'>
			<table className='table UserTable'>
				<TableHeader columns={ columns } />
				<TableBody
					columns={ columns }
					items={ items }
					type='users'
				/>
			</table>
		</section>
	);
}

export default UserTable;

