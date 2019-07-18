var express = require('express');
var router = express.Router();
const { addShop, deleteShop, getShops, updateById } = require("../services/shopsServices.js");

//查找
router.get('/', async function (req, res, next) {
    const curPage = ~~req.query.curPage;
    const eachPage = ~~req.query.eachPage;
    const data = await getShops({ curPage, eachPage });
    res.send(data);

});
//新增
router.post('/', async function (req, res, next) {
    const shops = req.body;
    const data = await addShop({ shops });
    res.send(data);
});
//修改
router.put('/:_id', async function (req, res, next) {
    const _id = req.params._id;
    const attr = req.body.attr;
    const v = req.body.v;
    const data = await updateById({ _id, attr, v });
    res.send(data);
});
//删除
router.delete('/:_id', async function (req, res, next) {
    const _id = req.params._id;
    const data = await deleteShop({ _id });
    res.send(data);
});


module.exports = router;