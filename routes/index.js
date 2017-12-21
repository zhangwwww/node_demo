var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/fendo', function (req, res) {  
  res.send('hello,world!');  
});
router.get('/users', function(req, res, next) {
  res.send('这是一个路由测试页面哈哈哈');
});

module.exports = router;
