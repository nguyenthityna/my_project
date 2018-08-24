import mongoose from 'mongoose';
import Story from '.storysModel';

let KindsSchema = new Schema({
    storys: {
        type: Schema.Types.ObjectId, 
        ref: 'storys',
        required: true
    },
    name_Kind:{
          type:String,
          required:true
        }
     
    }, { usePushEach: true });
    
    module.exports = mongoose.model('kinds', StorySchema);
    