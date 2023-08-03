var express = require('express');
const { getAllReservations, getReservationById, createReservation, updateReservation, removeReservation } = require('../services/reservationService');
var router = express.Router();

router.get('/',async function(req,res,next){
  const result = await getAllReservations();
  res.send(result);
});

router.get('/:id',async function(req,res){
  const {params}=req;
  const {id}=params;
  const result = await getReservationById(id);
  res.send(result);
});

router.post('/',async function (req,res){
  const {body}=req;
  const result = await createReservation(body);
  res.send(result);
});

router.patch('/:id',async function(req,res){
  const{params,body}=req;
  const {id}=params;
  const result = await updateReservation(id,body);
  res.send(result);
});

router.delete('/:id',async function(req,res){
  const {params} = req;
  const { id }= params ;
  const result = await removeReservation(id);
  res.send(result);
});

module.exports  =   router;