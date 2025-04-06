import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import PoemCard from './components/PoemCard';
import PoemForm from './components/PoemForm';
import './App.css';

const App = () => {
  const [poems, setPoems] = useState([]);
  const [editingPoem, setEditingPoem] = useState(null);

  useEffect(() => {
    const fetchPoems = async () => {
      const querySnapshot = await getDocs(collection(db, 'poems'));
      const poemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPoems(poemsData);
    };

    fetchPoems();
  }, []);

  const addPoem = async (poem) => {
    await addDoc(collection(db, 'poems'), poem);
    setPoems([...poems, { ...poem, id: Date.now() }]);
  };

  const updatePoem = async (updatedPoem) => {
    const poemRef = doc(db, 'poems', updatedPoem.id);
    await updateDoc(poemRef, updatedPoem);
    setPoems(poems.map((poem) => (poem.id === updatedPoem.id ? updatedPoem : poem)));
    setEditingPoem(null);
  };

  const deletePoem = async (id) => {
    const poemRef = doc(db, 'poems', id);
    await deleteDoc(poemRef);
    setPoems(poems.filter((poem) => poem.id !== id));
  };

  const editPoem = (poem) => {
    setEditingPoem(poem);
  };

  return (
    <div className="App">
      <h1>Poema App</h1>
      <PoemForm
        onSubmit={editingPoem ? updatePoem : addPoem}
        initialPoem={editingPoem}
      />
      <div className="poem-list">
        {poems.map((poem) => (
          <PoemCard
            key={poem.id}
            poem={poem}
            onDelete={deletePoem}
            onEdit={editPoem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
