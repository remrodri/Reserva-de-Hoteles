var express = require('express');
const { getAll, getHotelById } = require('../services/hotelService');
var router = express.Router();

router.get('/', async function (req, res, next) {
  console.log(req.query);
  const { category } = req.query;
  const result = await getAll(category);
  res.send(result);
});

router.get("/:id", async function (req, res) {
  const { params } = req;
  const { id } = params;
  const result = await getHotelById(id);
  res.send(result);
});

module.exports = router;