import React from 'react';

const TableBase = () => {
    return (
        <div>
            <table>
                <thead>
                    <td>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Departement</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </td>
                </thead>
            </table>
        </div>
    );
};

export default TableBase;