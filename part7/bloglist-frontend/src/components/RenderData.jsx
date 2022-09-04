import Togglabel from '../components/Togglabel';
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
    <div >
      {console.log(data)}
      <h5 id="title">Title: {data[1].title}</h5>
      <Togglabel buttonLabel='show'>
        <div style={style.div}>
          <h3 id="title">Title: {data[1].title}</h3>
          <p id="author">Author: {data[1].author}</p>
          <p id="url">URL: {data[1].url}</p>
          <p id="likes">Likes: {data[1].likes}</p>
          <button id="like-button" style={style.button} onClick={() => handleLikes(data[1]._id, data[1].likes)}>Like</button>
          <button id="remove-button" style={style.button} onClick={() => handleRemove(data[1]._id)}>Remove</button>
        </div>
      </Togglabel>
    </div>
  )

}

export default RenderData

RenderData.propTypes = {
  handleLikes: PropTypes.func,
  data: PropTypes.array.isRequired,
  hnadleRemove: PropTypes.func
}
