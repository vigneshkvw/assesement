'use strict';
var sha1 = require('sha1');
var mongoose = require('mongoose'),
    users = mongoose.model('users');

exports.add_user = function (req, res) {    
      
            var doc = new users({ name: req.body.name, password: sha1(req.body.password), real_password: req.body.password, email: req.body.email,  });
    doc.save(function (err, admin) {
        if (err) {
            res.send(err);
        } else {
            res.json({result:"success"});
        }
    });
};

exports.login = function (req, res) {
    users.findOne({ email: req.body.email, password: sha1(req.body.password) }, function (err, admin) {
        if (err) {
            res.send(err);
        } else {
            if (admin == null) {
                res.status(400);
                res.json({result:"Invalid"});
            } else {               
                    res.json({ result: "success"});
            }

        }

    });
};

exports.list_user = function (req, res) {
   
            users.find(function (err, task) {
                if (err){
                    res.send(err);
                }else{
                    var list=[]
                    for(let i=0;i<task.length;i++){
                        list.push({ _id: task[i]._id, name: task[i].name, email: task[i].email,status:task[i].status})
                    }
                }
                    res.json({result:"success",data:list})
              
            });
     
};
