var db = require('../models')

//Do we need to wrap this whole thing in a module.exports?///

exports.signUp = function(req, res) {
	// res.render("signup.ejs");
}

exports.register = function(req, res){
	db.User.find({where: {username: req.username}}).success(function (user){
		if(!user) {
			db.User.create({username: req.body.username, password: req.body.password}).error(function(err){
				console.log(err);
			});
		} else {
			res.redirect('/signup')
		}
	})
	res.redirect('/')
};


// exports.signUp = function(req, res) {
// 	res.render("signup.ejs");
// }

// exports.register = function(req, res){
// 	db.User.find({where: {username: req.username}}).success(function (user){
// 		if(!user) {
// 			db.User.create({username: req.body.username, password: req.body.password}).error(function(err){
// 				console.log(err);
// 			});
// 		} else {
// 			res.redirect('/signup')
// 		}
// 	})
// 	res.redirect('/')
// };