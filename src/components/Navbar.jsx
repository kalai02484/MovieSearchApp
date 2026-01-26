import React, { useState } from "react";

const Navbar = ({ query, onChange, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md  ">
      {/* App Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide">
        🎬 MovieFinder
      </h1>

    </nav>
  );
};

export default Navbar;
