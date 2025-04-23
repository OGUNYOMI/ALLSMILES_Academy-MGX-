// src/components/dashboard/TeacherDashboard.jsx
import React, { useState, useEffect } from 'react';
import CourseList from '../courses/CourseList';
import CreateCourse from '../courses/CreateCourse';

function TeacherDashboard() {
  const [courses, setCourses] = useState([]);
  const [showCreateCourse, setShowCreateCourse] = useState(false);

  useEffect(() => {
    // Fetch teacher's courses
    // This would be replaced with actual API call
    setCourses([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
        <button
          onClick={() => setShowCreateCourse(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-indigo-600">
                {courses.length}
              </p>
              <p className="text-gray-600">Active Courses</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-indigo-600">0</p>
              <p className="text-gray-600">Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        <CourseList courses={courses} role="teacher" />
      </div>

      {showCreateCourse && (
        <CreateCourse
          onClose={() => setShowCreateCourse(false)}
          onCourseCreated={(course) => {
            setCourses([...courses, course]);
            setShowCreateCourse(false);
          }}
        />
      )}
    </div>
  );
}

export default TeacherDashboard;