import axios from "axios";

async function getAllHotels(params ={}){
  const result = await axios.get("http://localhost:3000/hotels",{params:params});
  return result;
}

export{
  getAllHotels
}