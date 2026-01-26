const FilterDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className=" border-gray-500 bg-gray-800 text-white focus:outline-gray-500 focus:border-violet-700 transition-colors px-4 py-3 mb-6 rounded-xl"
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};
export default FilterDropdown;
