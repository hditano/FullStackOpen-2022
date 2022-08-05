const Filter = ({data, filterInput}) => {
  
    return data.filter(ele => {
      return ele.name.toLowerCase().includes(filterInput)
    }).map(ele => {
      return (
        <>
          <p>{ele.name} || {ele.number}</p>
        </>
      )
    })
    
    
  
  }

  export default Filter