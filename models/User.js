const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
     
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"]
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      
    },
    confirmed : {
   type:Boolean,
   default:false
  },
  activeToken: String, 
  id:String
  },
 
  
  { timestamps: true }
);

module.exports = model("users", UserSchema);
