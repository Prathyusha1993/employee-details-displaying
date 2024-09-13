import React from 'react'

const EmployeeInformation = ({ employee }) => {
    console.log(employee);
    if (!employee) {
        return (
          <div style={{ border: '1px solid black', width: '600px', height: '500px' }}>
            <h4 style={{ borderBottom: '1px solid black' }}>Employee Information</h4>
            <p>Select an employee to view their details.</p>
          </div>
        );
      }
    return (
        <div style={{ border: '1px solid black', width: '600px', height: '500px' }}>
            <h4 style={{ borderBottom: '1px solid black' }}>Employee Information</h4>
            <div>
                <img src={employee.imageUrl} alt='image' style={{width:'200px', height:'200px'}} />
                <h4>{employee.firstName} {employee.lastName} - age: {(employee.age)}</h4>
                <p>{employee.address}</p>
                <p>{employee.email}</p>
                <p>Mobile - {employee.contact}</p>
                <p>DOB - {employee.dob}</p>
            </div>

        </div>
    )
}

export default EmployeeInformation