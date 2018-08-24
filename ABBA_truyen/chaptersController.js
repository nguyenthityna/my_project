import mongoose, { models } from 'mongoose';
import { Router } from 'express';
import chapters from '../models/chaptersModel';
import storys from '../models/storysModel';
import kinds from '../models/kindsModel'

exports.list_all_chapters= (req,res)=>{
  storys.find().populate('storys').exec((err,emps)=>{
      if (err) res.send(err);
      res.json(emps);
  })
};
exports.create_a_chapters = (req,res)=>{
 
  let newChapter = new chapters();
  console.log(req.body);
  newChapter.name_chapter = req.body.name_chapter;
  newChapter.picture = req.body.picture;
  
  newStory.chapters = [];
  newStory.chapters.push(newChapter._id); 
  newChapter.storys = newStory._id;
  chapters.findOne(
      {
        name_chapter: req.body.name_chapter,
        picture: req.body.picture
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
          });
      });
    });
};
  

exports.update_a_chapters = (req,res)=>
{
chapters.findById(req.parmas.id).exec((err,emp)=>
  {
    if(err) res.send(err);
    if (emp)
    {
        emp.name_chapter = req.body.name_chapter;
        em.picture = req.body.picture;
        emp.save((err)=>
        {
        if(err)
        {
            res.send(err);
        }
        res.send("updated successfully")
    });
  
    };
  
};
exports.delete_a_chapter = (req, res)=>
{
    chapters.findById(req.params.id).exec((err,emp)=>
        {
            if(err) res.send(err);
            if(emp)
            {
                storys.deleteOne({_id: emp.storys}).exec((err,storys)=>
                {
                    if(err)
                     {
                         res.send(err);
                     }
            chapters.deleteOne({_id:req.params.id}).exec((err,emp)=>
                     {
                         if(err) res.send(err);
                         res.send("delete success")
                     })
                })
            }
             else
                {
                    chapters.deleteOne({_id:req.params.id}).exec((err,emp)=>
                    {
                        if(err) res.send(err);
                        res.send("delete success")

                    });
                };
        });
    };
