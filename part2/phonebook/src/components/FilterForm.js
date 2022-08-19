const FilterForm = ({valueFilter, changeFilter}) => {
    return (
        <>
            Filter shown with : <input value={valueFilter} onChange={changeFilter}/>
        </>
    )
}

export default FilterForm