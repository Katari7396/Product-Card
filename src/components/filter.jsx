import React from "react";
 
function Filter ({ category, setCategory, setPriceRange }) {

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setPriceRange([min, max]);
  };
 
  return (
    <div className="filters">
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Furniture">Furniture</option>
          <option value="Books">Books</option>
        </select>
      </label>
 
      <label>
        Price Range:
        <select onChange={handlePriceChange}>
          <option value="0-50000">All</option>
          <option value="0-5000">0 - 5000</option>
          <option value="5000-20000">5000 - 20000</option>
          <option value="20000-50000">20000 - 50000</option>
        </select>
      </label>
    </div>
  );
}
 
export default Filter;