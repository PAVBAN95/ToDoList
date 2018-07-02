
const mongoose = require('mongoose'),
	User = mongoose.model('UserDetails');


exports.registerUser = (req ,res) =>{
  let username = req.body._id;
  console.log(username);

  req.body._id = new ObjectId(username);
  console.log(req.body);

  var user = new User(req.body);
  user.save((err, u)=>{
      if(err){
        console.log(err);
        res.json({
          isError : true,
          message : "Oops...Some error occured while regitering"
        })
      }
      else{
        res.json({
          isError : false,
          message : "Voila! You are successfully registered!"
        });
      }
  })
}

exports.authenticateUser = (req,res)=>{
  User.findOne({username: req.body.username}, (err, user)=>{
    if(err){
      res.send(err)
      return;
    }
    if(user){
      if(user.password === req.body.password){
        console.log("Authenticate User");
        console.log(user)
        res.json({
          isValid : true,
          name : user.name,
          message : "Voila! You are successfully logged in!"
        });
      }
      else{
        console.log("Malicious User");
        res.json({
          isValid : false,
          message : "Incorrect Password"
        })
      }
    }
    else{
      res.json({
        isValid : false,
        message : "No user with this username exists!"
      })
    }
  });
}


// exports.showAllTasks = (req, res)=>{

// 	User.find({username :  "pavban95"}, (err, Users)=>{
// 		if(err)
// 			res.json(err)
// 		else{
// 			res.json(Users);
// 		}
// 	})
// }

// exports.addTask = (req, res)=>{

// 	let User = new User(req.body);

// 	User.save( (err,User)=>{
// 		if(err){
// 			console.log("Somethings went wrong!")
// 			res.json(err)
// 		}
// 		else{
// 			res.json({
// 				message : User.title + " added successfully "
// 			})
// 		}
// 	})
// }	

// exports.updateTask = (req, res)=>{
// 	let status = User.findOneAndUpdate(
// 		{ id   : req.params.id},
// 		{ $set : { content : "Revised Content 2 !"} },
// 		{ upsert : true},
// 		(err) => {
// 			if(err)
// 				res.json(err)
// 			else
// 				res.json({
// 					message : "User Successfully Updated"
// 				})
// 		}
// 	)
// }

// exports.deleteTask = (req, res)=>{

// 	User.remove({id : req.params.id},
// 		(err)=>{
// 			if(err){
// 				res.json(err)
// 			}
// 			else{
// 				res.json({
// 					message : "User Removed"
// 				});
// 			}
// 		}
// 	)
// }	

exports.onError = (req, res) =>{
  res.json({
    error : "Invalid HTTP method"
  })
}


// 	