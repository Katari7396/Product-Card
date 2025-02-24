import React, { useState, useEffect } from "react"; 
import './App.css'
import Filter from "./components/filter";
import Sorting from "./components/sort";
import List from "./components/list";

 
function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortOption, setSortOption] = useState("name");
  
  useEffect(() => {
    document.title = `MY CATALOG`
    
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    
    let filtered = products.filter((product) => {
      const withinCategory = category === "All" || product.category === category;
      const withinPrice = product.Price >= priceRange[0] && product.Price <= priceRange[1];
      return withinCategory && withinPrice;
    });
 
    if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price") {
      filtered.sort((a, b) => a.Price - b.Price);
    }
 
    setFilteredProducts(filtered);
  },[products, category, priceRange, sortOption]);
 
  return (
    <div className="App">
      <h1>WELCOME TO PRODUCT CATALOG</h1>
      <div className="controls">

       <Filter category={category} setCategory={setCategory} setPriceRange={setPriceRange}/>
       <Sorting sortOption={sortOption} setSortOption={setSortOption}/>
       
      </div>
     
      <List products={filteredProducts}/>
    </div>
  );
}
 
export default App;
