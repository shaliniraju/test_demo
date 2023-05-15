import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'; 

const userschema = mongoose.Schema({
    ProductId : String,
    ProductName : String,
    Price : String,
    Quantity : String,
    Brand : String
})

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user',userschema);

export default user;


