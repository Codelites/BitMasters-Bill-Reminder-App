import mongoose from "mongoose";


const conData =  function(){
    mongoose.connect("mongodb://localhost:27017/billreminder?retryWrites=true&w=majority"  , {
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