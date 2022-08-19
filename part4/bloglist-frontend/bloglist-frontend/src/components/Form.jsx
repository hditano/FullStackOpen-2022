import {useEffect} from "react";

const Form = ({onStatusChange, status}) => {

//  const [logged, setLogged] = useState('');

  useEffect(() => {
//    setLogged(onStatusChange)
  },[onStatusChange])

  const handleClick = (e) => {
    e.preventDefault();
    onStatusChange(prevState => !prevState);
  }

  return(
    <>
      <input type='text' name="username_login" />
      <label>{status ? ' Login' : ' Logout'}</label>
      <br></br>
      <input type='text' name='password_login'/>
      <label> Password</label>
      <br></br>
      <button onClick={handleClick}>Login</button>
    </>
  )
}


export default Form;
