const express = require("express");
const tradeControllers = require("../controller/trade");
const router = express.Router();


// routes with trade
router.get('/', tradeControllers.getAllTrade)
router.post('/', tradeControllers.createNewTrade)

module.exports = router;
