import React from 'react';

const PoemCard = ({ poem, onDelete, onEdit }) => {
  return (
    <div className="poem-card" style={{ background: 'linear-gradient(to right, aqua, purple)' }}>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <button onClick={() => onEdit(poem)}>Editar</button>
      <button onClick={() => onDelete(poem.id)}>Eliminar</button>
    </div>
  );
};

export default PoemCard;
