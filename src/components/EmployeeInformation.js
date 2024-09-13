import React from 'react'

const EmployeeInformation = ({employee}) => {
  return (
    <div style={{border: '1px solid black', width:'600px', height:'500px'}}>
        <h4 style={{borderBottom:'1px solid black'}}>EmployeeInformation</h4>
        <div>
            {employee ? (
                <div>
                    <img src={employee.imageUrl} alt='image' style={{width:'200px', height:'200px'}} />
                    <h3>{employee.firstName} {employee.lastName} - Age:{employee.age}</h3>
                    <p>{employee.address}</p>
                    <p>{employee.email}</p>
                    <p>Mobile: {employee.contact}</p>
                    <p>DOB: {employee.dob}</p>
                </div>
            ) : (<p>No employee selected</p>)}
        </div>
    </div>
  )
}

export default EmployeeInformation;