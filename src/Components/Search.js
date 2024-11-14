import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);  
    onSearch(value);       
  };

  return (
    <div className="searchbar" >
      <label htmlFor="search">Search Cat Breeds:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}   
        placeholder="Search...."
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default Search;
