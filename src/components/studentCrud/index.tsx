import React, { useState } from 'react';
import './index.css';

const StudentCrud = () => {
  const [studentList, setStudentList] = useState([])
  const [student, setStudent] = useState(
    {
      name: "",
      description: "",
      class: "",
      phone: "",
      cnic: "",
      role: ""
    }
  )

  const handleTextFieldOnChange = (e: any) => 
  {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e: any) => 
  {
    e.preventDefault()
  }

  const handleRoleChange = (event: any) => 
  {
    setStudent({ ...student, role: event.target.value })
  };


  return (
    <>
      <div className='main'>
        <h1>Student Crud</h1>
        <div className='form_main'>
          <form onSubmit={handleSubmit}  >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder='Enter Name*'
              value={student.name}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              placeholder='Enter Description*'
              value={student.description}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="class">Class:</label>
            <input
              type="text"
              name="class"
              placeholder='Enter Class*'
              value={student.class}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              placeholder='Enter Class*'
              value={student.phone}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="cnic">CNIC:</label>
            <input
              type="text"
              name="cnic"
              placeholder='Enter Class*'
              value={student.cnic}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="role">Role:</label>

            <div className='radio_main'>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={student.role === "admin"}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={student.role === "user"}
                  onChange={handleRoleChange}
                />
                User
              </label>
            </div>

            <button type="submit">{"Add"}</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Class</th>
              <th>Phone</th>
              <th>CNIC</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.description}</td>
              <td>{student.className}</td>
              <td>{student.phone}</td>
              <td>{student.cnic}</td>
              <td>{student.role}</td>
              <td>
                <button onClick={() => handleEdit(student.id)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))} */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StudentCrud