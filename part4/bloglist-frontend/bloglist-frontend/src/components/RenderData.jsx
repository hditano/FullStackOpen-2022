const RenderData = ({data}) => {

    // console.log(Object.entries(data).map(ele => ele[1]))
 
  console.log(data)
  const render = Object.entries(data).map(ele => <p>Title:{ele[1].title} - Author: {ele[1].author}</p>)

  return (
    <div>
      <h2>Blogs saved</h2>
      {render}
    </div>
  )

}

export default RenderData;
