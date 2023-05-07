import React from 'react';

const ReadTable = ({ data, deleteItem, selectItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={() => deleteItem(item.id)}>Eliminar</button>
              <button onClick={() => selectItem(index)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReadTable;
