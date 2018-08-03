import React from 'react';
import './Paginator.css';

const Paginator = ({ links, perPageChanger }) => {
	return (
		<div className="Paginator">
			{ links.map(link => link) }
			<span className='Paginator--input-per-page-wrapper'>Per page: { perPageChanger }</span>
		</div>
	);
}

export default Paginator;
