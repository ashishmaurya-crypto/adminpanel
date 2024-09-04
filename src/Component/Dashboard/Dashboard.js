import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './Dashboard.scss';
import Modal from '../../ReusableComponent/Component/Model/Modal';
import StudentTile from './Component/StudentTile';

export default function Dashboard() {
  const [view, setView] = useState('grid');
  const [isEdit, setIsEdit] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20, grade: 'A', address: '123 Main St', phone: '123-456-7890', email: 'john@example.com', flagged: false },
    { id: 2, name: 'Jane Doe', age: 22, grade: 'B', address: '456 Elm St', phone: '987-654-3210', email: 'jane@example.com', flagged: false },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleAddStudent = () => {
    setIsEdit(true);
    setFormData({
      name: '',
      age: '',
      grade: '',
      address: '',
      phone: '',
      email: ''
    });
    setSelectedStudent(null);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setIsEdit(false); // Set to view mode
    setFormData(student);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setIsEdit(true); // Set to edit mode
    setFormData(student);
  };

  const handleDeleteStudent = (student) => {
    setStudents(students.filter((s) => s.id !== student.id));
  };

  const handleFlagStudent = (student) => {
    setStudents(students.map((s) =>
      s.id === student.id ? { ...s, flagged: !s.flagged } : s
    ));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit && selectedStudent) {
      // Update the student in the list
      setStudents(students.map((s) => (s.id === selectedStudent.id ? { ...selectedStudent, ...formData } : s)));
    } else {
      // Add a new student
      const newStudent = { id: students.length + 1, ...formData, flagged: false };
      setStudents([...students, newStudent]);
    }
    // Reset form and close modal
    setFormData({
      name: '',
      age: '',
      grade: '',
      address: '',
      phone: '',
      email: ''
    });
    setSelectedStudent(null);
    setIsEdit(false);
  };

  return (
    <>
      <Container fluid className='aboutus-container'>
        <Row className='aboutus-title'>
          <Col className='d-flex justify-content-start'>
            <h4>Dashboard</h4>
          </Col>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}>
                {view === 'grid' ? 'Tile View' : 'Grid View'}
              </button>
              <button onClick={handleAddStudent}>Add Student</button>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          {view === 'grid' ? (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Flagged</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} style={{ backgroundColor: student.flagged ? '#f8d7da' : 'transparent' }}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.grade}</td>
                      <td>{student.address}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>{student.flagged ? 'Yes' : 'No'}</td>
                      <td>
                        <button onClick={() => handleStudentClick(student)}>View</button>
                        <button onClick={() => handleEditStudent(student)}>Edit</button>
                        <button onClick={() => handleFlagStudent(student)}>{student.flagged ? 'Unflag' : 'Flag'}</button>
                        <button onClick={() => handleDeleteStudent(student)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="tile-view">
              {students.map((student) => (
                <StudentTile
                  key={student.id}
                  student={student}
                  onEdit={() => handleEditStudent(student)}
                  onFlag={() => handleFlagStudent(student)}
                  onDelete={() => handleDeleteStudent(student)}
                />
              ))}
            </div>
          )}
        </Row>
      </Container>

      {(selectedStudent || isEdit) && (
        <Modal show={selectedStudent || isEdit} onClose={() => {
          setIsEdit(false);
          setSelectedStudent(null)
        }}>
          <Container fluid className='addStudent-container'>
            <Row className='addStudent-title'>
              <h3>{isEdit && !selectedStudent ? 'Add New Student' : isEdit ? 'Edit Student' : 'View Student'}</h3>
            </Row>
            <Row>
              <form onSubmit={handleSubmit}>
                <div className='input-div'>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='input-div'>
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='input-div'>
                  <label>Grade:</label>
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='input-div'>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='input-div'>
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                <div className='input-div'>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    readOnly={!isEdit}
                  />
                </div>
                {isEdit && <button type="submit">Submit</button>}
              </form>
            </Row>
          </Container>
        </Modal>
      )}
    </>
  );
}

