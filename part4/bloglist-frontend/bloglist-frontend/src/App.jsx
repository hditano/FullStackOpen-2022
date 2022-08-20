import {useEffect, useState} from 'react';
import loginServices from './services/Login';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  console.log(user)
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginServices.userLogin({username, password});
      setUser(response);
    } catch (error) {
      console.log(error);	
    }
  }

  return (
    <div>
      <div>
	{user ? `User: ${username} is logged in ` :
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
    </div>
  )
}

export default App
