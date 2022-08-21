import {useEffect, useState} from 'react';
import loginServices from './services/Login';
import RenderData  from './components/RenderData';
import CreateForm from './components/CreateForm';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getBlog = async () => {
      const response = await loginServices.getBlogs();
      setBlog(response);
    };
    getBlog();
  },[])

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginServices.userLogin({username, password});
      window.localStorage.setItem('username',JSON.stringify(response.data));
      setUser(response);
      setNotification(prevState => !prevState);
      setMessage('logged');
      loginServices.setToken(response.data);
    } catch (error) {
      console.log(error);	
    }
  }

  const logoutLogin = (e) => {
    e.preventDefault();
    loginServices.logOut();
    setUser(null);
    setUsername('');
    setPassword('');
  }

  const handleData = (data) => {
    setBlog(data);
    console.log(blog);
    loginServices.createBlog(data);
  }

  const styles = {
    backgroundColor: 'lightGray',
    display: 'flex',
    width: '50%',
    height: '80px',
    borderRadius: '5px',
    border: '2px solid green',
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center'  
  }


  return (
    <div>
      <div>
	<h1 style={notification ? {...styles, backgroundColor: 'red'} : styles}>Test</h1>
	{user && `${username} is logged in    `}
	{user && <button name='logout_bt' onClick={logoutLogin} >Logout</button>}
	{!user && 
	<form onSubmit={handleLogin}>
	  <p>Login</p>
	  <input type='text' name='username' value={username} onChange={({target}) => setUsername(target.value)} />
	  <label>Username</label>
	  <input type='text' name='password' value={password} onChange={({target}) => setPassword(target.value)} />
	  <label>Password</label>
	  <br></br>
	  <button type='submit'>Submit</button>
	</form>}
     </div>
      <div>
	{user && <RenderData data={blog} /> }
	{user && <CreateForm handleBlog={handleData}/>}
      </div>
    </div>
  )
}



export default App
