import nodemailer from "nodemailer"
import schedule from "node-schedule"
import Job from "../models/job-model.js"
import config from "../config/main.config.js"



export const createJob = async function (req,res,next){
try{
  const {bill,runDate, runImmediately} = req.body
  const job = await Job.create({bill,runImmediately,runDate})
  res.status(201).json(job)

  if (runImmediately) {
  
    await fireJobLogic(job);
  } else {
    //  To Schedule the job based on the runDate
    schedule.scheduleJob(runDate, async function () {
      await fireJobLogic(job);
    });
  }
}catch(error){
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}

}
async function fireJobLogic(job) {
  // Logic for executing the job 
  console.log(`Job ${job.id} executed!`);

  // Email sending functionality using Nodemailer
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
    subject: 'Scheduled Job Email',
    text: 'This is a scheduled job email.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }

  
}



export const updateJob =async function (req,res,next){
    try{const {bill, runDate ,runImmediately} = req.body
    const {id} = req.params
  
    const job = await Job.findByIdAndUpdate(
      id,
      { runDate, runImmediately },
      
    );
  
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
  }

  
  export const  deleteJob = async function(req, res) {
    try {
      const id = req.params;
  
      await Job.findByIdAndDelete(id);
  
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
  