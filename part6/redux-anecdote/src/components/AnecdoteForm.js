import { useDispatch } from "react-redux";
import { newNote } from '../features/reducers/anecdoteReducer';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const newNoteExternal = (event) => {
    event.preventDefault();
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(newNote(content));
  }


  return (
    <>
      <div>
        <h2>Create new</h2>
        <form onSubmit={newNoteExternal}>
          <div><input name='note' /></div>
          <button >create</button>
        </form>
      </div>
    </>
  )
}

export default AnecdoteForm;
