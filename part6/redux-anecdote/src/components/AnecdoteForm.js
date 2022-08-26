import { useDispatch } from "react-redux";
import { newNoteDispatch } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const newNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(newNoteDispatch(content));
  }


  return (
    <>
      <div>
        <h2>Create new</h2>
        <form onSubmit={newNote}>
          <div><input name='note' /></div>
          <button >create</button>
        </form>
      </div>
    </>
  )
}

export default AnecdoteForm;
