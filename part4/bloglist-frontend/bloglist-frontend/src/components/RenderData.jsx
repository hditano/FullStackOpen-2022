const RenderData = ({data}) => {

    // console.log(Object.entries(data).map(ele => ele[1]))
 
  console.log(data)
  const render = Object.entries(data).map(ele => <p>{ele[1].title}</p>)

  return (
    <div>
      <p>Blogs saved</p>
      {render}
    </div>
  )

}

export default RenderData;
