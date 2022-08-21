const RenderData = ({data}) => {

    // console.log(Object.entries(data).map(ele => ele[1]._id))
 
  const render = Object.entries(data).map(ele => <p key={ele[1]._id}>Title:{ele[1].title} - Author: {ele[1].author}</p>)

  return (
    <div>
      <h2>Blogs saved</h2>
      {render}
    </div>
  )

}

export default RenderData;
