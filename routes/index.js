var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendfile("views/index.html");
//  res.render('index', { title: 'Express' });
});

router.get('/rest', function(req, res, next) {
        res.send("VERSION 2");
//  res.render('index', { title: 'Express' });
});

module.exports = router;
