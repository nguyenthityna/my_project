import mongoose from 'mongoose';
import comments from'.commentsModel';

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name_user:{
        type:String,
        required :true
    },
    avatar:{
        type:String,
        required :true
    },
    token:{
        type:String,
        required :true
    },
    comments:{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }
     
}, { usePushEach: true });
module.exports = mongoose.model('users', StorySchema);
