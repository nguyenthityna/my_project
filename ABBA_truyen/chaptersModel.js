import mongoose from 'mongoose';
import Story from '.storysModel';
import comments from'.commentsModel';
let Schema = mongoose.Schema;

let ChaptersSchema = new Schema({
      name_chapter: {
        type: String,
        required: true
      },
      picture: [{
        type:String,
        required: true
      }],
      storys: {
        type: Schema.Types.ObjectId, 
        ref: 'storys',
        required: true
      },
      comments:{
        type: Schema.Types.ObjectId, 
        ref: 'comments',
      },
      date: {
        type: Date,
        default: Date.now() 
      }
     
    }, { usePushEach: true });
    
module.exports = mongoose.model('chapters', ChapterSchema);

