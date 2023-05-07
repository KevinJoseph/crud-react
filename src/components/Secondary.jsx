import React, { useState, useEffect } from 'react';

function Secondary({data}) {

  return (
    <div>
        <p>holi</p>
        <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Secondary;
