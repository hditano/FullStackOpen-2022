import {useEffect} from "react";

const Form = ({handleLogin}) => {

//  const [logged, setLogged] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    onStatusChange(prevState => !prevState);
  }

  return(
    <>
    <form onSubmit={handleLogin}>
      <p>Login</p>
      <input type='text' name="username_login" />
      <label>UserName</label>
      <br></br>
      <input type='text' name='password_login'/>
      <label> Password</label>
      <br></br>
      <button type="submit">Login</button>
    </form>
    </>
  )
}


export default Form;
