const {
  createReservationDB,
  getAllReservationsDB,
  updateReservationDB,
  removeReservationDB,
  getReservationByIdDB
} = require("../repository/reservationRepository");

async function createReservation(data) {
  const result = await createReservationDB(data);
  return result;
}

async function getAllReservations() {
  const result = await getAllReservationsDB();
  return result;
}

async function updateReservation(id, data) {
  const result = await updateReservationDB(id, data);
  return result;
}

async function removeReservation(id) {
  const result = await removeReservationDB(id);
  return result;
}

async function getReservationById(id) {
  const result = await getReservationByIdDB(id);
  return result;
}

module.exports = {
  createReservation,
  getAllReservations,
  updateReservation,
  removeReservation,
  getReservationById
}