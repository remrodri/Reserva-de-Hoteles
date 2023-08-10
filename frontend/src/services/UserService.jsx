import axios from "axios"

const users = [
  {
    name: "Luis Delgado",
    user: "luis02",
    email: "luis@gmail.com",
    role: "ADMIN",
    password: "luis02"
  },
  {
    name: "Fernando Lopez",
    user: "luis03",
    email: "fernando@gmail.com",
    role: "USER",
    password: "luis03"
  },
  {
    name: "Marco Florez",
    user: "marco",
    email: "marco@gmail.com",
    role: "USER",
    password: "marco"
  }
]


function login(user, password) {
  return users.find(
    userInfo => userInfo.user === user && userInfo.password === password
    )
}

async function getAllUsers(){
  const result = await axios.get('http://localhost:3000/users');
  return result;
}

async function login2(user,password){
  const body = {user:user,password:password}
  const result = await axios.post('http://localhost:3000/users/login',body);
  console.log('result::: ', result);
  return result;
  
}


export {
  login,
  getAllUsers,
  login2
}