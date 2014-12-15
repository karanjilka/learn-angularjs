var db = require('.././lib/database');
var studentModel = {};

studentModel.listAll = function (page,limit) {
	var output = null;
	db.getConnection(function(err,connection){
		var sql = 'SELECT COUNT(*) AS cnt FROM students;';
		sql += 'SELECT * FROM students LIMIT '+page+','+limit+'';

	    connection.query(sql,function(err,result){
	        if(err)
	        console.log("Error Selecting : %s ",err );

	    	return result;
	    });
    });
};

module.exports = studentModel;