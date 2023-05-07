import React, { useState, useEffect } from 'react';
import FormItem from './FormItem';
import ReadTable from './ReadTable';
import {useData} from '../hooks/useData'
import { useCrudData } from '../hooks/useCrudData';

function Item({data, setData}) {
  const { addItem, updateItem, deleteItem } = useCrudData();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSave = async (item) => {
    try {
      if (selectedItem) {
        const {id} = selectedItem
        updateItem(id ,item)
      } else {
        addItem(item)
      }
    } catch (error) {
      console.error('Error al guardar el elemento:', error);
    }
  };
  
  const deletedItem = async (id) => {
    console.log("delete", id)
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
      <ReadTable
        data={data}
        deleteItem={deletedItem}
        selectItem={selectItem}
      />
    </div>
  );
}

export default Item;
