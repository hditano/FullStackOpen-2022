const RenderData = ({data, filterInput}) => {
  
  console.log(data.map(ele => ele))

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

  export default RenderData