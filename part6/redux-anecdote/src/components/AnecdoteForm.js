const AnecdoteForm = ({ newNote }) => {

  return (
    <div>
      <form onSubmit={newNote}>
        <div><input name='note' /></div>
        <button >create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm;
