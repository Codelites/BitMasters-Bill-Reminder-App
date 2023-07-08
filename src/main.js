import express from 'express';
import mongoose from "mongoose";

import conData from "./dbase/database.js";
const app = express();
import 'dotenv/config';
const PORT = process.env.PORT

import authRoutes from "./routes/authRoutes.js";


// const authRoutes = require("./routes/authRoutes")



app.use(express.json())
// app.use( morgan( "dev" ) )



conData();

// const router = express.Router
app.use('/api/user', authRoutes);
app.use('/api/user', jobRoutes);
app.use('/api/user', billRoutes);


// app.get('/api/user/register',()=>{
//   res.send("vtctss")
// });


  

app.listen(PORT,()=>{
    console.info(`Server is up and running `)
});