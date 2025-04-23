// src/components/dashboard/StudentDashboard.jsx
import React, { useState, useEffect } from 'react';
import CourseList from '../courses/CourseList';

function StudentDashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    // Fetch student's enrolled courses and available courses
    // This would be replaced with actual API calls
    setEnrolledCourses([]);
    setAvailableCourses([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-indigo-600">
                {enrolledCourses.length}
              </p>
              <p className="text-gray-600">Enrolled Courses</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-2xl font-bold text-indigo-600">0%</p>
              <p className="text-gray-600">Average Progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Enrolled Courses</h2>
        <CourseList courses={enrolledCourses} role="student" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
        <CourseList courses={availableCourses} role="student" />
      </div>
    </div>
  );
}

export default StudentDashboard;