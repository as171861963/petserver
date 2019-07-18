var express =require("express");
var router = express.Router();

const {apply}= require("../services/applyServices.js");

/* GET users listing. */

  router.get('/applyShop',async function(req, res, next) {
    const user = req.query;
    const data = await apply(shop);
    res.send(data);
  });
  
  module.exports = router;