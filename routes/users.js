var express = require('express');
var router = express.Router();
const { login, signIn, getUserManage, updataUserStatus } = require("../services/usersServices.js");

router.get('/login', async function (req, res, next) {
  const user = req.query;
  const data = await login(user);
  res.send(data);
});

router.get('/userManage', async function (req, res, next) {
  const data = await getUserManage(req.query);
  res.send(data);
});

router.put('/:_id', async function (req, res, next) {
  const _id = req.params._id
  const data = await updataUserStatus(req.body, _id);
  res.send(data);
});

router.post('/signIn', async function (req, res, next) {
  const user = req.body;
  const data = await signIn(user);
  res.send(data);
});

module.exports = router;
