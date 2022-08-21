import {useEffect} from "react";

const Form = ({handleLogin, username, password}) => {

//  const [logged, setLogged] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    onStatusChange(prevState => !prevState);
  }

  return(
    <>
    <form onSubmit={handleLogin}>
      <p>Login</p>
      <input type='text' name="username_login" value={username} onChange={username}/>
      <label>UserName</label>
      <br></br>
      <input type='text' name='password_login' value={password} onChange={password}/>
      <label> Password</label>
      <br></br>
      <button type="submit">Login</button>
    </form>
    </>
  )
}


export default Form;
