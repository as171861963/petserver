var express = require('express');
var router = express.Router();
const { addShop, deleteShop, updateById ,getShopsByManagerId, getUnhandledShop} = require("../services/shopsServices.js");

const { uploadFile } = require("../utils/upload");

/* GET users listing. */
router.post('/fileupload', async function (req, res, next) {
    const { data } = await uploadFile(req, res, {
        fileType:"imgs",
        path: "./public"
    });
    res.send(data);
});

//查找

router.get('/status/unhandled', async function (req, res, next) {
    const data = await getUnhandledShop();
    res.send(data);
});


router.get('/:managerId', async function (req, res, next) {
    const managerId = req.params.managerId;
    const data = await getShopsByManagerId({ managerId });
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
    const newAttr = req.body;
    const data = await updateById({ _id,newAttr });
    res.send(data);
});
//删除
router.delete('/:_id', async function (req, res, next) {
    const _id = req.params._id;
    const data = await deleteShop({ _id });
    res.send(data);
});


module.exports = router;