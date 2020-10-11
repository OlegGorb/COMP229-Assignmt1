/* Assignment 1 - Oleg Gorbunov - 301093263 - 10.10.2020 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
