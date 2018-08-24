import mongoose from 'mongoose';
import { Router } from 'express';
import users from '../models/usersModel';
import comments from '../models/commentsModel';


exports.list_all_comments = (req,res)=>{
 comments.find().populate('comments').exec((err,emps)=>{
        if (err) res.send(err);
        res.json(emps);
    })
  };
  exports.create_a_comments = (req,res)=>{
 
    let newComment = new comments();
    console.log(req.body);
    newComment.list_comment = req.body.list_comment;
    newComment.status = req.body.status;
    let newUser = new users();
    if(req.body.users)
    {
        newUser = req.body.name_user;
        newUser = req.body.avatar;
        newUser = req.bpdy.token;
    }
    newUser.comments = newComment._id;
    newComment.users = newUser._id;
   comments.findOne(
        {
            list_comment: req.body.list_comment,
            status: req.body.status
        },
        ),(err,emp)=>{
        if(err) res.send(err);
        if(emp)
        {
            res.send(" comments was exist")
        }
        newComment.save((errsave)=>
        {
            if(errsave) 
                res.send(errsave)
            newComment.save((errsave)=>{
                if(errsave) 
                    res.send(errsave)
                else res.json(' save')
            })
        })
      }
    }
exports.update_a_comments = (req,res) =>{
    if(err) res.send(err);
    if(emp){
        emp.list_comment= req.body.list_comment;
        emp.status = req.body.status;
        let newUser = new User();

        if( typeof req.body.User == typeof{}){
            users.findBId(em.users).exec((err, score)=>{
                if(err) res.send(err);
                user.name_user= req.body.user.name_user;
                user.avatar = req.body.user.avatar;
                user.token = req.body.token;
                user.save((err)=>{
                    if(err) res.send(err);
                })
            })

        }
        em.save((err)=>{
            if(err){
                res.send(err);
            }
            res.send("updated succcessfully")
            })
        }
}
exports.delete_a_comments=(req, res)=>
{
    comments.findBId(req.parmas.id).exec((err,emp)=>{
        if(err) res.send(err);
        if(emp)
        {
            user.deleteOne({_id: emp.users}).exec((err,user)=>{
                if(err)
                {
                    res.send(err);
                }
                comments.deleteOne({_id: req.parmas.id}).exec((err,emp)=>{
                    if(err) res.send(err);
                    res.send("delete success")
                    
                    
                })
            })
        }
        else 
        {
            comments.deleteOne({_id:req.paramas.id}).exec((err, emp)=>{
                if(err)res.send(err);
                res.send("delete success")
            })
        }

    })
}