const RenderData = ({data, filterInput, deletePerson}) => {

    return data.filter(ele => {
      return ele.name.toLowerCase().includes(filterInput)
    }).map(ele => {
      return (
        <ul>
          <li>{ele.name} || {ele.number} <button onClick={() => deletePerson(ele.id)} >Delete</button> </li>
        </ul>
      )
    })
    
  
  }

  export default RenderData