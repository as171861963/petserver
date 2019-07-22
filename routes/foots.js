var express = require("express");
var router = express.Router();
var footsServices = require("../services/footsServices.js");

router.get("/", async function (req, res, next) {
    const data = await footsServices.getFoots(req.query)
    res.send(data)
})

router.post("/", async function (req, res, next) {
    const data = await footsServices.addFoot(req.body)
    if (data._id) {
        res.send({
            status: "添加成功"
        });
    } else {
        res.send({
            status: "添加失败"
        });
    }
})

router.put("/", async function (req, res, next) {
    const data = await footsServices.updateFoot(req.body)
    if (data.ok) {
        res.send({
            status: "修改成功"
        });
    } else {
        res.send({
            status: "修改失败"
        });
    }
})

router.delete("/", async function (req, res, next) {
    const data = await footsServices.deleteFoot(req.query)
    if (data.ok) {
        res.send({
            status: "修改成功"
        });
    } else {
        res.send({
            status: "修改失败"
        });
    }
})

router.get("/foot", async function (req, res, next) {
    const data = await footsServices.searchFoot(req.query)
    res.send(data)
})



module.exports = router