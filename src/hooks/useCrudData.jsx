import { useState } from 'react'
import itemService from '../service/items'

export function useCrudData() {
    const [data, setData] = useState();

    const addItem = (item) => {
        itemService.create(item)
            .then(newItem => setData(newItem))
    }

    const updateItem = (id,item) => {
        itemService.update(id,item)
            .then(updatedItem => setData(updatedItem))
    }

    const deleteItem = (id) => {
        try {
            itemService.deleteItem(id)
            return true
        } catch (error) {
            return false;
        }
    }

    return { data, addItem, updateItem, deleteItem }
}