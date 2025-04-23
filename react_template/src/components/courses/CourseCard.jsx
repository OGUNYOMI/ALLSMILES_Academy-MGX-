// src/components/courses/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course, role }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div className="h-48 bg-gray-200">
        <img
          src={course.thumbnail || '/assets/images/course-default.jpg'}
          alt={course.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {role === 'teacher'
              ? `${course.enrolledStudents?.length || 0} students`
              : course.teacherName}
          </span>
          {role === 'student' && !course.enrolled && (
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;