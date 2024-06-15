import User from '../models/user.model.js';


import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    const {email, password, Mobile_Number, Last_Name, First_Name,profilePhoto} = req.body;
    const multer = require('multer');
    const path = require('path');
    const fs = require('fs');

    // Check if any required field is missing or empty
    if ( !email || !password || !First_Name || !Last_Name || !Mobile_Number  ) {
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    // Create user instance
    const newUser = new User({
        
        email,
        password : hashedPassword,
        First_Name,
        Last_Name,
        Mobile_Number,
        profilePhotoLink
    });
    
    try {
        // Save  user info to the database
        
        await newUser.save();

  
        res.json('Registration successful');
    } catch (error) {
        // error thing
        next(errorHandler(400, 'User already Exsist'));
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid password'));
      }
      const token = jwt.sign(
        { id: validUser._id ,isAdmin:validUser.isAdmin},

        process.env.JWT_SECRET
      );

      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  };


