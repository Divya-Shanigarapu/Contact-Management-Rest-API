import mongoose from "mongoose";
const connectDB=async ()=>{
   try{
       
      const connection_string="mongodb+srv://admin:root@saicluster.5aj31.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=saicluster"
      const connect=await mongoose.connect(connection_string);
      console.log("Database Connected",connect.connection.host,connect.connection.name);
        

   }
   catch(err)
   {
    console.log(err);
    process.exit(1);
   }
};
export {connectDB};