import Togglabel from '../components/Togglabel';
import AllUsers from './AllUsers';
import PropTypes from 'prop-types';

const RenderData = ({ data, handleLikes, handleRemove }) => {


  const style = {
    div: {
      display: 'flex',
      backgroundColor: '#fbf6ef',
      flexDirection: 'column',
      justifyContent: 'center',
      width: "50%",
      textAlign: 'center'
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '5em',
      height: '2em',
      margin: 'auto',
      backgroundColor: '#bfbcbb'
    }

  }
  

  return (
    <div>
      {Object.values(data[1]).map((ele) => {
        return (
          <>
          <h5 id='title'>Title: {ele.title}</h5>
          <Togglabel buttonLabel='show'>
            <div style={style.div} key={ele.id}>
              <h3 id="title">Title: {ele.title}</h3>
              <p id="author">Author: {ele.author}</p>
              <p id="url">URL: {ele.url}</p>
              <p id="likes">Likes: {ele.likes}</p>
              <button id="like-button" style={style.button} onClick={() => handleLikes(ele._id, ele.likes)}>Like</button>
              <button id="remove-button" style={style.button} onClick={() => handleRemove(ele._id)}>Remove</button>
            </div>
          </Togglabel>
          </>
        )
      })}
      <AllUsers />
    </div>
  )
}


export default RenderData

RenderData.propTypes = {
  handleLikes: PropTypes.func,
  data: PropTypes.array.isRequired,
  hnadleRemove: PropTypes.func
}
