import React from 'react'
import { escapeLabelText } from '../utilities';
import { Link } from 'react-router-dom';

const TableHeader = ({ columns }) => (
    <thead className='Table-results--head'>
        <tr className='Table-results--header-row'>
            {
                columns.map(column => {
                    const property = escapeLabelText(column)

                    const cellClassName = `Table-results--header-cell Table-results--cell__${ property }`
                    return (
                        <th className={ cellClassName } key={ property }>
                            { column }
                        </th>
                    )
                })
            }
        </tr>
    </thead>
);

const TableBody = ({ columns, items, type }) => (
    <tbody className='Table-results--body'>
        {
            items.map(entry => (
                <TableProperties
                    columns={ columns }
                    entry={ entry }
                    key={ entry.id }
                    type={ type }
                />
            ))

        }
    </tbody>
);

const TableProperties = ({ columns, entry, type }) =>  (
    <tr className='Table-results--row'>
        {
            columns.map(column => {
                const property = escapeLabelText(column)

                const cellClassName = `Table-results--cell Table-results--cell__${ property }`

                return (

                    <td className={ cellClassName } key={ property }>
                        <Link to={type + "/" + entry.id}>
                            <span className='Table-results--cell-link'>
                            { entry[property] }
                            </span>
                        </Link>
                    </td>
                );
            })
        }
    </tr>
)

export {
    TableHeader,
    TableBody
};

