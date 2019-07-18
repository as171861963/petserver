var express = require('express');
var router = express.Router();
const {  getEvaluates, addEvaluate, deleteEvaluate  } = require("../services/evaluateServices")

/* GET home page. */
router.get('/', async function(req, res, next) {
    const date = await getEvaluates();
    res.send(date);
  });

router.post('/', async function(req, res, next) {
    const evaluate = req.body;
    const date = await addEvaluate(evaluate);
    res.send(date);
  });

router.delete('/:_id', async function(req, res, next) {
    const _id = req.params._id;
    const date = await deleteEvaluate(_id);
    res.send(date);
  });
  
  module.exports = router;
  