import mongoose, { models } from 'mongoose';
import { Router } from 'express';
import chapters from '../models/chaptersModel';
import storys from '../models/storysModel';
import users from '../models/usersModel';


exports.list_all_storys = (req,res)=>{
   storys.find().populate('storys').exec((err,emps)=>{
           if (err) res.send(err);
           res.json(emps);
       });
     };
exports.create_a_storys =(req,res)=>{
    let newStory = new storys();
    console.log(req.body);
    newStory.name = req.body.name;
    newStory.describe = req.body.describe;
    newStory.numberChapter = req.body.numberChapter;
    newStory.avatar = req.body.avatar;
    newStory.author = req.body.author;
    newStory.like = req.body.like;

    newStory.save((errsave)=>{
        if(errsave){
            res.send(errsave)
        }
        res.json({message:'Story saved successfully'});
    });
};
exports.update_a_storys =(req, res)=>{
    storys.finById(req.params.id,(err,storys)=>{
        if(err){
            res.send(err);
        }
        

        let newChapter = new chapters();
        newChapter.name_chapter = req.body.name_chapter;
        newChapter.picture = req.body.picture;

        newChapter.save((err,chapters)=>{
            if(err){
                res.send(err);
            }
            storys.name = req.body.name;
            storys.describe = req.body.describe;
            storys.numberChapter = req.body.numberChapter;
            storys.avatar = req.body.avatar;
            storys.author = req.body.author;
            storys.like= req.body.like;
            storys.user_like = req.body.user_like;
            storys.chapters = req.body.chapters;

            story.save((err)=>{
                if(err){ 
                res.send(err);
                }
                res.json({message:'Story info updated'})
            });
        });

    });
};
exports.delete_a_storys
