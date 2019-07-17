var express = require('express');
var router = express.Router();
const { login, signIn } = require("../services/usersServices.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/login',async function(req, res, next) {
  const user = req.query;
  const data = await login(user);
  res.send(data);
});

router.post('/signIn', async function(req, res, next) {
  const user = req.body;
  const data = await signIn(user);
  res.send(data);
});

module.exports = router;
