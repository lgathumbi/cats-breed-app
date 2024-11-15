import React, { useState } from 'react';

function AddCats() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    const newCat = {
      name: formData.name,
      image: formData.image,
      description: formData.description,
    };

    
    fetch("https://json-server-backend-hpd7.onrender.com/breeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(newCat), 
    })
      .then((res) => res.json())
      .then((cat) => {
        console.log('Cat added:', cat);
        
        setFormData({
          name: "",
          image: "",
          description: "",
        });
        alert("Cat added successfully!");
      })
      .catch((err) => {
        console.error("Error adding cat:", err);
        alert("Failed to add cat.");
      });
  }

  return (
    <div className="add-cats">
      <h2>Add Cat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Cat name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCats;
