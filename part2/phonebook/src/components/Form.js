const FilterForm = ({addNote, valueName, valueNumber, changeNumber, changeName}) => {
    return (
        <form onSubmit={addNote}>
            <div>
                <h2>Add a new</h2>
                name: <input value={valueName} onChange={changeName} />
                <br></br>
                number: <input value={valueNumber} onChange={changeNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default FilterForm;