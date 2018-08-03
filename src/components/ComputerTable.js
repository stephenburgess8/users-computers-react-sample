import React from 'react'
import { TableHeader, TableBody } from './Tables';
import './Table.css'

const ComputerTable = ({ users, items }) => {
	const columns = [
		'Display Name',
		'Os',
		'Os Version'
	]

	return (
		<section className='Computers'>
			<table className='table ComputerTable'>
				<TableHeader columns={ columns } />
				<TableBody
					columns={ columns }
					items={ items }
					type='computers'
				/>
			</table>
		</section>
	)
}

export default ComputerTable;

