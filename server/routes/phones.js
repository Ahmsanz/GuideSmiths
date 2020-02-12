const express = require('express');

const router = express.Router();

const phones = require('../phones.json');



router.get('/all', (req,res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(phones);
});


module.exports = router;
