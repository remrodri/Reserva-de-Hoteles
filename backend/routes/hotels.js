var express = require('express');
const { getAll, getById, update, remove, create } = require('../services/hotelService');
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
  const result = await getById(id);
  res.send(result);
});

router.post('/', async function(req,res){
  const {body}=req;
  const result = await create(body);
  res.send(result);
});

router.patch('/:id',async function(req,res){
  const {params,body}=req;
  const {id}=params;
  const result = await update(id,body);
  res.send(result);
});

router.delete("/:id", async function(req,res){
  const{params} = req ;
  const {id} = params;
  const result = await remove(id);
  res.send(result);
});

module.exports = router;