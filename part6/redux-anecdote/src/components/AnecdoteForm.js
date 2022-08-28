import { useDispatch } from "react-redux";
import { newNote } from '../features/reducers/anecdoteReducer';
import { useState } from 'react';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const [content, setContent] = useState(null);

  const newNoteExternal = (event) => {
    event.preventDefault();
    dispatch(newNote(content));
  }


  return (
    <>
      <div>
        <h2>Create new</h2>
        <form onSubmit={newNoteExternal}>
          <div><input name='note' onChange={(e) => setContent(e.target.value)} /></div>
          <button >create</button>
        </form>
      </div>
    </>
  )
}

export default AnecdoteForm;
