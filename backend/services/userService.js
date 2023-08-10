const { getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, removeUserDB, getUserByParamsDB } = require("../repository/userRepository");
const { use } = require("../routes/hotels");


async function getAllUsers() {
  const resultFromDB = await getAllUsersDB();
  return resultFromDB;
}

async function getUserById(id) {
  const result = await getUserByIdDB();
  return result
}

async function createUser(data) {
  const result = await createUserDB(data);
  return result;
}

async function updateUser(id, data) {
  const result = await updateUserDB(id, data);
  return result;
}

async function removeUser(id) {
  const result = await removeUserDB(id);
  return result;
}

async function getUserByParams(params) {
  const { user, password } = params;
  const result = await getUserByParamsDB(user, password);
  return result;
}

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser,
  getUserByParams: getUserByParams
}