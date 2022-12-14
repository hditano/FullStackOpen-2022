import { useEffect, useState } from 'react';
import loginServices from './services/Login';
import RenderData from './components/RenderData';
import CreateForm from './components/CreateForm';
import Notifications from './components/Notifications';
import Togglabel from './components/Togglabel';
import { setNotificationSuccess, setNotificationError, setNotificationRemove } from './features/notification/notificationSlice';
import { setBlog, setRemove } from './features/notification/blogSlice';
import { setUser, removeUser } from './features/notification/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import { UserDetails } from './components/UserDetails';


function App() {


  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);
  const blog = useSelector(state => state.blogs);
  const user = useSelector(state => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [update, setUpdate] = useState(null);


  useEffect(() => {
    loginServices.getBlogs().then((response) => dispatch(setBlog(response)));
  }, [update])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('username')
    if (loggedUser) {
      const response = JSON.parse(loggedUser)
      dispatch(setUser(response));
      dispatch(setNotificationSuccess(`Welcome ${response.username}`, 'success'))
      loginServices.setToken(response.token)
    }
  }, [])



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginServices.userLogin({ username, password });
      window.localStorage.setItem('username', JSON.stringify(response.data));
      console.log(response)
      dispatch(setUser(response));
      dispatch(setNotificationSuccess(`Welcome ${response.data.username}`, 'success'))
      loginServices.setToken(response.data);
    } catch (error) {
      dispatch(setNotificationError('Username or password invalid', 'error'));
    }
  }

  const logoutLogin = (e) => {
    e.preventDefault();
    loginServices.logOut();
    dispatch(removeUser(''));
    setUsername('');
    setPassword('');
    dispatch(setNotificationRemove());
  }

  const handleData = (data) => {
    dispatch(setBlog(data));
    console.log(data)
    loginServices.createBlog(data);
    dispatch(setNotificationSuccess(`Blog ${data.title} by ${data.author}`, 'success'))
    setUpdate(Math.floor(Math.random() * 100));
  }

  const handleLikes = async (id, likes) => {
    await loginServices.updateBlog({
      id: id,
      likes: likes + 1,
    });
    dispatch(setRemove());
    setUpdate(Math.floor(Math.random() * 100));
  }

  const handleRemove = async (id) => {
    const data = await JSON.parse(window.localStorage.getItem('username'));
    loginServices.setToken(data)
    await loginServices.removeBlog({
      id: id,
    })
    dispatch(setRemove());
    setUpdate(Math.floor(Math.random() * 100));
  }

  const getUsers = async () => {
    const response = await loginServices.getAllUsers();
    const result = response.map(ele => ele.username);
    console.log(result);
  }

  return (
    <div>
      <div>
        <Notifications message={notification} />
        {<button name='logout_bt' onClick={logoutLogin} >Logout</button>}
        {!user &&
          <form onSubmit={handleLogin}>
            <p>Login</p>
            <button onClick={() => getUsers()}>GetUsers</button>
            <input id="loginUsername" type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} />
            <label>Username</label>
            <input id="loginPassword" type='text' name='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            <label>Password</label>
            <br></br>
            <button id="loginButton" type='submit'>Submit</button>
          </form>}
      </div>
      <div>
        {user && Object.entries(blog).map(ele => <RenderData handleRemove={handleRemove} handleLikes={handleLikes} data={ele} />)}
        <Togglabel buttonLabel='Create'>
          {user && <CreateForm handleBlog={handleData} />}
        </Togglabel>
      </div>
      <Routes>
        <Route path='/users' element={<AllUsers />}/>
        <Route path='/users/:id' element={<UserDetails />} />
      </Routes>
    </div>
  )
}



export default App
