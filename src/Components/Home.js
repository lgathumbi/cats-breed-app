import React, { useEffect, useState } from 'react';
import Search from './Search';  

function Home() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/breeds")
      .then(res => res.json())
      .then(data => {
        setCats(data);
        setFilteredCats(data);  
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch cats');
        setLoading(false);
      });
  }, []);

  const handleDelete = (catId) => {
    console.log(`Deleting cat with id: ${catId}`);
    setCats(cats.filter(cat => cat.id !== catId)); 
    setFilteredCats(filteredCats.filter(cat => cat.id !== catId)); 
  };

  const handleEdit = (catId, updatedCat) => {
    setCats(cats.map(cat => {
      if (cat.id === catId) {
        return { ...cat, ...updatedCat };
      }
      return cat;
    }));
    setFilteredCats(filteredCats.map(cat => {
      if (cat.id === catId) {
        return { ...cat, ...updatedCat };
      }
      return cat;
    }));
  };

  
  const handleSearch = (term) => {
    if (term === '') {
      setFilteredCats(cats); 
    } else {
      const filtered = cats.filter(cat =>
        cat.name.toLowerCase().includes(term.toLowerCase()) 
      );
      setFilteredCats(filtered);
    }
  };

  return (
    <div className="cat-list">
      <Search onSearch={handleSearch} /> 

      {loading ? (
        <p>Loading cats...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        filteredCats.map((cat) => (
          <CatCard 
            key={cat.id} 
            cat={cat} 
            onDelete={handleDelete} 
            onEdit={handleEdit} 
          />
        ))
      )}
    </div>
  );
}

function CatCard({ cat, onDelete, onEdit }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCat, setEditedCat] = useState({
    name: cat.name,
    description: cat.description
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCat({
      name: cat.name,
      description: cat.description
    }); 
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    onEdit(cat.id, editedCat); 
    setIsEditing(false); 
  };

  return (
    <div
      className="cat-card"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cat-info">
        <img src={cat.image} alt={cat.name} className="cat-image" />
        <h3 className="cat-name">{cat.name}</h3>

        {isHovered && 
          <p className="cat-description">{cat.description}</p>
        }
      </div>

      <div>
        {isEditing ? (
          <form onSubmit={handleSubmitEdit}>
            <input
              type="text"
              value={editedCat.name}
              onChange={(e) => setEditedCat({ ...editedCat, name: e.target.value })}
            />
            <textarea
              value={editedCat.description}
              onChange={(e) => setEditedCat({ ...editedCat, description: e.target.value })}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </form>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => onDelete(cat.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
