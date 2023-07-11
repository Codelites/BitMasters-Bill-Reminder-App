import express from 'express';
import conData from "./dbase/database.js";
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use( morgan( "dev" ) )


conData();

// const router = express.Router
app.use("/api/user", authRoutes);
// app.use('/api/user', jobRoutes);
// app.use('/api/user', billRoutes);


// app.get('/api/user/register',()=>{
    //   res.send("vtctss")
    // });
    
    
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.info(`Server is up and running on port: ${PORT}`);
} );
// Pay attention to your folder structure. I have already shown you guys in class how to structure your code. I did it so that it will be easy for any of you to look at the code from any other team and be able to help out if they need your help.
// Your current folder structure is not exactly the same as the one I showed you in class. Make sure you correct it and stick to the file convention I have also shown you in class.
// You .env file should never be pushed to GitHub. Look at the way I did mine for the interesting todo app and also the pennywise backend app