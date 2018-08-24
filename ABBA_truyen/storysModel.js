import mongoose from 'mongoose';
import Chapter from '.chapteModelr';
import kinds from'.kindsModel';
let Schema = mongoose.Schema;

let StorysSchema = new Schema({
    name:{
        type: String,
        required :true
    },
    author:{
        type: String,
        required : true
    },
    avatar:{
        type: String,
        required : true
    },
    numberChapter:{
        type: String,
        required : true
    },
    describe:{
        type: String,
        required : true
    },
    like:{
        type:String,
        required: true
    },
    user_like:{
        type: Schema.Types.ObjectId,
         ref: 'users'
    },
    chapters: 
        [{
        type: Schema.Types.ObjectId,
         ref: 'chapters'
    }],
    date: {
        type: Date,
        default: Date.now()
    }
     
}, { usePushEach: true });

module.exports = mongoose.model('storys', StorySchema);
