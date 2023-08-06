import '../assets/styles/main.css';
import { useState } from "react";
import { login } from "../services/UserService";

function LoginUser(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { setIsAuth } = props;

  const cleanState = () => {
    setUser("");
    setPassword("");
  }

  const onLogin = () => {
    const userInfo = login(user, password);
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
            Welcome to HOTEL RESERVATIONS
          </h1>
        </div>
        <input
          type="text"
          value={user}
          placeholder='Usuario'
          onChange={(event) => setUser(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(event) => { setPassword(event.target.value) }}
        />
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginUser;