// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // This would be replaced with actual auth check
        const token = localStorage.getItem('token');
        if (token) {
          // Verify token and get user data
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      // This would be replaced with actual API call
      const userData = { email, role: 'student' };
      setUser(userData);
      localStorage.setItem('token', 'dummy-token');
      return userData;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (userData) => {
    try {
      // This would be replaced with actual API call
      setUser(userData);
      localStorage.setItem('token', 'dummy-token');
      return userData;
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}