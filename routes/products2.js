const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({name: "product1", price: 100});
});

module.exports = router;