const RenderData = ({DataCountries, searchCountries}) => {


    const search = DataCountries.filter(ele => {
        return ele.name.common.toLowerCase().includes(searchCountries)
    }).map(ele => {
        return (
            <p key={ele.cca3}>{ele.name.common}</p>
        )
    })

    const fullInfoCountry = DataCountries.filter(ele => {
        return ele.name.common.toLowerCase().includes(searchCountries)
    }).map(ele => {
        return (
            <>
                <p key={ele.cca3}>Capital: {ele.capital}</p>
                <p>Area: {ele.area}</p>
                <h3>Languages</h3>
                <ul>
                    {Object.values(ele.languages).map(ele => {
                        return (
                            <li>{ele}</li>
                        )
                    })}
                </ul>
                <img src={ele.flags.png} alt='flag'></img>
            </>
        )
    })

    const filterSearch = () => {
        if(search.length === 1 || (search.length <= 10  && search.length > 1)) {
            return search
        }
        if(search.length > 10) {
            return <p>too many matches</p>
        }
        return null;
    }


    return (
        <>
            {searchCountries ? filterSearch() : ''}
            {search.length === 1 ? fullInfoCountry : ''}
        </>
    )
}

export default RenderData