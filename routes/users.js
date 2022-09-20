const express = require("express");
const usersControllers = require("../controller/users");
const router = express.Router();
// routes with user
router.get('/', usersControllers.getAllUsers)
router.post('/', usersControllers.createNewUsers)
router.post('/signin', usersControllers.signin)


module.exports = router;
