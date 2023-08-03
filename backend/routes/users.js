var express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, removeUser } = require('../services/userService');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result = await getAllUsers();
  res.send(result);
});

router.get('/:id', async function(req,res){
  const {params}=req;
  const {id}=params;
  const result = await getUserById(id);
  res.send(result);
});

router.post('/',async function(req,res){
  const{body}=req;
  const result = await createUser(body);
  res.send(result);
});

router.patch('/:id',async function(req,res){
  const {params,body}=req;
  const{id}=params;
  const result = await updateUser(id,body);
  res.send(result);
});

router.delete('/:id',async function(req,res){
  const {params} = req;
  const {id}=params;
  const result = await removeUser(id);
  res.send(result);
});


module.exports = router;
