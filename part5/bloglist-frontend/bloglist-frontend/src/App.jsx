import {useEffect, useState} from 'react';
import loginServices from './services/Login';
import RenderData  from './components/RenderData';
import CreateForm from './components/CreateForm';
import Notifications from './components/Notifications';
import Togglabel from './components/Togglabel';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);


  useEffect(() => {
    const getBlog = async () => {
      const response = await loginServices.getBlogs();
      setBlog(response);
    };
    getBlog();
  },[blog])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('username')
    if(loggedUser) {
      const response = JSON.parse(loggedUser)
      setUser(response);
      setBlog(response);
      setNotification({
	message: `Welcome ${response.username}`,
	type: 'sucess'
      })
      loginServices.setToken(response.token)
    }
  },[])

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginServices.userLogin({username, password});
      window.localStorage.setItem('username',JSON.stringify(response.data));
      setUser(response);
      setNotification({
	message: `Welcome ${username}`,
	type: 'sucess'
      });
      loginServices.setToken(response.data);
    } catch (error) {
      console.log(user);
      setNotification({
	message: 'Username or Password invalid',
	type: 'error'
      })
    }
  }

  const logoutLogin = (e) => {
    e.preventDefault();
    loginServices.logOut();
    setUser(null);
    setUsername('');
    setPassword('');
    setNotification(null);
  }

  const handleData = (data) => {
    setBlog(data);
    loginServices.createBlog(data);
    setNotification({
      message: `Blog ${data.title} by ${data.author}`,
      type: 'sucess'
    })
  }

  return (
    <div>
      <div>
	<Notifications message={notification}/>
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
      <Togglabel buttonLabel='Create'>
	{user && <CreateForm handleBlog={handleData}/>}
      </Togglabel>
      </div>
    </div>
  )
}



export default App
