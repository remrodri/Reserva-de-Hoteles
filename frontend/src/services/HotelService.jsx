import axios from "axios";

async function getAllHotels(params ={}){
  const result = await axios.get("http://localhost:3000/hotels",{params:params});
  return result;
}
async function updateHotelById(id,data){
  const result = await axios.patch(`http://localhost:3000/hotels/${id}`,data);
  return result;
}

export{
  getAllHotels,
  updateHotelById
}