import React, { useState, useEffect } from 'react';

function FormItem({ elemento, onSave }) {
  
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if(elemento){
        setFormData(elemento)
    }
  }, [elemento]);


  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
    setFormData({ title: '', description: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>{elemento ? 'Actualizar elemento' : 'Crear elemento'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">{elemento ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
}

export default FormItem;
