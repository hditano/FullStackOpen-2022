import {useEffect, useState} from 'react';
import loginServices from './services/Login';
import RenderData  from './components/RenderData';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);


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


  return (
    <div>
      <div>
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
    </div>
     </div>
  )
}



export default App
