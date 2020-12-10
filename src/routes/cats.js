'use strict';

const express = require('express');

const Cats = require('../models/cats');
const cats = new Cats();

const router = express.Router();

// Route Declarations
router.get('/cats', getCats);
router.get('/cats/:id', getOneCat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.delete('/cats/:id', deleteCat);

// Route Handlers
function getCats(req, res) {
  let allCats = cats.get();
  res.status(200).json(allCats);
}

function getOneCat(req, res) {
  const id = parseInt(req.params.id);
  let theCat = cats.get(id)
  res.status(200).json(theCat);
}

function createCat(req, res) {
  // console.log(req.body, ' is the req.body');
  let obj = req.body;
  let newCat = cats.create(obj);
  // console.log(newCat);
  res.status(200).json(newCat);
}

function updateCat(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedCat = cats.update(id, obj)
  res.status(200).json(updatedCat);
}

function deleteCat(req, res) {
  let id = parseInt(req.params.id);
  let deletedCat = cats.delete(id);
  res.status(200).json(deletedCat);
}


module.exports = router;
