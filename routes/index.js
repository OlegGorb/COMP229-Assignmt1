/* Assignment 1 - Oleg Gorbunov - 301093263 - 10.10.2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
