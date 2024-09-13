import React, { useState } from 'react';
import Modal from './Modal';

const AddEmployee = ({handleAddEmployee}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        dob:'',
        age:'',
        emial:'',
        imageUrl:''
    });

    const handleChange = (e) => {
        const {name, value} =  e.target;
        setNewEmployee({
            ...newEmployee, [name]:value
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleAddEmployee(newEmployee);
        setIsModalOpen(false);;
        setNewEmployee({
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            dob:'',
            age:'',
            emial:'',
            imageUrl:''
        })
    }

  return (
    <div>
        <button onClick={() => setIsModalOpen(true)}>Add Employee</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label>First Name:</label>
                    <input type="text" placeholder='First Name' name='firstName' value={newEmployee.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder='last Name' name='lastName' value={newEmployee.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="text" placeholder='Age' name='age' value={newEmployee.age} onChange={handleChange} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" placeholder='Image (optional)' name='imageUrl' value={newEmployee.imageUrl} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder='Email' name='email' value={newEmployee.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="text" placeholder='Contact' name='contact' value={newEmployee.contact} onChange={handleChange} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" placeholder='Address' name='address' value={newEmployee.address} onChange={handleChange} />
                </div>
                <div>
                    <label>DOB:</label>
                    <input type="text" placeholder='DOB' name='dob' value={newEmployee.dob} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </Modal>
    </div>
  )
}

export default AddEmployee;