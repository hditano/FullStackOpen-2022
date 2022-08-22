import Togglabel from '../components/Togglabel';

const RenderData = ({data}) => {

  const handleClick = (e) => {
    console.log('clicked');
  }

  const render = Object.entries(data).map(ele =><Togglabel buttonLabel='Show'> <div> <p key={ele[1]._id}>Title:{ele[1].title} - Author: {ele[1].author}</p> </div></Togglabel> )

  return (
    <div>
      <h2>Blogs saved</h2>
        {render}
    </div>
  )

}

export default RenderData;
