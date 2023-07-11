import express from 'express';
import conData from "./dbase/database.js";
import morgan from 'morgan';
// import * as dotenv from 'dotenv';
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobroutes.js"
import billRouter from './routes/billRoutes.js';
import config from './config/main.config.js';

// dotenv.config();

const app = express();
app.use(express.json())
app.use( morgan( "dev" ) )


conData(config);

// const router = express.Router
app.use('/api/user', authRouter);
app.use('/api/user', jobRouter);
app.use('/api/user', billRouter);

    
    
// const PORT = process.env.PORT 
app.listen(config.server.port,()=>{
    console.info(`Server is up and running on port: ${config.server.port}`);
} );
