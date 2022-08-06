const Form = ({handleData, submitCountry, searchCountries, handleCountry}) => {

    return (
        <form onSubmit={submitCountry}>
            find countries: <input value={searchCountries} onChange={handleCountry}/>
            <br></br>
            debug: {searchCountries}
            <br></br>
            <button onClick={handleData}>Submit</button>
        </form>
    )
}

export default Form