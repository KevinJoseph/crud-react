import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormItem from './components/FormItem';
import {useData} from './hooks/useData'
import { useCrudData } from './hooks/useCrudData';

function MainComponent() {
  const { data, setData } = useData();
  const { addItem, updateItem, deleteItem } = useCrudData();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSave = async (item) => {
    try {
      if (selectedItem) {
        updateItem(item)
      } else {
        addItem(item)
      }
    } catch (error) {
      console.error('Error al guardar el elemento:', error);
    }
  };
  
  const deletedItem = async (id) => {
    try {
      const deleted = deleteItem(id)
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  };

  const selectItem = (index) => {
    setSelectedItem(data[index]);
  };

  return (
    <div>
      <FormItem elemento={selectedItem} onSave={handleSave} />
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => deletedItem(item.id)}>Eliminar</button>
            <button onClick={() => selectItem(index)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainComponent;
