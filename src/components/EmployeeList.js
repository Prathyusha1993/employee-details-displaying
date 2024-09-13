import React, { useState } from 'react';

const EmployeeList = ({employeeInfo, onEmployeeClick, handleDeleteEmployee}) => {
    return (
        <div style={{ border: '1px solid black', width: '500px', height: '500px' }}>
            
            <div>
                <h4 style={{ borderBottom: '1px solid black' }}>EmployeeList</h4>
                <ul style={{ listStyle: 'none' }}>
                    {employeeInfo.map((employee) => (
                        <li key={employee.id}  style={{ padding: '7px', border: '0.2px solid black', borderRadius: '120px', margin: '4px', backgroundColor: 'lightgrey' }}>
                            <span  onClick={() => onEmployeeClick(employee)}>{employee.firstName} {employee.lastName}</span>
                            <button style={{ marginLeft: '200px' }} onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default EmployeeList