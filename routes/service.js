var express = require("express");
var mongoose = require("mongoose");
var services = require("../services/services.js")
var router = express.Router();

//GET类型：查询获取数据
router.get("/", async function (req, res, next) {
    const data = await services.getService();
    res.send(data);
  });
  //PUT类型：修改数据
  router.put("/:_id", async function (req, res, next) {
    const _id = req.params._id;
    const service = req.body;
    const data = await services.updateService({ _id }, service);
    res.send(data)
    
  })
  //DELETE类型：删除数据
  router.delete("/:_id", async function (req, res) {
    const _id = req.params._id;
    const data = await services.deleteService({ _id });
    res.send(data);
  })
  //POST类型：新增数据
  router.post("/", async function (req, res) {
    let addService = req.body;
    const data = await services.addService(addService);
    res.send(data);
  })
  module.exports = router;
  