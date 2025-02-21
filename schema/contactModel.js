import mongoose from "mongoose";
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the contact name"]
    },
    email:{
        type:String,
        required:[true,"please add the contact email address"]
    },
    phone:
    {
        type:String,
        required:[true,"please add the contact number"]
    }
},
{
    timestamps:true,
});

export default mongoose.model("Contact",contactSchema)