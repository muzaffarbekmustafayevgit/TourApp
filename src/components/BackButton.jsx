import React from 'react';
import { useNavigate } from 'react-router-dom';
const BackButton = () => {
  const navigate = useNavigate();

 const handleBack = () => {
  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate('/'); // home page
  }
};


  return (
    <button
      onClick={handleBack}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    > Go Back
    </button>
  );
};

export default BackButton;
