import mongoose from "mongoose";

const Connection = async (username , password)=>{

    const URL =`mongodb://${username}:${password}@ac-oifahpx-shard-00-00.xvilp4q.mongodb.net:27017,ac-oifahpx-shard-00-01.xvilp4q.mongodb.net:27017,ac-oifahpx-shard-00-02.xvilp4q.mongodb.net:27017/?ssl=true&replicaSet=atlas-eroix8-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try{
    await mongoose.connect(URL, {useUnifiedTopology : true , useNewUrlParser : true });
    console.log("database connected successfully!!");
}  catch(error){
    console.log("Error while connecting to the database",error);
  }
}

export default Connection;