import {useEffect, useState} from 'react';
import Form from './components/Form';
import RenderData from './components/RenderData';
import loginServices from './services/Login';

function App() {
  
  // const [status, setStatus] = useState(false);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  console.log(user)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginServices.getBlogs();
      setUser(user);
    	
    } catch (error) {
      console.log(error);	
    }
  }

  return (
    <div>
      <Form handleLogin={handleLogin} />
    </div>
  )
}

export default App
