import React, { useState } from 'react'
import Modal from './Modal';

const AddEmployee = ({onAddEmployee}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        firstName:'',
        lastName:'',
        imageUrl:'',
        age:'',
        address:'',
        email:'',
        contact:'',
        salary:'',
        dob:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewEmployee((prevState) => ({...prevState, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEmployee(newEmployee);
        setIsModalOpen(false);
        setNewEmployee({
            firstName:'',
            lastName:'',
            imageUrl:'',
            age:'',
            address:'',
            email:'',
            contact:'',
            salary:'',
            dob:''
        });
    };

  return (
    <div style={{display:'flex', justifyContent:'flex-end', marginRight:'265px', marginBottom:'10px'}}>
        <button onClick={() => setIsModalOpen(true)}>Add Employee</button>
        <Modal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} >
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='firstName' placeholder='First Name' value={newEmployee.firstName} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='lastName' placeholder='Last Name' value={newEmployee.lastName} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='imageUrl' placeholder='ImageUrl' value={newEmployee.imageUrl} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='email' placeholder='Email' value={newEmployee.email} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='contact' placeholder='Contact' value={newEmployee.contact} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='salary' placeholder='Salary' value={newEmployee.salary} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='address' placeholder='Address' value={newEmployee.address} onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='dob' placeholder='DOB' value={newEmployee.dob} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            </Modal>
    </div>
  )
}

export default AddEmployee