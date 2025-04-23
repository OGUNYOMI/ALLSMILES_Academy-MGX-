// src/components/courses/CourseList.jsx
import React from 'react';
import CourseCard from './CourseCard';

function CourseList({ courses, role }) {
  if (!courses.length) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">
          {role === 'teacher'
            ? 'You haven\'t created any courses yet.'
            : 'No courses available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} role={role} />
      ))}
    </div>
  );
}

export default CourseList;