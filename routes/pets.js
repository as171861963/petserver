var express = require("express");
var router = express.Router();
var petsServices = require("../services/petsServices.js");

router.get("/", async function (req, res, next) {
    const data = await petsServices.getPets(req.query)
    res.send(data)
})

router.post("/", async function (req, res, next) {
    const data = await petsServices.addPet(req.body)
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
    const data = await petsServices.updatePet(req.body)
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
    const data = await petsServices.deletePet(req.query)
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

router.get("/pet", async function (req, res, next) {
    const data = await petsServices.searchPet(req.query)
    res.send(data)
})



module.exports = router