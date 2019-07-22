const expressJwt = require("express-jwt");
const { secretKey } = require("./salt.js")


const jwtAuth = expressJwt({
    secret: secretKey,
    credentialsRequired: true // false：不校验
  }).unless({
    path: ["/users/login", "/users/signIn","/shops/fileupload"]
  });
  
  module.exports = jwtAuth;