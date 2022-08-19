const Form = ({submitCountry, searchCountries, handleCountry}) => {

    return (
        <form onSubmit={submitCountry}>
            find countries: <input value={searchCountries} onChange={handleCountry}/>
            <br></br>
            debug: {searchCountries}

        </form>
    )
}

export default Form