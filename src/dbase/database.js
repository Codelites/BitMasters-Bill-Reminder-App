import mongoose from "mongoose";
import config from "../config/main.config.js";


const conData =  function(config){
    mongoose.connect( config.database_uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } );
      // listen for errors
      mongoose.connection.on("error", (err) =>
        console.error(`  ☣  Error in connectiong to our database: ${err}  ☣ `)
      );
      // listen for successful connection
      mongoose.connection.once("open", () =>
        console.info(`🚀  Database connection successful 🚀 `)
    );
    }
    
    // "mongodb+srv://emmanueljoeemie:qLuZZEScLnBPNmCc@cluster0.d8ztern.mongodb.net/BillReminderApp
export default conData