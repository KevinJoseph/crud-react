import { useEffect, useState } from "react";
import itemService from '../service/items'

export function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    itemService.getAll()
      .then(response => {
        setData(response)
      })
  }, [data])
  
  return {
    data,
    setData
  }
}
