const { getAllDB, getByIdDB } = require("../repository/hotelRepository")

async function getAll(category){
  let params = {}
  if (category) {
    params = {...params, category}
  }
  const resultFromDB = await getAllDB(params);

  return resultFromDB;
}

async function getHotelById(id){
  const result = await getByIdDB(id);
  return result;
}

module.exports = {
  getAll:getAll,
  getHotelById :getHotelById
}