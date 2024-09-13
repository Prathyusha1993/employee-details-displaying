import React, {useState} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeInformation from './EmployeeInformation';
import AddEmployee from './AddEmployee';
import employeeData from '../data/data.json';

const MainContainer = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeInfo, setEmployeeInfo] = useState(employeeData);

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleDeleteEmployee = (id) => {
        const newEmployeeData = employeeInfo.filter((employee) => employee.id !== id);
        setEmployeeInfo(newEmployeeData);
        if(selectedEmployee && selectedEmployee.id === id){
            setSelectedEmployee(null);
        }
    };

    const handleAddEmployee = (newEmployee) => {
        const newAddedEmployee = {...newEmployee, id: employeeInfo.length + 1};
        setEmployeeInfo([...employeeInfo, newAddedEmployee]);
    };

  return (
    <div>
        <AddEmployee onAddEmployee={handleAddEmployee} />
        <div style={{display:'flex',justifyContent:'center'}}>
        <EmployeeList employeeInfo={employeeInfo} onEmployeeClick={handleEmployeeClick} handleDeleteEmployee={handleDeleteEmployee} />
        <EmployeeInformation employee={selectedEmployee} />
        </div>
        
    </div>
  )
}

export default MainContainer;