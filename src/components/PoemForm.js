import React, { useState, useEffect } from 'react';

const PoemForm = ({ onSubmit, initialPoem }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialPoem) {
      setTitle(initialPoem.title);
      setContent(initialPoem.content);
    }
  }, [initialPoem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido del poema"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PoemForm;
