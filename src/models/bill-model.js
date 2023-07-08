import mongoose  from "mongoose";

const billSchema = new mongoose.Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      dueDate: {
        type: Date,
        required: true,
      },
      Due: {
        type: Boolean,
        default: false,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      reminders: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Job',
        },
      ],
    },
    { timestamps: true }
  );
  
  const Bill = mongoose.model('Bill', billSchema);
  
  export default Bill;

