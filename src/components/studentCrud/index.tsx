import React, { useEffect, useState } from 'react';
import { httpRequest } from '../../services/api.services';
import { endPoints } from '../../services/endpoints';
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
      role_id: 1
    }
  )

  const handleTextFieldOnChange = (e: any) => 
  {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value })
  }

  
  const handleRoleChange = (event: any) => 
  {
    setStudent({ ...student, role_id: event.target.value })
  };
  
  const handleSubmit = (e: any) => 
  {
    e.preventDefault()
    const body: any = 
    {
      name: student.name,
      description: student.description,
      class: student.class,
      phone: student.phone,
      cnic: student.cnic,
      role: student.role_id
    }
    httpRequest(endPoints.createStudent, 'POST', body).then((response: any) => {
      console.log(response, 'console of create student response')
    }).catch((error: any) => {
      console.log(error, 'console of create student error')
    })
  }

  const getAllStudents = () => 
  {
    httpRequest(endPoints.getAllActiveStudents, "GET").then((response: any) => {
      console.log(response, 'console of response of get all active students')
    }).catch((error: any) => {
      console.log(error, 'this is the console of error of get all active students')
    })
  } 

  useEffect(() => 
  {
    getAllStudents()
  }, [])
  

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
            <label htmlFor="class">Classssssss:</label>
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
              placeholder='Enter Phone*'
              maxLength={11}
              value={student.phone}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="cnic">CNIC:</label>
            <input
              type="text"
              name="cnic"
              placeholder='Enter CNIC*'
              maxLength={13}
              value={student.cnic}
              onChange={(event) => handleTextFieldOnChange(event)}
            />
            <label htmlFor="role">Role:</label>

            <div className='radio_main'>
              <label>
                <input
                  type="radio"
                  name="role"
                  value={1}
                  checked={student.role_id === 1}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value={2}
                  checked={student.role_id === 2}
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