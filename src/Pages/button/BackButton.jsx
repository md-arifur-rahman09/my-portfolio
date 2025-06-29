import React from 'react';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="btn btn-sm btn-outline btn-primary mb-6 flex items-center gap-2"
      aria-label="Go Back"
    >
      {/* Left arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
