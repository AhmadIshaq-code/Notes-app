import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
        title:{type:String},
        description:{type:String}
    }
)

const Notes = mongoose.model("Notes",notesSchema)

export default Notes