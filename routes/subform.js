var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('subform', { title: '提交表单及接收参数示例' });
});

router.post('/',function(req,res){
	var 
  userName = req.body.txtUserName,
  userPwd = req.body.txtUserPwd,
  userName2 = req.param('txtUserName'),
  userPwd2 = req.param('txtUserPwd');

  console.log('req.body用户名:'+userName);
  console.log('req.body密码:'+userPwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);

　res.render('subform', { title: '提交表单及接收参数示例' });
})
module.exports = router;