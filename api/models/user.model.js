import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    First_Name : {
        type : String,
        required : true
    },
    Last_Name:{
        type : String,
        required: true
    },   
    
    Mobile_Number :{
        type : Number,
        required : true
    },
    
    profilePhoto: { 
      type: String,
      default: '' 
    },
    
    
  
},
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

/* 
  },
profilePicture: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    */