// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import StudentDashboard from './components/dashboard/StudentDashboard';
import VirtualClassroom from './components/classroom/VirtualClassroom';
import { ROUTES, ROLES } from './utils/constants';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return user ? children : <Navigate to={ROUTES.LOGIN} />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Navigate to={ROUTES.DASHBOARD} />}
          />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute>
                {({ user }) =>
                  user?.role === ROLES.TEACHER ? (
                    <TeacherDashboard />
                  ) : (
                    <StudentDashboard />
                  )
                }
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.VIRTUAL_CLASSROOM}
            element={
              <PrivateRoute>
                <VirtualClassroom />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;