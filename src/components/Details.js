import React from 'react';
import { labelDisplayFormat } from '../utilities'; 
import './Details.css';

const Details = ({ match, computers, users }) => {
    const id = match.params.id;
    let detailItem = {};
    if (computers && computers.length) {
        detailItem = computers.find(computer => computer.id === id)
    }
    else if (users && users.length) {
        detailItem = users.find(user => user.id === id)
    }

    const columns = [];
    if (detailItem) {
        for (const [key] of Object.entries(detailItem)) {
            columns.push(key);
        }
    }

    return (
        <div className="Details">
            { detailItem && <h4>{detailItem['displayname']}</h4> }
            <table className="Details--table">
                <tbody>
                {
                    columns.map(column => {
                        return <tr className="Details--table-tr" key={column}>
                            <td className="Details--table-td">{labelDisplayFormat(column)}</td>
                            <td className="Details--table-td">{detailItem[column]}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default Details;
