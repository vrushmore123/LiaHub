// components/Grades.jsx
import React, { useState } from 'react';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');

  const handleAddGrade = () => {
    if (studentName && grade) {
      setGrades([...grades, { studentName, grade }]);
      setStudentName('');
      setGrade('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Grades</h2>
      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student Name"
        className="border p-2 mr-2"
      />
      <input
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
        className="border p-2 mr-2"
      />
      <button onClick={handleAddGrade} className="bg-purple-500 text-white px-4 py-2">
        Add Grade
      </button>
      <ul className="mt-4">
        {grades.map((entry, index) => (
          <li key={index} className="border-b py-1">
            {entry.studentName} - {entry.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
