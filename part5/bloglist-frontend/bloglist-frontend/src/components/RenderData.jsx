import {useState} from 'react';
import Togglabel from '../components/Togglabel';
import loginServices from '../services/Login';

const RenderData = ({data, handleLikes}) => {


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
      <h5>Title: {data[1].title}</h5> 
      <Togglabel buttonLabel='show'>
        <div style={style.div}>
          <p>Author: {data[1].author}</p>
          <p>URL: {data[1].url}</p>
          <p>Likes: {data[1].likes}</p>
          <button style={style.button} onClick={() => handleLikes(data[1]._id, data[1].likes)}>Like</button>
          <button style={style.button} >Remove</button>
        </div>
      </Togglabel>
    </div>
  )

}

export default RenderData
