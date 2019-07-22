var express = require("express");
var services = require("../services/servicesServices.js");
var router = express.Router();

//GET类型：查询获取数据
router.get("/:managerId", async function (req, res, next) {
  const managerId = req.params.managerId;
  const data = await services.getServiceByManagerId(managerId);
  res.send(data);
});
//PUT类型：修改数据
router.put("/", async function (req, res, next) {
  const newService = req.body;
  const data = await services.updateService(newService);
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
  