import React, { useState } from 'react'
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import EmployeeInformation from './EmployeeInformation';
import employeeData from '../data/data.json';

const MainContainer = () => {
    const [employees, setEmployees] = useState(employeeData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleDeleteEmployee = (id) => {
        const newEmployeeList = employees.filter((employee) => employee.id !== id);
        setEmployees(newEmployeeList);
        if(selectedEmployee && selectedEmployee.id === id){
            setSelectedEmployee(null);
        }
    };

    const onClickEmployee = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleAddEmployee= (newEmployee) => {
        const newAddedEmployee = {...newEmployee, id:employees.length + 1};
        setEmployees([...employees, newAddedEmployee]);
    };
    
  return (
    <div>
        <AddEmployee handleAddEmployee={handleAddEmployee} />
        <div style={{display:'flex', justifyContent:'center'}}>
            <EmployeeList employees={employees} handleDeleteEmployee={handleDeleteEmployee} handleClickEmployee={onClickEmployee} />
            <EmployeeInformation employee={selectedEmployee} />
        </div>
    </div>
  )
}

export default MainContainer;