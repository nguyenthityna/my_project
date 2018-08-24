
import mongoose from 'mongoose';
import Story from '.storysModel';
import Chapter from '.chaptesModel';
import users from'.userlísModel';


let Schema = mongoose.Schema;

let CommentsSchema = new Schema({
   
    users:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    list_comment:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
     
}, { usePushEach: true });

module.exports = mongoose.model('comments', StorySchema);
