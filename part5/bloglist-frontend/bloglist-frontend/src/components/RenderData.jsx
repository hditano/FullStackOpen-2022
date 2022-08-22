import Togglabel from '../components/Togglabel';

const RenderData = ({data}) => {


  const style = {
    div: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightGrey',
    margin: '20px',
    width: '50%',
    justifyContent: 'left'
    },

  }

  return (
    Object.entries(data).map(ele => {
      return (
      <div style={style.div}>
        <br></br>
        <div style={style.mainTitle}key={ele[1]._id}>Title: {ele[1].title}</div>
        <Togglabel buttonLabel='Show'>
          <p>Author: {ele[1].author}</p>
          <p>URL: {ele[1].url}</p>
          <p>Likes: {ele[1].likes}</p>
        </Togglabel>
        </div>
      )
    })
  )

}

export default RenderData
