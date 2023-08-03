const { getAllDB, getByIdDB, createDB, updateDB, removeDB } = require("../repository/hotelRepository")

async function getAll(category) {
  let params = {}
  if (category) {
    params = { ...params, category }
  }
  const resultFromDB = await getAllDB(params);

  return resultFromDB;
}

async function getById(id) {
  const result = await getByIdDB(id);
  return result;
}

async function create(data) {
  const result = await createDB(data);
  return result;
}

async function update(id, data) {
  const result = await updateDB(id, data);
  return result;
}

async function remove(id) {
  const result = await removeDB(id);
  return result;
}

module.exports = {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  remove: remove
}