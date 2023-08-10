import '../assets/styles/main.css';
import { useState } from "react";
import { login,getAllUsers,login2 } from "../services/UserService";

function LoginUser(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { setIsAuth } = props;

  const cleanState = () => {
    setUser("");
    setPassword("");
  }


  const onLogin= async() => {
    const userInfo = (await login2(user, password)).data;
    console.log(userInfo);
    console.log(JSON.stringify(userInfo));
    if (userInfo) {
      setIsAuth(true);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      alert("Usuario o contraseña incorrectos");
      cleanState();
    }
  }

  return (

    <div className='loginContainer'>
      <div className='cardLogin'>
        <div>
          <h1>
            WELCOME TO HOTEL RESERVATIONS
          </h1>
        </div>
        <input
          type="text"
          value={user}
          placeholder='User'
          onChange={(event) => setUser(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(event) => { setPassword(event.target.value) }}
        />
        <button onClick={onLogin}>LOGIN</button>
      </div>
    </div>
  )
}

export default LoginUser;