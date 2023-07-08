import nodemailer from "nodemailer"
import schedule from "node-schedule"
import Job from "../models/job-model.js"




export const createJob = async function (req,res,next){
try{
  const {bill,runDate, runImmediately} = req.body
  const job = await Job.create({bill,runImmediately,runDate})
  res.status(201).json(job)

  if (runImmediately) {
    // immediately
    await fireJobLogic(job);
  } else {
    // Schedule the job based on the runDate
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
    // Configure the transporter options (e.g., SMTP settings)
    // Example configuration for Gmail:
    service: 'ymail',
    auth: {
      user: 'emmanuelnwosu457@yahoo.com',
      pass: '!Ean2k14',
    },
  });

  const mailOptions = {
    from: 'emmanuelnwosu457@yahoo.com',
    to: 'emmanueljoeemie@gmail.com.com',
    subject: 'Scheduled Job Email',
    text: 'This is a scheduled job email.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }

  // Additional operations related to the job can be performed here
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
  