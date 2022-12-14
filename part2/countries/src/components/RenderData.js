const RenderData = ({weather, showInfo, DataCountries, handleInfo, searchCountries}) => {


    const search = DataCountries.filter(ele => {
        return ele.name.common.toLowerCase().includes(searchCountries)
    }).map(ele => {
        return (
            <>
                <h2 key={ele.cca3}>{ele.name.common}</h2>
                <button onClick={handleInfo}>show full info</button>
            </>
        )
    })

  
    const fullInfoCountry = ( )=> DataCountries.filter(ele => {
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

                <h3>Weather in: {ele.capital}</h3>
                <h4>Temperature: {Object.values(weather).map(ele => ele.temp)}</h4>
                <img src="" alt="weather img"/>
                <h4>Wind: {Object.values(weather).map(ele => ele.speed)} m/s</h4>
                {}
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
            
            {showInfo && (search.length === 1 && fullInfoCountry())}

        </>
    )
}

export default RenderData