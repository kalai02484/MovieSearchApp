import React from "react";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex mb-6 gap-0 max-w-3xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 px-6 py-3 border border-gray-500 bg-gray-800 text-white focus:outline-none focus:border-violet-700 transition-colors rounded-l-full w-full "
      />
      <button
        onClick={onSearch}
        className="bg-violet-800 text-white px-7 rounded mr-auto hover:bg-blue-700 transition-colors rounded-r-full"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
