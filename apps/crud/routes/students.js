var express = require('express');
var router = express.Router();

/* GET students listing. */
router.get('/', function(req, res) {
	req.getConnection(function(err,connection){
	    connection.query('SELECT * FROM students',function(err,rows){
	        if(err)
	        console.log("Error Selecting : %s ",err );

	        res.render('students/index',{title: 'Studnets',data:rows});
	    });
    });
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
