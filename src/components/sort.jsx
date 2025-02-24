import React from "react";
 
function Sorting({ sortOption, setSortOption }) {
  return (
    <div className="sorting">
      <label>
        Sort By:
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
    </div>
  );
}
 
export default Sorting;