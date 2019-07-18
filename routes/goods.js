var express = require('express');
var router = express.Router();
const { getGoods, addGoods, deleteById, updateByAttr } = require("../services/goodsServices.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const data = await getGoods();
    res.send(data);
});

router.post('/', async function(req, res, next) {
  const goods = req.body;
  console.log(goods);
  
  const data = await addGoods(goods);
  res.send(data);
});

router.delete('/:_id', async function(req, res, next) {
    const _id = req.params._id;
    const data = await deleteById(_id);
    res.send(data);
});

router.put('/:_id', async function(req, res, next) {
    const _id = req.params._id;
    const attr = req.body.attr;
    const newValue = req.body.newValue;
    console.log(_id,attr,newValue);
    
    const data = await updateByAttr({_id, attr, newValue});
    res.send(data);
});

module.exports = router;