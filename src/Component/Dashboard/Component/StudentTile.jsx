import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFlag, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudentTile = ({ student, onEdit, onFlag, onDelete }) => {
  return (
    <div className="student-tile" style={{ backgroundColor: student.flagged ? '#f8d7da' : 'transparent' }}>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email}</p>
      <div className="btn-container">
        <FontAwesomeIcon
          icon={faEdit}
          className="btn-edit"
          onClick={() => onEdit(student)}
        />
        <FontAwesomeIcon
          icon={faFlag}
          className={student.flagged ? "btn-flag-active": "btn-flag"}
          onClick={() => onFlag(student)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="btn-dlt"
          onClick={() => onDelete(student)}
        />
      </div>
    </div>
  );
};

export default StudentTile;