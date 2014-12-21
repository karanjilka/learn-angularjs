var db = require('.././lib/database');
var studentModel = {};

studentModel.listAll = function (page,limit,callback) {
	db.getConnection(function(err,connection){

		var sql = 'SELECT COUNT(*) AS cnt FROM students';
	    connection.query(sql,function(err,data){

	    	var result = {};
	    	result['total']=data[0].cnt;
	    	var sql = 'SELECT * FROM students LIMIT '+page+','+limit+'';
			connection.query(sql,function(err,data){
				if(err){
					connection.release();
	        		callback(err,null);
		        }else{
		        	connection.release();
		        	result['rows']=data;
		        	callback(null,result);
		        }
			});
	    });
    });
};

module.exports = studentModel;