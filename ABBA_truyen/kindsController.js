import mongoose from 'mongoose';
import { Router } from 'express';
import storys from '../models/storysModel';
import kinds from '../models/kindsModel';

exports.list_all_kinds = ()=>{
    kinds.find().populate('storys').exec((err,emps)=>{
        if(err) resizeBy.send(err);
        res.json(emps);

    })
};
exports.create_a_kinds = (req,res)=>
{
    let newKind = new kinds();
    console.log(req.body)
    newKind.name_kind = req.body.name_kind;
    let newStory = new storys();
    if (req.body.storys){
        let newStory = new storys();
        if(req.body.storys)
        {
          newStory.name = req.body.name;
          newStory.describe = req.body.describe;
          newStory.numberChapter = req.body.numberChapter;
          newStory.avatar = req.body.avatar;
          newStory.author = req.body.author;
          newStory.author = req.body.author;
          newStory.like = req.body.like;
      
      
        }
          newStory.kinds = [];
          newStory.kinds = newKind._id;
          newKind.storys = newStory._id;
        kinds.findOne(
            {
              name_kind = req.body.name_kind
            },(err,emp)=>{
            if(err) res.send(err);
            if(emp)
            {
                res.send(" exist")
            }
            newChapter.save((errsave)=>
            {
                if(errsave) 
                    res.send(errsave)
                newStory.save((errsave)=>{
                    if(errsave) 
                        res.send(errsave)
                    else res.json(' save')
                })
            })
          })
      }
    };
        
      
  