import React, { useState } from 'react';

const CourseFilters = ({ onFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onFilter(value);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search courses..."
        className="input w-full"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default CourseFilters;
