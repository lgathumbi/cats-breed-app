import React, { useEffect, useState } from 'react';

function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/breeds`)
      .then(res => res.json())
      .then(data => setCats(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
   
    <div className="cat-list">
      {cats.length > 0 ? (
        cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
      ) : (
        <p>Loading cats...</p>
      )}
    </div>
    </>
  );
}

function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} className="cat-image" />
      <div className="cat-info">
        <h3 className="cat-name">{cat.name}</h3>
      </div>
    </div>
  );
}

export default Home;
