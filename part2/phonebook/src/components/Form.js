const FilterForm = ({newName, newNumber, submitNote, handleChangeName, handleChangeNumber}) => {
    return (
        <form onSubmit={submitNote}>
            <div>
                <h2>Add a new</h2>
                name: <input value={newName} onChange={handleChangeName}/>
                <br></br>
                number: <input value={newNumber} onChange={handleChangeNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default FilterForm;