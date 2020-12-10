'use strict';

const express = require('express');

const Dogs = require('../models/dogs');
const dogs = new Dogs();

const router = express.Router();

// Route Declarations
router.get('/dogs', getDogs);
router.get('/dogs/:id', getOneDog);
router.post('/dogs', createDog);
router.put('/dogs/:id', updateDog);
router.delete('/dogs/:id', deleteDog);

// Route Handlers
function getDogs(req, res) {
  let allDogs = dogs.get();
  res.status(200).json(allDogs);
}

function getOneDog(req, res) {
  const id = parseInt(req.params.id);
  let theDog = dogs.get(id)
  res.status(200).json(theDog);
}

function createDog(req, res) {
  console.log(req.body, ' is the req.body');
  let obj = req.body;
  let newDog = dogs.create(obj);
  console.log(newDog);
  res.status(200).json(newDog);
}

function updateDog(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedDog = dogs.update(id, obj)
  res.status(200).json(updatedDog);
}

function deleteDog(req, res) {
  let id = parseInt(req.params.id);
  let deletedDog = dogs.delete(id);
  res.status(200).json(deletedDog);
}


module.exports = router;
