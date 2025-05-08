import React from 'react';

const EmptyState = ({ message }) => {
  return (
    <div className="text-center p-10 text-gray-500">
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
