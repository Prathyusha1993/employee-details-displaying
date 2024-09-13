import React from 'react'

const EmployeeList = ({employees, handleDeleteEmployee, handleClickEmployee}) => {
  return (
    <div style={{border:'1px solid black', width: '500px', height:'500px'}}>
        <h4 style={{borderBottom:'1px solid black'}}>EmployeeList</h4>
        <ul style={{listStyle:'none'}}>
            {employees.map((employee) => (
                <li key={employee.id} style={{padding:'7px', margin:'4px', borderRadius:'20px', border:'.2px solid black', backgroundColor:'lightgrey'}}>
                    <span onClick={() => handleClickEmployee(employee)}>{employee.firstName} {employee.lastName}</span>
                    <button style={{marginLeft:'180px'}} onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EmployeeList;