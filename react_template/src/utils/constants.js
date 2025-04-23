// src/utils/constants.js
export const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
};

export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  SIGNUP: '/api/auth/signup',
  COURSES: '/api/courses',
  VIRTUAL_CLASSROOM: '/api/classroom',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  COURSE: '/course/:id',
  VIRTUAL_CLASSROOM: '/classroom/:courseId/:sessionId',
};