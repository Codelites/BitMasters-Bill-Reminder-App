// import dotenv from "dotenv"
import * as dotenv from 'dotenv';
dotenv.config({ path: ".env.example" });
// dotenv.config();


const config = {

server: {  
      port: parseInt(process.env.PORT),
      },
jwt_secret : process.env.SECRET_KEY,

mail_host: process.env.MAIL_USER,

mail_reci: process.env.MAIL_RECIPIENT,

mail_pass: process.env.MAIL_PASSWORD,

database_uri: process.env.MONGODB_URI


}
 export default config