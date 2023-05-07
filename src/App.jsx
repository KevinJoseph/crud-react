import React, { useState, useEffect } from 'react';
import Item from './components/Item';
import Secondary from './components/Secondary';
import { useData } from './hooks/useData';

function App() {
  const { data, setData } = useData();

  return (
    <>
    <Secondary data={data} setData={setData}></Secondary>
    <Item data={data} setData={setData}></Item>
    </>
  );
}

export default App;
