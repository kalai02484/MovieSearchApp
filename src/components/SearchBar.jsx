import React from "react";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
