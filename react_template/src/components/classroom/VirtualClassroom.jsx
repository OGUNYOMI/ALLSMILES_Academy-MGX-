// src/components/classroom/VirtualClassroom.jsx
import React, { useState, useEffect } from 'react';

function VirtualClassroom({ courseId, sessionId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // Initialize virtual classroom
    const initClassroom = async () => {
      try {
        setIsLoading(true);
        // This would be replaced with actual WebRTC initialization
        setParticipants([]);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize virtual classroom');
        setIsLoading(false);
      }
    };

    initClassroom();

    return () => {
      // Cleanup WebRTC connections
    };
  }, [courseId, sessionId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-semibold">Virtual Classroom</h1>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1 bg-black">
          {/* Main video stream */}
          <div className="w-full h-full flex items-center justify-center text-white">
            Main Stream
          </div>
        </div>

        <div className="w-64 bg-gray-900 p-4">
          <div className="mb-4">
            <h2 className="text-white font-semibold mb-2">Participants</h2>
            <div className="space-y-2">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="bg-gray-800 text-white p-2 rounded"
                >
                  {participant.name}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button className="bg-red-600 text-white p-2 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="bg-gray-600 text-white p-2 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V3"
                />
              </svg>
            </button>
            <button className="bg-gray-600 text-white p-2 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 2.828a9 9 0 010-12.728"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualClassroom;