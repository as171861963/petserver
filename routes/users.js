var express = require('express');
var router = express.Router();
const { login, signIn } = require("../services/usersServices.js");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils/salt");

router.get('/login',async function(req, res, next) {
  const { username, password } = req.query;
  const data = await login({username, password});
  if (data.length > 0) {
    const payload = { username };
    let token = jwt.sign(
      payload,
      secretKey,
      {
        expiresIn: 60 * 60 // 秒
      }
    );
    res.send({
      success: true,
      message: 'success',
      token,
      username: data[0].username,
      _id: data[0]._id,
      identity:data[0].identity
    });
  } else {
    res.send({
      success: false,
      message: `fail`
    })
  }
});

router.post('/signIn', async function(req, res, next) {
  const user = req.body;
  const data = await signIn(user);
  res.send(data);
});

module.exports = router;
