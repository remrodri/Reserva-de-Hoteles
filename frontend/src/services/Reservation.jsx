import axios from "axios";

async function getAllReservations(params = {}){
  const result = await axios.get('http://localhost:3000/reservations',{
    params:params
  });
  return result;
}
async function createReservation(body){
  console.log(body,' body');
  const result = await axios.post('http://localhost:3000/reservations',body);
}
async function removeReservation(id){
  const result = await axios.delete('http://localhost:3000/reservations/'+id)
  return result;
}

async function updateReservation(id,data){
  const result = await axios.patch('http://localhost:3000/reservations/'+id,data)
  return result;
}

export{
  getAllReservations,
  createReservation,
  removeReservation,
  updateReservation
}