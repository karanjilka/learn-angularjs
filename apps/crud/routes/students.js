var express = require('express');
var router = express.Router();

/* GET students listing. */
router.get('/', function(req, res) {

	var page = (req.query.page)?req.query.page:0;
	var limit = (req.query.limit)?req.query.limit:10;

	//var pagination = require('.././lib/pagination');
	//var result = pagination.get({page:2, links:5, rows: 5, total: 50});
	var studentModel = require('.././models/studentModel');
	studentModel.listAll(function(page,limit){
		res.send(result);
	});
    //res.render('students/index',{title: 'Studnets',total:result[0],rows:result[1]});
});

/* GET students listing. */
router.get('/add', function(req, res) {
  res.render('students/add', { title: 'Create New Studnets'});
});

/* Save add post */
router.post('/add', function(req, res) {

});

/* Save add post */
router.get('/edit/:id', function(req, res) {
  res.render('students/edit', { title: 'Edit Studnets'});
});

/* Save add post */
router.post('/edit/:id', function(req, res) {

});

/* Save add post */
router.post('/delete/:id', function(req, res) {

});


module.exports = router;
