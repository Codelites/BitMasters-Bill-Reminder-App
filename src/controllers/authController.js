import User from "../models/user.js";
import config from "../config/main.config.js";
import nodemailer from "nodemailer"
import schedule from "node-schedule"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"





export const register = async function(req,res,next){
    try{
    const { name, email, password } = req.body;
        const existingUser =await  User.findOne({email});
        if (existingUser){
            return   res.status(400).json({ error: 'User already exists' });
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
      
      
        const newUser = new User({ name, email, password:hashedPassword });
      await newUser.save();
      res.status(201).json({
        success : true,
        data : newUser
    
       })
    console.log("newuser")
      await WelcomeLogic(newUser)
    }catch(err){
        console.error(err);
      res.status(500).json({ error: 'Server error' });
    }

}
async function WelcomeLogic(newUser) {

  console.log(`Welcome ${newUser.name} executed!`);


  const transporter = nodemailer.createTransport({
    
    service: 'gmail',
    auth: {
      user: config.mail_host,
      pass: config.mail_pass,
    },
  });

  const mailOptions = {
    from: config.mail_host,
    to: config.mail_reci,
    subject: 'welcome to Ari Bill Reminder App',
    text: `${newUser.name},we Humbly welcome you to Ari Bill Reminder App.We look forward to working with you`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }

  
}



export const login = async function(req,res,next){
    try{
        const { email, password } = req.body;
    const user = await User.findOne({email})
    if (!user){
        return   res.status(400).json({ error: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    
    const token = jwt.sign({ userId: user._id }, config.jwt_secret);
    res.json({ token });
    
    }catch(error){
        
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  
  
    }
};

export const logout = async function(req,res,next){

///jwt auth done in middleware
  res.status(200).json({ message: 'Logged out successfully' });
}